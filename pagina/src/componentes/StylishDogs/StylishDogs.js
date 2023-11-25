// StylishDogs.js
import React from 'react';
import './StylishDogs.css';
import perro1 from '../../images/perro1.webp'; // Importa tu imagen

const StylishDogs = () => {
    return (
        <div className="stylish-dogs">
            <div className="text">
                <h1>Perros Estiludos®</h1>
                <p>La personalidad de tu perro derrite a todo el mundo, ¡que su look también lo haga!</p>
                <p>Aquí encuentras los accesorios más fieles a su personalidad.</p>
            </div>
            <div className="image">
                <img src={perro1} alt="Perro estiludo" />
            </div>
        </div>
    );
};

export default StylishDogs;
