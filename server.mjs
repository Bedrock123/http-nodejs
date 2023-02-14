import { createServer } from "http";
import geoblaze from "geoblaze";
import area from "@turf/area";
import centroid from "@turf/centroid";

const getGeoValue = async (geoblaze) => {
  const populationResult = await geoblaze.sum(georaster);
  return populationResult;
};

createServer((req, res) => {
  const georaster = geoblaze.parse(
    `https://map-gules.vercel.app/maps/pop4.tif`
  );

  let value = getGeoValue(georaster);
  res.write(value);
  res.end();
}).listen(process.env.PORT);
