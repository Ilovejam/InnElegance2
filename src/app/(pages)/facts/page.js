import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";

export const metadata = {
  title: "Kiralama Şartları || Inn Elegance - Lüks Villa Kiralama",
};

const Facts = () => {
  return (
    <>
      {/* Ana Başlık Navigasyonu */}
      <DefaultHeader />
      {/* Mobil Menü */}
      <MobileMenu />

      {/* Kiralama Şartları */}
      <section className="facts-section pb90">
        <div className="container">
          <h1 className="display-5 fw-bold text-dark text-center mb-5">
            Kiralama Şartları
          </h1>
          <p className="text-muted fs-5">
            Kiralama işlemi yaparken aşağıdaki şartları dikkate almanız önemlidir:
          </p>
          <ul className="list-unstyled fs-5 text-dark">
            <li className="mb-3">
              <strong>Rezervasyon:</strong> Rezervasyon işleminizi tamamlarken gerekli bilgileri doğru ve eksiksiz şekilde doldurmanız gerekmektedir.
            </li>
            <li className="mb-3">
              <strong>Ödeme:</strong> Kiralama ücretini belirtilen süre içinde ödemeniz gereklidir. Ödemenizi kredi kartı, banka transferi veya diğer kabul edilen yöntemlerle yapabilirsiniz.
            </li>
            <li className="mb-3">
              <strong>İptal Politikası:</strong> Rezervasyon iptali durumunda, belirli koşullara göre ücret iadesi yapılabilir. Detaylı bilgi için iptal politikamızı inceleyin.
            </li>
            <li className="mb-3">
              <strong>Tesis Kuralları:</strong> Villalarımızda sigara içilmez, evcil hayvan kabul edilmez ve parti düzenlenemez.
            </li>
            <li className="mb-3">
              <strong>Giriş ve Çıkış Saatleri:</strong> Giriş saati 16:00, çıkış saati ise 10:0&apos;dur.
            </li>
          </ul>

          <h2 className="fw-bold text-dark mt-5">
            INN ELEGANCE LIMITED LIABILITY COMPANY REZERVASYON İPTAL VE İADE ŞARTLARI
          </h2>
          <p className="fs-5 text-dark">
            Öncelikle, Inn Elegance markası ve <a href="https://www.innelegance.com" target="_blank" rel="noopener noreferrer">www.innelegance.com</a> internet sitemizin tamamen Inn Elegance LLC&apos;ye ait olduğunu resmi olarak duyurmaktan memnuniyet duyarız.
          </p>
          <p className="fs-5 text-dark">
            Inn Elegance LLC, Florida merkezli bir şirket olup, lüks villa, daire, otel ve diğer konaklama seçenekleri sunan bir platformdur...
          </p>
          {/* Devamı içeriğinizi burada ekleyin */}
          <h3 className="fw-bold text-dark mt-4">TARAFLAR VE AMAÇ</h3>
          <p className="fs-5 text-dark">
            Bu sözleşme; “VİLLAYI/APARTI” kiralayan (bundan böyle “MÜŞTERİ” olarak anılacaktır) ile “VİLLAYI/APARTI” kiraya veren (bundan böyle “INN ELEGANCE” olarak anılacaktır) arasında...
          </p>
          {/* Ek metni listeleme yaparak düzenle */}
          <h3 className="fw-bold text-dark mt-4">İPTAL KOŞULLARI</h3>
          <ul className="list-unstyled fs-5 text-dark">
            <li className="mb-3">
              <strong>Eğer Ön Ödeme (Kapora) Alınmışsa:</strong>
              <ul>
                <li className="mb-2">Rezervasyon için ödenen %20&apos;lik ön ödeme kesinlikle iade edilmez.</li>
                <li className="mb-2">30 gün veya daha az kala iptallerde ödemenin tamamı alınır.</li>
              </ul>
            </li>
            <li className="mb-3">
              <strong>Eğer toplam ödemenin tamamı alınmışsa:</strong>
              <ul>
                <li className="mb-2">%20&apos;lik kapora dışında kalan miktar iade edilir.</li>
                <li className="mb-2">30 günden az kala iptallerde iade yapılmaz.</li>
              </ul>
            </li>
          </ul>

          <p className="fs-5 text-dark mt-4">
            Daha fazla bilgi veya destek için bizimle iletişime geçebilirsiniz:
            <br />
            <a href="mailto:info@innelegance.com" className="text-primary">info@innelegance.com</a> | <a href="tel:+905313216100" className="text-primary">+90 (531) 321 61 00</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Facts;
