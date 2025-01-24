"use client";
import React, { useState } from "react";

const initialAmenitiesData = {
  column1: [
    { label: "Özel Havuz", defaultChecked: false },
    { label: "Klima", defaultChecked: true }, 
    { label: "Deniz Manzarası", defaultChecked: false },
    { label: "Bahçe", defaultChecked: true },
    { label: "Barbekü", defaultChecked: false },
    { label: "Mikrodalga", defaultChecked: false },
    { label: "Bulaşık Makinesi", defaultChecked: false },
  ],
  column2: [
    { label: "TV", defaultChecked: true },
    { label: "Çamaşır Makinesi", defaultChecked: true },
    { label: "Dış Duş", defaultChecked: false },
    { label: "Kurutma Makinesi", defaultChecked: false },
    { label: "Spor Salonu", defaultChecked: false },
    { label: "Dağ Manzarası", defaultChecked: false },
    { label: "Özel Otopark", defaultChecked: true },
  ],
  column3: [
    { label: "WiFi", defaultChecked: true },
    { label: "Şömine", defaultChecked: false },
    { label: "Güvenlik Kamerası", defaultChecked: false },
    { label: "Buzdolabı", defaultChecked: true },
    { label: "Jakuzi", defaultChecked: false },
    { label: "Çamaşırhane", defaultChecked: false },
    { label: "Sauna", defaultChecked: false },
  ],
  column4: [
    { label: "Oyun Odası", defaultChecked: false },
    { label: "Kapalı Otopark", defaultChecked: false },
    { label: "Güvenlik", defaultChecked: true },
    { label: "Jeneratör", defaultChecked: false },
    { label: "Asansör", defaultChecked: false },
    { label: "Isıtmalı Havuz", defaultChecked: false },
    { label: "Şezlong", defaultChecked: true },
  ]
};

const Amenities = () => {
  const [amenitiesData, setAmenitiesData] = useState(initialAmenitiesData);
  const [newAmenity, setNewAmenity] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("column1");

  const handleAddAmenity = (e) => {
    e.preventDefault();
    if (newAmenity.trim()) {
      setAmenitiesData(prev => ({
        ...prev,
        [selectedColumn]: [
          ...prev[selectedColumn],
          { label: newAmenity.trim(), defaultChecked: false }
        ]
      }));
      setNewAmenity("");
    }
  };

  return (
    <div className="row">
      <div className="col-12 mb20">
        <h4 className="title fz15">Villa Özellikleri</h4>
        <p>Villada bulunan özellikleri işaretleyiniz</p>
      </div>

      {/* Add New Amenity Form */}
      <div className="col-12 mb20">
        <form onSubmit={handleAddAmenity} className="d-flex gap-3">
          <div className="flex-grow-1">
            <input
              type="text"
              className="form-control"
              placeholder="Yeni özellik ekle"
              value={newAmenity}
              onChange={(e) => setNewAmenity(e.target.value)}
            />
          </div>
          
          <div>
            <button 
              type="submit" 
              className="ud-btn btn-thm"
              disabled={!newAmenity.trim()}
            >
              Ekle
            </button>
          </div>
        </form>
      </div>
      
      {/* Existing Amenities */}
      {Object.keys(amenitiesData).map((columnKey, index) => (
        <div key={index} className="col-sm-6 col-lg-3">
          <div className="checkbox-style1">
            {amenitiesData[columnKey].map((amenity, amenityIndex) => (
              <label key={amenityIndex} className="custom_checkbox">
                {amenity.label}
                <input
                  type="checkbox"
                  defaultChecked={amenity.defaultChecked}
                  name="amenities"
                  value={amenity.label}
                />
                <span className="checkmark" />
              </label>
            ))}
          </div>
        </div>
      ))}

      {/* Submit Button */}
      <div className="col-12 mt20">
        <button 
          type="submit" 
          className="ud-btn btn-thm"
          onClick={() => {
            // Get all checked amenities
            const checkedAmenities = document.querySelectorAll('input[name="amenities"]:checked');
            const selectedAmenities = Array.from(checkedAmenities).map(input => input.value);
            console.log('Selected Amenities:', selectedAmenities);
            // Here you can handle the submission
          }}
        >
          Özellikleri Kaydet
        </button>
      </div>
    </div>
  );
};

export default Amenities;
