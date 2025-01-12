"use client";
import Select from "react-select";
import PriceRange from "./PriceRange";
import Bedroom from "./Bedroom";
import Bathroom from "./Bathroom";
import Amenities from "./Amenities";
import { useRouter } from "next/navigation";

const AdvanceFilterModal = () => {
  const router = useRouter();
  const catOptions = [
    { value: "Apartman", label: "Apartman" },
    { value: "Bungalov", label: "Bungalov" },
    { value: "Evler", label: "Evler" },
    { value: "Çatı Katı", label: "Çatı Katı" },
    { value: "Ofis", label: "Ofis" },
    { value: "Müstakil Ev", label: "Müstakil Ev" },
    { value: "Villa", label: "Villa" },
  ];
  const locationOptions = [
    { value: "Tüm Şehirler", label: "Tüm Şehirler" },
    { value: "İstanbul", label: "İstanbul" },
    { value: "Ankara", label: "Ankara" },
    { value: "İzmir", label: "İzmir" },
    { value: "Antalya", label: "Antalya" },
    { value: "Bursa", label: "Bursa" },
    { value: "Muğla", label: "Muğla" },
    { value: "Trabzon", label: "Trabzon" },
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
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header pl30 pr30">
          <h5 className="modal-title" id="exampleModalLabel">
            Daha Fazla Filtre
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Kapat"
          />
        </div>
        {/* End modal-header */}

        <div className="modal-body pb-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="widget-wrapper">
                <h6 className="list-title mb20">Fiyat Aralığı (TL)</h6>
                <div className="range-slider-style modal-version">
                  <PriceRange />
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Tür</h6>
                <div className="form-style2 input-group">
                  <Select
                    defaultValue={[catOptions[1]]}
                    name="colors"
                    options={catOptions}
                    styles={customStyles}
                    className="select-custom"
                    classNamePrefix="select"
                    required
                  />
                </div>
              </div>
            </div>
            {/* End .col-6 */}

            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Emlak ID</h6>
                <div className="form-style2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="RT04949213"
                  />
                </div>
              </div>
            </div>
            {/* End .col-6 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Yatak Odası</h6>
                <div className="d-flex">
                  <Bedroom />
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}

            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Banyo</h6>
                <div className="d-flex">
                  <Bathroom />
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Konum</h6>
                <div className="form-style2 input-group">
                  <Select
                    defaultValue={[locationOptions[0]]}
                    name="colors"
                    styles={customStyles}
                    options={locationOptions}
                    className="select-custom"
                    classNamePrefix="select"
                    required
                  />
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}

            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Metrekare</h6>
                <div className="space-area">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="form-style1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Min."
                      />
                    </div>
                    <span className="dark-color">-</span>
                    <div className="form-style1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Max"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div className="widget-wrapper mb0">
                <h6 className="list-title mb10">Olanaklar</h6>
              </div>
            </div>
            <Amenities />
          </div>
        </div>
        {/* End modal body */}

        <div className="modal-footer justify-content-between">
          <button className="reset-button">
            <span className="flaticon-turn-back" />
            <u>Tüm Filtreleri Sıfırla</u>
          </button>
          <div className="btn-area">
            <button data-bs-dismiss="modal" type="submit" className="ud-btn btn-thm" onClick={() => router.push("/map-v1")} >
              <span className="flaticon-search align-text-top pr10" />
              Ara
            </button>
          </div>
        </div>
        {/* End modal-footer */}
      </div>
    </div>
  );
};

export default AdvanceFilterModal;
