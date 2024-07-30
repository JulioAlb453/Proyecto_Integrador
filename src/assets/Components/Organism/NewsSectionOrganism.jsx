import React, { useEffect, useState } from "react";
import Navbar from '../Molecule/Navbar';
import Footer from '../Molecule/Footer';
import TitleNews from '../Atoms/TitleNews'; // Asegúrate de que la ruta sea correcta
import '../Styles/Page/SeccionNoticias.css';
import { getAllNoticias } from "../services/noticias";

const NewsSectionOrganism = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllNoticias()
      .then(data => {
        setNewsItems(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error al cargar las noticias');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando noticias...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="app-container">
      <header className="navbar-container">
        <Navbar />
      </header>
      <main className="news-section-container">
        <div className="news-section-organism">
          {newsItems.map((newsItem, index) => (
            <div key={index} className="news-item">
              <img src={newsItem.imgSrc} alt={newsItem.imgAlt} />
              <div className="content">
                <TitleNews title={newsItem.title} className="title" />
                <p className="text">{newsItem.text}</p>
                <p className="date">{newsItem.date}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
}

export default NewsSectionOrganism;
