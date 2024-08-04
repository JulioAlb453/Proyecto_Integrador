import React from "react";
import AdminBar from "../Molecule/adminBar";
import Footer from "../Molecule/Footer";
import VerUsersTable from "../Organism/verUsersTable";

function VerUsuariosPage(){
    return(
        <>
        <AdminBar/>
        <br /> <br /> <br /> <br /> <br />
        <VerUsersTable/>
        <Footer/>
        </>
    )
}

export default VerUsuariosPage;
