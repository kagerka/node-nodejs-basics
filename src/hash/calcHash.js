import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import path from "node:path";

const calculateHash = async () => {
  const hash = createHash("sha256");
  const fileName = path.join(import.meta.dirname, "files", "fileToCalculateHashFor.txt");
  const readStream = createReadStream(fileName);
  readStream
    .on("data", (data) => {
      hash.update(data);
    })
    .on("end", () => {
      console.log(hash.digest("hex"));
    });
};

await calculateHash();
