import Footer from "@/components/layout/Footer";
import "../globals.css";
import { Montserrat } from "next/font/google";
import Header from "@/components/layout/Header";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-montserrat",
});

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isSerbian = locale === "sr";

  const title = isSerbian
    ? "Nemanja Nakomčić | Full-Stack Web Programer"
    : "Nemanja Nakomcic | Full-Stack Web Developer";

  const description = isSerbian
    ? "Zdravo, ja sam Nemanja Nakomčić – full-stack programer fokusiran na moderne web tehnologije kao što su React i Next.js. Pogledaj moje projekte i veštine."
    : "Hi, I'm Nemanja Nakomcic – a full-stack web developer specialized in modern technologies like React and Next.js. Check out my projects and skills.";

  const baseUrl = "https://tvoj-domen.com";

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        sr: `${baseUrl}/sr`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: "Nemanja Nakomcic Portfolio",
      locale: isSerbian ? "sr_RS" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@tvoj_twitter",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  return (
    <html lang={locale} className={montserrat.variable}>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
