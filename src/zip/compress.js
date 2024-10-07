import fs from "fs";
import zlib from "zlib";

const compress = async () => {
  fs.createReadStream("./src/zip/files/fileToCompress.txt")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("./src/zip/files/archive.gz"));
};

await compress();
