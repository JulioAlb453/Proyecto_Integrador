import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/Components/pages/Home";
import AdminTable from "./assets/Components/Templates/AdminTable";
import LoginForm from "./assets/Components/pages/LoginForm";
import AgendarCitas from './assets/Components/pages/Agendarcitas'
import Register from './assets/Components/pages/Register'
import SectionNews from './assets/Components/pages/SeccionNoticias'

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
          {/* Otras rutas pueden ir aquí */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
