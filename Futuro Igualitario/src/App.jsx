import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from "./assets/Components/Button";
import LoginForm from "./assets/Components/LoginForm";
import Navbar from "./assets/Components/Navbar";
import "./navbar.css";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        {/* Otras rutas pueden ir aquí */}
      </Routes>
    </Router>
  );
}

export default App;
