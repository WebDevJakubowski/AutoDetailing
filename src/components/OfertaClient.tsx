'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import cleaningImage from "@/assets/cleaning-car.webp";

const OfertaClient = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-5xl mx-auto p-6 text-white"
    >
      <motion.h1
        className="text-3xl font-bold  text-[#FFD700] text-center my-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        
      >
        Nasza Oferta
      </motion.h1>

      <motion.img
        src={cleaningImage.src}
        alt="Czyszczenie samochodu"
        className="w-full h-80 object-cover rounded-2xl shadow-lg mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        loading="lazy"
      />

      <motion.p
        className="text-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Nasza firma specjalizuje się w profesjonalnym auto detailingu, oferując kompleksowe usługi pielęgnacyjne dla Twojego pojazdu. 
        Dzięki pasji, precyzji i najwyższej jakości kosmetykom samochodowym, przywracamy autu nieskazitelny wygląd – zarówno wewnątrz, jak i na zewnątrz.
      </motion.p>

      <motion.h2
        className="text-2xl font-semibold text-[#FFD700] mt-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Detailing wnętrza
      </motion.h2>
      <motion.ul
        className="list-disc list-inside text-lg mt-3 space-y-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <li>✔ <span className="text-[#FFD700] font-medium">Pranie tapicerki, podsufitki i podłogi</span> – usuwanie zabrudzeń, plam i nieprzyjemnych zapachów.</li>
        <li>✔ <span className="text-[#FFD700] font-medium">Czyszczenie wnętrza</span> – mycie plastików, kokpitu oraz pielęgnacja skór.</li>
        <li>✔ <span className="text-[#FFD700] font-medium">Czyszczenie pasów bezpieczeństwa</span> – usuwanie zabrudzeń i odświeżenie materiału.</li>
      </motion.ul>

      <motion.h2
        className="text-2xl font-semibold text-[#FFD700] mt-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        Detailing zewnętrzny
      </motion.h2>
      <motion.ul
        className="list-disc list-inside text-lg mt-3 space-y-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <li>✔ <span className="text-[#FFD700] font-medium">Dokładne mycie samochodu</span> – aktywna piana usuwa brud bez rysowania lakieru.</li>
        <li>✔ <span className="text-[#FFD700] font-medium">Ręczne nakładanie wosku</span> – ochrona lakieru i głęboki połysk.</li>
      </motion.ul>

      <motion.p
        className="text-lg mt-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        📞{" "}
        <Link
          href="/kontakt"
          className="font-semibold text-[#FFD700] hover:text-yellow-400 transition-colors duration-300 underline"
        >
          Zadzwoń do nas i umów wizytę!
        </Link>
      </motion.p>
    </motion.div>
  );
};

export default OfertaClient;
