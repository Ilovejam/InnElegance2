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
              <h2>
                Gayrimenkul Alanında Devrim Yaratmak{" "}
                <br className="d-none d-lg-block" /> İçin Çalışıyoruz.
              </h2>
            </div>
            <div className="col-lg-6">
              <p className="text mb25">
                InnElegance olarak, müşterilerimize lüks ve konforu bir arada
                sunuyoruz. Sahip olduğumuz profesyonellik ve yüksek standartlarla
                villa kiralamada öncü bir hizmet sunmaktayız. Amacımız, her
                detayında kalite olan unutulmaz tatil deneyimleri yaratmaktır.
              </p>
              <p className="text mb55">
                Doğayla iç içe, modern tasarıma sahip villalarımız, misafirlerimize
                hem huzurlu bir tatil hem de eşsiz bir konfor sunar. Bodrum,
                Çeşme ve Fethiye gibi prestijli bölgelerde yer alan villalarımız,
                lüks tatil anlayışınızı yeniden tanımlayacak.
              </p>
              <div className="row">
                <Mission />
              </div>
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
