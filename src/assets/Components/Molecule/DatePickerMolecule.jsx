import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerMolecule = ({ selected, onChange }) => {
  return <DatePicker selected={selected} onChange={onChange} dateFormat="dd/MM/yyyy" inline />;
};

export default DatePickerMolecule;