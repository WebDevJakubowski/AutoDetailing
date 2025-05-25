import OfertaClient from "@/components/OfertaClient";

export const metadata = {
  title: "Oferta Usług Detailingowych - Mycie i Sprzątanie Samochodów",
  description: "Oferujemy kompleksową ofertę usług detailingowych dla Twojego auta. Mycie, polerowanie, woskowanie, czyszczenie wnętrza i więcej.",
  openGraph: {
    title: "Oferta Usług Detailingowych - Mycie i Sprzątanie Samochodów",
    description: "Profesjonalne usługi detailingowe: mycie aut, polerowanie, czyszczenie wnętrza i woskowanie. Zadbaj o swoje auto z naszą pomocą!",
    url: "https://autocelebryta.cfolks.pl/oferta",
    images: [
      {
        url: "https://autocelebryta.cfolks.pl/_next/static/media/cleaning-car.388a2709.webp",
      },
    ],
  },
  alternates: {
    canonical: "https://autocelebryta.cfolks.pl/oferta",
  },
  robots: "index, follow",
  keywords: ["detailing samochodowy", "mycie i czyszczenie aut", "oferta detailingowa", "polerowanie", "woskowanie", "czyszczenie wnętrza auta"]
};

export default function OfertaPage() {
  return <OfertaClient />;
}
