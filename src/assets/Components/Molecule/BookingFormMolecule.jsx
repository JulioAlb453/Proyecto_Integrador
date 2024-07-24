import React from 'react';
import Button from '../Atoms/Button';

const TimePickerMolecule = ({ times, selectedTime, isTimeBooked, handleTimeChange }) => {
  return (
    <div className="time-picker">
      {times.map((time) => (
        <Button
          key={time.getTime()} // Es mejor usar getTime() para claves únicas
          onClick={() => handleTimeChange(time)}
          disabled={isTimeBooked(time)}
          className={selectedTime && selectedTime.getTime() === time.getTime() ? 'selected' : ''}
        >
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Button>
      ))}
    </div>
  );
};

export default TimePickerMolecule;
