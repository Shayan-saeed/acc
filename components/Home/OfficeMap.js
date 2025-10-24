"use client";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dynamically import react-leaflet components (disable SSR)
const MapContainer = dynamic(
  () => import("react-leaflet").then(mod => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then(mod => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then(mod => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then(mod => mod.Popup),
  { ssr: false }
);

// Import Leaflet inside useEffect to avoid "window is not defined"
import { useEffect, useState } from "react";

export default function OfficeMap() {
  const [L, setL] = useState(null);

  useEffect(() => {
    import("leaflet").then(leaflet => {
      setL(leaflet);
    });
  }, []);

  if (!L) return null; // wait until leaflet is loaded

  const customIcon = new L.Icon({
    iconUrl: "/marker_icon.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  return (
    <div className="w-full h-[600px]">
      <MapContainer
        center={[51.089529409831165, -114.05286162676707]}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.089529409831165, -114.05286162676707]} icon={customIcon}>
          <Popup>
            <strong>American Configurators Company</strong> <br />
            Our Office Location
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
