// @vitest-environment node
import { mkdtemp, readdir, rm, utimes, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import sharp from "sharp";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { optimizePhotobooks } from "./optimize-photobooks.ts";

let dir: string;

beforeEach(async () => {
  dir = await mkdtemp(join(tmpdir(), "photobooks-"));
});

afterEach(async () => {
  await rm(dir, { recursive: true, force: true });
});

async function writePng(name: string, width: number, height: number) {
  const png = await sharp({
    create: { width, height, channels: 3, background: "#888888" },
  })
    .png()
    .toBuffer();
  await writeFile(join(dir, name), png);
}

describe("optimizePhotobooks", () => {
  it("writes a WebP next to each PNG, with the long side at most 1600px", async () => {
    await writePng("miami-open.png", 2400, 1200);

    await optimizePhotobooks(dir);

    const webp = await sharp(join(dir, "miami-open.webp")).metadata();
    expect(webp.format).toBe("webp");
    expect(webp.width).toBe(1600);
    expect(webp.height).toBe(800);
  });

  it("does not enlarge a PNG that is already small", async () => {
    await writePng("peru-front.png", 800, 400);

    await optimizePhotobooks(dir);

    const webp = await sharp(join(dir, "peru-front.webp")).metadata();
    expect(webp.width).toBe(800);
    expect(webp.height).toBe(400);
  });

  it("does not convert a PNG again when its WebP is newer", async () => {
    await writePng("miami-open.png", 2400, 1200);

    const first = await optimizePhotobooks(dir);
    const second = await optimizePhotobooks(dir);

    expect(first.converted).toEqual(["miami-open.png"]);
    expect(second.converted).toEqual([]);
  });

  it("converts a PNG again when it changes after its WebP", async () => {
    await writePng("miami-open.png", 2400, 1200);
    await optimizePhotobooks(dir);

    const tenSecondsLater = new Date(Date.now() + 10_000);
    await utimes(join(dir, "miami-open.png"), tenSecondsLater, tenSecondsLater);
    const second = await optimizePhotobooks(dir);

    expect(second.converted).toEqual(["miami-open.png"]);
  });

  it("ignores files that are not PNG", async () => {
    await writeFile(join(dir, "notes.txt"), "not an image");

    await optimizePhotobooks(dir);

    expect(await readdir(dir)).toEqual(["notes.txt"]);
  });
});
