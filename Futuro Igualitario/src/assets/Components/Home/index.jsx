import React from 'react';
import Carrusel from '../Carrusel';
import './home.css'

function Home() {
  return (
    <section>
      <div>{/* <Carrusel /> */}</div>
      <div className='main-content1'>
        <div className="title">Programas destacados</div>

          <div className="Programas_destacados">         
            <div className="seccion2">
              <div className="image2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nyvBGIDunNc7Rob0Kz2IP-pSHBrI-EYrQw&s" alt="Imagen destacada 2" />
              </div>
              <div className="contenido2">
                <div className="descripcion2">
                  <p> Este es otro apoyo:</p>
                  <p>aqui vendra toda la descripcion de este otro programa</p>
                </div>
              </div>  
            </div>
            <div className="seccion2">
              <div className="image2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nyvBGIDunNc7Rob0Kz2IP-pSHBrI-EYrQw&s" alt="Imagen destacada 2" />
              </div>
              <div className="contenido2">
                <div className="descripcion2">
                  <p> Este es otro apoyo:</p>
                  <p>aqui vendra toda la descripcion de este otro programa</p>
                  <p>aqui vendra toda la descripcion de este otro programa</p>
                </div>
              </div>  
            </div>
          </div>
      </div>
    </section>
  );
}

export default Home;
