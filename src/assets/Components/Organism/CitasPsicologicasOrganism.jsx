import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2'; // Importa SweetAlert2
import Navbar from "../Molecule/Navbar";
import Footer from "../Molecule/Footer";
import { addCita, getAllCitasPsicologicas, getCitasFecha } from "../services/citas.js";
import "../Styles/templates/calendar.css";

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [showIdDenuncia, setShowIdDenuncia] = useState(false);
  const [idDenuncia, setIdDenuncia] = useState("");
  const [citas, setCitas] = useState([]);
  const [disabledTimes, setDisabledTimes] = useState([]);

  const fetchCitas = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        Swal.fire('Usuario no autenticado');
        return;
      }
      const citasData = await getAllCitasPsicologicas(token);
      setCitas(citasData);
    } catch (error) {
      console.error('Error al obtener las citas:', error.message);
    }
  };

  useEffect(() => {
    fetchCitas();
  }, []);

  useEffect(() => {
    const fetchCitasFecha = async (date) => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          Swal.fire('Usuario no autenticado');
          return;
        }
        const dateObj = typeof date === 'string' ? new Date(date) : date;
        const formattedDate = dateObj.toISOString().split('T')[0];
        const citasFecha = await getCitasFecha(formattedDate, token);
        setDisabledTimes(citasFecha.map(cita => {
          console.log("Horario de cita:", cita.horario);
          const horario = cita.horario.slice(0, 5);
          return { ...cita, horario };
        }));
      } catch (error) {
        console.error('Error al obtener las citas por fecha:', error.message);
      }
    };

    if (selectedDate) {
      fetchCitasFecha(selectedDate);
    }
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = async () => {
    if (selectedDate && selectedTime) {
      const newBooking = {
        tipo: 'psicologica',
        fecha: selectedDate.toISOString().split('T')[0],
        horario: selectedTime.toTimeString().slice(0, 5),
        idDenuncia: showIdDenuncia ? idDenuncia : null,
      };
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          Swal.fire('Usuario no autenticado');
          return;
        }
        await addCita(newBooking, token);
        setBookings([...bookings, newBooking]);
        setCitas([...citas, { ...newBooking}]); 
        setSelectedDate(new Date());
        setSelectedTime(null);
        setShowIdDenuncia(false);
        setIdDenuncia("");

        Swal.fire({
          icon: 'success',
          title: 'Cita confirmada',
          html: `<p>Tipo de Cita: ${newBooking.tipo}</p>
                 <p>Fecha: ${newBooking.fecha}</p>
                 <p>Horario: ${newBooking.horario}</p>
                 ${newBooking.idDenuncia ? `<p>ID de Denuncia: ${newBooking.idDenuncia}</p>` : ''}`,
        });
      } catch (error) {
        Swal.fire('Error al agregar la cita: ' + error.message);
      }
    } else {
      Swal.fire('Por favor, completa todos los campos obligatorios.');
    }
  };

  const isTimeBooked = (time) => {
    const timeString = time.toTimeString().slice(0, 5);
    const isBooked = disabledTimes.some(booking => booking.horario === timeString);
    return isBooked;
  };

  const generateTimes = () => {
    const times = [];
    const start = new Date();
    start.setHours(9, 0, 0, 0);
    const end = new Date();
    end.setHours(12, 0, 0, 0);

    while (start <= end) {
      times.push(new Date(start));
      start.setMinutes(start.getMinutes() + 30);
    }
    return times;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toISOString().split('T')[0];
  };

  const formatTime = (timeString) => {
    return timeString.slice(0, 5);
  };

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <section className="calendar-page">
      <Navbar />
      <div className="MainConteiner">
        <div className="calendar-container">
          <div className="calendar-side">
            <h2>Agendar una cita psicológica</h2>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              inline
              filterDate={(date) => isWeekday(date) && date >= new Date()}
            />
          </div>
          <div className="time-side">
            <h3>Selecciona una hora:</h3>
            <div className="time-picker">
              {generateTimes().map((time) => (
                <button
                  key={time}
                  disabled={isTimeBooked(time)}
                  onClick={() => handleTimeChange(time)}
                  className={
                    selectedTime && selectedTime.getTime() === time.getTime()
                      ? "selected"
                      : ""
                  }
                >
                  {time.toTimeString().slice(0, 5)}
                </button>
              ))}
            </div>
            {selectedDate && selectedTime && (
              <>
                <div className="id-denuncia-checkbox">
                  <label>
                    <input
                      type="checkbox"
                      checked={showIdDenuncia}
                      onChange={(e) => setShowIdDenuncia(e.target.checked)}
                    />
                    Tengo un id de Denuncia <br />
                  </label>
                </div>
                {showIdDenuncia && (
                  <div>
                    <input
                      type="text"
                      placeholder="id Denuncia"
                      value={idDenuncia}
                      onChange={(e) => setIdDenuncia(e.target.value)}
                      required
                    />
                  </div>
                )}
                <div className="booking-summary">
                  <p>
                    Has seleccionado: {formatDate(selectedDate.toISOString())} a las{" "}
                    {formatTime(selectedTime.toTimeString())}
                  </p>
                  <button onClick={handleBooking}>Confirmar cita</button>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="citas-container">
          <h2>Citas Generadas</h2>
          {citas.length > 0 ? (
            <table className="citas-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tipo</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>ID Denuncia</th>
                </tr>
              </thead>
              <tbody>
                {citas.map((cita) => (
                  <tr key={cita.idCita}>
                    <td>{cita.idCita}</td>
                    <td>{cita.tipo}</td>
                    <td>{formatDate(cita.fecha)}</td>
                    <td>{formatTime(cita.horario)}</td>
                    <td>{cita.idDenuncia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No hay citas registradas.</p>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Calendar;
