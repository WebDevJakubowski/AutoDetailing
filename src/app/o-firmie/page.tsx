import OFirmieClient from "@/components/OFirmieClient";

export const metadata = {
  title: "O Firmie - Detailing Samochodowy, Mycie i Sprzątanie Aut",
  description: "Dowiedz się więcej o naszej firmie detailingowej. Profesjonalizm, doświadczenie i pasja do dbania o samochody.",
  keywords: [
    "o firmie detailingowej",
    "profesjonalne mycie aut",
    "historia firmy detailingowej",
    "pasja do aut"
  ],
  openGraph: {
    title: "O Firmie - Detailing Samochodowy, Mycie i Sprzątanie Aut",
    description: "Poznaj naszą firmę, która oferuje najwyższej jakości usługi detailingowe dla Twojego auta. Z nami Twoje auto będzie wyglądać jak nowe!",
    url: "https://autocelebryta.cfolks.pl/o-firmie",
    images: [
      {
        url: "https://autocelebryta.cfolks.pl/_next/static/media/aaaaaa.d784283f.webp",
      },
    ],
  },
  alternates: {
    canonical: "https://autocelebryta.cfolks.pl/o-firmie",
  },
  robots: "index, follow",
};

export default function OFirmiePage() {
  return <OFirmieClient />;
}
