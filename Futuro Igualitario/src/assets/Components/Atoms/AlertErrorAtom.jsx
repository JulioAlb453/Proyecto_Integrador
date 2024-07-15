import React from "react";
import Swal from "sweetalert2";

function AlertError(){
    const ErrorAlert= () =>{
        Swal.fire({
            icon: "error",
            title: "A ocurrido un error!",
            color: 'white',
            iconColor: 'white',
            background: 'red',
            cancelButtonColor: '#FFFFF',
            padding:'4rem',
            width: '30%',
            allowEscapeKey:false,
            showConfirmButton:false
          });
    }
    return(
       <button onClick={ErrorAlert} className="error-button">Alert!</button>
    )
}

export default AlertError