import { rm } from "node:fs";
import path from "node:path";

const fileName = path.join(import.meta.dirname, "files", "fileToRemove.txt");

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
