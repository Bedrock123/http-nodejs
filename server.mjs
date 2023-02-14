import { createServer } from "http";

createServer((req, res) => {
  res.write("Hellsdfsdfo World!");
  res.end();
}).listen(process.env.PORT);
