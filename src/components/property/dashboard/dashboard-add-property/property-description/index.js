"use client";
import Select from "react-select";
import { usePropertyForm } from '../PropertyFormContext';

const PropertyDescription = () => {
  const { formData, updateFormData } = usePropertyForm();

  const handleInputChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
    // Log the updated data after each change
    console.log("Current Step Data:", {
      title: formData.title,
      description: formData.description,
      tags: formData.tags,
      status: formData.status,
      city: formData.city,
      location: formData.location
    });
  };

  const handleSelectChange = (value, action) => {
    updateFormData({ [action.name]: value });
    // Log after select changes too
    console.log(`Updated ${action.name}:`, value);
  };

  const villaCategories = [
    { value: "muhafazakar", label: "Muhafazakar Villalar" },
    { value: "isitmali-havuzlu", label: "Isıtmalı Havuzlu Villalar" },
    { value: "denize-yakin", label: "Denize Yakın Villalar" },
    { value: "jakuzili", label: "Jakuzili Villalar" },
    { value: "ekonomik", label: "Ekonomik Villalar" },
    { value: "lux", label: "Lüks Villalar" },
    { value: "populer", label: "Popüler Villalar" },
  ];

  const listedIn = [
    { value: "active", label: "Aktif" },
    { value: "passive", label: "Pasif" },
    { value: "reserved", label: "Rezerve" },
  ];

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

  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Villa Adı</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Villa Adı"
              value={formData.title || ''}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Açıklama
            </label>
            <textarea
              name="description"
              className="form-control"
              cols={30}
              rows={5}
              placeholder="Villa hakkında detaylı açıklama"
              value={formData.description || ''}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Villa Kategorisi
            </label>
            <div className="location-area">
              <Select
                value={formData.tags}
                name="tags"
                options={villaCategories}
                onChange={handleSelectChange}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                isMulti
              />
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Durum
            </label>
            <div className="location-area">
              <Select
                defaultValue={[listedIn[0]]}
                name="status"
                options={listedIn}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
              />
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Şehir
            </label>
            <div className="location-area">
              <Select
                defaultValue={[cities[0]]}
                name="city"
                options={cities}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
              />
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Konum
            </label>
            <input
              type="text"
              name="location"
              className="form-control"
              placeholder="Örn: Esenköy, Fethiye"
              value={formData.location || ''}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="col-12">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              console.log("Step 1 Complete Data:", {
                title: formData.title,
                description: formData.description,
                tags: formData.tags,
                status: formData.status,
                city: formData.city,
                location: formData.location
              });
              // You can also add logic here to switch to the next tab
              document.getElementById('nav-item2-tab').click();
            }}
          >
            Sonraki Adım
          </button>
        </div>
      </div>
    </form>
  );
};

export default PropertyDescription;
