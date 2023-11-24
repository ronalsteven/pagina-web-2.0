// Navbar.js
import React from 'react';
import './Navbar.css';
import ShoppingCartIcon from '../ShoppingCartIcon/ShoppingCartIcon'; // Importa el componente ShoppingCartIcon

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/productos">Productos</a></li>
                <li><a href="/servicios">Servicios</a></li>
                <li><a href="/contacto">Contacto</a></li>
            </ul>
            <ShoppingCartIcon /> 
        </nav>
    );
};

export default Navbar;
