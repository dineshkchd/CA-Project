// src/components/DatePicker.js
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({ selectedDate, setSelectedDate }) => {
  const isPastDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <ReactDatePicker
      selected={selectedDate}
      onChange={setSelectedDate}
      inline
      filterDate={(date) => !isPastDate(date)}
    />
  );
};

export default DatePicker;
