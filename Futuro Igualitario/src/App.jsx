import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContentWrapper from "./assets/orgams/ContentWrapper/ContentWrapper";
import LoginForm from './assets/templates/LoginForm'
import AgendarCitas from './assets/templates/AgendarCitas'
import AdminTable from './assets/templates/adminTable'
import Register from './assets/templates/Register'
import './assets/orgams/ContentWrapper/ContentWrapper.css';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ContentWrapper/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/agendarCitas" element={<AgendarCitas/>} />
          <Route path="/AdminTable" element= {<AdminTable/>}/>
          <Route path="/registrar" element={<Register/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
