import { createWriteStream } from "node:fs";
import path from "node:path";

const fileName = path.join(import.meta.dirname, "files", "fileToWrite.txt");

const write = async () => {
  const writeStream = createWriteStream(fileName, "utf8");
  process.stdin.pipe(writeStream);
};

await write();
