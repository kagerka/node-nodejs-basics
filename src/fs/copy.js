import { access, cp } from "node:fs";
import path from "node:path";

const folderName = path.join(import.meta.dirname, "files");
const copyFolderName = path.join(import.meta.dirname, "files_copy");

const copy = async () => {
  access(copyFolderName, (notExist) => {
    if (notExist) {
      cp(folderName, copyFolderName, { recursive: true }, (error) => {
        if (error) {
          throw new Error("FS operation failed");
        } else {
          console.log("File was copied successfully!");
        }
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await copy();
