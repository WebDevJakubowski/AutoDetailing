'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import Image from 'next/image';
import tlo from '@/assets/tlo.webp';

export default function HomeClient() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src={tlo}
        alt="Tło banera"
        fill
        priority
        className="object-cover z-0"
      />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center bg-black/50 px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Witaj w naszej myjni!
        </motion.h1>

        <motion.p
          className="text-xl mt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Pozwól nam zadbać o swoje auto!
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <motion.div
  whileHover={{
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  }}
>
  <Link
    href="/oferta"
    className="py-3 px-6 rounded-md text-black font-bold text-lg transition-colors duration-300"
    style={{ backgroundColor: "#FFD700" }}
  >
    Sprawdź ofertę
  </Link>
</motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
