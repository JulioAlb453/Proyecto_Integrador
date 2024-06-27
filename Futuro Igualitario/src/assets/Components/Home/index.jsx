import React from "react";
import Carrusel from "../Carrusel";
import "./home.css";

function Home() {
  return (
    <section className="main-section">
  <div>
    <Carrusel />
  </div>
  <div className="content-wrapper">
    <div className="main-content1">
      <div className="title">Programas destacados</div>
      <div className="Programas_destacados">
        <div className="seccion2">
          <div className="image2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nyvBGIDunNc7Rob0Kz2IP-pSHBrI-EYrQw&s"
              alt="Imagen destacada 2"
            />
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
            <img
              src="https://img.wattpad.com/31673c88c65fd2046dfaa27dd9c0cf0078545861/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f665f754f4f3847323535687571513d3d2d32362e313630643938306662626532356230623233343138313631303531392e6a7067"
              alt="Imagen destacada 2"
            />
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

    <div className="main-content2">
      <div className="title">Noticias</div>
      <div className="noticias">
        <div className="noticia-seccion1">
          <div className="img-noticia">
            <img
              src="https://img.wattpad.com/6e10fe43fb8c450fc971f5f9a30c471153a29a2e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6353377a706941574530425937513d3d2d32362e313630643937663934353530623561363935393136313931383537302e6a7067?s=fit&w=720&h=210"
              alt="Imagen destacada 2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default Home;
