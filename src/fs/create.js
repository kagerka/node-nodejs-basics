import { stat, writeFile } from "fs";

const fileName = "./src/fs/files/fresh.txt";
const fileContent = "I am fresh and young";

const create = async () => {
  stat(fileName, (error) => {
    if (error) {
      writeFile(fileName, fileContent, (error) => {
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
