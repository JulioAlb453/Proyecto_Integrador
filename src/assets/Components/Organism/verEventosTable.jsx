import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import {
  Table, TableBody, TableContainer, TableHead, TableRow, Paper, TableSortLabel, Dialog, DialogContent, DialogTitle, Button, TextField,
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { getAllEventos, addEvento, updateEvento, deleteEvento } from '../services/eventos';
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
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
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

const formatHora = (horaStr) => {
  const [hour, minute] = horaStr.split(':').map(Number);
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
};

export default function VerEventosTable() {
  const [eventos, setEventos] = useState([]);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('idEventos');
  const [selectedEvento, setSelectedEvento] = useState(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  // Estado para el nuevo evento
  const [newEvento, setNewEvento] = useState({
    fechaEvento: '',         // Tipo date
    horario: '',             // Tipo time
    descripcion: '',
    finalInscripcion: '',    // Tipo date
    calle: '',
    colonia: '',
    numExterior: '',
    codigoPostal: '',
  });

  // Estado para el evento en edición
  const [editEvento, setEditEvento] = useState({
    idEventos: '',
    fechaEvento: '',         // Tipo date
    horario: '',             // Tipo time
    descripcion: '',
    finalInscripcion: '',    // Tipo date
    calle: '',
    colonia: '',
    numExterior: '',
    codigoPostal: '',
  });

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const result = await getAllEventos();
        if (Array.isArray(result)) {
          setEventos(result);
        } else {
          console.error('Error: el resultado de la API no es un array', result);
        }
      } catch (error) {
        console.error('Error fetching eventos:', error);
      }
    };

    fetchEventos();
  }, []);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedEventos = stableSort(eventos, getComparator(order, orderBy));

  const handleRowClick = (evento) => {
    setSelectedEvento(evento);
    setEditEvento({
      ...evento,
      fechaEvento: new Date(evento.fechaEvento).toISOString().substr(0, 10), // YYYY-MM-DD
      horario: formatHora(new Date(evento.horario).toISOString().substr(11, 5)), // HH:MM
      finalInscripcion: new Date(evento.finalInscripcion).toISOString().substr(0, 10),
    });
    setIsEditDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedEvento(null);
    setIsAddDialogOpen(false);
    setIsEditDialogOpen(false);
  };

  // Función para agregar un nuevo evento
  const handleAddEvento = async () => {
    try {
      await addEvento({
        ...newEvento,
        fechaEvento: new Date(newEvento.fechaEvento).toISOString(),
        horario: new Date(`1970-01-01T${newEvento.horario}:00`).toISOString(), // Convierte al formato adecuado
        finalInscripcion: new Date(newEvento.finalInscripcion).toISOString(),
      });
      setNewEvento({
        fechaEvento: '',
        horario: '',
        descripcion: '',
        finalInscripcion: '',
        calle: '',
        colonia: '',
        numExterior: '',
        codigoPostal: '',
      });
      handleCloseDialog();
      const result = await getAllEventos();
      setEventos(result);
    } catch (error) {
      console.error('Error adding evento:', error);
    }
  };

  // Función para actualizar un evento existente
  const handleUpdateEvento = async () => {
    try {
      await updateEvento(editEvento.idEventos, {
        ...editEvento,
        fechaEvento: new Date(editEvento.fechaEvento).toISOString(),
        horario: new Date(`1970-01-01T${editEvento.horario}:00`).toISOString(), // Convierte al formato adecuado
        finalInscripcion: new Date(editEvento.finalInscripcion).toISOString(),
      });
      handleCloseDialog();
      const result = await getAllEventos();
      setEventos(result);
    } catch (error) {
      console.error('Error updating evento:', error);
    }
  };

  // Función para eliminar un evento
  const handleDeleteEvento = async (id) => {
    try {
      await deleteEvento(id);
      const result = await getAllEventos();
      setEventos(result);
    } catch (error) {
      console.error('Error deleting evento:', error);
    }
  };

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (e, setFunction) => {
    const { name, value } = e.target;
    setFunction((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="verEventosTable">
      <TableContainer
        component={Paper}
        sx={{
          width: '77%',
          height: 'auto',
          marginTop: '3%',
          marginLeft: '12%',
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
        <h1>Eventos</h1>
        <Button onClick={() => setIsAddDialogOpen(true)} variant="contained" color="primary">
          Agregar Evento
        </Button>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sortDirection={orderBy === 'idEventos' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'idEventos'}
                  direction={orderBy === 'idEventos' ? order : 'asc'}
                  onClick={() => handleRequestSort('idEventos')}
                >
                  ID Evento
                </StyledTableSortLabel>
              </StyledTableCell>
              <StyledTableCell sortDirection={orderBy === 'fechaEvento' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'fechaEvento'}
                  direction={orderBy === 'fechaEvento' ? order : 'asc'}
                  onClick={() => handleRequestSort('fechaEvento')}
                >
                  Fecha del Evento
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
              <StyledTableCell sortDirection={orderBy === 'descripcion' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'descripcion'}
                  direction={orderBy === 'descripcion' ? order : 'asc'}
                  onClick={() => handleRequestSort('descripcion')}
                >
                  Descripción
                </StyledTableSortLabel>
              </StyledTableCell>
              <StyledTableCell sortDirection={orderBy === 'finalInscripcion' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'finalInscripcion'}
                  direction={orderBy === 'finalInscripcion' ? order : 'asc'}
                  onClick={() => handleRequestSort('finalInscripcion')}
                >
                  Fecha Final Inscripción
                </StyledTableSortLabel>
              </StyledTableCell>
              <StyledTableCell>Calle</StyledTableCell>
              <StyledTableCell>Colonia</StyledTableCell>
              <StyledTableCell>Número Exterior</StyledTableCell>
              <StyledTableCell>Código Postal</StyledTableCell>
              <StyledTableCell>Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedEventos.map((evento) => (
              <StyledTableRow key={evento.idEventos} onClick={() => handleRowClick(evento)}>
                <StyledTableCell>{evento.idEventos}</StyledTableCell>
                <StyledTableCell>{formatFecha(evento.fechaEvento)}</StyledTableCell>
                <StyledTableCell>{formatHora(evento.horario)}</StyledTableCell>
                <StyledTableCell>{evento.descripcion}</StyledTableCell>
                <StyledTableCell>{formatFecha(evento.finalInscripcion)}</StyledTableCell>
                <StyledTableCell>{evento.calle}</StyledTableCell>
                <StyledTableCell>{evento.colonia}</StyledTableCell>
                <StyledTableCell>{evento.numExterior}</StyledTableCell>
                <StyledTableCell>{evento.codigoPostal}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteEvento(evento.idEventos);
                    }}
                  >
                    Eliminar
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={isAddDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Agregar Evento</DialogTitle>
        <DialogContent>
          {/* Fecha del Evento (date) */}
          <TextField
            label="Fecha del Evento"
            type="date"
            name="fechaEvento"
            value={newEvento.fechaEvento}
            onChange={(e) => handleInputChange(e, setNewEvento)}
            fullWidth
            margin="normal"
          />
          {/* Horario (time) */}
          <TextField
            label="Horario"
            type="time"
            name="horario"
            value={newEvento.horario}
            onChange={(e) => handleInputChange(e, setNewEvento)}
            fullWidth
            margin="normal"
          />
          {/* Descripción */}
          <TextField
            label="Descripción"
            name="descripcion"
            value={newEvento.descripcion}
            onChange={(e) => handleInputChange(e, setNewEvento)}
            fullWidth
            margin="normal"
          />
          {/* Fecha Final Inscripción (date) */}
          <TextField
            label="Fecha Final Inscripción"
            type="date"
            name="finalInscripcion"
            value={newEvento.finalInscripcion}
            onChange={(e) => handleInputChange(e, setNewEvento)}
            fullWidth
            margin="normal"
          />
          {/* Calle */}
          <TextField
            label="Calle"
            name="calle"
            value={newEvento.calle}
            onChange={(e) => handleInputChange(e, setNewEvento)}
            fullWidth
            margin="normal"
          />
          {/* Colonia */}
          <TextField
            label="Colonia"
            name="colonia"
            value={newEvento.colonia}
            onChange={(e) => handleInputChange(e, setNewEvento)}
            fullWidth
            margin="normal"
          />
          {/* Número Exterior */}
          <TextField
            label="Número Exterior"
            name="numExterior"
            value={newEvento.numExterior}
            onChange={(e) => handleInputChange(e, setNewEvento)}
            fullWidth
            margin="normal"
          />
          {/* Código Postal */}
          <TextField
            label="Código Postal"
            name="codigoPostal"
            value={newEvento.codigoPostal}
            onChange={(e) => handleInputChange(e, setNewEvento)}
            fullWidth
            margin="normal"
          />
          <Button onClick={handleAddEvento} variant="contained" color="primary">
            Agregar
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog open={isEditDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Editar Evento</DialogTitle>
        <DialogContent>
          {/* Fecha del Evento (date) */}
          <TextField
            label="Fecha del Evento"
            type="date"
            name="fechaEvento"
            value={editEvento.fechaEvento}
            onChange={(e) => handleInputChange(e, setEditEvento)}
            fullWidth
            margin="normal"
          />
          {/* Horario (time) */}
          <TextField
            label="Horario"
            type="time"
            name="horario"
            value={editEvento.horario}
            onChange={(e) => handleInputChange(e, setEditEvento)}
            fullWidth
            margin="normal"
          />
          {/* Descripción */}
          <TextField
            label="Descripción"
            name="descripcion"
            value={editEvento.descripcion}
            onChange={(e) => handleInputChange(e, setEditEvento)}
            fullWidth
            margin="normal"
          />
          {/* Fecha Final Inscripción (date) */}
          <TextField
            label="Fecha Final Inscripción"
            type="date"
            name="finalInscripcion"
            value={editEvento.finalInscripcion}
            onChange={(e) => handleInputChange(e, setEditEvento)}
            fullWidth
            margin="normal"
          />
          {/* Calle */}
          <TextField
            label="Calle"
            name="calle"
            value={editEvento.calle}
            onChange={(e) => handleInputChange(e, setEditEvento)}
            fullWidth
            margin="normal"
          />
          {/* Colonia */}
          <TextField
            label="Colonia"
            name="colonia"
            value={editEvento.colonia}
            onChange={(e) => handleInputChange(e, setEditEvento)}
            fullWidth
            margin="normal"
          />
          {/* Número Exterior */}
          <TextField
            label="Número Exterior"
            name="numExterior"
            value={editEvento.numExterior}
            onChange={(e) => handleInputChange(e, setEditEvento)}
            fullWidth
            margin="normal"
          />
          {/* Código Postal */}
          <TextField
            label="Código Postal"
            name="codigoPostal"
            value={editEvento.codigoPostal}
            onChange={(e) => handleInputChange(e, setEditEvento)}
            fullWidth
            margin="normal"
          />
          <Button onClick={handleUpdateEvento} variant="contained" color="primary">
            Actualizar
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
