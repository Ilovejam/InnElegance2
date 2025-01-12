"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import AdvanceFilterModal from "@/components/common/advance-filter";
import HeroContent from "./HeroContent";

const Hero = () => {
  const sliderItems = [
    {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slogan: "Lüks Villalar ile Hayalinizdeki Tatil",
    },
    {
      image:
        "https://images.unsplash.com/photo-1562239409-b5c79828df9e?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slogan: "Huzuru ve Konforu Bir Arada Yaşayın",
    },
    {
      image:
        "https://www.villam365.com/site/sized/108081/2024/06/dscf3544-kopya-byk-1200x9000.webp",
      slogan: "Doğanın İçinde Modern Yaşam Alanları",
    },
  ];

  return (
    <div
      className="home-banner-style2"
      style={{
        position: "relative",
        height: "650px", // Hero alanı yüksekliği
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#181a20",
      }}
    >
      {/* Hero Content */}
      <div
        style={{
          position: "absolute",
          top: "10%", // Üstte mesafe
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          textAlign: "center",
          zIndex: 3, // Slider layer'ın üstünde olacak
          padding: "0 20px", // Mobil cihazlarda içerik kenarlara yapışmasın
        }}
      >
        <HeroContent />
        <h1
          style={{
            fontSize: "3rem", // Masaüstü için font
            fontWeight: "bold",
            color: "white",
            textShadow: "0px 3px 6px rgba(0, 0, 0, 0.5)",
            marginBottom: "10px",
          }}
        >
          Inn Elegance
        </h1>
        <div
          style={{
            height: "2px",
            width: "150px",
            backgroundColor: "white",
            margin: "10px auto",
          }}
        />
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        style={{
          height: "90%", // Arka planın içinde daha küçük olacak şekilde
          width: "90%", // Genişlik azaltıldı
          borderRadius: "15px", // Köşeler yuvarlatıldı
          overflow: "hidden",
          top: "10%",
        }}
      >
        {sliderItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
                position: "relative",
              }}
            >
              {/* Layer */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.4)", // Hafif karartma
                }}
              />
              {/* Slogan */}
              <h2
                style={{
                  position: "absolute",
                  bottom: "15%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "white",
                  fontSize: "1.5rem", // Mobilde küçülecek
                  fontWeight: "bold",
                  textAlign: "center",
                  textShadow: "0px 3px 6px rgba(0, 0, 0, 0.5)",
                  width: "90%",
                }}
              >
                {item.slogan}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Advance Feature Modal */}
      <div className="advance-feature-modal">
        <div
          className="modal fade"
          id="advanceSeachModal"
          tabIndex={-1}
          aria-labelledby="advanceSeachModalLabel"
          aria-hidden="true"
        >
          <AdvanceFilterModal />
        </div>
      </div>
    </div>
  );
};

export default Hero;
