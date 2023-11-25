import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
    return (
        <div data-testid="google-map">
            <LoadScript googleMapsApiKey="AIzaSyAxMUDBTScXRcMtO_LrQ4cVJ9TmlIyrQGU">
                <GoogleMap
                    options={{
                        styles: {
                            width: '100%',
                            height: '500px' // Ajusta la altura a tu gusto
                        }
                    }}
                    zoom={14}
                    center={{ lat: 4.570868, lng: -74.297333 }} // Coordenadas de Bogotá, Colombia
                />
            </LoadScript>
        </div>
    );
};

export default MapContainer;
