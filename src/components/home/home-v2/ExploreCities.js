"use client";
import Image from "next/image";
import Link from "next/link";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const ExploreCities = () => {
  const cities = [
    {
      id: 1,
      name: "Antalya - Kaş",
      image: "https://yoldaolmak.com/wp-content/uploads/2023/02/Kas-Antalya.jpg",
      number: 57,
    },
    {
      id: 2,
      name: "Muğla - Fethiye",
      image: "https://images.pexels.com/photos/5892261/pexels-photo-5892261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      number: 16,
    },
    {
      id: 3,
      name: "Muğla - Seydikemer",
      image: "https://gezicini.com/wp-content/uploads/2019/03/oludenizzz.jpg",
      number: 9,
    },
    
    
    // Add more cities if needed
  ];

 
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".cities_next__active",
          prevEl: ".cities_prev__active",
        }}
        pagination={{
          el: ".cities_pagination__active",
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {cities.map((city) => (
          <SwiperSlide key={city.id}>
            <div className="item">
                <div className="feature-style2 mb30">
                  <div className="feature-img">
                    <Image
                      width={279}
                      height={279}
                      className="w-100 h-100"
                      src={city.image}
                      alt="city listings"
                    />
                  </div>
                  <div className="feature-content pt20">
                    <h6 className="title mb-1">{city.name}</h6>
                    <p className="text fz15">{city.number} Properties</p>
                  </div>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ExploreCities;
