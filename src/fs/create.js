import { stat, writeFile } from "fs";
import pathName from "path";

const pathToFile = pathName.join(import.meta.dirname, "files", "fresh.txt");
const fileContent = "I am fresh and young";

const create = async () => {
  stat(pathToFile, (error) => {
    if (error) {
      writeFile(pathToFile, fileContent, (error) => {
        if (!error) {
          console.log("File was created successfully!");
        }
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await create();
