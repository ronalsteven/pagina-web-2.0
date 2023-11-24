// src/componentes/Navbar.js
import React from 'react';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/productos">Productos</a></li>
                <li><a href="/servicios">Servicios</a></li>
                <li><a href="/contacto">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
