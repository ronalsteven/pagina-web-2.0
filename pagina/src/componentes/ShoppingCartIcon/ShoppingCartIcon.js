// ShoppingCartIcon.js
import React from 'react';
import './ShoppingCartIcon.css';
import cartIcon from '../../images/cart-icon.png'; // Importa tu icono de carrito de compras

const ShoppingCartIcon = () => {
    return (
        <div className="shopping-cart-icon">
            <img src={cartIcon} alt="Carrito de compras" />
        </div>
    );
};

export default ShoppingCartIcon;
