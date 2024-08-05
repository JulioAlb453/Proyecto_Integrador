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
              <div className="content">
                <TitleNews title={newsItem.titulo} className="title" />
                <p className="text">{newsItem.descripcion}</p>
                <p className="date">{new Date(newsItem.fecha).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
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
