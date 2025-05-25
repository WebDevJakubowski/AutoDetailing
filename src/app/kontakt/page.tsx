import KontaktClient from "@/components/KontaktClient";

export const metadata = {
  title: "Kontakt - Detailing Samochodowy, Mycie i Sprzątanie Aut",
  description: "Skontaktuj się z nami, aby umówić usługę detailingową. Mycie i sprzątanie aut w Twoim mieście. Zapewniamy najwyższą jakość usług.",
  keywords: [
    "kontakt z firmą detailingową",
    "umów usługę mycia auta",
    "czyszczenie wnętrza auta kontakt"
  ],
  openGraph: {
    title: "Kontakt - Detailing Samochodowy, Mycie i Sprzątanie Aut",
    description: "Skontaktuj się z naszą firmą, aby umówić usługę detailingową. Mycie, czyszczenie wnętrza, polerowanie i woskowanie aut.",
    url: "https://autocelebryta.cfolks.pl/kontakt",
    images: [
      {
        url: "https://autocelebryta.cfolks.pl/_next/static/media/baner1.48ebde58.webp",
      },
    ],
  },
  alternates: {
    canonical: "https://autocelebryta.cfolks.pl/kontakt",
  },
  robots: "index, follow",
};

export default function KontaktPage() {
  return <KontaktClient />;
}
