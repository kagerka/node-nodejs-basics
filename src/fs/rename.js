import { rename as fileRename } from "fs";
import pathName from "path";

const fileName = pathName.join(import.meta.dirname, "files", "wrongFilename.txt");
const newFileName = pathName.join(import.meta.dirname, "files", "properFilename.md");

const rename = async () => {
  fileRename(fileName, newFileName, (error) => {
    if (error) {
      throw new Error("FS operation failed");
    } else {
      console.log("File was renamed successfully!");
    }
  });
};

await rename();
