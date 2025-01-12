import Pagination from "@/components/blog/Pagination";
import Blog from "@/components/blog/blog-list-v1/Blog";
import BlogSidebar from "@/components/blog/sidebar";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";

export const metadata = {
  title: "Blog Listesi v1 || Homez - Emlak NextJS Şablonu",
};

const BlogV1 = () => {
  return (
    <div className="bgc-f7">
      {/* Ana Başlık Navigasyonu */}
      <DefaultHeader />
      {/* Ana Başlık Navigasyonu Sonu */}

      {/* Mobil Navigasyon */}
      <MobileMenu />
      {/* Mobil Navigasyon Sonu */}

      {/* Sayfa Başlığı Başlangıcı */}
      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Blog</h2>
                <div className="breadcumb-list">
                  <a href="#">Anasayfa</a>
                  <a href="#">Blog</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sayfa Başlığı Sonu */}

      {/* Blog Bölümü */}
      <section className="our-blog pt-0">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-8">
              <Blog />
              <div className="row">
                
              </div>
              {/* .row Sonu */}
            </div>
            {/* .col-lg-8 Sonu */}

            
            {/* .col-lg-4 Sonu */}
          </div>
          {/* .row Sonu */}
        </div>
        {/* .container Sonu */}
      </section>
      {/* Blog Bölümü Sonu */}

      {/* Footer Başlangıcı */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* Footer Sonu */}
    </div>
  );
};

export default BlogV1;
