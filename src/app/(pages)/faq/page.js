import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";

export const metadata = {
  title: "Sıkça Sorulan Sorular || Inn Elegance - Lüks Villa Kiralama",
};

const Faq = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcrumb Sections */}
      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Sıkça Sorulan Sorular (SSS)</h2>
                <div className="breadcumb-list">
                  <a href="/">Ana Sayfa</a> / <span>Sıkça Sorulan Sorular</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      {/* FAQ Section Area */}
      <section className="our-faq pb90 pt-0">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-12">
              <h3 className="fw-bold text-dark mb-4">Sıkça Sorulan Sorular</h3>
              <div className="accordion" id="faqAccordion">
                {[...Array(34).keys()].map((index) => (
                  <div className="accordion-item mb-3" key={index}>
                    <h2 className="accordion-header" id={`heading${index + 1}`}>
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index + 1}`}
                        aria-expanded="false"
                        aria-controls={`collapse${index + 1}`}
                      >
                        {`${index + 1}. ${
                          getFaqQuestion(index + 1) // Her bir soruyu buradan çekiyoruz
                        }`}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index + 1}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${index + 1}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body text-muted fs-5">
                        {getFaqAnswer(index + 1)} {/* Cevapları buradan çekiyoruz */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End FAQ Section Area */}

      {/* Our CTA */}
      <CallToActions />
      {/* Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Faq;

// Soru ve Cevap Verileri
function getFaqQuestion(id) {
  const questions = [
    "Size Nasıl Güvenebiliriz?",
    "Giriş-Çıkış Saatleri Nedir?",
    "Maksimum Konaklama Kapasitesi Nedir?",
    "Çocuklar Kişi Sayısına Dahil Mi?",
    "Evcil Hayvan Getirilebilir Mi?",
    "Villalarda Temizlik Süreci Nasıl İşler?",
    "Havuz ve Bahçe Bakımları Nasıl Yapılmaktadır?",
    "Fiyata Neler Dahil, Neler Dahil Değildir?",
    "Evlerin Sigortası Var Mıdır?",
    "Kiraladığımız Villaya Ulaşımı Nasıl Sağlayacağız?",
    "Hasar Depozito Nedir ve Nasıl İşler?",
    "Kiraladığımız Villadan Vazgeçebilir Miyiz?",
    "Teknik Arızalarda Ne Yapmalıyım?",
    "Bölgede Meydana Gelen Elektrik ve Su Kesintileri İçin Ne Yapmalıyım?",
    "Muhafazakar-Korunaklı Villa Anlamı Nedir?",
    "Havuz İstemediğimiz Takdirde Temizlik İçin Gelmeme Durumu Var Mıdır?",
    "Havuz Suyunu Azaltabilir Miyiz?",
    "Rezervasyon Bilgileri Ne Zaman Paylaşılır?",
    "Kış Aylarında Tatil Yapabilir Miyim?",
    "Rezervasyon İçin Ön Ödeme Yöntemleri Nelerdir?",
    "Kalan Bakiye Tutarını Ne Zaman Ödemeliyim?",
    "Fatura Kesiyor Musunuz?",
    "Muhatap Kişimiz Kimdir?",
    "Villalarda Mangal Var Mı?",
    "Belirtilen Fiyatlar Kişi Başı Mıdır?",
    "Tek Kişinin Kimlik Bilgileriyle Villa Kiralanabilir Mi?",
    "T.C. Kimlik Numarası Olmadan Rezervasyon Yapabilir Miyim?",
    "Ödememi Başka Bir Villa İçin Aktarabilir Miyim?",
    "Bebek Yatakları ve Sandalyeleri Temin Ediliyor Mu?",
    "Villa veya Yazlıkta Sigara İçilebilir Mi?",
    "Bölgeye Ulaşım Nasıl Sağlanır?",
    "Villalarda Sadece Aileler Mi Konaklayabilir?",
    "Depozito Ücreti İade Ediliyor Mu?",
    "Minimum Kiralama Süresi Ne Kadardır?",
  ];
  return questions[id - 1];
}

function getFaqAnswer(id) {
  const answers = [
    "Inn Elegance sektördeki tüm yasal gerekliliklere tam uyum sağlar...",
    "Giriş saati: 16:00, Çıkış saati: 10:00.",
    "Villa maksimum kişi kapasitesine göre konaklama yapılabilir.",
    "2 yaş ve üzeri herkes kapasiteye dahildir.",
    "Villalarımızda evcil hayvan kabul edilmemektedir.",
    "Girişte detaylı temizlik yapılır. Ekstra temizlik ek ücretlidir.",
    "Havuz ve bahçe bakımı sabah erken saatlerde yapılır.",
    "Fiyata su, elektrik, tüpgaz dahildir. Yiyecek ve temizlik malzemeleri dahil değildir.",
    "Evlerin sigortası ev sahibine aittir. Seyahat sigortası önerilir.",
    "Transfer için Inn Elegance ile iletişime geçebilirsiniz.",
    "Hasar depozitosu girişte alınır, hasar yoksa iade edilir.",
    "Web sitemizdeki iptal politikalarına göre işlem yapılır.",
    "Arıza durumunda 24 saat içinde müdahale edilir.",
    "Elektrik ve su kesintilerinde sorumluluk bulunmamaktadır.",
    "Korunaklı villalar %95 görünmeme garantilidir.",
    "Havuz sağlığı için temizlik yapılması zorunludur.",
    "Havuz seviyesini değiştirmek teknik sorunlara yol açabilir.",
    "Rezervasyon onaylandıktan sonra tüm bilgiler paylaşılır.",
    "Kışa uygun özelliklere sahip villalarda konaklayabilirsiniz.",
    "Ön ödeme için havale, kredi kartı gibi yöntemler kullanılabilir.",
    "Villa girişinde kalan bakiye nakit olarak ödenir.",
    "Fatura, Florida prosedürlerine göre komisyon bedeli üzerinden kesilir.",
    "Girişten 2 gün önce villa sahibinin bilgileri verilir.",
    "Villalarda mangal mevcuttur. Rezervasyon öncesi talep ediniz.",
    "Fiyatlar toplam villa kiralama bedelidir.",
    "Tek kişinin kimlik bilgileriyle rezervasyon yapılabilir.",
    "Pasaport numarası ile rezervasyon yapılabilir.",
    "Villa değişikliği için bizimle iletişime geçebilirsiniz.",
    "Bebek yatağı ve sandalyesi talep üzerine sağlanır.",
    "Villalarda sigara içmek yasaktır.",
    "Dalaman Havalimanı'ndan transfer hizmeti sağlanır.",
    "Aileler ve arkadaş grupları için uygundur.",
    "Hasar yoksa depozito iade edilir.",
    "Minimum kiralama süresi sezonlara göre değişir.",
  ];
  return answers[id - 1];
}
