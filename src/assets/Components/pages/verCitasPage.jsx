import React from "react";
import AdminBar from "../Molecule/adminBar";
import VerCitasTable from "../Organism/VerCitasTable";
import Footer from "../Molecule/Footer";

function VerCitasPage(){
    return(
        <>
        <AdminBar/>
        <br /> <br /> <br /> <br /> <br />
        <VerCitasTable/>
        <Footer/>
        </>
    )
}

export default VerCitasPage