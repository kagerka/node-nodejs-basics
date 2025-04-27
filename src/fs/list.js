import { readdir } from "fs";
import pathName from "path";

const folderName = pathName.join(import.meta.dirname, "files");

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
