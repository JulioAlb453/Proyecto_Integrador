import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/Components/pages/Home";
import AdminTable from "./assets/Components/Templates/AdminTable";
import LoginForm from "./assets/Components/pages/LoginForm";
import Register from './assets/Components/pages/Register'
import SeccionNoticiaPage from "./assets/Components/pages/SeccionNoticias";
import ProfilePage from "./assets/Components/pages/ProfilePage";
import RegistrationPage from "./assets/Components/pages/RegistrationPage";
import RegistroViviendaPage from "./assets/Components/pages/RegistroVivienda";
import RegistroEconomicoPage from "./assets/Components/pages/RegistroEconomicoPage";
import RegistroDenunciasPage from "./assets/Components/pages/RegistroDenuncia";
import ServiceView from "./assets/Components/Organism/Servicios";
import CitasJuridicasPage from "./assets/Components/pages/CitasJuridicas";
import CitasPsicologicasPage from "./assets/Components/pages/CitasPsicologicas";
import EventosPage from "./assets/Components/pages/EventosPage";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/AdminTable" element= {<AdminTable/>}/>
          <Route path="/registrar" element={<Register/>}/>
          <Route path="/SeccionNoticias" element={<SeccionNoticiaPage/>}/>
          <Route path="/Perfil" element={<ProfilePage/>}/>
          <Route path="/RegistroDatosUsuaria" element={<RegistrationPage/>}/>
          <Route path="/RegistroVivienda" element=<RegistroViviendaPage/>/>
          <Route path="/RegistroEconomico" element ={<RegistroEconomicoPage/>}/>
          <Route path="/RegistroDenuncia" element={<RegistroDenunciasPage/>}/>
          <Route path="/Servicios" element={<ServiceView/>}/>
          <Route path="/CitaJuridica" element ={<CitasJuridicasPage/>}/>
          <Route path="/CitaPsicoligica" element ={<CitasPsicologicasPage/>}/>
          <Route path="/Eventos" element ={<EventosPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
