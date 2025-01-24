"use client"
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./customCalendar.css"; // Custom styles for calendar
import listings from "@/data/listings";

const BookingCalendar = ({ id }) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
 
  // Debug logs
  console.log('Original ID:', id); // See what ID we receive
  const numericId = !isNaN(id) ? parseInt(id, 10) : 1; // Default to first villa if id is not a number
  console.log('Numeric ID:', numericId); // See converted ID
  
  const villaData = listings.find((item) => item.id === numericId);
  console.log('Found Villa:', villaData); // See if we found the villa
  console.log('All Listings:', listings); // See all available listings
  
  const dailyRate = villaData ? parseInt(villaData.price.replace(/[^\d]/g, "")) : 0;
  console.log('Calculated Daily Rate:', dailyRate); // See final rate

  const handleDateClick = (date) => {
    if (!checkInDate || (checkInDate && checkOutDate)) {
      setCheckInDate(date);
      setCheckOutDate(null);
      setTotalPrice(0);
      setShowSummary(false);
    } else {
      setCheckOutDate(date > checkInDate ? date : checkInDate);
      setShowSummary(false);
    }
  };

  const calculatePrice = () => {
    if (checkInDate && checkOutDate) {
      const days = Math.ceil((checkOutDate - checkInDate) / (1000 * 3600 * 24));
      console.log('Number of days:', days); // Debug log
      
      // Calculate base price for adults
      const adultPrice = days * dailyRate * adults;
      // Calculate price for children (50% of adult rate)
      const childrenPrice = days * (dailyRate / 2) * children;
      // Total price
      const price = adultPrice + childrenPrice;
      
      console.log('Adult Price:', adultPrice); // Debug log
      console.log('Children Price:', childrenPrice); // Debug log
      console.log('Total Price:', price); // Debug log
      
      setTotalPrice(price > 0 ? price : 0);
      setShowSummary(true);
    }
  };

  const isDateInRange = (date) => {
    if (!checkInDate || !checkOutDate) return false;
    const time = date.getTime();
    return time >= checkInDate.getTime() && time <= checkOutDate.getTime();
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month" && checkInDate && checkOutDate) { // Simplified condition
      const isWithinRange = isDateInRange(date);
      const isStart = checkInDate.toDateString() === date.toDateString();
      const isEnd = checkOutDate.toDateString() === date.toDateString();

      if (isWithinRange) {
        if (isStart) return "start-date";
        if (isEnd) return "end-date";
        return "within-range";
      }
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    alert("Rezervasyon onaylandı! (Simülasyon)");
  };
  
  return (
    <div className="booking-card">
      <form onSubmit={handleSubmit}>
        <div className="calendar-container mb-4">
          <Calendar
            onClickDay={handleDateClick}
            tileClassName={tileClassName} 
            minDate={new Date()}
            className="custom-calendar"
          />
        </div>

        <div className="guest-selectors mb-4">
          <div className="selector">
            <label className="fw600 ff-heading mb-2">Yetişkinler</label>
            <div className="d-flex align-items-center">
              <button
                type="button"
                onClick={() => setAdults(Math.max(1, adults - 1))}
                className="btn btn-dark"
              >
                -
              </button>
              <span className="mx-3">{adults}</span>
              <button
                type="button"
                onClick={() => setAdults(adults + 1)}
                className="btn btn-dark"
              >
                +
              </button>
            </div>
          </div>
          <div className="selector">
            <label className="fw600 ff-heading mb-2">Çocuklar</label>
            <div className="d-flex align-items-center">
              <button
                type="button"
                onClick={() => setChildren(Math.max(0, children - 1))}
                className="btn btn-dark"
              >
                -
              </button>
              <span className="mx-3">{children}</span>
              <button
                type="button"
                onClick={() => setChildren(children + 1)}
                className="btn btn-dark"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="ud-btn btn-primary w-100 mb-3"
          onClick={calculatePrice}
          disabled={!checkInDate || !checkOutDate}
        >
          Fiyatı Hesapla
        </button>

        {/* Booking Summary */}
        {showSummary && (
          <div className="booking-summary">
            <h4>Rezervasyon Özeti</h4>
            <p>Giriş Tarihi: {checkInDate.toLocaleDateString('tr-TR')}</p>
            <p>Çıkış Tarihi: {checkOutDate.toLocaleDateString('tr-TR')}</p>
            <p>Misafirler: {adults} Yetişkin, {children} Çocuk</p>
            <p>
              Günlük Fiyat:{" "}
              <strong>{dailyRate.toLocaleString("tr-TR", { style: "currency", currency: "TRY" })}</strong>
            </p>
            <p>
              Toplam Gün: {checkInDate && checkOutDate ? 
                Math.ceil((checkOutDate - checkInDate) / (1000 * 3600 * 24)) : 0}
            </p>
            <p>
              Toplam:{" "}
              <strong>{totalPrice.toLocaleString("tr-TR", { style: "currency", currency: "TRY" })}</strong>
            </p>
            <button type="submit" className="ud-btn btn-success w-100">
              Rezervasyonu Onayla
            </button>
          </div>
        )}
      </form>

      {/* ... (styles remain the same) */}
    </div>
  );
};

export default BookingCalendar;