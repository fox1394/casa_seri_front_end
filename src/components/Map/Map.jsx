import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "../../language";
import { useTranslation } from "react-i18next";
import "./Map.css";

const Map = () => {
  const mapContainer = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: [
              "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
              "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
              "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
            ],
            tileSize: 256,
          },
        },
        layers: [
          {
            id: "osm",
            type: "raster",
            source: "osm",
          },
        ],
      },
      center: [14.7257441, 40.671003], // 👉 [lng, lat]
      zoom: 10,
      attributionControl: false,
    });

    // Marker del B&B
    new maplibregl.Marker({ color: "#4d28d3" })
      .setLngLat([14.7257441, 40.671003])
      .addTo(map);

    // Controlli zoom
    //map.addControl(new maplibregl.NavigationControl(), "top-right");

    return () => map.remove();
  }, []);

  return (
    <>
      <h3 className="main-title">{t("dovesiamo")}</h3>
      <h4 className="sub-title">Vietri sul Mare, Campania, Italia</h4>
      <div className="map-container">
        <div className="map" ref={mapContainer} />
      </div>
    </>
  );
};

export default Map;
