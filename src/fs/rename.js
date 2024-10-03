import fs from "fs";

const rename = async () => {
  fs.access("./src/fs/files/properFilename.md", fs.constants.F_OK, (notExist) => {
    if (notExist) {
      fs.rename("./src/fs/files/wrongFilename.txt", "./src/fs/files/properFilename.md", (err) => {
        if (err) throw new Error("FS operation failed");
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await rename();
