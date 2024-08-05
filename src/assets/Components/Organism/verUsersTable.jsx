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
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import '../Styles/organism/verCitas.css';
import { verAllUsuarios, getDatosEconomicos, getDatosPersonales, getDatosVivienda } from '../services/datosUsuario';

const StyledTableCell = styled(TableCell)(({ theme, size }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: 'bold',
    padding: '6px 10px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: size === 'large' ? 16 : 16,
    padding: '6px 10px',
    minWidth: size === 'large' ? '150px' : '100px',
  },
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
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

export default function VerUsersTable() {
  const [usuarios, setUsuarios] = useState([]);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('idUsuario');
  const [expandedData, setExpandedData] = useState(null);
  const [expandedDataType, setExpandedDataType] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const result = await verAllUsuarios();
        if (Array.isArray(result)) {
          setUsuarios(result);
        } else {
          console.error('Error: el resultado de la API no es un array', result);
        }
      } catch (error) {
        console.error('Error fetching usuarios:', error);
      }
    };

    fetchUsuarios();
  }, []);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleCellClick = async (idUsuario, dataType) => {
    if (!idUsuario) return;
    try {
      let data;
      switch (dataType) {
        case 'personales':
          data = await getDatosPersonales(idUsuario);
          break;
        case 'economicos':
          data = await getDatosEconomicos(idUsuario);
          break;
        case 'vivienda':
          data = await getDatosVivienda(idUsuario);
          break;
        default:
          console.error('Tipo de datos no reconocido');
          return;
      }
      setExpandedData(data);
      setExpandedDataType(dataType);
      setDialogOpen(true);
    } catch (error) {
      console.error(`Error fetching ${dataType}:`, error);
    }
  };

  const sortedUsuarios = stableSort(usuarios, getComparator(order, orderBy));

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const renderDataAttributes = (data, dataType) => {
    let attributes = {};
    switch (dataType) {
      case 'personales':
        attributes = {
          'Edad': data[0].edad,
          'Nombre': data[0].nombre,
          'Apellido Paterno': data[0].apellidoPaterno,
          'Apellido Materno': data[0].apellidoMaterno,
          'Telefono': data[0].telefono,
          'Hijos': data[0].numHijos,
          'Estado Civil': data[0].estadoCivil,
          'Fecha Nacimiento': formatDate(data[0].fechaNacimiento),
        };
        break;
      case 'economicos':
        attributes = {
          'Ocupacion': data[0].ocupacion,
          'Ingresos Mensuales': data[0].ingresosMensuales,
          'Gastos Mensuales': data[0].gastosMensuales,
          'Apoyos Externos': data[0].apoyosExternos,
        };
        break;
      case 'vivienda':
        attributes = {
          'Calle': data[0].calle,
          'Colonia': data[0].colonia,
          'Número Exterior': data[0].numeroExterior,
          'Código Postal': data[0].codigoPostal,
          'Número Interior': data[0].numInterior,
          'Número Habitaciones': data[0].numHabitaciones,
          'Estatus Vivienda': data[0].estatusVivienda,
          'Tipo Vivienda': data[0].tipoVivienda,
        };
        break;
      default:
        return null;
    }

    return (
      <Box sx={{ margin: 2, }}>
        {Object.entries(attributes).map(([key, value]) => (
          <Typography key={key} variant="body2" sx={{ marginBottom: 1, fontSize:'18px' }}>
            <strong>{key}:</strong> {value !== undefined && value !== null ? value : 'No disponible'}
          </Typography>
        ))}
      </Box>
    );
  };

  return (
    <div className='verUsuariosTable'>
      <TableContainer component={Paper} sx={{ width: '60%', height: 'auto', marginTop: '3%', marginLeft: '20%', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 8px #00000038', borderRadius: '10px' }} className="tableContainer">
        <h1>Usuarios</h1>
        <Table sx={{ width: 1150 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell size="large" sortDirection={orderBy === 'idUsuario' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'idUsuario'}
                  direction={orderBy === 'idUsuario' ? order : 'asc'}
                  onClick={() => handleRequestSort('idUsuario')}
                >
                  ID Usuario
                </StyledTableSortLabel>
              </StyledTableCell>
              <StyledTableCell size="large" sortDirection={orderBy === 'email' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'email'}
                  direction={orderBy === 'email' ? order : 'asc'}
                  onClick={() => handleRequestSort('email')}
                >
                  Email
                </StyledTableSortLabel>
              </StyledTableCell>
              <StyledTableCell size="small" sortDirection={orderBy === 'idDatosPersonales' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'idDatosPersonales'}
                  direction={orderBy === 'idDatosPersonales' ? order : 'asc'}
                  onClick={() => handleRequestSort('idDatosPersonales')}
                >
                  ID Datos Personales
                </StyledTableSortLabel>
              </StyledTableCell>
              <StyledTableCell size="small" sortDirection={orderBy === 'idDatosEconomicos' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'idDatosEconomicos'}
                  direction={orderBy === 'idDatosEconomicos' ? order : 'asc'}
                  onClick={() => handleRequestSort('idDatosEconomicos')}
                >
                  ID Datos Económicos
                </StyledTableSortLabel>
              </StyledTableCell>
              <StyledTableCell size="small" sortDirection={orderBy === 'idDatosVivienda' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'idDatosVivienda'}
                  direction={orderBy === 'idDatosVivienda' ? order : 'asc'}
                  onClick={() => handleRequestSort('idDatosVivienda')}
                >
                  ID Datos Vivienda
                </StyledTableSortLabel>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedUsuarios.map((usuario) => (
              <StyledTableRow key={usuario.idUsuario}>
                <StyledTableCell size="large">{usuario.idUsuario}</StyledTableCell>
                <StyledTableCell size="large">{usuario.email}</StyledTableCell>
                <StyledTableCell
                  size="small"
                  onClick={() => usuario.idDatosPersonales && handleCellClick(usuario.idUsuario, 'personales')}
                  style={{ cursor: usuario.idDatosPersonales ? 'pointer' : 'default', textDecoration: usuario.idDatosPersonales ? 'underline' : 'none' }}
                >
                  {usuario.idDatosPersonales || 'N/A'}
                </StyledTableCell>
                <StyledTableCell
                  size="small"
                  onClick={() => usuario.idDatosEconomicos && handleCellClick(usuario.idUsuario, 'economicos')}
                  style={{ cursor: usuario.idDatosEconomicos ? 'pointer' : 'default', textDecoration: usuario.idDatosEconomicos ? 'underline' : 'none' }}
                >
                  {usuario.idDatosEconomicos || 'N/A'}
                </StyledTableCell>
                <StyledTableCell
                  size="small"
                  onClick={() => usuario.idDatosVivienda && handleCellClick(usuario.idUsuario, 'vivienda')}
                  style={{ cursor: usuario.idDatosVivienda ? 'pointer' : 'default', textDecoration: usuario.idDatosVivienda ? 'underline' : 'none' }}
                >
                  {usuario.idDatosVivienda || 'N/A'}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth style={{fontStyle:'none'}}
        >
        <DialogTitle style={{fontSize:'20px'}}>
          Datos {expandedDataType.charAt(0).toUpperCase() + expandedDataType.slice(1)}
        </DialogTitle>
        <DialogContent  dividers 
        >
          {expandedData ? renderDataAttributes(expandedData, expandedDataType) : 'No data available'}
          
        </DialogContent>
      </Dialog>
    </div>
  );
}
