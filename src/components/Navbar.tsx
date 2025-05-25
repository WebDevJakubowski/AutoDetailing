'use client';

import { useState, forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/karczoch.webp";
import { usePathname } from 'next/navigation';


const Navbar = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>((props, ref) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav
   
      className="w-full top-0 left-0 z-50 text-white border-b border-yellow-500 transition-all duration-300 fixed bg-[rgba(0,0,0,0.3)] backdrop-blur-xs"
      ref={ref}
    >
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Link href="/">
              <Image src={logo} alt="logo" width={100} height={100} />
            </Link>
          </div>

          {/* Lista menu */}
          <ul className="hidden lg:flex ml-14 space-x-12 text-[15px]">
            {[
              { name: "Strona Główna", href: "/" },
              { name: "Oferta", href: "/oferta" },
              { name: "Cennik", href: "/cennik" },
              { name: "Realizacje", href: "/realizacje" },
              { name: "O Firmie", href: "/o-firmie" },
              { name: "Kontakt", href: "/kontakt" }
            ].map(({ name, href }, index) => (
              <li key={index}>
                <Link
  href={href}
  className={`font-bold transition-colors duration-300 hover:text-[#FFD700] hover-outline ${
    pathname === href && pathname !== '/' ? 'text-[#FFD700]' : ''
  }`}
>
  {name}
</Link>

              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="https://www.instagram.com/" className="bg-transparent py-2 px-3 rounded-md hover:text-[#FFD700] transition-colors duration-300">
              <Instagram />
            </a>
            <a href="https://www.facebook.com/" className="bg-transparent py-2 px-3 rounded-md hover:text-[#FFD700] transition-colors duration-300">
              <Facebook />
            </a>
          </div>

          <div className="lg:hidden flex flex-col justify-end">
            <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="absolute top-full left-0 z-20 bg-[#1a1a1a] w-full p-6 flex flex-col items-center shadow-lg lg:hidden">
            <ul className="flex flex-col items-center space-y-4 mt-6">
              {[
                { name: "Strona Główna", href: "/" },
                { name: "Oferta", href: "/oferta" },
                { name: "Cennik", href: "/cennik" },
                { name: "Realizacje", href: "/realizacje" },
                { name: "O Firmie", href: "/o-firmie" },
                { name: "Kontakt", href: "/kontakt" }
              ].map(({ name, href }, index) => (
                <li key={index}>
                  <Link
  href={href}
  className={`font-bold transition-colors duration-300 hover:text-[#FFD700] ${
    pathname === href && pathname !== '/' ? 'text-[#FFD700]' : 'text-white'
  }`}
  onClick={() => setMobileDrawerOpen(false)}
>
  {name}
</Link>

                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-6">
              <a href="https://www.instagram.com/" className="text-white hover:text-[#FFD700] transition-colors duration-300">
                <Instagram />
              </a>
              <a href="https://www.facebook.com/" className="text-white hover:text-[#FFD700] transition-colors duration-300">
                <Facebook />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
