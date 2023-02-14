import { createServer } from "http";
import geoblaze from "geoblaze";
import area from "@turf/area";
import centroid from "@turf/centroid";

createServer((req, res) => {
  res.write("Hellsdfsdfo World!");
  res.end();
}).listen(process.env.PORT);
