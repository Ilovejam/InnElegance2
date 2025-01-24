"use client";
import React, { useState } from "react";
import UploadPhotoGallery from "./UploadPhotoGallery";

const UploadMedia = () => {
  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null);

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMainImage(file);
      setMainImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
      <h4 className="title fz17 mb30">Villa Fotoğrafları</h4>
      <form className="form-style1">
        <div className="row">
          <div className="col-lg-12">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">
                Ana Fotoğraf
              </label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={handleMainImageChange}
                required
              />
              {mainImagePreview && (
                <div className="preview-image mt10">
                  <img 
                    src={mainImagePreview} 
                    alt="Ana fotoğraf önizleme" 
                    style={{ maxWidth: '200px', height: 'auto' }}
                  />
                </div>
              )}
              <small className="text-muted">
                Bu fotoğraf villanın ana görseli olarak kullanılacaktır.
              </small>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">
                Galeri Fotoğrafları
              </label>
              <UploadPhotoGallery />
              <small className="text-muted">
                Villanın detaylı fotoğraflarını buraya yükleyebilirsiniz. Birden fazla fotoğraf seçebilirsiniz.
              </small>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadMedia;
