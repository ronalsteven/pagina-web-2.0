// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
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
            <div className="footer-section">
                <p>© 2023 Clean Pets. Todos los derechos reservados.</p>
                <p>info@cleanpets.com</p>
                <p>+57 123 456 7890</p>
            </div>
        </footer>
    );
};

export default Footer;
