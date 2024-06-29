import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import LoginForm from "./assets/pages/LoginForm";
import Navbar from "./assets/Components/Navbar";
import "./navbar.css";
function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
          {/* Otras rutas pueden ir aquí */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
