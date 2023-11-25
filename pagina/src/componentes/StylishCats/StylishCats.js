// StylishCats.js
import React from 'react';
import './StylishCats.css';
import gato1 from '../../images/gato1.webp'; // Importa tu imagen

const StylishCats = () => {
    return (
        <div className="stylish-cats">
            <div className="image">
                <img src={gato1} alt="Gato estiludo" />
            </div>
            <div className="text">
                <h1>Gatos Estiludos®</h1>
                <p>Si alguien sabe lo que es tener seguridad en sí mismo, es tu gato.</p>
                <p>Y si alguien tiene accesorios tan únicos y seguros como él, es Kinky.</p>
            </div>
        </div>
    );
};

export default StylishCats;
