"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import baner from '@/assets/baner1.webp';
import Link from 'next/link';

const KontaktClient = () => {
  return (
    <div className="bg-[#121212] text-white min-h-screen pt-[80px] pb-16">
      <div className="container mx-auto px-6">

        <motion.h1
          className="text-4xl font-semibold text-center text-[#FFD700] mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Skontaktuj się z nami
        </motion.h1>

        <motion.div
          className="mb-12 mx-auto flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src={baner}
            alt="Kontakt - telefon"
            className="rounded-lg shadow-lg w-full max-w-3xl"
            width={800}
            height={400}
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="bg-[#1a1a1a] p-8 rounded-lg shadow-lg max-w-3xl mx-auto text-center space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold text-[#FFD700] mb-4">Dane kontaktowe</h2>
          <p className="text-lg">
            📍 <strong>Adres:</strong> ul. Detailingowa 123, 78-200 Białogard
          </p>
          <p className="text-lg">
            📞 <strong>Telefon:</strong>{' '}
            <a href="tel:+48123456789" className="text-[#FFD700] hover:underline">
              +48 123 456 789
            </a>
          </p>
          <p className="text-lg">
            📧 <strong>Email:</strong>{' '}
            <a href="mailto:kontakt@detailing.pl" className="text-[#FFD700] hover:underline">
              kontakt@detailing.pl
            </a>
          </p>
        </motion.div>

        <motion.div
          className="mt-10 max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2345.856230848229!2d16.010727999999997!3d54.006123000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4700f01b33fc5db1%3A0x92f563574e1eb0ae!2sBia%C5%82ogard!5e0!3m2!1spl!2spl!4v1640000000000!5m2!1spl!2spl"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Link
            href="/"
            className="py-3 px-6 bg-[#FFD700] text-black rounded-md font-bold hover:bg-[#e6c200] transition-colors duration-300"
          >
            Wróć do strony głównej
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default KontaktClient;
