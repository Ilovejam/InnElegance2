import React from "react";
import listings from "@/data/listings";

const PropertyDetails = ({ id }) => {
  // ID'ye göre veri bulma
  const data = listings.find((item) => item.id === Number(id)) || listings[0];

  // Kolonlar ve veri eşleştirme
  const columns = [
    [
     
      {
        label: "Fiyat",
        value: data.price || "Fiyat bilgisi yok",
      },
      {
        label: "Emlak Boyutu",
        value: data.sqft ? `${data.sqft} m²` : "Boyut bilgisi yok",
      },
      {
        label: "Banyo Sayısı",
        value: data.bath || "Mevcut değil",
      },
      {
        label: "Yatak Odası Sayısı",
        value: data.bed || "Mevcut değil",
      },
    ],
    [
      {
        label: "Garaj",
        value: "2", // Varsayılan değer (Eğer veri eklenirse buradan alabilirsiniz)
      },
      {
        label: "Garaj Boyutu",
        value: "200 m²", // Varsayılan değer (Eğer veri eklenirse buradan alabilirsiniz)
      },
      {
        label: "Yapım Yılı",
        value: data.yearBuilding || "Mevcut değil",
      },
      {
        label: "Emlak Türü",
        value: data.propertyType || "Mevcut değil",
      },
     
    ],
  ];

  return (
    <div className="row">
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className={`col-md-6 col-xl-4${
            columnIndex === 1 ? " offset-xl-2" : ""
          }`}
        >
          {column.map((detail, index) => (
            <div key={index} className="d-flex justify-content-between">
              <div className="pd-list">
                <p className="fw600 mb10 ff-heading dark-color">
                  {detail.label}
                </p>
              </div>
              <div className="pd-list">
                <p className="text mb10">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PropertyDetails;
