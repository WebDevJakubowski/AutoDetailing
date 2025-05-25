'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import cleaningImage from "@/assets/cleaning-car2.webp";

const CennikClient = () => {
  return (
    <div className="bg-[#121212] text-white min-h-screen py-16">
      <div className="container mx-auto px-6">

        <motion.h1
          className="text-4xl font-semibold text-center text-[#FFD700] mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Cennik naszych usług
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src={cleaningImage}
            alt="Przykład detailingu"
            className="w-full h-80 object-cover mb-12 rounded-lg"
            loading="lazy"
          />
        </motion.div>

        <motion.p
          className="text-xl text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Oferujemy kompleksowy detailing samochodowy w przystępnych cenach. Zadbaj o swoje auto z nami!
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* KAFLE CZYSZCZENIE WNĘTRZA */}
          <motion.div
            className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:bg-[#252525] transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Czyszczenie wnętrza</h2>
            <ul className="space-y-4 text-lg">
              <li>Pranie tapicerki materiałowej - 150 zł - 250 zł</li>
              <li>Pranie tapicerki skórzanej - 200 zł - 300 zł</li>
              <li>Czyszczenie podsufitki - 100 zł - 150 zł</li>
              <li>Pranie wykładziny - 100 zł - 180 zł</li>
              <li>Czyszczenie pasów - 50 zł - 80 zł</li>
            </ul>
          </motion.div>

          {/* ZEW */}
          <motion.div
            className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:bg-[#252525] transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Detailing zewnętrzny</h2>
            <ul className="space-y-4 text-lg">
              <li>Mycie + woskowanie - 150 zł - 250 zł</li>
              <li>Polerowanie lakieru - 300 zł - 500 zł</li>
              <li>Mycie silnika - 150 zł - 200 zł</li>
              <li>Mycie felg i opon - 80 zł - 120 zł</li>
            </ul>
          </motion.div>

          {/* PAKIETY */}
          <motion.div
            className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:bg-[#252525] transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Pakiety kompleksowe</h2>
            <ul className="space-y-4 text-lg">
            <li>Pakiet &quot;Detailing Wnętrza&quot; - 350 zł - 500 zł</li>
<li>Pakiet &quot;Detailing Zewnętrzny&quot; - 450 zł - 700 zł</li>
<li>Pakiet &quot;Full Detail&quot; - 700 zł - 1000 zł</li>

            </ul>
          </motion.div>
        </motion.div>

        {/* DODATKOWE */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.h2
            className="text-3xl font-semibold text-center text-[#FFD700] mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Dodatkowe usługi
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["Dezynfekcja ozonowa", "150 zł - 200 zł"],
              ["Impregnacja skór", "150 zł - 200 zł"],
              ["Pielęgnacja plastików i gum", "50 zł - 100 zł"]
            ].map(([title, price], i) => (
              <motion.div
                key={i}
                className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:bg-[#252525] transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.3 }}
              >
                <h3 className="text-xl font-bold text-[#FFD700] mb-4">{title}</h3>
                <p className="text-lg">{price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center text-lg text-[#FFD700]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <p>Rabaty dla stałych klientów i zniżki przy zamówieniu pakietu. Skontaktuj się z nami po szczegóły!</p>
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <Link
            href="/kontakt"
            className="py-3 px-6 bg-[#FFD700] text-black rounded-md font-bold hover:bg-[#e6c200] transition-colors duration-300"
          >
            Skontaktuj się z nami
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CennikClient;
