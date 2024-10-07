import fs from "fs";
const calculateHash = async () => {
  const crypto = await import("crypto");
  const hash = crypto.createHash("sha256");
  const readableStream = fs.createReadStream("./src/hash/files/fileToCalculateHashFor.txt");
  readableStream
    .on("data", (data) => {
      hash.update(data);
    })
    .on("end", () => {
      console.log(hash.digest("hex"));
    });
};
await calculateHash();
