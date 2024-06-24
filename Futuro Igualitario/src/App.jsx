import Button from "./assets/Components/Button";
import LoginForm from "./assets/Components/LoginForm";
import Navbar from "./assets/Components/Navbar";
import "./LoginForm.css"
import "./navbar.css";
// import { BrowserRouter, Router, Routers } from "react-router-dom";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Navbar />
        <Routers>
          <Router></Router>
        </Routers>
      </BrowserRouter> */}
      <Navbar/>
      <LoginForm />
      <Button />
    </>
  );
}

export default App;
