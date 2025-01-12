"use client";
import Select from "react-select";

const SelectDropdown = () => {
  const catOptions = [
    { value: "muhafazakar", label: "Muhafazakar Villalar" },
    { value: "isitmali-havuzlu", label: "Isıtmalı Havuzlu Villalar" },
    { value: "denize-yakin", label: "Denize Yakın Villalar" },
    { value: "jakuzili", label: "Jakuzili Villalar" },
    { value: "ekonomik", label: "Ekonomik Villalar" },
    { value: "lux", label: "Lüks Villalar" },
    { value: "populer", label: "Popüler Villalar" },
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
    <>
      <Select
        defaultValue={[catOptions[0]]}
        name="villalar"
        options={catOptions}
        styles={customStyles}
        className="text-start select-borderless"
        classNamePrefix="select"
        required
        isSearchable={false}
      />
    </>
  );
};

export default SelectDropdown;
