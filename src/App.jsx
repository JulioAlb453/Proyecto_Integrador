import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/Components/pages/Home";
import AdminTable from "./assets/Components/Templates/AdminTable";
import LoginForm from "./assets/Components/pages/LoginForm";
import AgendarCitas from './assets/Components/pages/Agendarcitas'
import Register from './assets/Components/pages/Register'
import SectionNews from './assets/Components/pages/SeccionNoticias'
import ProfilePage from "./assets/Components/pages/ProfilePage";
import RegistrationPage from "./assets/Components/pages/RegistrationPage";
import RegistroViviendaPage from "./assets/Components/pages/RegistroVivienda";
import RegistroEconomicoPage from "./assets/Components/pages/RegistroEconomicoPage";
import RegistroDenunciasPage from "./assets/Components/pages/RegistroDenuncia";
import ServiceView from "./assets/Components/Organism/Servicios";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/agendarCitas" element={<AgendarCitas />} />
          <Route path="/AdminTable" element= {<AdminTable/>}/>
          <Route path="/registrar" element={<Register/>}/>
          <Route path="/SeccionNoticias" element={<SectionNews/>}/>
          <Route path="/Perfil" element={<ProfilePage/>}/>
          <Route path="/RegistroDatosUsuaria" element={<RegistrationPage/>}/>
          <Route path="/RegistroVivienda" element=<RegistroViviendaPage/>/>
          <Route path="/RegistroEconomico" element ={<RegistroEconomicoPage/>}/>
          <Route path="/RegistroDenuncia" element={<RegistroDenunciasPage/>}/>
          <Route path="/Servicios" element={<ServiceView/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
