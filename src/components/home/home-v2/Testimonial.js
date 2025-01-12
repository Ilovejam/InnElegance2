"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

const testimonials = [
  {
    id: "1st",
    imageSrc: "/images/testimonials/testi-1.png",
    text: "InnElegance, misafirperverliği ve profesyonel hizmetiyle beni çok etkiledi. Her şey harikaydı!",
    name: "Ahmet Yılmaz",
    designation: "Ürün Müdürü, Apple Türkiye",
  },
  {
    id: "2nd",
    imageSrc: "/images/testimonials/testi-2.png",
    text: "Deniz manzaralı villada konaklama deneyimim unutulmazdı. InnElegance ekibine teşekkürler!",
    name: "Elif Şen",
    designation: "Tasarımcı, Google",
  },
  {
    id: "3rd",
    imageSrc: "/images/testimonials/testi-3.png",
    text: "Sessiz ve huzurlu bir tatil için doğru adres! InnElegance ailesine teşekkür ederim.",
    name: "Murat Kaya",
    designation: "Yazılım Mühendisi, Microsoft",
  },
  {
    id: "4th",
    imageSrc: "/images/testimonials/testi-4.png",
    text: "Villaların temizliği ve konforu beni çok memnun etti. Tatilim tam anlamıyla mükemmeldi!",
    name: "Zeynep Demir",
    designation: "Pazarlama Uzmanı, Amazon",
  },
  {
    id: "5th",
    imageSrc: "/images/testimonials/testi-5.png",
    text: "InnElegance sayesinde ailemle harika bir tatil geçirdik. Kesinlikle tavsiye ederim.",
    name: "Ali Çelik",
    designation: "CEO, Çelik Grup",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // 30 saniyede bir kaydır
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="tab-content" id="pills-tabContent">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`tab-pane fade ${
              index === activeIndex ? "show active" : ""
            }`}
            id={`pills-${testimonial.id}`}
            role="tabpanel"
            aria-labelledby={`pills-${testimonial.id}-tab`}
          >
            <div className="testi-content text-center">
              <span className="icon fas fa-quote-left" />
              <h4 className="testi-text">{testimonial.text}</h4>
              <h6 className="name">{testimonial.name}</h6>
             </div>
          </div>
        ))}
      </div>
      {/* End tab-content */}
      <div className="tab-list position-relative">
        <ul
          className="nav nav-pills justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          {testimonials.map((testimonial, index) => (
            <li className="nav-item" role="presentation" key={testimonial.id}>
              <button
                className={`nav-link ${
                  index === activeIndex ? "active" : ""
                }`}
                id={`pills-${testimonial.id}-tab`}
                data-bs-toggle="pill"
                data-bs-target={`#pills-${testimonial.id}`}
                type="button"
                role="tab"
                aria-controls={`pills-${testimonial.id}`}
                aria-selected={index === activeIndex ? "true" : "false"}
                onClick={() => setActiveIndex(index)}
              >
               
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Testimonial;
