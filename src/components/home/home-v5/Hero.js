"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const sliderItems = [
    {
      image: "/images/home/home1.jpg",
      price: "986,00 TL",
      title: "Grand Avenue'de Stüdyo Daire",
      description: "32 Yatak - 91 Banyo - 1500 m²",
    },
    {
      image: "/images/home/home2.jpg",
      price: "986,00 TL",
      title: "Grand Avenue'de Stüdyo Daire",
      description: "32 Yatak - 91 Banyo - 1500 m²",
    },
    {
      image: "/images/home/home-5-3.jpg",
      price: "986,00 TL",
      title: "Grand Avenue'de Stüdyo Daire",
      description: "32 Yatak - 91 Banyo - 1500 m²",
    },
    {
      image: "/images/home/home-5-4.jpg",
      price: "986,00 TL",
      title: "Grand Avenue'de Stüdyo Daire",
      description: "32 Yatak - 91 Banyo - 1500 m²",
    },
  ];

  return (
    <>
      <div className="hero-large-home5">
        <Swiper
          direction="vertical" // Dikey yön ayarlandı
          spaceBetween={0}
          slidesPerView={1}
          speed={1400} // Geçiş hızını milisaniye olarak ayarla
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Thumbs]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          style={{ height: "850px" }}
        >
          {sliderItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="item">
                <div
                  className="slider-slide-item"
                  style={{ backgroundImage: `url(${item.image})` }}
                  data-thumb={item.image}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 text-left position-relative">
                        <h4 className="h1 slider-subtitle text-white">
                          {item.price}
                        </h4>
                        <h3 className="h6 slider-title text-white">
                          {item.title}
                        </h3>
                        <p className="mb30 slider-text text-white">
                          {item.description}
                        </p>
                        <div className="slider-btn-block">
                          <Link
                            href="/harita-v4"
                            className="ud-btn btn-white slider-btn"
                          >
                            Detayları Gör
                            <i className="fal fa-arrow-right-long" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="custom_thumbs">
        <Swiper
          direction="vertical" // Dikey yön ayarlandı
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          slidesPerView={sliderItems.length} // Tüm küçük resimleri aynı anda göster
          spaceBetween={0} // Küçük resimler arasındaki boşluk ayarlandı
          style={{ height: "268px" }} // Küçük resimler galerisi için sabit yükseklik
        >
          {sliderItems.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                width={50}
                height={50}
                className="cover"
                src={item.image}
                alt="küçük resim"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
