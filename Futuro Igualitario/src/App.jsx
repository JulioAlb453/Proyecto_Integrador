import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/Components/Home";
import LoginForm from "./assets/Components/LoginForm";
import Navbar from "./assets/Components/Navbar";
import Footer from "./assets/Components/Footer";
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
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
