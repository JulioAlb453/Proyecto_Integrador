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
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import '../Styles/organism/verCitas.css';
import { getAllNoticias, addNoticia, updateNoticia, deleteNoticia } from '../services/noticias';
import '../Styles/organism/verCitas.css'

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

const CustomButton = styled(Button)({
  color: 'black',
  '&:hover': {
    backgroundColor: 'gray',
  },
});

export default function VerNoticiasTable() {
  const [noticias, setNoticias] = useState([]);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('idNoticia');
  const [open, setOpen] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [editing, setEditing] = useState(false);
  const [selectedNoticia, setSelectedNoticia] = useState(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const result = await getAllNoticias();
        if (Array.isArray(result)) {
          setNoticias(result);
        } else {
          console.error('Error: el resultado de la API no es un array', result);
        }
      } catch (error) {
        console.error('Error fetching noticias:', error);
      }
    };

    fetchNoticias();
  }, []);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleAddNoticia = async () => {
    try {
      const fecha = new Date().toISOString();
      await addNoticia({ titulo, descripcion, fecha });
      setOpen(false);
      setTitulo('');
      setDescripcion('');

      const result = await getAllNoticias();
      if (Array.isArray(result)) {
        setNoticias(result);
      }
    } catch (error) {
      console.error('Error adding noticia:', error);
    }
  };

  const handleUpdateNoticia = async () => {
    try {
      if (selectedNoticia) {
        await updateNoticia(selectedNoticia.idNoticia, { titulo, descripcion });
        setOpen(false);
        setTitulo('');
        setDescripcion('');
        setEditing(false);

        const result = await getAllNoticias();
        if (Array.isArray(result)) {
          setNoticias(result);
        }
      }
    } catch (error) {
      console.error('Error updating noticia:', error);
    }
  };

  const handleDeleteNoticia = async () => {
    try {
      if (selectedNoticia) {
        await deleteNoticia(selectedNoticia.idNoticia);
        setOpen(false);
        setTitulo('');
        setDescripcion('');
        setEditing(false);
        setSelectedNoticia(null);

        const result = await getAllNoticias();
        if (Array.isArray(result)) {
          setNoticias(result);
        }
      }
    } catch (error) {
      console.error('Error deleting noticia:', error);
    }
  };

  const handleRowClick = (noticia) => {
    setSelectedNoticia(noticia);
    setTitulo(noticia.titulo);
    setDescripcion(noticia.descripcion);
    setEditing(true);
    setOpen(true);
  };

  const sortedNoticias = stableSort(noticias, getComparator(order, orderBy));

  return (
    <div className='verCitasTable'>
      <div className="header">
        <Button className='botonAdd'
          variant="contained"
          color="primary"
          onClick={() => {
            setTitulo('');
            setDescripcion('');
            setEditing(false);
            setOpen(true);
          }}
          sx={{ marginLeft: 'auto', backgroundColor:'#8d1ed6b3', position:'absolute', right:'240px',marginTop:'32px' }}
        >
          Agregar
        </Button>
      </div>
      <TableContainer component={Paper} sx={{ width: '80%', height: 'auto', marginTop: '3%', marginLeft: '10%', padding: '30px', display: 'flex', flexDirection: 'column',  boxShadow: '0 4px 8px #00000038', borderRadius: '10px', textAlign:'center' }} className="tableContainer">
        <h1>Noticias</h1><Table sx={{ width: '100%' }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sortDirection={orderBy === 'idNoticia' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'idNoticia'}
                  direction={orderBy === 'idNoticia' ? order : 'asc'}
                  onClick={() => handleRequestSort('idNoticia')}
                >
                  ID Noticia
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
              <StyledTableCell sortDirection={orderBy === 'titulo' ? order : false}>
                <StyledTableSortLabel
                  active={orderBy === 'titulo'}
                  direction={orderBy === 'titulo' ? order : 'asc'}
                  onClick={() => handleRequestSort('titulo')}
                >
                  Título
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
            {sortedNoticias.map((noticia) => (
              <StyledTableRow key={noticia.idNoticia} onClick={() => handleRowClick(noticia)}>
                <StyledTableCell>{noticia.idNoticia}</StyledTableCell>
                <StyledTableCell>{noticia.idUsuario}</StyledTableCell>
                <StyledTableCell>{noticia.titulo}</StyledTableCell>
                <StyledTableCell>{noticia.descripcion}</StyledTableCell>
                <StyledTableCell>{formatFecha(noticia.fecha)}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{editing ? 'Editar Noticia' : 'Agregar Noticia'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Título"
            type="text"
            fullWidth
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={12} // Ajusta este valor para aumentar el tamaño del área de texto
            placeholder="Descripción"
            style={{ width: '100%', marginTop: '10px', padding: '10px', fontSize:'17px', fontFamily:'Arial', resize: 'none',}} 
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </DialogContent>
        <DialogActions sx={{marginRight:'15px'}}>
          <Button onClick={() => setOpen(false)} sx={{color:'white' ,backgroundColor:'#8d1ed6b3', marginRight:'21px'}} >
            Cancelar
          </Button>
          {editing ? (
            <>
              <Button onClick={handleUpdateNoticia} sx={{color:'white', backgroundColor:'#8d1ed6b3', marginRight:'21px'}} >
                Actualizar
              </Button>
              <Button onClick={handleDeleteNoticia} sx={{color:'white', backgroundColor:'#8d1ed6b3'}}>
                Eliminar
              </Button>
            </>
          ) : (
            <Button onClick={handleAddNoticia} color="primary">
              Agregar
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
