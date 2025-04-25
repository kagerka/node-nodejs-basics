import { rm } from "fs";

const fileName = "./src/fs/files/fileToRemove.txt";

const remove = async () => {
  rm(fileName, (error) => {
    if (error) {
      throw new Error("FS operation failed");
    } else {
      console.log("File was deleted successfully!");
    }
  });
};

await remove();
