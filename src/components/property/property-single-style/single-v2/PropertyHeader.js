import listings from "@/data/listings";
import React from "react";

const PropertyHeader = ({ id }) => {
  // ID kontrolü ve varsayılan veri
  const data = listings.find((item) => item.id === Number(id)) || listings[0];

  // Fiyat birimi ve alan hesaplama (boş fiyat kontrolü ile)
  const pricePerSqft = data.price
    ? data.price.includes("₺")
      ? `${(parseInt(data.price.replace(/[^\d]/g, "")) / data.sqft).toFixed(2)} ₺/m²`
      : `${(parseInt(data.price.replace(/[^\d]/g, "")) / data.sqft).toFixed(2)} $/sq ft`
    : "Fiyat bilgisi mevcut değil";

  return (
    <>
      <div className="col-lg-8">
        <div className="single-property-content mb30-md">
          <h2 className="sp-lg-title">{data.title || "Başlık mevcut değil"}</h2>
          <div className="pd-meta mb15 d-md-flex align-items-center">
            <p className="text fz15 mb-0 bdrr1 pr10 bdrrn-sm">
              {data.location || "Konum bilgisi mevcut değil"}
            </p>
          </div>
          <div className="property-meta d-flex align-items-center">
            <a
              className="ff-heading text-thm fz15 bdrr1 pr10 bdrrn-sm"
              href="#"
            >
              <i className="fas fa-circle fz10 pe-2" />
              {data.forRent ? "Kiralık" : "Satılık"}
            </a>
            <a
              className="ff-heading bdrr1 fz15 pr10 ml10 ml0-sm bdrrn-sm"
              href="#"
            >
              <i className="far fa-clock pe-2" />
              {data.yearBuilding
                ? `${new Date().getFullYear() - data.yearBuilding} yıl önce`
                : "Yıl bilgisi mevcut değil"}
            </a>
            <a className="ff-heading ml10 ml0-sm fz15" href="#">
              <i className="flaticon-fullscreen pe-2 align-text-top" />
              {data.sqft ? `${data.sqft} m²` : "Alan bilgisi mevcut değil"}
            </a>
          </div>
        </div>
      </div>
      {/* End .col-lg-8 */}

      <div className="col-lg-4">
        <div className="single-property-content">
          <div className="property-action text-lg-end">
            <div className="d-flex mb20 mb10-md align-items-center justify-content-lg-end">
              <a className="icon mr10" href="#">
                <span className="flaticon-like" />
              </a>
              <a className="icon mr10" href="#">
                <span className="flaticon-new-tab" />
              </a>
              <a className="icon mr10" href="#">
                <span className="flaticon-share-1" />
              </a>
              <a className="icon" href="#">
                <span className="flaticon-printer" />
              </a>
            </div>
            <h3 className="price mb-0">{data.price || "Fiyat bilgisi yok"}</h3>
            <p className="text space fz15">{pricePerSqft}</p>
          </div>
        </div>
      </div>
      {/* End .col-lg-4 */}
    </>
  );
};

export default PropertyHeader;
