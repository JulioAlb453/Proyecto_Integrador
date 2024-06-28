import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../Carrusel/carrusel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carrusel = () => {
  return (
    <Carousel>
      <div>
        <img
          src="https://www.macworld.com/wp-content/uploads/2023/01/fondos-pantalla-apple.jpg?quality=50&strip=all"
          alt="imagen 1"
        />
      </div>
      <div>
        <img
          src="https://www.secgob.cdmx.gob.mx/storage/app/uploads/public/666/8b8/83a/thumb_11898_880_495_0_0_crop.jpg"
          alt="imagen 2"
        />
      </div>
      <div>
        <img
          src="https://w0.peakpx.com/wallpaper/432/896/HD-wallpaper-miku-cute-vocaloid-pretty-hatsune-anime-hq.jpg"
          alt="imagen 3"
        />
      </div>
    </Carousel>
  );
};

export default Carrusel;
