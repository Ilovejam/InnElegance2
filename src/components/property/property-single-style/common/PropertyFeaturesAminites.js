import React from "react";
import listings from "@/data/listings";

const PropertyFeaturesAminites = ({ id }) => {
  // ID'ye göre veri bulma
  const data = listings.find((item) => item.id === Number(id)) || listings[0];

  // Özellikler ve olanaklar
  const featuresAmenitiesData = [
    ...(data.features || []),
    ...(data.amenities || []),
  ];

  // Veriyi 3 sütuna bölme
  const columns = [];
  const columnSize = Math.ceil(featuresAmenitiesData.length / 3);
  for (let i = 0; i < featuresAmenitiesData.length; i += columnSize) {
    columns.push(featuresAmenitiesData.slice(i, i + columnSize));
  }

  return (
    <>
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="col-sm-6 col-md-4">
          <div className="pd-list">
            {column.map((item, index) => (
              <p key={index} className="text mb10">
                <i className="fas fa-circle fz6 align-middle pe-2" />
                {item}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default PropertyFeaturesAminites;
