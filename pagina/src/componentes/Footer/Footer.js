// Footer.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Footer.css'; // Importación del archivo CSS

const mapStyles = {        
  height: "300px", // Ajusta la altura a tu gusto
  width: "100%"}; // Asegura que el mapa ocupe todo el ancho disponible
  
const defaultCenter = {
  lat: 41.3851, lng: 2.1734
}

const Footer = () => {
    return (
        <footer>
            <div className="footer-sections">
                <div className="footer-section">
                    <h3>Ayuda</h3>
                    <ul>
                        <li>Estado del Pedido</li>
                        <li>Tablas de Medidas</li>
                        <li>Cuidados</li>
                        <li>Contáctanos</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Tiendas</h3>
                    <ul>
                        <li>El Tesoro Parque Comercial</li>
                        <li>Centro Comercial Santafé</li>
                        <li>Centro Comercial Andino</li>
                        <li>Centro Comercial Parque Las Américas</li>
                        <li>Centro Comercial El Paseo</li>
                        <li>Distribuidores</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Servicio al Cliente</h3>
                    <ul>
                        <li>Términos y Condiciones</li>
                        <li>Cambios y Garantías</li>
                        <li>Política Protección de Datos</li>
                        <li>Preguntas Frecuentes</li>
                        <li>Envíos</li>
                        <li>Superintendencia</li>
                    </ul>
                </div>
            </div>
            <h2 className="map-title">Encuéntranos aquí</h2>
            <div className="footer-section full-width-map"> {/* Agregar una nueva clase para el contenedor del mapa */}
                <LoadScript
                    googleMapsApiKey='AIzaSyAxMUDBTScXRcMtO_LrQ4cVJ9TmlIyrQGU'>
                    <GoogleMap
                      mapContainerStyle={mapStyles}
                      zoom={13}
                      center={defaultCenter}
                    />
                </LoadScript>
            </div>
            <div className="footer-section centered-text"> {/* Agregar una nueva clase para el texto centrado */}
                <p>© 2023 Clean Pets. Todos los derechos reservados.</p>
                <p>info@cleanpets.com</p>
                <p>+57 123 456 7890</p>
            </div>
        </footer>
    );
};

export default Footer;
