import React from "react";


const PricingAndRules = () => {
  return (
    <div className="row">
      {/* Fiyatlandırma */}
      <div className="col-sm-6 col-xl-4">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">
            Günlük Fiyat (₺)
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Örn: 1000"
            required
          />
        </div>
      </div>

      {/* Depozito */}
      <div className="col-sm-6 col-xl-4">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">
            Depozito Tutarı
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Örn: 3000 TL (çıkışta iade edilir)"
            required
          />
        </div>
      </div>

      {/* Giriş Saati */}
      <div className="col-sm-6 col-xl-4">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">
            Giriş Saati
          </label>
          <input
            type="time"
            className="form-control"
            defaultValue="16:00"
            required
          />
        </div>
      </div>

      {/* Çıkış Saati */}
      <div className="col-sm-6 col-xl-4">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">
            Çıkış Saati
          </label>
          <input
            type="time"
            className="form-control"
            defaultValue="10:00"
            required
          />
        </div>
      </div>

      {/* Havuz Ölçüleri */}
      <div className="col-lg-12">
        <h5 className="mb20">Havuz Ölçüleri</h5>
      </div>

      <div className="col-sm-6 col-xl-4">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">
            Genişlik (metre)
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Örn: 3.5 m"
            required
          />
        </div>
      </div>

      <div className="col-sm-6 col-xl-4">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">
            Uzunluk (metre)
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Örn: 8 m"
            required
          />
        </div>
      </div>

      <div className="col-sm-6 col-xl-4">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">
            Derinlik (cm)
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Örn: 155 cm"
            required
          />
        </div>
      </div>

      {/* Villa Kuralları */}
      <div className="col-lg-12">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">
            Villa Kuralları
          </label>
          <div className="checkbox-style1">
            <label className="custom_checkbox">
              Sigara içilmez
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="checkbox-style1">
            <label className="custom_checkbox">
              Evcil hayvan giremez
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="checkbox-style1">
            <label className="custom_checkbox">
              Parti düzenlenemez
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="checkbox-style1">
            <label className="custom_checkbox">
              Çocuklara uygun (2-12 yaş)
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="checkbox-style1">
            <label className="custom_checkbox">
              Bebeklere uygun (0-2 yaş)
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingAndRules;