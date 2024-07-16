
import React from "react";
import FieldGroup from "../Molecule/FieldGroup";

function RegistrationForm({ values, onChange }) {
  const group1Fields = [
    { id: "apellidoP", label: "Apellido Paterno" },
    { id: "nombre", label: "Nombre(s)" },
    { id: "estadoCivil", label: "Estado Civil" },
    {id :"telefono", label: "NumTelefono"},
    {id:"fechaNacimiento", label:"Fecha de nacimiento"}
  ];

  const group2Fields = [
    { id: "apellidoM", label: "Apellido Materno" },
    { id: "direccion", label: "Dirección" },
    { id: "ocupacion", label: "Ocupación" },
    {id:"numHijos", label:"Num de hijos"},
    {id:"edad", label :"Edad"}
  ];

  return (
    <div className="content2">
      <FieldGroup fields={group1Fields} values={values} onChange={onChange} />
      <FieldGroup fields={group2Fields} values={values} onChange={onChange} />
    </div>
  );
}

export default RegistrationForm;
