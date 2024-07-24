import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../Molecule/Navbar';
import Footer from '../Molecule/Footer';
import { addCita } from '../../Components/services/citas';
import '../Styles/templates/calendar.css';

function LegalCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [showIdDenuncia, setShowIdDenuncia] = useState(false);
  const [idDenuncia, setIdDenuncia] = useState('');

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
        tipo: 'juridica',
        fecha: selectedDate.toISOString().split('T')[0],
        horario: selectedTime.toTimeString().split(' ')[0],
        idDenuncia: showIdDenuncia ? idDenuncia : null,
      };

      try {
        const response = await addCita(newBooking);
        setBookings([...bookings, newBooking]);
        setSelectedDate(new Date());
        setSelectedTime(null);
        setShowIdDenuncia(false);
        setIdDenuncia('');

        alert(`Cita jurídica confirmada:
Fecha: ${newBooking.fecha}
Horario: ${newBooking.horario}
${newBooking.idDenuncia ? `ID de Denuncia: ${newBooking.idDenuncia}` : ''}`);
      } catch (error) {
        alert('Error al agregar la cita');
      }
    } else {
      alert('Por favor, completa todos los campos obligatorios.');
    }
  };

  const isTimeBooked = (time) => {
    return bookings.some(
      (booking) =>
        booking.fecha === selectedDate.toISOString().split('T')[0] &&
        booking.horario === time.toTimeString().split(' ')[0]
    );
  };
// horario
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

  return (
    // Contenedor principal
    <section className="calendar-page">
      <div className="navbar">
        <Navbar />
      </div>
      {/* Contenedor cita juridica */}
      <div className="calendar-content">
        <h2>Agendar una cita jurídica</h2>
        <div className="MainContainer">
          <div className="calendar-container">
            <div className="calendar-side">
            {/* Calendario */}
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                inline
              />
            </div>
            <div className="time-side">
            {/* Horario */}
              <h3>Selecciona una hora:</h3>
              <div className="time-picker">
                {generateTimes().map((time) => (
                  <button
                    key={time}
                    disabled={isTimeBooked(time)}
                    onClick={() => handleTimeChange(time)}
                    className={
                      selectedTime && selectedTime.getTime() === time.getTime()
                        ? 'selected'
                        : ''
                    }
                  >
                    {time.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </button>
                ))}
              </div>
              {selectedDate && selectedTime && (
                <>
                  <div className="booking-summary">
                  {/* Dia seleccionado */}
                    <p>
                      Has seleccionado: {selectedDate.toLocaleDateString()} a
                      las{' '}
                      {selectedTime.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                    {/* Aceptar */}
                    <button onClick={handleBooking}>Confirmar cita</button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default LegalCalendar;
