import fs from "fs";

export const file = fs.readFileSync("./file-data.txt", "utf-8");
