import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { addCita } from "../../Components/services/citas"; 
import "./calendar.css"; 

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [tipoCita, setTipoCita] = useState("");
  const [showIdDenuncia, setShowIdDenuncia] = useState(false);
  const [idDenuncia, setIdDenuncia] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); 
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = async () => {
    if (selectedDate && selectedTime && tipoCita) {
      const newBooking = {
        tipo: tipoCita,
        fecha: selectedDate.toISOString().split('T')[0],
        horario: selectedTime.toTimeString().split(' ')[0],
        idDenuncia: showIdDenuncia ? idDenuncia : null,
      };

      try {
        const response = await addCita(newBooking);
        setBookings([...bookings, newBooking]);
        setSelectedDate(new Date());
        setSelectedTime(null);
        setTipoCita("");
        setShowIdDenuncia(false);
        setIdDenuncia("");

        alert(`Cita confirmada:
Tipo de Cita: ${newBooking.tipo}
Fecha: ${newBooking.fecha}
Horario: ${newBooking.horario}
${newBooking.idDenuncia ? `ID de Denuncia: ${newBooking.idDenuncia}` : ''}`);
      } catch (error) {
        alert('Error al agregar la cita');
      }
    } else {
      alert("Por favor, completa todos los campos obligatorios.");
    }
  };

  const isTimeBooked = (time) => {
    return bookings.some(
      (booking) =>
        booking.fecha === selectedDate.toISOString().split('T')[0] &&
        booking.horario === time.toTimeString().split(" ")[0]
    );
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

  return (
    <section>
      <Navbar />
      <div className="MainConteiner">
        <div className="calendar-container">
          <div className="calendar-side">
            <h2>Agendar una cita</h2>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              inline
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
                  {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </button>
              ))}
            </div>
            {selectedDate && selectedTime && (
              <>
                <div>
                  <br />
                  <label>Tipo de Cita:</label><br /><br/>
                  <select
                    value={tipoCita}
                    onChange={(e) => setTipoCita(e.target.value)}
                    required
                  >
                    <option value="">Selecciona un tipo</option>
                    <option value="juridica">Jurídica</option>
                    <option value="psicologica">Psicológica</option>
                  </select>
                </div><br />
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
                    Has seleccionado: {selectedDate.toLocaleDateString()} a las{" "}
                    {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                  <button onClick={handleBooking}>Confirmar cita</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Calendar;
