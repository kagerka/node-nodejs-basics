import fs from "fs";
import zlib from "zlib";

const decompress = async () => {
  fs.createReadStream("./src/zip/files/archive.gz")
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream("./src/zip/files/fileToCompress.txt"));
};

await decompress();
