import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-6 text-center text-white bg-[#1a1a1a]">
      <p className="text-sm text-white">
        © {new Date().getFullYear()} Detailing Zone by Karczoch. Wszelkie prawa zastrzeżone.
        <br /> Projekt i realizacja:&nbsp;
        <Link
          href="https://portfoliojakubowski.cfolks.pl/"
          className="font-semibold text-[#FFD700] hover:underline hover:text-yellow-400 transition-colors duration-300"
        >
          Piotr Jakubowski
        </Link>.
      </p>
    </footer>
  );
};

export default Footer;
