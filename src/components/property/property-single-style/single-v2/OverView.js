import listings from "@/data/listings";
import React from "react";

const OverView = ({ id }) => {
  const data = listings.find((elm) => elm.id === Number(id)) || listings[0];

  const overviewData = [
    {
      icon: "flaticon-bed",
      label: "Yatak Odası",
      value: data.bed || "Bilinmiyor",
    },
    {
      icon: "flaticon-shower",
      label: "Banyo",
      value: data.bath || "Bilinmiyor",
    },
    {
      icon: "flaticon-event",
      label: "Yapım Yılı",
      value: data.yearBuilding || "Bilinmiyor",
    },
    {
      icon: "flaticon-garage",
      label: "Garaj",
      value: data.garage || "Bilgi Yok", // Veride yoksa "Bilgi Yok" yazacak
    },
    {
      icon: "flaticon-expand",
      label: "Metrekare",
      value: data.sqft ? `${data.sqft} m²` : "Bilgi Yok",
    },
    {
      icon: "flaticon-home-1",
      label: "Mülk Türü",
      value: data.propertyType || "Bilinmiyor",
    },
  ];

  return (
    <>
      {overviewData.map((item, index) => (
        <div key={index} className="col-sm-6 col-md-4 col-xl-2">
          <div className="overview-element mb30 d-flex align-items-center">
            <span className={`icon ${item.icon}`} />
            <div className="ml15">
              <h6 className="mb-0">{item.label}</h6>
              <p className="text mb-0 fz15">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OverView;
