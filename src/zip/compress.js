import { access, createReadStream, createWriteStream } from "node:fs";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";

const fileName = path.join(import.meta.dirname, "files", "fileToCompress.txt");
const archiveName = path.join(import.meta.dirname, "files", "archive.gz");

const compress = async () => {
  access(fileName, (notExist) => {
    if (notExist) {
      throw new Error("File not found!");
    } else {
      pipeline(createReadStream(fileName), createGzip(), createWriteStream(archiveName));
    }
  });
};

await compress();
