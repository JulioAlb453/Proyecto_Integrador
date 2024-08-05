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
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { verAllDenuncias } from '../services/denuncia';
import '../Styles/organism/verCitas.css';

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
  cursor: 'pointer',
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

export default function VerDenunciasTable() {
  const [denuncias, setDenuncias] = useState([]);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('idDenuncia');
  const [orderByHora, setOrderByHora] = useState(false);
  const [selectedDenuncia, setSelectedDenuncia] = useState(null);

  useEffect(() => {
    const fetchDenuncias = async () => {
      try {
        const result = await verAllDenuncias();
        if (Array.isArray(result)) {
          setDenuncias(result);
        } else {
          console.error('Error: el resultado de la API no es un array', result);
        }
      } catch (error) {
        console.error('Error fetching denuncias:', error);
      }
    };

    fetchDenuncias();
  }, []);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleHoraChange = () => {
    setOrderByHora(!orderByHora);
  };
  const sortedDenuncias = stableSort(denuncias, getComparator(order, orderBy));
  const finalSortedDenuncias = orderByHora
    ? sortedDenuncias.sort((a, b) => parseHora(a.horaDenuncia) - parseHora(b.horaDenuncia))
    : sortedDenuncias;

  const handleRowClick = (denuncia) => {
    setSelectedDenuncia(denuncia);
  };

  const handleCloseDialog = () => {
    setSelectedDenuncia(null);
  };

  return (
    <div className='verCitasTable'>
      <TableContainer
        component={Paper}
        sx={{
          width: '80%',
          height: 'auto',
          marginTop: '3%',
          marginLeft: '11%',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 8px #00000038',
          borderRadius: '10px',
        }}
        className="tableContainer"
      >
        <h1>Denuncias</h1>
        <Table sx={{ }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sortDirection={orderBy === 'idDenuncia' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'idDenuncia'}
                  direction={orderBy === 'idDenuncia' ? order : 'asc'}
                  onClick={() => handleRequestSort('idDenuncia')}
                >
                  ID Denuncia
                </StyledTableSortLabel>
              </StyledTableCell>
              <StyledTableCell sortDirection={orderBy === 'gravedadCaso' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'gravedadCaso'}
                  direction={orderBy === 'gravedadCaso' ? order : 'asc'}
                  onClick={() => handleRequestSort('gravedadCaso')}
                >
                  Gravedad del Caso
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
              <StyledTableCell sortDirection={orderBy === 'motivoDenuncia' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'motivoDenuncia'}
                  direction={orderBy === 'motivoDenuncia' ? order : 'asc'}
                  onClick={() => handleRequestSort('motivoDenuncia')}
                >
                  Fecha de la Denuncia
                </StyledTableSortLabel>
              </StyledTableCell>
              <StyledTableCell sortDirection={orderBy === 'estatusDenuncia' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'estatusDenuncia'}
                  direction={orderBy === 'estatusDenuncia' ? order : 'asc'}
                  onClick={() => handleRequestSort('estatusDenuncia')}
                >
                  Estatus de la Denuncia
                </StyledTableSortLabel>
              </StyledTableCell>
              <StyledTableCell sortDirection={orderBy === 'horaDenuncia' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'horaDenuncia'}
                  direction={orderBy === 'horaDenuncia' ? order : 'asc'}
                  onClick={() => handleRequestSort('horaDenuncia')}
                >
                  Hora de la Denuncia
                </StyledTableSortLabel>
              </StyledTableCell>
              <StyledTableCell sortDirection={orderBy === 'caso' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'caso'}
                  direction={orderBy === 'caso' ? order : 'asc'}
                  onClick={() => handleRequestSort('caso')}
                >
                  Caso
                </StyledTableSortLabel>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finalSortedDenuncias.map((denuncia) => (
              <StyledTableRow key={denuncia.idDenuncia} onClick={() => handleRowClick(denuncia)}>
                <StyledTableCell>{denuncia.idDenuncia}</StyledTableCell>
                <StyledTableCell>{denuncia.gravedadCaso}</StyledTableCell>
                <StyledTableCell>{denuncia.idUsuario}</StyledTableCell>
                <StyledTableCell>{formatFecha(denuncia.fechaDenuncia)}</StyledTableCell>
                <StyledTableCell>{denuncia.estatusDenuncia}</StyledTableCell>
                <StyledTableCell>{denuncia.horaDenuncia}</StyledTableCell>
                <StyledTableCell>{denuncia.caso}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog 
        open={Boolean(selectedDenuncia)} 
        onClose={handleCloseDialog} 
        PaperProps={{ style: { minWidth: '500px', minHeight: '100px', overflowWrap:'break-word', fontSize:'18px', fontWeight:'lighter' } }}
      >
        <DialogTitle>Detalles de la Denuncia</DialogTitle>
        <DialogContent sx={{}}>
          {selectedDenuncia && (
            <div className="detallesDenuncia">
              <p><strong>Motivo de la Denuncia:</strong> {selectedDenuncia.motivoDenuncia}</p>
              <p><strong>Agresor:</strong> {selectedDenuncia.violentador}</p>
              <p><strong>Fecha del caso:</strong> {formatFecha(selectedDenuncia.fechaCaso)}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
