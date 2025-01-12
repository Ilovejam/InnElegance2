import MobileMenu from "@/components/common/mobile-menu";
import Partner from "@/components/common/Partner";
import Agents from "@/components/home/home-v2/Agents";
import ApartmentType from "@/components/home/home-v2/ApartmentType";
import Explore from "@/components/home/home-v2/Explore";
import ExploreCities from "@/components/home/home-v2/ExploreCities";
import FeaturedListings from "@/components/home/home-v2/FeatuerdListings";
import Header from "@/components/home/home-v2/Header";
import Testimonial from "@/components/home/home-v2/Testimonial";
import About from "@/components/home/home-v2/about";
import Hero from "@/components/home/home-v2/hero";
import React from "react";
import Footer from "@/components/common/default-footer";
import Cta from "@/components/home/home-v2/Cta";

import Link from "next/link";

export const metadata = {
  title: "Inn Elegance",
};

const Home_V2 = () => {
  return (
    <>
      {/* Ana Menü */}
      <Header />
      {/* Bitiş Ana Menü */}

      {/* Mobil Menü */}
      <MobileMenu />
      {/* Bitiş Mobil Menü */}

      {/* Ana Banner */}
      <section className="home-banner-style2 p0">
        <Hero />
      </section>
      {/* Bitiş Ana Banner */}

      {/* Daireleri Keşfet */}
      <section className="pb90 pb30-md">
        <div className="container">
          <div className="row justify-content-center" data-aos="fade">
            <div className="col-lg-12">
              <ApartmentType />
            </div>
          </div>
        </div>
      </section>
      {/* Bitiş Daireleri Keşfet */}

      {/* Öne Çıkan İlanlar */}
      <section className="pt0 pb60 pb30-md bgc-white">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Öne Çıkan İlanlarımızı Keşfedin</h2>
                <p className="paragraph">En iyi tatil deneyimini yaşayın.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" href="/grid-full-3-col">
                  Tüm İlanları Görün
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                <FeaturedListings />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bitiş Öne Çıkan İlanlar */}

      {/* Şehirleri Keşfet */}
      <section className="pt0 pb90 pb50-md">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">Şehirleri Keşfedin</h2>
                <p className="paragraph">
                  Inn Elegance ile hayalinizdeki tatil sizi bekliyor.
                </p>
              </div>
            </div>

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="cities_prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>

                <div className="col-auto">
                  <div className="pagination swiper--pagination cities_pagination__active" />
                </div>

                <div className="col-auto">
                  <button className="cities_next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider">
                <ExploreCities />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bitiş Şehirleri Keşfet */}

      {/* Daireleri Keşfet */}
      <section className="p-0">
        <div className="how-we-help position-relative mx-auto bgc-thm-light maxw1600 pt120 pt60-md pb90 pb30-md bdrs12 mx20-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 m-auto wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="main-title text-center">
                  <h2 className="title">Inn Elegance Nasıl Yardımcı Olur?</h2>
                  <p className="paragraph">
                    Tatilinizi planlamayı kolaylaştırıyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <Explore />
            </div>
          </div>
        </div>
      </section>
      {/* Bitiş Daireleri Keşfet */}

      {/* Hakkımızda */}
      <section className="about-us">
        <div className="container">
          <About />
        </div>
      </section>
      {/* Bitiş Hakkımızda */}

      {/* Yorumlar */}
      <section className="our-testimonial p-0">
        <div className="cta-banner2 bgc-f7 maxw1600 mx-auto pt110 pt60-md pb110 pb60-md bdrs12 position-relative">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="main-title text-center">
                  <h2>Yorumlar</h2>
                  <p className="paragraph">
                    Misafirlerimizin yorumlarını keşfedin.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-8 m-auto"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="testimonial-style2">
                  <Testimonial />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bitiş Yorumlar */}

      {/* Partnerler */}
      <section className="our-partners pt0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="100">
              <div className="main-title text-center">
                <h6>Dünyanın En İyileri Tarafından Güveniliyor</h6>
              </div>
            </div>

            <div
              className="col-lg-12 text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Partner />
            </div>
          </div>
        </div>
      </section>
      {/* Bitiş Partnerler */}

      {/* CTA */}
      <Cta />
      {/* Bitiş CTA */}

      {/* Footer */}
      <section className="footer-style1 at-home2 pb-0">
        <Footer />
      </section>
      {/* Bitiş Footer */}
    </>
  );
};

export default Home_V2;
