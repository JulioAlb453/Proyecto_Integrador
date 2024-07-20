import React from "react";
import Swal from "sweetalert2";

function SuccessAlert(){
    const SuccessAlert= () => {
        Swal.fire({
            icon: "success",
            title: "Registro guardado exitosamente",
            color: 'white',
            iconColor: 'white',
            background: 'green',
            allowEscapeKey: false,
            showConfirmButton:false,
            width:'30%',
            padding:'4rem'
          });
    }
    return(
       <button onClick={SuccessAlert} className="success-button">AAAAAAAA!</button>
    )
}

export default SuccessAlert