'use client'

import React from "react";

const PropertyType = ({filterFunctions}) => {

  const options = [

    { label: "Muhafazakar Villalar" },

    { label: "Isıtmalı Havuzlu Villalar", defaultChecked: true },
    { label: "Denize Yakın Villalar" },
    { label: "Jakuzili Villalar" },
    { label: "Ekonomik Villalar" },
    { label: "Lüks Villalar" },

  ];

  return (
    <>
    <label className="custom_checkbox"  >
          Hepsi
          <input type="checkbox"
          checked={!filterFunctions?.propertyTypes.length}
          onChange={(e=>{filterFunctions?.setPropertyTypes([])})}
  />
          <span className="checkmark" />
        </label>
      {options.map((option, index) => (
        <label className="custom_checkbox" key={index} >
          {option.label}
          <input type="checkbox"
          checked={filterFunctions?.propertyTypes.includes(option.label)}
          onChange={(e=>{filterFunctions.handlepropertyTypes(option.label)})}
  />
          <span className="checkmark" />
        </label>
      ))}
    </>
  );
};

export default PropertyType;
