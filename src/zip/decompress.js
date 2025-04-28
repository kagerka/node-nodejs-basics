import { access, createReadStream, createWriteStream } from "node:fs";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { createGunzip } from "node:zlib";

const fileName = path.join(import.meta.dirname, "files", "fileToCompress.txt");
const archiveName = path.join(import.meta.dirname, "files", "archive.gz");

const decompress = async () => {
  access(archiveName, (notExist) => {
    if (notExist) {
      throw new Error("Archive not found!");
    } else {
      pipeline(createReadStream(archiveName), createGunzip(), createWriteStream(fileName));
    }
  });
};

await decompress();
