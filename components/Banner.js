import Image from "next/image";

function Banner() {
  return (
    <section id="entry-banner" className="relative mb-5 lg:mb-0">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src="https://cdn.villaciniz.com.tr/img/bannerSlider-1.jpg"
          alt="slider"
          layout="fill"
          objectFit="cover"
          className="hidden md:block"
          priority
        />
        <Image
          src="https://cdn.villaciniz.com.tr/img/bannerSlider-3.jpg"
          alt="slider"
          layout="fill"
          objectFit="cover"
          className="block md:hidden"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="relative flex flex-col items-center text-center pt-10 md:pt-20">
        <Image
          src="https://cdn.villaciniz.com.tr/img/Text-1.png"
          alt="Banner Text"
          width={600}
          height={500}
          objectFit="contain"
        />
      </div>

      {/* Search Engine Section */}
      
    </section>
  );
}

export default Banner;