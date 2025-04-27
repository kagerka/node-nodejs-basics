import { createReadStream } from "node:fs";
import path from "path";

const fileName = path.join(import.meta.dirname, "files", "fileToRead.txt");

const read = async () => {
  createReadStream(fileName)
    .on("end", () => {
      console.log("");
    })
    .pipe(process.stdout);
};

await read();
