import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Button from "../../Components/Button";
import MyCarousel from "../../Components/Carousel";
import "./home.css";

function Home() {
  return (
    <section className="main-section">
      <Navbar />
      <div>
        <MyCarousel />
        <Button />
      </div>
      <div className="content-wrapper">
        <div className="main-content1">
          <div className="title">Programas destacados</div>
          <div className="Programas_destacados">
            <div className="seccion2">
              <div className="image2">
                <img
                  src="https://becas.news/wp-content/uploads/Asi-es-como-puedes-hacer-tu-registro-a-Mujer-es-poder.jpg"
                  alt="Imagen destacada 2"
                />
              </div>
              <div className="contenido2">
                <div className="descripcion2">
                  <p> Este es otro apoyo:</p>
                  <p>aquí vendrá toda la descripción de este otro programa</p>
                </div>
              </div>
            </div>
            <div className="seccion2">
              <div className="image2">
                <img
                  src="https://tvazteca.brightspotcdn.com/dims4/default/3198725/2147483647/strip/true/crop/1280x720+0+0/resize/928x522!/format/jpg/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F4c%2F28%2F2c576d514615ac73f17a1dff2c60%2Fescasez-de-agua-26.jpg"
                  alt="Imagen destacada 2"
                />
              </div>
              <div className="contenido2">
                <div className="descripcion2">
                  <p> Este es otro apoyo:</p>
                  <p>aquí vendrá toda la descripción de este otro programa</p>
                  <p>aquí vendrá toda la descripción de este otro programa</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-content2">
          <div className="title">Noticias</div>
          <div className="noticias">
            <div className="noticia-seccion3">
              <div className="seccion2">
                <div className="image2">
                  <img
                    src="https://www.elsoldemexico.com.mx/mexico/politica/8uzwr6-pri-mujeres-cortesia.jpeg/ALTERNATES/LANDSCAPE_768/PRI%20mujeres%20CORTESIA.jpeg"
                    alt="Imagen destacada 2"
                  />
                </div>
                <div className="contenido2">
                  <div className="noticia_descripcion2">
                    <p> Este es otro apoyo:</p>
                    <p>aquí vendrá toda la descripción o programa</p>
                    <p>aquí vendrá toda la descripción de este otro programa</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="noticia-seccion4">
              <div className="seccion2">
                <div className="image2">
                  <img
                    src="https://www.canaldelcongreso.gob.mx/assets/img/noticias/0f68afd242fdc35fd53f207de8a85e8f.jpg"
                    alt="Imagen destacada 2"
                  />
                </div>
                <div className="contenido2">
                  <div className="noticia_descripcion2">
                    <p> Este es otro apoyo:</p>
                    <p>aquí vendrá toda la descri este otro programa</p>
                    <p>aquíción de este otro programa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-wrapper2">
        <div className="main-content-vision">
          <div className="title">Visión</div>
          <div className="Vision">
            <div className="seccion-vision">
              <div className="image2">
                <img
                  src="https://salud.morelos.gob.mx/sites/salud.morelos.gob.mx/files/noticias/principal/llama_secretario_de_salud_a_trabajar_en_equipo_para_impulsar_un_morelos_mas_sano1.png"
                  alt="Imagen destacada 2"
                />
              </div>
              <div className="descripcion-vision">
                <p> Sección de noticias:</p>
                <p>aquí vendrá toda la descripción de este otro programa</p>
                <p>aquí vendrá toda la descripción de este otro programa</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content-mision2">
          <div className="title">Misión</div>
          <div className="Mision">
            <div className="seccion-mision">
              <div className="image2">
                <img
                  src="https://www.elsoldeirapuato.com.mx/local/hk8c3s-luis-ricardo/alternates/LANDSCAPE_400/Luis%20Ricardo"
                  alt="Imagen destacada 2"
                />
              </div>
              <div className="descripcion-vision">
                <p> Sección de noticias:</p>
                <p>aquí vendrá toda la descripción de este otro programa</p>
                <p>aquí vendrá toda la descripción de este otro programa</p>
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
