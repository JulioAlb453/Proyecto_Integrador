import React from "react";
import AdminBar from "../Molecule/adminBar";
import Footer from "../Molecule/Footer";
import VerEventosTable from "../Organism/verEventosTable";

function VerEventosPage(){
    return(
        <>
        <AdminBar/>
        <br /> <br /> <br /> <br /> <br />
        <VerEventosTable/>
        <Footer/>
        </>
    )
}

export default VerEventosPage;
