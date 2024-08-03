import React from "react";
import VerDenunciasTable from "../Organism/verDenunciasTable";
import AdminBar from "../Molecule/adminBar";
import Footer from "../Molecule/Footer";

function VerDenunciasPage(){
    return(
        <>
        <AdminBar/>
        <br /> <br /> <br /> <br /> <br />
        <VerDenunciasTable/>
        <Footer/>
        </>
    )
}

export default VerDenunciasPage;
