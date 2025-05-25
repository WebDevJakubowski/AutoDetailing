// src/app/layout.tsx
"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { usePathname } from "next/navigation";




export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Pobiera aktualną ścieżkę
  const isHomePage = pathname === "/";

  return (
    <html lang="en">
      <head>
        {/* Dodanie favicon */}
        <link rel="icon" href="/ikona.webp" />
        
        {/* Możesz dodać także różne rozmiary favicon, jeśli chcesz */}
        {/* <link rel="icon" href="/favicon-32x32.png" sizes="32x32" /> */}
      </head>
      <body>
        <div className="flex flex-col min-h-screen">
          {/* Zmieniamy klasę w zależności od strony */}
          <Navbar className={isHomePage ? "absolute top-0 left-0 w-full" : "fixed top-0 left-0 w-full bg-white shadow-md"} />
          <main className={isHomePage ? "mt-0" : "mt-[80px]"}> {/* Tutaj ustawiamy margines */}
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
