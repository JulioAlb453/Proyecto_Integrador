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
import TableSortLabel from '@mui/material/TableSortLabel';
import '../Styles/organism/verCitas.css';
import { verAllCitas } from '../services/citas';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: 'bold',
    padding: '6px 10px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    padding: '6px 10px',
    minWidth: '100px',
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

const StyledTableSortLabel = styled(TableSortLabel)(({ theme }) => ({
  '&.Mui-active': {
    color: theme.palette.common.black,
  },
}));

const formatFecha = (fechaStr) => {
  const date = new Date(fechaStr);
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
};

const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
};

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

const parseHora = (horaStr) => {
  const [hour, minute, second] = horaStr.split(':').map(Number);
  return new Date(1970, 0, 1, hour, minute, second);
};

export default function VerUsersTable() {
  const [citas, setCitas] = useState([]);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('idCita');
  const [tipoFiltro, setTipoFiltro] = useState('');
  const [orderByTipo, setOrderByTipo] = useState('');
  const [orderByHora, setOrderByHora] = useState(false);

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

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleTipoChange = (event) => {
    setTipoFiltro(event.target.value);
    setOrderByTipo(event.target.value);
  };

  const handleHoraChange = () => {
    setOrderByHora(!orderByHora);
  };

  const filteredCitas = citas.filter(cita =>
    tipoFiltro ? cita.tipo === tipoFiltro : true
  );

  const sortedCitas = stableSort(filteredCitas, getComparator(order, orderBy));

  const finalSortedCitas = orderByHora
    ? sortedCitas.sort((a, b) => parseHora(a.horario) - parseHora(b.horario))
    : sortedCitas;

  return (
    <div className='verCitasTable'>
      <TableContainer component={Paper} sx={{ width: '60%', height: 'auto',  marginTop:'3%', marginLeft:'20%', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 8px #00000038', borderRadius: '10px'}} className="tableContainer">
        <h1>Citas</h1>
        <Table sx={{ width: 1150}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sortDirection={orderBy === 'idCita' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'idCita'}
                  direction={orderBy === 'idCita' ? order : 'asc'}
                  onClick={() => handleRequestSort('idCita')}
                >
                  ID
                </StyledTableSortLabel>
              </StyledTableCell>
              <StyledTableCell sortDirection={orderBy === 'tipo' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'tipo'}
                  direction={orderBy === 'tipo' ? order : 'asc'}
                  onClick={() => handleRequestSort('tipo')}
                >
                  Tipo
                </StyledTableSortLabel>
              </StyledTableCell>
              <StyledTableCell sortDirection={orderBy === 'idDenuncia' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'idDenuncia'}
                  direction={orderBy === 'idDenuncia' ? order : 'asc'}
                  onClick={() => handleRequestSort('idDenuncia')}
                >
                  ID Denuncia
                </StyledTableSortLabel>
              </StyledTableCell>
              <StyledTableCell sortDirection={orderBy === 'horario' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'horario'}
                  direction={orderBy === 'horario' ? order : 'asc'}
                  onClick={() => handleRequestSort('horario')}
                >
                  Horario
                </StyledTableSortLabel>
              </StyledTableCell>
              <StyledTableCell sortDirection={orderBy === 'idUsuario' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'idUsuario'}
                  direction={orderBy === 'idUsuario' ? order : 'asc'}
                  onClick={() => handleRequestSort('idUsuario')}
                >
                  ID Usuario
                </StyledTableSortLabel>
              </StyledTableCell>
              <StyledTableCell sortDirection={orderBy === 'fecha' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'fecha'}
                  direction={orderBy === 'fecha' ? order : 'asc'}
                  onClick={() => handleRequestSort('fecha')}
                >
                  Fecha
                </StyledTableSortLabel>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finalSortedCitas.map((cita) => (
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
    </div>
  );
}
