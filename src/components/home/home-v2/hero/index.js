"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import AdvanceFilterModal from "@/components/common/advance-filter";
import HeroContent from "./HeroContent";

const Hero = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1562239409-b5c79828df9e?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


  return (
    <div
      className="home-banner-style2"
      style={{
        position: "relative",
        height: "650px",
        width: "100%",
        overflow: "hidden",
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

      <div
      className="home-banner-style2"
      style={{
        position: "relative",
        height: "650px",
        width: "100%",
        overflow: "hidden",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />

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
