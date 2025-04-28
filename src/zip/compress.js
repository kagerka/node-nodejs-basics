import { createReadStream, createWriteStream } from "node:fs";
import path from "node:path";
import { createGzip } from "node:zlib";

const fileName = path.join(import.meta.dirname, "files", "fileToCompress.txt");
const archiveName = path.join(import.meta.dirname, "files", "archive.gz");

const compress = async () => {
  createReadStream(fileName).pipe(createGzip()).pipe(createWriteStream(archiveName));
};

await compress();
