import CennikClient from "@/components/CennikClient";

export const metadata = {
  title: "Cennik Usług Detailingowych - Mycie i Sprzątanie Aut",
  description: "Sprawdź nasz cennik usług detailingowych. Profesjonalne mycie i czyszczenie aut w atrakcyjnych cenach.",
  keywords: [
    "cennik detailing", "ceny mycia samochodów", "usługi detailingowe cena", "mycie auta cena"
  ],
  openGraph: {
    title: "Cennik Usług Detailingowych - Mycie i Sprzątanie Aut",
    description: "Zobacz ceny naszych usług. Profesjonalne mycie aut, czyszczenie wnętrza i woskowanie w przystępnych cenach.",
    url: "https://autocelebryta.cfolks.pl/cennik",
    images: [
      {
        url: "https://autocelebryta.cfolks.pl/_next/static/media/cleaning-car2.679e5193.webp",
      },
    ],
  },
  alternates: {
    canonical: "https://autocelebryta.cfolks.pl/cennik",
  },
  robots: "index, follow",
};

export default function CennikPage() {
  return <CennikClient />;
}
