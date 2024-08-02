import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import '../Styles/organism/verCitas.css';
import { verAllCitas } from '../services/citas';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.background.default,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const formatFecha = (fechaStr) => {
  const date = new Date(fechaStr);
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
};

export default function VerCitasTable() {
  const [citas, setCitas] = useState([
    {
      idCita: '',
      tipo: '',
      fecha: '',
      idDenuncia: '',
      horario: '',
      idUsuario: ''
    }
  ]);

  useEffect(() => {
    const fetchCita = async () => {
      try {
        const result = await verAllCitas();
        if (Array.isArray(result)) {
          setCitas(result);
        } else {
          console.error('Error: el resultado de la API no es un array', result);
        }
      } catch (error) {
        console.error('Error fetching citas:', error);
      }
    };

    fetchCita();
  }, []);

  return (
    <TableContainer component={Paper} className="tableContainer">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Tipo</StyledTableCell>
            <StyledTableCell>ID Denuncia</StyledTableCell>
            <StyledTableCell>Horario</StyledTableCell>
            <StyledTableCell>ID Usuario</StyledTableCell>
            <StyledTableCell>Fecha</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {citas.map((cita) => (
            <StyledTableRow key={cita.idCita}>
              <StyledTableCell component="th" scope="row">
                {cita.idCita}
              </StyledTableCell>
              <StyledTableCell>{cita.tipo}</StyledTableCell>
              <StyledTableCell>{cita.idDenuncia}</StyledTableCell>
              <StyledTableCell>{cita.horario}</StyledTableCell>
              <StyledTableCell>{cita.idUsuario}</StyledTableCell>
              <StyledTableCell>{formatFecha(cita.fecha)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
