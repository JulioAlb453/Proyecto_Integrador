import React from "react";
import Carrusel from "../../Components/Carrusel";
import Footer from "../../Components/Footer";
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
                  src="https://image.winudf.com/v2/image1/Y29tLnJhbmlhYXBwcy5hbmltZXByb2ZpbGVwaWN0dXJlX3NjcmVlbl8wXzE2ODM0ODYxMTBfMDUy/screen-0.jpg?fakeurl=1&type=.jpg"
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lORGx2KRQ4ReFGud_Q-5rK9W_8nVXEr9j6f050dc5TOoA-kovI_1G3UatPYFwLs2c0I&usqp=CAU"
                  alt="Imagen destacada 2"
                />
              </div>
              <div className="descripcion2">
                <p> Seccion de noticias:</p>
                <p>aqui vendra toda la descripcion de este otro programa</p>
                <p>aqui vendra toda la descripcion de este otro programa</p>
              </div>
            </div>
            <div className="noticia-seccion2">
              <div className="seccion2">
                <div className="image2">
                  <img
                    src="https://i.pinimg.com/280x280_RS/12/f1/97/12f1977920092d8164884049dabec2d2.jpg"
                    alt="Imagen destacada 2"
                  />
                </div>
                <div className="contenido2">
                  <div className="noticia_descripcion2">
                    <p> Este es otro apoyo:</p>
                    <p>aqui vendra toda la descripcion de este otro programa</p>
                    <p>aqui vendra toda la descripcion de este otro programa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-wraper2">
        <div className="main-content-vision">
          <div className="title">Vision</div>
          <div className="Vision">
            <div className="seccion-vision">
              <img
                src="https://i.pinimg.com/236x/c3/a6/e1/c3a6e12585e2a7d78a066b1f9aa7e88e.jpg"
                alt="Imagen destacada 2"
              />
              <div className="descripcion-vision">
                <p> Seccion de noticias:</p>
                <p>aqui vendra toda la descripcion de este otro programa</p>
                <p>aqui vendra toda la descripcion de este otro programa</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content-mision2">
          <div className="title">Mision</div>
          <div className="Mision">
            <div className="seccion-mision">
              <img
                src="https://i.pinimg.com/236x/c3/a6/e1/c3a6e12585e2a7d78a066b1f9aa7e88e.jpg"
                alt="Imagen destacada 2"
              />
              <div className="descripcion-vision">
                <p> Seccion de noticias:</p>
                <p>aqui vendra toda la descripcion de este otro programa</p>
                <p>aqui vendra toda la descripcion de este otro programa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Home;
