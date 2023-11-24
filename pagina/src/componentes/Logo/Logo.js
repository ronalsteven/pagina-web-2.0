// Logo/Logo.js
import React from 'react';
import './Logo.css';
import logo from './logo.png'; // Importa tu logo

const Logo = () => {
    return (
        <img src={logo} alt="Logo" className="logo" /> // Aplica la clase "logo"
    );
};

export default Logo;
