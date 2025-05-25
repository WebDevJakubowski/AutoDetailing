
import Realizacje from "@/components/RealizacjeClient";

export const metadata = {
  title: "Realizacje Detailingowe - Mycie i Sprzątanie Aut",
  description: "Zobacz nasze realizacje detailingowe. Mycie, czyszczenie wnętrza i woskowanie aut.",
  keywords: ["realizacje detailing", "mycie aut", "czyszczenie wnętrza", "detailing samochodowy"],
  openGraph: {
    title: "Realizacje Detailingowe - Mycie i Sprzątanie Aut",
    description: "Zobacz nasze profesjonalne realizacje detailingowe. Przykłady naszej pracy.",
    url: "https://autocelebryta.cfolks.pl/realizacje",
    images: [
      {
        url: "https://autocelebryta.cfolks.pl/_next/static/media/podsufitkapo.db1cac2b.webp",
      },
    ],
  },
  alternates: {
    canonical: "https://autocelebryta.cfolks.pl/realizacje",
  },
};

export default function RealizacjePage() {
  return <Realizacje />;
}
