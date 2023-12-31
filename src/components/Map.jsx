import { useNavigate, useSearchParams } from "react-router-dom";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import { useState } from "react";
import styles from "./Map.module.css"
import { useCities } from "../context/CitiesContext/useCities";

export default function Map() {
  const navigate = useNavigate()
  const {cities} = useCities()
  const [mapPosition, setMapPosition] = useState([40,0])
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div className={styles.mapContainer}>
      <MapContainer 
        center={mapPosition} 
        zoom={13} 
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       {cities.map(city => (
          <>
            <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
            <Popup>
              <span>{city.emoji} <span>{city.cityName}</span></span>
            </Popup>
          </Marker>
          </>
       ))}
      </MapContainer>
    </div>
  );
}
