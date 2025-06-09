import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SigortaPlus - İstanbul Sigorta Danışmanı | Insurance Advisor Istanbul",
  description: "İstanbul'da güvenilir sigorta danışmanlığı hizmeti. Kasko, hayat, sağlık, konut sigortası ve daha fazlası için uzman danışmanlık. Trusted insurance consultancy service in Istanbul.",
  keywords: "sigorta, insurance, İstanbul, Istanbul, kasko, hayat sigortası, sağlık sigortası, konut sigortası, sigorta danışmanı, insurance advisor",
  authors: [{ name: "SigortaPlus" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "SigortaPlus - İstanbul Sigorta Danışmanı",
    description: "İstanbul'da güvenilir sigorta danışmanlığı hizmeti. 15 yıllık deneyimimizle yanınızdayız.",
    type: "website",
    locale: "tr_TR",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
