import React from "react";
import listings from "@/data/listings"; // Listings verisi

const ProperytyDescriptions = ({ id }) => {
  // ID'yi düzgün bir sayıya dönüştürme
  const numericId = parseInt(id, 10); // String ise sayıya dönüştür
  const data = listings.find((item) => item.id === numericId); // ID'ye göre veri bul

  // Eğer data bulunamazsa, bir hata mesajı döndür
  if (!data) {
    return <p className="text mb10">Bu villaya ait veri bulunamadı.</p>;
  }

  return (
    <>
      <p className="text mb10">
        {data.description || "Açıklama mevcut değil."}
      </p>
      <div className="agent-single-accordion">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button p-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Daha Fazla Detay
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body p-0">
                <p className="text">
                  {`Öne çıkan özellikler: ${data.features?.join(", ") || "Bilinmiyor"}.`}
                </p>
                <p className="text">
                  Havuz Ölçüleri: {data.notes?.poolDimensions?.width || "-"} x{" "}
                  {data.notes?.poolDimensions?.length || "-"} x{" "}
                  {data.notes?.poolDimensions?.depth || "-"}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProperytyDescriptions;
