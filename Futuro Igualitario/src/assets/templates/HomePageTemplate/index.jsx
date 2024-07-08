import React from "react";
import Footer from "../../orgams/Footer";
import Navbar from "../../orgams/Navbar";
import MyCarousel from "../../orgams/Carousel";
import ContentWrapper from "../../orgams/ContentWrapper/ContentWrapper";

function Home() {
  return (
    <section className="main-section">
      <Navbar />
      <div>
        <MyCarousel />
      </div>
      <div className="top">

      <ContentWrapper/>
      </div>
      <Footer />
    </section>
  );
}

export default Home;
