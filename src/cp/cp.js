import { spawn } from "node:child_process";
import path from "node:path";
import { pipeline } from "node:stream";

const spawnChildProcess = async (args) => {
  const fileName = path.join(import.meta.dirname, "files", "script.js");
  const child = spawn("node", [fileName, ...args], { stdio: "pipe" });

  const onError = (error) => {
    console.error("Process failed with an error: ", error);
    process.exit(1);
  };

  pipeline(process.stdin, child.stdin, (error) => {
    if (error) {
      onError(error);
    }
  });
  pipeline(child.stdout, process.stdout, (error) => {
    if (error) {
      onError(error);
    }
  });
};

spawnChildProcess(["someArgument1", "someArgument2", "someArgument3"]);
