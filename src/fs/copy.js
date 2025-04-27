import { access, cp } from "fs";
import pathName from "path";

const folderName = pathName.join(import.meta.dirname, "files");
const copyFolderName = pathName.join(import.meta.dirname, "files_copy");

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
