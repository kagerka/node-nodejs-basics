import { readFile } from "node:fs";
import path from "node:path";

const fileName = path.join(import.meta.dirname, "files", "fileToRead.txt");

const read = async () => {
  readFile(fileName, "utf8", (error, data) => {
    if (error) {
      throw new Error("FS operation failed");
    } else {
      console.log(data);
    }
  });
};

await read();
