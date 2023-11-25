// FeaturedItems.js
import React from 'react';
import './FeaturedItems.css';
import perrocafe from '../../images/perrocafe.png'; // Importa tus imágenes
import cinturon from '../../images/cinturon.png';
import collar from '../../images/collar.png';

const FeaturedItems = () => {
    return (
        <div className="featured-items">
            <div className="item">
                <img src={perrocafe} alt="Perro café" />
                <h2>LO MÁS GUAU!</h2>
            </div>
            <div className="item">
                <img src={cinturon} alt="Cinturón" />
                <h2>CINTURONES DE SEGURIDAD</h2>
            </div>
            <div className="item">
                <img src={collar} alt="Collar" />
                <h2>MEDALLAS DE IDENTIFICACIÓN</h2>
            </div>
        </div>
    );
};

export default FeaturedItems;
