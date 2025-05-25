"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import img1 from "@/assets/realizacje/podsufitkaprzed.webp";
import img2 from "@/assets/realizacje/podsufitkapo.webp";
import img3 from "@/assets/realizacje/wnetrzeprzed.webp";
import img4 from "@/assets/realizacje/wnetrzepo.webp";

const RealizacjeClient = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-[#121212] text-white min-h-screen py-16">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl font-semibold text-center text-[#FFD700] mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Nasze Realizacje
        </motion.h1>

        <motion.p
          className="text-xl text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Zobacz efekty naszej pracy! Oferujemy kompleksowy detailing, który przekształca Twoje auto.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {[{ before: img1, after: img2 }, { before: img3, after: img4 }].map(
            ({ before, after }, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:bg-[#252525] transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <h3 className="text-xl font-bold text-[#FFD700] mb-4">Przed/Po</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[before, after].map((src, i) => (
                    <motion.div
                      key={i}
                      className="cursor-pointer overflow-hidden rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setSelectedImage(src.src)}
                      tabIndex={-1}
                    >
                      <Image src={src} alt="Przed/Po" className="rounded-lg" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </motion.div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                className="max-w-3xl max-h-[80vh] rounded-lg shadow-lg cursor-pointer"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RealizacjeClient;
