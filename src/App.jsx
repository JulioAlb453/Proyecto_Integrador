import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/Components/pages/Home";
import AdminTable from "./assets/Components/Templates/AdminTable";
import LoginForm from "./assets/Components/pages/LoginForm";
import Register from './assets/Components/pages/Register';
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
import ErrorPage from "./assets/Components/pages/ErrorPage";
import NotFoundPage from "./assets/Components/pages/NotFoundPage"; // Importa el nuevo componente
import ProtectedRoute from "./assets/Components/Atoms/RutasProtejidas";
import { AuthProvider } from './assets/Components/Atoms/Authcontext';
import SobreNosotros from "./assets/Components/Templates/SobreNosotros";
import TablaAdminPage from "./assets/Components/pages/TableAdminPage";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AdminPerfil from "./assets/Components/pages/AdminPerfil";
import VerCitasPage from "./assets/Components/pages/verCitasPage";
import VerDenunciasPage from "./assets/Components/pages/verDenunciasPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes>
          <Route path="/AdminPerfil" element={<AdminPerfil/>} />
          <Route path="/AdminHome" element={<TablaAdminPage />} />
            <Route path="/" element={<LoginForm />} />
            <Route path="/home" element={<ProtectedRoute />}>
              <Route path="/home" element={<Home />} />
            </Route>
            <Route path="/AdminTable" element={<ProtectedRoute />}>
              <Route path="/AdminTable" element={<AdminTable />} />
            </Route>
            <Route path="/registrar" element={<Register />} />
            <Route path="/SeccionNoticias" element={<ProtectedRoute />}>
              <Route path="/SeccionNoticias" element={<SeccionNoticiaPage />} />
            </Route>
            <Route path="/Perfil" element={<ProtectedRoute />}>
              <Route path="/Perfil" element={<ProfilePage />} />
            </Route>
            <Route path="/RegistroDatosUsuaria" element={<ProtectedRoute />}>
              <Route path="/RegistroDatosUsuaria" element={<RegistrationPage />} />
            </Route>
            <Route path="/RegistroVivienda" element={<ProtectedRoute />}>
              <Route path="/RegistroVivienda" element={<RegistroViviendaPage />} />
            </Route>
            <Route path="/RegistroEconomico" element={<ProtectedRoute />}>
              <Route path="/RegistroEconomico" element={<RegistroEconomicoPage />} />
            </Route>
            <Route path="/RegistroDenuncia" element={<ProtectedRoute />}>
              <Route path="/RegistroDenuncia" element={<RegistroDenunciasPage />} />
            </Route>
            <Route path="/Servicios" element={<ProtectedRoute />}>
              <Route path="/Servicios" element={<ServiceView />} />
            </Route>
            <Route path="/CitaJuridica" element={<ProtectedRoute />}>
              <Route path="/CitaJuridica" element={<CitasJuridicasPage />} />
            </Route>
            <Route path="/CitaPsicologica" element={<ProtectedRoute />}>
              <Route path="/CitaPsicologica" element={<CitasPsicologicasPage />} />
            </Route>
            <Route path="/Eventos" element={<ProtectedRoute />}>
              <Route path="/Eventos" element={<EventosPage />} />
            </Route>
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/SobreNosotros" element={<ProtectedRoute />}>
              <Route path="/SobreNosotros" element={<SobreNosotros />} />
            </Route>
            <Route>
            <Route path="/verCitas" element={<VerCitasPage />} />
            </Route>
            <Route path="/verDenuncias" element={<VerDenunciasPage />} />
            <Route path="*" element={<NotFoundPage />} /> {/* Añade esta línea */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
