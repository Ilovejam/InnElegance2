"use client";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import listings from "@/data/listings";
import { useState } from "react";

const PropertyGallery = ({ id }) => {
  const data = listings.find((elm) => elm.id == id) || listings[0]; // ID ile veriyi çekiyoruz
  const maxThumbnails = 2; // Görüntülemek istediğiniz maksimum thumbnail sayısı

  const [images, setImages] = useState(data.images);

  const handleImageError = (index) => {
    // Eğer resim yüklenemiyorsa, varsayılan bir resimle değiştir
    const updatedImages = [...images];
    updatedImages[index] = "/images/default-image.jpg"; // Varsayılan resim URL'sini ayarlayın
    setImages(updatedImages);
  };

  return (
    <Gallery>
      <div className="row">
        {/* Ana Görsel */}
        <div className="col-md-8 mb15">
          <div
            className="sp-img-content"
            style={{
              border: "2px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <div className="popup-img preview-img-1 sp-img">
              <Item
                original={images[0]} // İlk resmi ana görsel olarak kullanıyoruz
                thumbnail={images[0]}
                width={1200}
                height={800}
              >
                {({ ref, open }) => (
                  <Image
                    src={images[0]}
                    width={800}
                    height={500}
                    ref={ref}
                    onClick={open}
                    alt="Ana Görsel"
                    role="button"
                    className="w-100 h-100 cover"
                    onError={() => handleImageError(0)}
                  />
                )}
              </Item>
            </div>
          </div>
        </div>

        {/* Thumbnail Görseller */}
        <div className="col-md-4 d-flex flex-column justify-content-between">
          <div className="row">
            {images.slice(1, maxThumbnails + 1).map((image, index) => (
              <div
                className="col-12 mb10"
                key={index}
                style={{
                  height: "calc((500px - 20px) / 3)", // Soldaki yüksekliğe göre eşit paylaştırılmış
                }}
              >
                <div
                  className="sp-img-content"
                  style={{
                    border: "2px solid #ddd",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className={`popup-img preview-img-${index + 2} sp-img`}
                  >
                    <Item
                      original={image}
                      thumbnail={image}
                      width={800}
                      height={600}
                    >
                      {({ ref, open }) => (
                        <Image
                          width={300}
                          height={200}
                          className="w-100 h-100 cover"
                          ref={ref}
                          onClick={open}
                          role="button"
                          src={image}
                          alt={`Ek Görsel ${index + 1}`}
                          onError={() =>
                            handleImageError(index + 1) // Hata durumunda resim değiştir
                          }
                        />
                      )}
                    </Item>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ek Görseller İçin "+ Daha Fazla" */}
          {images.length > maxThumbnails + 1 && (
            <div
              className="col-12"
              style={{
                height: "calc((500px - 20px) / 3)", // Soldaki yüksekliğe göre eşit
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#f5f5f5",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <Item
                original={images.slice(maxThumbnails + 1).join(", ")} // Ek görsellerin tümünü açar
                thumbnail={images[maxThumbnails]}
                width={1200}
                height={800}
              >
                {({ ref, open }) => (
                  <div ref={ref} onClick={open}>
                    + {images.length - maxThumbnails} Daha Fazla
                  </div>
                )}
              </Item>
            </div>
          )}
        </div>
      </div>
    </Gallery>
  );
};

export default PropertyGallery;
