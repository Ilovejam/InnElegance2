// "use client";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import EnergyClass from "@/components/property/property-single-style/common/EnergyClass";
import FloorPlans from "@/components/property/property-single-style/common/FloorPlans";
import HomeValueChart from "@/components/property/property-single-style/common/HomeValueChart";
import InfoWithForm from "@/components/property/property-single-style/common/more-info";
import NearbySimilarProperty from "@/components/property/property-single-style/common/NearbySimilarProperty";
import OverView from "@/components/property/property-single-style/single-v2/OverView";
import PropertyAddress from "@/components/property/property-single-style/common/PropertyAddress";
import PropertyDetails from "@/components/property/property-single-style/common/PropertyDetails";
import PropertyFeaturesAminites from "@/components/property/property-single-style/common/PropertyFeaturesAminites";
import PropertyNearby from "@/components/property/property-single-style/common/PropertyNearby";
import PropertyVideo from "@/components/property/property-single-style/common/PropertyVideo";
import PropertyViews from "@/components/property/property-single-style/common/property-view";
import ProperytyDescriptions from "@/components/property/property-single-style/common/ProperytyDescriptions";
import ReviewBoxForm from "@/components/property/property-single-style/common/ReviewBoxForm";
import VirtualTour360 from "@/components/property/property-single-style/common/VirtualTour360";
import AllReviews from "@/components/property/property-single-style/common/reviews";
import ContactWithAgent from "@/components/property/property-single-style/single-v2/ContactWithAgent";
import PropertyGallery from "@/components/property/property-single-style/single-v2/PropertyGallery";
import MortgageCalculator from "@/components/property/property-single-style/common/MortgageCalculator";
import WalkScore from "@/components/property/property-single-style/common/WalkScore";
import PropertyHeader from "@/components/property/property-single-style/single-v2/PropertyHeader";
import ScheduleForm from "@/components/property/property-single-style/single-v2/ScheduleForm";

export const metadata = {
  title: "InnElegance",
};

const SingleV2 = ({params}) => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Property All Single V1 */}
      <section className="pt60 pb0 bgc-white">
        <div className="container">
          <div className="row">
            <PropertyHeader id={params.id} />
          </div>
          {/* End .row */}

          <div className="row mb30 mt30">
            <PropertyGallery id={params.id} />
          </div>
          {/* End .row */}

          <div className="row mt30">
            <OverView id={params.id} />
          </div>
         
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Property All Single V1  */}

      <section className="pt60 pb90 bgc-f7">
  <div className="container">
    <div className="row wrap">
      {/* Left Column: Villa Hakkında, Villa Detayları, Özellikler */}
      <div className="col-lg-8">
        <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
          <h4 className="title fz17 mb30">Villa Hakkında</h4>
          <ProperytyDescriptions id={params.id} />
          {/* End property description */}

          <h4 className="title fz17 mb30 mt50">Villa Detayları</h4>
          <div className="row">
            <PropertyDetails id={params.id} />
          </div>
        </div>
        {/* End .ps-widget */}

        <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
          <h4 className="title fz17 mb30">Özellikler &amp; Olanaklar</h4>
          <div className="row">
            <PropertyFeaturesAminites id={params.id} />
          </div>
        </div>
      </div>
      {/* End .col-lg-8 */}

      {/* Right Column: Yorumlar */}
      <div className="col-lg-4">
        <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
          <h4 className="title fz17 mb30">Uygunluk</h4>
          <ReviewBoxForm 
            id={params.id} 
          />
        </div>
      </div>
      {/* End .col-lg-4 */}
    </div>
    {/* End .row */}

    <div className="row mt30 align-items-center justify-content-between">
      <div className="col-auto">
        <div className="main-title">
          <h2 className="title">Discover Our Featured Listings</h2>
          <p className="paragraph">Aliquam lacinia diam quis lacus euismod</p>
        </div>
      </div>
      {/* End header */}

      <div className="col-auto mb30">
        <div className="row align-items-center justify-content-center">
          <div className="col-auto">
            <button className="featured-prev__active swiper_button">
              <i className="far fa-arrow-left-long" />
            </button>
          </div>

          <div className="col-auto">
            <div className="pagination swiper--pagination featured-pagination__active" />
          </div>

          <div className="col-auto">
            <button className="featured-next__active swiper_button">
              <i className="far fa-arrow-right-long" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-12">
        <div className="property-city-slider">
          <NearbySimilarProperty />
        </div>
      </div>
    </div>
    {/* End .row */}
  </div>
</section>


      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default SingleV2;
