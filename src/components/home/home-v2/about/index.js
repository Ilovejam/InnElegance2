import React from "react";
import Funfact from "./Funfact";
import ProductSingle from "./ProductSingle";
import Image from "next/image";
import VideoBox from "./VideoBox";

const About = () => {
  return (
    <div className="row mt80 mt0-md">
      <div className="col-md-6 col-xl-6">
        <div className="position-relative">
          <div
            className="img-box-7"
            style={{ width: "591px", height: "768px", overflow: "hidden" }}
          >
            <Image
              width={591}
              height={768}
              className="w-100 h-100 cover img-1"
              src="https://www.villam365.com/site/sized/108081/2024/04/dsc09698-hdr-1200x9000.webp"
              alt="Hakkımızda Görsel"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className="img-box-8 position-relative">
            <Image
              width={193}
              height={193}
              className="img-1 spin-right"
              src="/images/about/element-1.png"
              alt="Hakkımızda Görsel"
            />
          </div>
          <div className="img-box-10 position-relative">
            <ProductSingle />
          </div>
        </div>
      </div>
      {/* Sol sütun sonu */}

      <div className="col-md-6 col-xl-4 offset-xl-2">
        <div className="about-box-1">
          <h2 className="title mb30">
            Hayalinizdeki Evi Bulmanıza Yardımcı Oluyoruz
          </h2>
          <p className="text mb20 fz15">
            Artan yapı karmaşıklığı ile birlikte mimarlık alanında yenilikçi
            çözümler sunuyoruz.
          </p>
          <p className="text mb20 fz15">
            InnElegance olarak, müşterilerimize en iyi konforu ve estetiği
            sunmayı taahhüt ediyoruz.
          </p>
        </div>
      </div>
      {/* Sağ sütun sonu */}
    </div>
  );
};

export default About;
