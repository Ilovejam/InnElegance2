import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Partner from "@/components/common/Partner";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Agents from "@/components/pages/about/Agents";
import Features from "@/components/pages/about/Features";
import FunFact from "@/components/pages/about/FunFact";
import Mission from "@/components/pages/about/Mission";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hakkımızda || InnElegance - Lüks ve Konforun Adresi",
};

const About = () => {
  return (
    <>
      {/* Ana Başlık Navigasyonu */}
      <DefaultHeader />
      {/* Ana Başlık Navigasyonu Sonu */}

      {/* Mobil Navigasyon */}
      <MobileMenu />
      {/* Mobil Navigasyon Sonu */}

      {/* Yönlendirme Bölümü */}
      <section className="breadcumb-section2 p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                {/* Boş bırakıldı, gerekirse başlık eklenebilir */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Yönlendirme Bölümü Sonu */}

      {/* Hakkımızda Alanı */}
      <section className="our-about pb90">
  <div className="container">
    <div className="row" data-aos="fade-up" data-aos-delay="300">
      <div className="col-lg-6">
        <h2 className="display-5 fw-bold ">
          Hakkımızda
        </h2>
        <p className="text-muted fs-5">
          Inn Elegance LLC, 2021 yılında Florida&apos;da kurulan, lüks villa kiralama sektöründe müşteri odaklı ve yenilikçi bir markadır. Amacımız, misafirlerimize özel bir tatil deneyimi sunmaktır. Akdeniz temalı villalarımızla, lüks ve konforu bir arada sunarak her konuk için unutulmaz bir tatil fırsatı yaratıyoruz.
        </p>
      </div>
      <div className="col-lg-6">
        <h3 className="fw-bold ">Neden Bizi Seçmelisiniz?</h3>
        <ul className="list-unstyled">
          <li className="mb-3">
            <strong>Özel Tatil Deneyimi:</strong> Biz sadece bir konaklama değil, size özel bir tatil sunuyoruz. Akdeniz&apos;in eşsiz güzelliklerinden ilham alarak her villamızı özenle seçiyoruz.
          </li>
          <li className="mb-3">
            <strong>Kişiye Özel Planlama:</strong> Tatilinizi tamamen size göre tasarlıyoruz. İsteklerinize ve ihtiyaçlarınıza uygun özel tatil planları hazırlıyoruz.
          </li>
          <li className="mb-3">
            <strong>Yüksek Konfor ve Kusursuz Hizmet:</strong> Tatiliniz boyunca en yüksek konforu sağlamak ve her anınızın özel olmasını sağlamak için çalışıyoruz.
          </li>
          <li>
            <strong>7/24 Destek:</strong> Rezervasyon sürecinizden tatilinizin sonuna kadar yanınızdayız. Herhangi bir sorunuz olduğunda, hızlıca çözüm sunuyoruz.
          </li>
        </ul>
      </div>
    </div>

    <div className="row mt-5" data-aos="fade-up" data-aos-delay="400">
      <div className="col-lg-12">
        <h3 className="fw-bold ">Hizmetlerimiz</h3>
        <ul className="list-unstyled">
          <li className="mb-3">
            <strong>Villa Kiralama:</strong> Türkiye&apos;nin en güzel tatil beldelerinde ve muazzam manzaralara sahip villalarla, her zevke hitap eden seçenekler sunuyoruz.
          </li>
          <li className="mb-3">
            <strong>Kişiye Özel Tatil Planlaması:</strong> Hayalinizdeki tatili gerçeğe dönüştürmek için ihtiyaçlarınıza özel tatil planları oluşturuyoruz.
          </li>
          <li>
            <strong>24/7 Destek:</strong> Rezervasyon sürecinden tatilinizin sonuna kadar, her türlü sorunuza hızlıca çözüm buluyoruz.
          </li>
        </ul>
      </div>
    </div>

    <div className="row mt-5" data-aos="fade-up" data-aos-delay="500">
      <div className="col-lg-12">
        <h3 className="fw-bold ">Misyonumuz</h3>
        <p className="fs-5 text-muted">
          Amacımız, tatil anlayışını güvenilir, kaliteli ve benzersiz bir deneyime dönüştürmektir. Akdeniz&apos;in doğasını ve kültürünü modern konforla birleştirerek, her anınızı özel kılmayı hedefliyoruz.
        </p>
      </div>
    </div>

    <div className="row mt-5" data-aos="fade-up" data-aos-delay="600">
      <div className="col-lg-12">
        <h3 className="fw-bold ">Firma Bilgilerimiz</h3>
        <ul className="list-unstyled">
          <li className="mb-3">
            <strong>Şirket Unvanı:</strong> Inn Elegance LLC
          </li>
          <li className="mb-3">
            <strong>Adres:</strong> 7901 4th St N Ste 300, St. Petersburg, FL 33702, USA
          </li>
          <li className="mb-3">
            <strong>Web sitesi:</strong> <a href="https://www.innelegance.com" target="_blank" rel="noopener noreferrer">www.innelegance.com</a>
          </li>
          <li className="mb-3">
            <strong>Şirket Sahibi:</strong> Orhan Yavuz
          </li>
          <li>
            <strong>İletişim:</strong> <a href="mailto:info@innelegance.com">info@innelegance.com</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* Hakkımızda Alanı Sonu */}

      {/* Hakkımızda Banner */}
      

      {/* Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* Footer Sonu */}
    </>
  );
};

export default About;
