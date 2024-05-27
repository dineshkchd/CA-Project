import React from 'react';

const TimeSlots = ({ timeSlots, bookedSlots, selectTimeSlot }) => {
  return (
    <div>
      {timeSlots.map((time, index) => (
        <button
          key={index}
          onClick={() => selectTimeSlot(time)}
          disabled={bookedSlots && bookedSlots.includes(time)}
          style={{
            margin: '5px',
            padding: '10px',
            border: 'none',
            backgroundColor: bookedSlots && bookedSlots.includes(time) ? 'grey' : '#05044D',
            color: 'white',
            cursor: bookedSlots && bookedSlots.includes(time) ? 'not-allowed' : 'pointer',
            borderRadius: '5px',
          }}
        >
          {time}
        </button>
      ))}
    </div>
  );
};

export default TimeSlots;
