import Footer from '../Molecule/Footer';
import AdminBar from "../Molecule/adminBar";
import AdminInfo from "../Organism/AdminInfo";



function AdminPerfil(){
    
  return (
    <>
    <AdminBar/>
    <div className="perfil-content1">
        <div className="perfil-header">
          <h1>PERFIL ADMINISTRADOR</h1>
        </div>
        <div className="InfoPerfil1">
          <AdminInfo />
        </div>
      </div>
    <Footer/>
    </>
  );
}

export default AdminPerfil;