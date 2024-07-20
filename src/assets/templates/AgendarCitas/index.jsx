import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../../orgams/Navbar";
import Footer from "../../orgams/Footer";
import "./calendar.css"; // Import the CSS file

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookings, setBookings] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      const newBooking = {
        date: selectedDate.toDateString(),
        time: selectedTime.toTimeString().split(" ")[0],
      };
      setBookings([...bookings, newBooking]);
      alert(
        `Reserva confirmada para el ${newBooking.date} a las ${newBooking.time}`
      );
      setSelectedDate(new Date());
      setSelectedTime(null);
    }
  };

  const isTimeBooked = (time) => {
    return bookings.some(
      (booking) =>
        booking.date === selectedDate.toDateString() &&
        booking.time === time.toTimeString().split(" ")[0]
    );
  };

  const generateTimes = () => {
    const times = [];
    const start = new Date();
    start.setHours(9, 0, 0, 0); // Start at 9:00 AM
    const end = new Date();
    end.setHours(12 , 0, 0, 0); // End at 5:00 PM

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
                  {time.toTimeString().split(" ")[0]}
                </button>
              ))}
            </div>
            {selectedDate && selectedTime && (
              <div className="booking-summary">
                <p>
                  Has seleccionado: {selectedDate.toLocaleDateString()} a las{" "}
                  {selectedTime.toTimeString().split(" ")[0]}
                </p>
                <button onClick={handleBooking}>Confirmar Reserva</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Calendar;
