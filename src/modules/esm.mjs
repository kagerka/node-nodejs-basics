import { createServer as createServerHttp } from "http";
import { createRequire } from "module";
import { release, version } from "os";
import path from "path";
import { URL } from "url";
import(new URL("./files/c.js", import.meta.url).href);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = await createRequire(import.meta.url)(path.join(import.meta.dirname, "files", "a.json"));
} else {
  unknownObject = await createRequire(import.meta.url)(path.join(import.meta.dirname, "files", "b.json"));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.filename}`);
console.log(`Path to current directory is ${import.meta.dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { myServer, unknownObject };
