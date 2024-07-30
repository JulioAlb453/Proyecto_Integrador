// src/components/templates/ProfileTemplate.js
import React from "react";
import ProfileInfo from "../Organism/ProfileInfo";
import ActionButtons from "../Organism/ActionButtons";
import Navbar from "../Molecule/Navbar";
import Footer from "../Molecule/Footer";
import "../Styles/templates/ProfileTemplate.css";
function ProfileTemplate() {
  return (
    <div className="mainConteiner">
      <Navbar />
      <div className="perfil-content">
        <div className="perfil-header">
          <h1>PERFIL</h1>
        </div>
        <div className="InfoPerfil">
          <ProfileInfo />
        </div>
        <div className="Botones-Forms">
          <ActionButtons />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfileTemplate;
