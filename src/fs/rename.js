import { rename as fileRename } from "fs";

const fileName = "./src/fs/files/wrongFilename.txt";
const newFileName = "./src/fs/files/properFilename.md";

const rename = async () => {
  fileRename(fileName, newFileName, (error) => {
    if (error) {
      throw new Error("FS operation failed");
    }
  });
};

await rename();
