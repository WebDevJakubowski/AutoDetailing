"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import firma from '@/assets/aaaaaa.webp';

const OFirmieClient = () => {
  return (
    <div className="bg-[#121212] text-white min-h-screen py-16">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl font-semibold text-center text-[#FFD700] mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          O Nas
        </motion.h1>

        <motion.p
          className="text-xl text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Jesteśmy profesjonalną firmą zajmującą się kompleksowym detailingiem samochodowym...
        </motion.p>

        {/* Historia */}
        <motion.div className="mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
          <h2 className="text-3xl font-semibold text-center text-[#FFD700] mb-8">Nasza Historia</h2>
          <p className="text-lg text-center">
            Nasza firma powstała z pasji do motoryzacji i dbania o każdy detal...
          </p>
        </motion.div>

        {/* Misja */}
        <motion.div className="mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
          <h2 className="text-3xl font-semibold text-center text-[#FFD700] mb-8">Nasza Misja</h2>
          <p className="text-lg text-center">
            Naszym celem jest zapewnienie naszym klientom najlepszej jakości usług...
          </p>
        </motion.div>

        {/* Zespół */}
        <motion.div className="mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
          <h2 className="text-3xl font-semibold text-center text-[#FFD700] mb-8">Nasz Zespół</h2>
          <p className="text-lg text-center mb-6">
            Nasz zespół to pasjonaci motoryzacji z doświadczeniem...
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Jan Kowalski", desc: "Specjalista Detailingowy..." },
              { name: "Anna Nowak", desc: "Konsultantka klienta..." },
              { name: "Tomasz Wiśniewski", desc: "Menedżer warsztatu..." },
            ].map(({ name, desc }, index) => (
              <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:bg-[#252525] transition-colors duration-300">
                <h3 className="text-xl font-bold text-[#FFD700] mb-4">{name}</h3>
                <p className="text-lg">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Wartości */}
        <motion.div className="mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          <h2 className="text-3xl font-semibold text-center text-[#FFD700] mb-8">Nasze Wartości</h2>
          <ul className="list-disc pl-8 space-y-4 text-lg">
            <li>Pasja do motoryzacji</li>
            <li>Profesjonalizm i jakość</li>
            <li>Dbamy o detale</li>
            <li>Zaangażowanie w każdy projekt</li>
            <li>Zaufanie i satysfakcja klientów</li>
          </ul>
        </motion.div>

        {/* Biuro */}
        <motion.div className="mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}>
          <h2 className="text-3xl font-semibold text-center text-[#FFD700] mb-8">Nasze Biuro i Warsztat</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {[firma, firma, firma].map((src, i) => (
              <Image key={i} src={src} alt={`Biuro ${i + 1}`} className="rounded-lg" width={400} height={300} loading="lazy" />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OFirmieClient;
