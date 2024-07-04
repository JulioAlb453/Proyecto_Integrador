import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import AdminTable from "./assets/Components/adminTable";
import LoginForm from "./assets/pages/LoginForm";
import AgendarCitas from "./assets/pages/AgendarCitas";
import "./navbar.css";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/agendarCitas" element={<AgendarCitas />} />
          <Route path="/AdminTable" element= {<AdminTable/>}/>
          {/* Otras rutas pueden ir aquí */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
