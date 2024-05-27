import React, { useState, useEffect } from "react";
import ResHeader from "../../components/ResponsiveMemu/Header";
import { Footer } from "../../components/Layout";
import DatePicker from "../../components/DatePicker";
import TimeSlots from "../../components/TimeSlots";
import axios from "axios";
import { Button, Modal } from 'antd';
import { useDispatch } from "react-redux";
import { bookingSlots } from "../../actions/customer";
import toast from "../../components/common/toast";



const Schedule = () => {
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookedSlots, setBookedSlots] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const timeSlots = [
    "10:00AM",
    "10:15AM",
    "10:30AM",
    "10:45AM",
    "11:00AM",
    "11:15AM",
    "11:30AM",
    "11:45AM",
    "12:00PM",
    "12:15PM",
    "12:30PM",
    "12:45AM",
    "1:00PM",
    "1:15PM",
    "1:30PM",
    "1:45PM",
    "3:00PM",
    "3:15PM",
    "3:30PM",
    "3:45PM",
    "4:00PM",
    "4:15PM",
    "4:30PM",
    "4:45PM",
    "5:00PM",
    "5:15PM",
    "5:30PM",
    "5:45PM",
    "6:00PM",
    "6:15PM",
    "6:30PM",
    "6:45PM",
  ];

 
  const handleTimeSlotSelection = (time) => {
    setSelectedTime(time);
    setIsModalVisible(true);
  };
  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const handleBooking = ()=>{
    if (name === "" || phone === "" || email === "") {
      toast.error("Please enter a valid input");
      return false;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    const parsedDate = new Date(selectedDate);
    let bookData ={
      name : name,
      email: email,
      phone: phone,
      date: parsedDate,
      time: selectedTime
    }
    dispatch(bookingSlots(bookData));
    toast.success("Booking successfully");
  }



  return (
    <>
      <ResHeader />
      <h1 className="text-center mt-5">30 Minute Accounting Consultation</h1>
      <p className="text-center mt-3">
        One of our accounting professionals will reach out to you by phone for
        this call.
      </p>
      <div className="calender">
        <DatePicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      {selectedDate && (
        <div>
          <h2 className="text-center mt-5">Available Time Slots</h2>
          <TimeSlots
            timeSlots={timeSlots}
            bookedSlots={bookedSlots}
            selectTimeSlot={handleTimeSlotSelection}
          />
        </div>
      )}

      <Modal
        title="Book Appointment"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        className="booking-modal"
      >
        <div  className="booking-from">
          <p>Selected Date: {selectedDate && selectedDate.toDateString()}</p>
          <p>Selected Time: {selectedTime}</p>

          <div className="input">
            <input
              type="text"
              className="input-field"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="input-label">Full name</label>
          </div>
          <div className="input">
            <input
              type="text"
              className="input-field"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="input-label">Email</label>
          </div>
          <div className="input">
            <input
              type="text"
              className="input-field"
              name="phone"
              value={phone}
              onChange={(e) => {
                // Validate input using regex and update state
                const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                setPhone(value);
              }}
              pattern="[0-9]*"
              required
            />
            <label className="input-label">Phone</label>
          </div>
          <button className="action-button" onClick={handleBooking}>Book Appointment</button>
        </div>
      </Modal>

      <Footer />
    </>
  );
};

export default Schedule;
