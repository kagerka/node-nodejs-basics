import { readdir } from "node:fs";
import path from "node:path";

const folderName = path.join(import.meta.dirname, "files");

const list = async () => {
  readdir(folderName, (error, data) => {
    if (error) {
      throw new Error("FS operation failed");
    } else {
      console.log(data);
    }
  });
};

await list();
