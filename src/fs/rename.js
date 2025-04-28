import { rename as fileRename } from "node:fs";
import path from "node:path";

const fileName = path.join(import.meta.dirname, "files", "wrongFilename.txt");
const newFileName = path.join(import.meta.dirname, "files", "properFilename.md");

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
