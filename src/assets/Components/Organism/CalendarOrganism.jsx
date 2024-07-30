import React, { useState } from "react";
import Navbar from "../Molecule/Navbar";
import Footer from "../Molecule/Footer";
import DatePickerMolecule from "../Molecule/DatePickerMolecule";
import TimePickerMolecule from "../Molecule/TimePickerMolecule";
import BookingFormMolecule from "../Molecule/BookingFormMolecule";
import { addCita } from "../services/citas";
import "../Styles/templates/calendar.css";
const CalendarOrganism = () => {
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
        fecha: selectedDate.toISOString().split("T")[0],
        horario: selectedTime.toTimeString().split(" ")[0],
        idDenuncia: showIdDenuncia ? idDenuncia : null,
      };

      try {
        await addCita(newBooking);
        setBookings([...bookings, newBooking]);
        setSelectedDate(new Date());
        setSelectedTime(null);
        setTipoCita("");
        setShowIdDenuncia(false);
        setIdDenuncia("");

        alert(
          `Cita confirmada:\nTipo de Cita: ${newBooking.tipo}\nFecha: ${
            newBooking.fecha
          }\nHorario: ${newBooking.horario}\n${
            newBooking.idDenuncia
              ? `ID de Denuncia: ${newBooking.idDenuncia}`
              : ""
          }`
        );
      } catch (error) {
        alert("Error al agregar la cita");
      }
    } else {
      alert("Por favor, completa todos los campos obligatorios.");
    }
  };

  const isTimeBooked = (time) => {
    return bookings.some(
      (booking) =>
        booking.fecha === selectedDate.toISOString().split("T")[0] &&
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
      <div className="MainConteiner">
        <Navbar />
        <div className="calendar-container">
          <div className="calendar-side">
            <h2>Agendar una cita</h2>
            <DatePickerMolecule
              selected={selectedDate}
              onChange={handleDateChange}
            />
          </div>
          <div className="time-side">
            <h3>Selecciona una hora:</h3>
            <TimePickerMolecule
              times={generateTimes()}
              selectedTime={selectedTime}
              isTimeBooked={isTimeBooked}
              handleTimeChange={handleTimeChange}
            />
            {selectedDate && selectedTime && (
              <BookingFormMolecule
                tipoCita={tipoCita}
                setTipoCita={setTipoCita}
                showIdDenuncia={showIdDenuncia}
                setShowIdDenuncia={setShowIdDenuncia}
                idDenuncia={idDenuncia}
                setIdDenuncia={setIdDenuncia}
                handleBooking={handleBooking}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CalendarOrganism;
