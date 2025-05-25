import HomeClient from "@/components/HomeClient";

export const metadata = {
  title: "Detailing Zone by Karczoch",
  description: "Kompleksowe usługi auto detailingu – mycie, czyszczenie, ochrona lakieru. Zadbaj o swoje auto z Detailing Zone by Karczoch.",
  keywords: ["detailing", "auto detailing", "karczoch detailing", "myjnia", "czyszczenie auta", "ochrona lakieru", "białogard", "auto detailing białogard",],
  openGraph: {
    title: "Detailing Zone by Karczoch",
    description: "Świadczymy usługi detailingowe najwyższej jakości. Mycie, czyszczenie wnętrza, woskowanie – zaufaj ekspertom.",
    url: "https://autocelebryta.cfolks.pl/",
    images: [
      {
        url: "https://autocelebryta.cfolks.pl/_next/static/media/cleaning-car2.679e5193.webp",
        width: 1200,
        height: 630,
        alt: "Auto detailing baner",
      },
    ],
  },
  alternates: {
    canonical: "https://autocelebryta.cfolks.pl/",
  },
  robots: "index, follow",
};

export default function HomePage() {
  return <HomeClient />;
}
