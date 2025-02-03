import Image from "next/image";

function SmallCard({ img, title }) {
  return (
    <div className="flex flex-col items-center text-center p-4 m-2 space-y-2 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition duration-200 ease-out">
      {/* İkon Kutusu */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-300">
        <Image 
          src={img} 
          alt={title} 
          width={40} 
          height={40} 
          className="object-contain"
        />
      </div>
      {/* Yazılar */}
      <span className="text-gray-700 text-sm font-medium">{title}</span>
    </div>
  );
}

export default SmallCard;