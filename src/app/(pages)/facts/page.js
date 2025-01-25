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
      <section
        style={{
          paddingBottom: "90px",
          color: "#333",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", textAlign: "center", marginBottom: "30px" }}>
            Kiralama Şartları
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#555", marginBottom: "20px" }}>
            Kiralama işlemi yaparken aşağıdaki şartları dikkate almanız önemlidir:
          </p>
          <ul style={{ listStyle: "none", paddingLeft: "0", fontSize: "1.25rem", color: "#333" }}>
            <li style={{ marginBottom: "15px" }}>
              <strong>Rezervasyon:</strong> Rezervasyon işleminizi tamamlarken gerekli bilgileri doğru ve eksiksiz şekilde doldurmanız gerekmektedir.
            </li>
            <li style={{ marginBottom: "15px" }}>
              <strong>Ödeme:</strong> Kiralama ücretini belirtilen süre içinde ödemeniz gereklidir. Ödemenizi kredi kartı, banka transferi veya diğer kabul edilen yöntemlerle yapabilirsiniz.
            </li>
            <li style={{ marginBottom: "15px" }}>
              <strong>İptal Politikası:</strong> Rezervasyon iptali durumunda, belirli koşullara göre ücret iadesi yapılabilir. Detaylı bilgi için iptal politikamızı inceleyin.
            </li>
            <li style={{ marginBottom: "15px" }}>
              <strong>Tesis Kuralları:</strong> Villalarımızda sigara içilmez, evcil hayvan kabul edilmez ve parti düzenlenemez.
            </li>
            <li style={{ marginBottom: "15px" }}>
              <strong>Giriş ve Çıkış Saatleri:</strong> Giriş saati 16:00, çıkış saati ise 10:00’dir.
            </li>
          </ul>

          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "40px" }}>
            INN ELEGANCE LIMITED LIABILITY COMPANY REZERVASYON İPTAL VE İADE ŞARTLARI
          </h2>
          <p style={{ fontSize: "1.25rem", color: "#333", marginTop: "20px" }}>
            Öncelikle, Inn Elegance markası ve <a href="https://www.innelegance.com" target="_blank" rel="noopener noreferrer" style={{ color: "#007bff", textDecoration: "underline" }}>www.innelegance.com</a> internet sitemizin tamamen Inn Elegance LLC’ye ait olduğunu resmi olarak duyurmaktan memnuniyet duyarız.
          </p>
          <p style={{ fontSize: "1.25rem", color: "#333", marginTop: "10px" }}>
            Inn Elegance LLC, Florida merkezli bir şirket olup, lüks villa, daire, otel ve diğer konaklama seçenekleri sunan bir platformdur...
          </p>

          <h3 style={{ fontSize: "1.75rem", fontWeight: "bold", marginTop: "30px" }}>
            TARAFLAR VE AMAÇ
          </h3>
          <p style={{ fontSize: "1.25rem", color: "#333", marginTop: "10px" }}>
            Bu sözleşme; “VİLLAYI/APARTI” kiralayan (bundan böyle “MÜŞTERİ” olarak anılacaktır) ile “VİLLAYI/APARTI” kiraya veren (bundan böyle “INN ELEGANCE” olarak anılacaktır) arasında...
          </p>

          <h3 style={{ fontSize: "1.75rem", fontWeight: "bold", marginTop: "30px" }}>
            İPTAL KOŞULLARI
          </h3>
          <ul style={{ listStyle: "none", paddingLeft: "0", fontSize: "1.25rem", color: "#333" }}>
            <li style={{ marginBottom: "15px" }}>
              <strong>Eğer Ön Ödeme (Kapora) Alınmışsa:</strong>
              <ul style={{ marginTop: "10px", paddingLeft: "20px", listStyle: "disc", color: "#555" }}>
                <li style={{ marginBottom: "10px" }}>Rezervasyon için ödenen %20’lik ön ödeme kesinlikle iade edilmez.</li>
                <li style={{ marginBottom: "10px" }}>30 gün veya daha az kala iptallerde ödemenin tamamı alınır.</li>
              </ul>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <strong>Eğer toplam ödemenin tamamı alınmışsa:</strong>
              <ul style={{ marginTop: "10px", paddingLeft: "20px", listStyle: "disc", color: "#555" }}>
                <li style={{ marginBottom: "10px" }}>%20’lik kapora dışında kalan miktar iade edilir.</li>
                <li style={{ marginBottom: "10px" }}>30 günden az kala iptallerde iade yapılmaz.</li>
              </ul>
            </li>
          </ul>

          <p style={{ fontSize: "1.25rem", color: "#333", marginTop: "20px" }}>
            Daha fazla bilgi veya destek için bizimle iletişime geçebilirsiniz:
            <br />
            <a href="mailto:info@innelegance.com" style={{ color: "#007bff", textDecoration: "underline" }}>info@innelegance.com</a> | <a href="tel:+905313216100" style={{ color: "#007bff", textDecoration: "underline" }}>+90 (531) 321 61 00</a>
          </p>

          <div style={{ display: "flex", justifyContent: "center", marginTop: "40px", gap: "20px" }}>
  <a
    href="/data/kiralama-sartlari-tr.pdf"
    download="kiralama-sartlari-tr.pdf"
    style={{
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      textDecoration: "none",
      borderRadius: "5px",
      fontWeight: "bold",
      textAlign: "center",
    }}
  >
    Kiralama Şartları TR
  </a>
  <a
    href="/data/renting-facts-en.pdf"
    download="renting-facts-en.pdf"
    style={{
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      textDecoration: "none",
      borderRadius: "5px",
      fontWeight: "bold",
      textAlign: "center",
    }}
  >
    Renting Terms EN
  </a>
</div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Facts;
