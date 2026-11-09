import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const MAX_SIDE = 1600;
const QUALITY = 80;

async function modifiedTime(path: string) {
  try {
    return (await stat(path)).mtimeMs;
  } catch {
    return undefined;
  }
}

export async function optimizePhotobooks(dir: string) {
  const converted: string[] = [];
  const names = await readdir(dir);
  for (const name of names.filter((name) => name.endsWith(".png"))) {
    const source = join(dir, name);
    const target = source.replace(/\.png$/, ".webp");
    const targetTime = await modifiedTime(target);
    if (targetTime !== undefined && targetTime >= (await stat(source)).mtimeMs) continue;

    await sharp(source)
      .resize({ width: MAX_SIDE, height: MAX_SIDE, fit: "inside", withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(target);
    converted.push(name);
  }
  return { converted };
}
