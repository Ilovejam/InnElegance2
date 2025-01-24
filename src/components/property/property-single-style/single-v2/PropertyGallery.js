"use client";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import listings from "@/data/listings";
import { useState } from "react";

const PropertyGallery = ({ id }) => {
  const data = listings.find((elm) => elm.id == id) || listings[0]; // ID ile veriyi çekiyoruz
  const maxThumbnails = 4; // Görüntülemek istediğiniz maksimum thumbnail sayısı

  const [images, setImages] = useState(data.images);

  const handleImageError = (index) => {
    const updatedImages = [...images];
    updatedImages[index] = "/images/default-image.jpg"; // Varsayılan resim
    setImages(updatedImages);
  };

  return (
    <Gallery>
      <div className="gallery-container">
        {/* Ana Görsel */}
        <div className="main-image">
          <Item
            original={images[0]}
            thumbnail={images[0]}
            width={1200}
            height={800}
          >
            {({ ref, open }) => (
              <Image
                src={images[0]}
                width={1200}
                height={800}
                ref={ref}
                onClick={open}
                alt="Ana Görsel"
                className="image rounded"
                onError={() => handleImageError(0)}
              />
            )}
          </Item>
        </div>

        {/* Thumbnail Görseller */}
        <div className="thumbnails">
          {images.slice(1, maxThumbnails + 1).map((image, index) => (
            <div className="thumbnail" key={index}>
              <Item
                original={image}
                thumbnail={image}
                width={800}
                height={600}
              >
                {({ ref, open }) => (
                  <Image
                    src={image}
                    width={300}
                    height={200}
                    ref={ref}
                    onClick={open}
                    alt={`Ek Görsel ${index + 1}`}
                    className="image rounded"
                    onError={() => handleImageError(index + 1)}
                  />
                )}
              </Item>
            </div>
          ))}

          {/* "+ Daha Fazla" */}
          {images.length > maxThumbnails + 1 && (
            <div className="thumbnail more">
              <Item
                original={images.slice(maxThumbnails + 1).join(", ")}
                thumbnail={images[maxThumbnails]}
                width={1200}
                height={800}
              >
                {({ ref, open }) => (
                  <div ref={ref} onClick={open} className="more-text">
                    + {images.length - maxThumbnails} Fotoğraf
                  </div>
                )}
              </Item>
            </div>
          )}
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .gallery-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .main-image {
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
          position: relative;
          border-radius: 16px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .image:hover {
          transform: scale(1.05);
        }

        .thumbnails {
          display: flex;
          gap: 12px;
          justify-content: space-between;
        }

        .thumbnail {
          flex: 1;
          aspect-ratio: 4/3;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          position: relative;
          background-color: #f9f9f9;
        }

        .thumbnail.more {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f0f0f0;
          font-weight: bold;
          color: #555;
          cursor: pointer;
        }

        .thumbnail.more:hover {
          background-color: #e0e0e0;
        }

        .more-text {
          font-size: 16px;
        }
      `}</style>
    </Gallery>
  );
};

export default PropertyGallery;
