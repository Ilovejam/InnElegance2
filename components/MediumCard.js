import { useState } from "react";
import { UserIcon, HomeIcon, BuildingLibraryIcon } from "@heroicons/react/24/solid";

function MediumCard({ images, name, location, capacity, bedrooms, bathrooms, price_per_night }) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white font-inter p-6 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition duration-300 ease-in-out w-full max-w-md relative">
      {/* Görsel Kutusu */}
      <div className="relative overflow-hidden rounded-xl h-56 w-full">
        <img
          src={images[currentImage]}
          alt={`${name} image ${currentImage + 1}`}
          className="object-cover w-full h-full rounded-xl transition-all duration-500"
        />
        {/* Önceki ve Sonraki Butonları */}
        <button
          onClick={handlePrevImage}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full"
        >
          ◀
        </button>
        <button
          onClick={handleNextImage}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full"
        >
          ▶
        </button>
        {/* Favori Butonu */}
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </button>
      </div>
      {/* Bilgi Bölümü */}
      <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{location}</p>
        <div className="flex items-center text-sm mt-3 space-x-4">
          {/* Kişi */}
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow">
            <UserIcon className="h-5 w-5 text-gray-500" />
            <span className="ml-2 w-10">{capacity} Kişi</span>
          </div>
          {/* Yatak Odası */}
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow">
            <HomeIcon className="h-5 w-5 text-gray-500" />
            <span className="ml-2 w-20">{bedrooms} Yatak O.</span>
          </div>
          {/* Banyo */}
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow">
            <BuildingLibraryIcon className="h-5 w-5 text-gray-500" />
            <span className="ml-2 w-20">{bathrooms} Banyo</span>
          </div>
        </div>
      </div>
      {/* Fiyat ve Detay */}
      <div className="flex items-center justify-between mt-6">
        <div>
          <span className="text-xl font-bold text-gray-800">{price_per_night}</span>
          <span className="text-sm text-gray-500"> /Gece</span>
        </div>
        <button className="flex items-center bg-[#f9f8f7] p-2 rounded-full shadow hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default MediumCard;