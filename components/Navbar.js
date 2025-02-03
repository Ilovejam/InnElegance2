import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        
        {/* Logo */}
       

        {/* Search Bar */}
      
        {/* Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-600">
          <Link href="/">Ana Sayfa</Link>
          <Link href="/kiralik-villalar">Kiralık Villalar</Link>
          <Link href="/bolgeler">Bölgeler</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/iletisim">İletişim</Link>
          <Link href="/rezervasyonlarim" className="text-black font-semibold">
            Rezervasyonlarım
          </Link>
        </nav>

        {/* Right Section */}
       
        {/* Mobile Menu Button */}
       
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full left-0 w-full py-4 px-6 space-y-4">
          <Link href="/" className="block text-gray-700 hover:text-black">Ana Sayfa</Link>
          <Link href="/kiralik-villalar" className="block text-gray-700 hover:text-black">Kiralık Villalar</Link>
          <Link href="/bolgeler" className="block text-gray-700 hover:text-black">Bölgeler</Link>
          <Link href="/blog" className="block text-gray-700 hover:text-black">Blog</Link>
          <Link href="/iletisim" className="block text-gray-700 hover:text-black">İletişim</Link>
          <Link href="/rezervasyonlarim" className="block text-black font-semibold">Rezervasyonlarım</Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;