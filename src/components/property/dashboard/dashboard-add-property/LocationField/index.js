"use client";
import React, { useState } from "react";
import Select from "react-select";
import Map from "./Map";

const LocationField = () => {
  const [coordinates, setCoordinates] = useState({ lat: 36.6514, lng: 29.1235 });

  const cities = [
    { value: "mugla-fethiye", label: "Muğla - Fethiye" },
    { value: "antalya-kas", label: "Antalya - Kaş" },
    { value: "kas-kalkan", label: "Kaş - Kalkan" },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
          ? "#eb675312"
          : isFocused
          ? "#eb675312"
          : undefined,
      };
    },
  };

  const handleMapClick = (lat, lng) => {
    setCoordinates({ lat, lng });
  };

  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Şehir
            </label>
            <Select
              options={cities}
              styles={customStyles}
              className="select-custom"
              classNamePrefix="select"
              placeholder="Şehir seçiniz"
              required
            />
          </div>
        </div>

        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Tam Adres
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Örn: Esenköy Mahallesi, 123 Sokak, No:45"
              required
            />
          </div>
        </div>

        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Konum
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Örn: Esenköy, Fethiye"
              required
            />
          </div>
        </div>

        <div className="col-sm-12">
          <div className="mb20 mt30">
            <label className="heading-color ff-heading fw600 mb30">
              Haritada Villanın Konumunu İşaretleyin
            </label>
            <Map onMapClick={handleMapClick} />
          </div>
        </div>

        <div className="col-sm-6">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Enlem (Latitude)
            </label>
            <input
              type="number"
              step="any"
              className="form-control"
              value={coordinates.lat}
              onChange={(e) => setCoordinates({ ...coordinates, lat: e.target.value })}
              placeholder="Örn: 36.6514"
              required
            />
          </div>
        </div>

        <div className="col-sm-6">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Boylam (Longitude)
            </label>
            <input
              type="number"
              step="any"
              className="form-control"
              value={coordinates.lng}
              onChange={(e) => setCoordinates({ ...coordinates, lng: e.target.value })}
              placeholder="Örn: 29.1235"
              required
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default LocationField;

