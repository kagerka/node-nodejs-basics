import { access, cp } from "fs";

const folderName = "./src/fs/files";
const copyFolderName = "./src/fs/files_copy";

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
