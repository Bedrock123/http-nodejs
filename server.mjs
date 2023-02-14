import { createServer } from "http";
import geoblaze from "geoblaze";
import area from "@turf/area";
import centroid from "@turf/centroid";

const georaster = await geoblaze.parse(
  `https://map-gules.vercel.app/maps/pop4.tif`
);

const getGeoValue = async () => {
  const populationResult = await geoblaze.sum(georaster);
  return populationResult;
};

createServer((req, res) => {
  let value = getGeoValue();
  res.write(value);
  res.end();
}).listen(process.env.PORT);
