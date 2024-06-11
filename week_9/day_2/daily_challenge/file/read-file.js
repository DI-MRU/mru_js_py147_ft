import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the file exact path For ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve(__dirname, "file-data.txt");

// for commonJS
// const filePath = path.resolve(__dirname, 'file-data.txt');

// Export the file variable
export const file = fs.readFileSync(filePath, "utf-8");
