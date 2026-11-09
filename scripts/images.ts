import { fileURLToPath } from "node:url";
import { optimizePhotobooks } from "./optimize-photobooks.ts";

const dir = fileURLToPath(new URL("../src/assets/photobooks", import.meta.url));
const { converted } = await optimizePhotobooks(dir);

console.log(converted.length > 0 ? `Converted: ${converted.join(", ")}` : "Nothing to convert.");
