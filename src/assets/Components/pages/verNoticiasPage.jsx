import React from "react";
import AdminBar from "../Molecule/adminBar";
import Footer from "../Molecule/Footer";
import VerNoticiasTable from "../Organism/verNoticiasTable";


function VerNoticiasPage(){
    return(
        <>
        <AdminBar/>
        <br /> <br /> <br /> <br /> <br />
        <VerNoticiasTable/>
        <Footer/>
        </>
    )
}

export default VerNoticiasPage;
