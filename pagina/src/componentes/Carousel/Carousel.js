// src/componentes/Carousel/Carousel.js
import React, { useState } from 'react';
import './Carousel.css';
import imagen1 from '../../images/imagen1.jpg'; // Importa tus imágenes
import imagen2 from '../../images/imagen2.jpg';
import imagen3 from '../../images/imagen3.jpg';

const Carousel = () => {
    const images = [imagen1, imagen2, imagen3]; // Usa las imágenes importadas
    const [currentImage, setCurrentImage] = useState(0);

    const goLeft = () => {
        setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
    };

    const goRight = () => {
        setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
    };

    return (
        <div className="carousel">
            <button onClick={goLeft}>Anterior</button>
            <img src={images[currentImage]} alt={`Carousel ${currentImage}`} />
            <button onClick={goRight}>Siguiente</button>
        </div>
    );
};

export default Carousel;
