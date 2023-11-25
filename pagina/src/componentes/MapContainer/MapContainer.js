// MapContainer.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './MapContainer.css'; // Importa el archivo CSS

const MapContainer = () => {
    return (
        <div data-testid="google-map">
            <LoadScript googleMapsApiKey="AIzaSyAxMUDBTScXRcMtO_LrQ4cVJ9TmlIyrQGU">
                <GoogleMap
                    className="google-map" // Añade la clase CSS al mapa
                    zoom={14}
                    center={{ lat: 4.570868, lng: -74.297333 }} // Coordenadas de Bogotá, Colombia
                />
            </LoadScript>
        </div>
    );
};

export default MapContainer;
