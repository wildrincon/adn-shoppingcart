import * as React from 'react';
// import { Link } from 'react-router-dom';

export const Hero: React.FC = () => (
  <div className="hero">
    <div className="hero__item">
      <div className="row">
        <div className="hero__item--content">
          <h2 className="hero__item--title">Bienvenidos a nuestra tienda online</h2>
          <p className="hero__item--text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
            veritatis fugit pariatur voluptatem vero incidunt aspernatur.
          </p>
          <button className="hero__item--btn">
            <a href="/tienda">
              Ingresa a la tienda
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
) ;
