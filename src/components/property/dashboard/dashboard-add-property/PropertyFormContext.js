"use client";
import React, { createContext, useContext, useState } from 'react';

const PropertyFormContext = createContext();

export const PropertyFormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    // Basic Info
    image: "",
    title: "",
    name: "",
    description: "",
    propertyType: "",
    featured: false,
    tags: [],

    // Location
    city: "",
    location: "",
    lat: 0,
    long: 0,

    // Property Details
    bed: "",
    bath: "",
    sqft: 0,
    yearBuilding: 0,
    rooms: "",
    garage: "",
    garageSize: "",
    propertyStatus: "", // Kiralık/Satılık

    // Media
    images: [],
    videoUrl: "",
    virtualTourUrl: "",

    // Features & Amenities
    features: [],
    amenities: [],
    outdoorFeatures: [],
    utilities: [],
    otherFeatures: [],

    // Pricing & Rules
    price: "",
    dailyRate: 0,
    forRent: false,
    rules: [],
    minStay: 0,
    maxStay: 0,

    // Additional Notes
    notes: {
      checkIn: "",
      checkOut: "",
      damageDeposit: "",
      cleaningFee: "",
      poolDimensions: {
        width: "",
        length: "",
        depth: "",
      },
      poolMaintenance: "",
      gardenMaintenance: "",
    },

    // Contact Information
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    whatsapp: "",

    // SEO & Meta
    metaTitle: "",
    metaDescription: "",
    keywords: [],

    // System Fields
    status: "active",
    createdBy: "",
    updatedBy: "",
  });

  const updateFormData = (newData) => {
    setFormData(prev => {
      const updatedData = {
        ...prev,
        ...newData
      };
      
      // Log every time data is updated
      console.log("Form Data Updated:", updatedData);
      
      return updatedData;
    });
  };

  const validateFormData = () => {
    const requiredFields = [
      // Basic Info
      'image', 'title', 'name', 'description', 'propertyType',
      // Location
      'city', 'location', 'lat', 'long',
      // Property Details
      'bed', 'bath', 'sqft', 'yearBuilding', 'rooms', 'propertyStatus',
      // Pricing
      'price', 'dailyRate'
    ];

    const missingFields = requiredFields.filter(field => !formData[field]);

    // Check required notes fields
    if (!formData.notes.checkIn || 
        !formData.notes.checkOut || 
        !formData.notes.damageDeposit) {
      missingFields.push('required notes fields');
    }

    // Check required pool dimensions
    if (!formData.notes.poolDimensions.width || 
        !formData.notes.poolDimensions.length || 
        !formData.notes.poolDimensions.depth) {
      missingFields.push('pool dimensions');
    }

    return {
      isValid: missingFields.length === 0,
      missingFields
    };
  };

  const resetForm = () => {
    setFormData({
      // Reset to initial state with all default values
      image: "",
      title: "",
      name: "",
      description: "",
      propertyType: "",
      featured: false,
      tags: [],
      // ... (rest of the initial state)
      status: "active",
    });
  };

  return (
    <PropertyFormContext.Provider value={{ 
      formData, 
      updateFormData, 
      validateFormData,
      resetForm
    }}>
      {children}
    </PropertyFormContext.Provider>
  );
};

export const usePropertyForm = () => {
  const context = useContext(PropertyFormContext);
  if (!context) {
    throw new Error('usePropertyForm must be used within a PropertyFormProvider');
  }
  return context;
};