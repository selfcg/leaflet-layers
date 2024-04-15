import { useEffect } from "react";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

const TheMap = () => {

  useEffect(() => {
    L.map('map', {
      center: [-50, 0],
      zoom: 10,
    })
  }, [])
  

  return <div id="map" style={{ height: "300px", width: "600px" }}></div>;
};
export default TheMap;
