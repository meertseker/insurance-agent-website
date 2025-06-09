import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MaviSigorta - Tamamlayıcı Sağlık Sigortası TSS | Kasko Hayat Konut Sigortası İstanbul",
  description: "MaviSigorta ile TSS tamamlayıcı sağlık sigortası, kasko, hayat, konut, işyeri sigortası için en uygun fiyatlarla teklif alın. İstanbul Beşiktaş'ta 15 yıllık deneyim. Online sigorta, anında teklif, SGK anlaşmalı hastaneler, fark ödemeden tedavi. Sağlık sigortası, otomobil sigortası, ev sigortası, ticari sigorta, seyahat sigortası.",
  keywords: "tamamlayıcı sağlık sigortası, TSS, kasko sigortası, hayat sigortası, konut sigortası, sağlık sigortası, otomobil sigortası, ev sigortası, işyeri sigortası, ticari sigorta, seyahat sigortası, sigorta istanbul, sigorta beşiktaş, sigorta fiyatları, sigorta teklifi, online sigorta, dijital sigorta, sigorta acentesi, sigorta şirketi, sigorta danışmanı, en ucuz sigorta, uygun fiyat sigorta, anında sigorta teklifi, SGK anlaşmalı hastane, özel sağlık sigortası, bireysel emeklilik, BES, ferdi kaza sigortası, dask, zorunlu deprem sigortası, trafik sigortası, mtpl, sigorta poliçesi, sigorta primiumi, sigorta ödemesi, hasar dosyası, sigorta claim, sigorta karşılaştırma, sigorta hesaplama, mavisigorta, mavi sigorta, istanbul sigorta firması, güvenilir sigorta, lisanslı sigorta acentesi, 7/24 sigorta hizmeti, hızlı sigorta çözümü, profesyonel sigorta danışmanlığı, sigorta uzmanı, en iyi sigorta, kaliteli sigorta hizmeti, müşteri memnuniyeti sigorta, sigorta yorumları, sigorta deneyimleri, sigorta tavsiyeleri, sigorta rehberi, sigorta bilgileri, sigorta süreçleri, sigorta avantajları, sigorta faydaları, sigorta kapsamı, sigorta teminatları, sigorta koşulları, sigorta sözleşmesi, sigorta poliçe şartları",
  authors: [{ name: "MaviSigorta" }],
  creator: "MaviSigorta Sigorta Acentesi",
  publisher: "MaviSigorta",
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    title: "MaviSigorta - TSS Tamamlayıcı Sağlık Sigortası ve Tüm Sigorta Türleri İstanbul",
    description: "İstanbul'da güvenilir sigorta danışmanlığı. TSS, kasko, hayat, konut sigortası için en uygun fiyatlarla hizmet. 15 yıllık deneyim, 7/24 destek, anında teklif.",
    url: "https://mavisigorta.com",
    siteName: "MaviSigorta",
    images: [
      {
        url: "https://mavisigorta.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MaviSigorta - İstanbul Sigorta Acentesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MaviSigorta - TSS Tamamlayıcı Sağlık Sigortası İstanbul",
    description: "TSS, kasko, hayat, konut sigortası için en uygun fiyatlarla teklif alın. 15 yıllık deneyim.",
    images: ["https://mavisigorta.com/twitter-image.jpg"],
    creator: "@mavisigorta",
    site: "@mavisigorta",
  },
  alternates: {
    canonical: "https://mavisigorta.com",
    languages: {
      'tr-TR': 'https://mavisigorta.com',
      'en-US': 'https://mavisigorta.com/en',
    },
  },
  category: "Business",
  classification: "Sigorta Acentesi",
  other: {
    'geo.region': 'TR-34',
    'geo.placename': 'İstanbul',
    'geo.position': '41.0082;28.9784',
    'ICBM': '41.0082, 28.9784',
    'DC.title': 'MaviSigorta - İstanbul Sigorta Acentesi',
    'DC.creator': 'MaviSigorta',
    'DC.subject': 'Sigorta, TSS, Kasko, Hayat Sigortası',
    'DC.description': 'İstanbul\'da güvenilir sigorta danışmanlığı hizmeti',
    'DC.publisher': 'MaviSigorta',
    'DC.contributor': 'MaviSigorta Uzman Ekip',
    'DC.date': '2025',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://mavisigorta.com',
    'DC.source': 'https://mavisigorta.com',
    'DC.language': 'tr',
    'DC.coverage': 'İstanbul, Türkiye',
    'DC.rights': 'Copyright 2025 MaviSigorta',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://mavisigorta.com/#organization",
        "name": "MaviSigorta",
        "alternateName": ["Mavi Sigorta", "MaviSigorta Acentesi"],
        "url": "https://mavisigorta.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mavisigorta.com/logo.png",
          "width": 200,
          "height": 200
        },
        "description": "İstanbul'da güvenilir sigorta danışmanlığı hizmeti. TSS, kasko, hayat, konut sigortası.",
        "foundingDate": "2010",
        "email": "info@mavisigorta.com",
        "telephone": "+905551234567",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Beşiktaş",
          "addressLocality": "İstanbul",
          "addressCountry": "TR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 41.0082,
          "longitude": 28.9784
        },
        "sameAs": [
          "https://www.facebook.com/mavisigorta",
          "https://www.twitter.com/mavisigorta",
          "https://www.linkedin.com/company/mavisigorta"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+905551234567",
          "contactType": "customer service",
          "availableLanguage": ["Turkish", "English"],
          "areaServed": "TR"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://mavisigorta.com/#website",
        "url": "https://mavisigorta.com",
        "name": "MaviSigorta",
        "description": "İstanbul sigorta acentesi. TSS, kasko, hayat, konut sigortası hizmetleri.",
        "publisher": {
          "@id": "https://mavisigorta.com/#organization"
        },
        "inLanguage": "tr-TR",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://mavisigorta.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://mavisigorta.com/#localbusiness",
        "name": "MaviSigorta",
        "image": "https://mavisigorta.com/business-image.jpg",
        "telephone": "+905551234567",
        "email": "info@mavisigorta.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Beşiktaş",
          "addressLocality": "İstanbul",
          "addressCountry": "TR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 41.0082,
          "longitude": 28.9784
        },
        "url": "https://mavisigorta.com",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "15:00"
          }
        ],
        "priceRange": "$$",
        "servesCuisine": "Insurance Services",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Sigorta Hizmetleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tamamlayıcı Sağlık Sigortası (TSS)",
                "description": "SGK anlaşmalı hastanelerde fark ödemeden tedavi"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Kasko Sigortası",
                "description": "Otomobil sigortası hizmetleri"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hayat Sigortası",
                "description": "Bireysel hayat sigortası poliçeleri"
              }
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://mavisigorta.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Ana Sayfa",
            "item": "https://mavisigorta.com"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Tamamlayıcı Sağlık Sigortası",
        "provider": {
          "@id": "https://mavisigorta.com/#organization"
        },
        "areaServed": "İstanbul",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "TSS Paketleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "Varies",
                "priceCurrency": "TRY"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* SEO Meta Tags */}
        <meta name="subject" content="Sigorta Hizmetleri" />
        <meta name="copyright" content="MaviSigorta" />
        <meta name="language" content="Turkish" />
        <meta name="revised" content="Sunday, January 1st, 2025, 5:15 pm" />
        <meta name="abstract" content="İstanbul'da güvenilir sigorta danışmanlığı" />
        <meta name="topic" content="Sigorta, TSS, Kasko, Hayat Sigortası" />
        <meta name="summary" content="MaviSigorta ile tüm sigorta ihtiyaçlarınız için çözüm" />
        <meta name="owner" content="MaviSigorta" />
        <meta name="url" content="https://mavisigorta.com" />
        <meta name="identifier-URL" content="https://mavisigorta.com" />
        <meta name="directory" content="submission" />
        <meta name="category" content="Business, Insurance, Health, Finance" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="1 days" />
        <meta name="subtitle" content="Güvenilir Sigorta Partneri" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="og:email" content="info@mavisigorta.com" />
        <meta name="og:phone_number" content="+905551234567" />
        <meta name="og:fax_number" content="+905551234567" />
        <meta name="og:latitude" content="41.0082" />
        <meta name="og:longitude" content="28.9784" />
        <meta name="og:street-address" content="Beşiktaş" />
        <meta name="og:locality" content="İstanbul" />
        <meta name="og:region" content="İstanbul" />
        <meta name="og:postal-code" content="34000" />
        <meta name="og:country-name" content="Turkey" />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://mavisigorta.com" />
        <link rel="alternate" hrefLang="tr-tr" href="https://mavisigorta.com" />
        <link rel="alternate" hrefLang="en-us" href="https://mavisigorta.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://mavisigorta.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
      </head>
      <body className="antialiased">
        {children}
        
        {/* Additional Structured Data for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "TSS nedir?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tamamlayıcı Sağlık Sigortası (TSS), SGK ile anlaşmalı özel hastanelerde fark ücreti ödemeden sağlık hizmeti almanızı sağlar."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Kasko sigortası zorunlu mu?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kasko sigortası zorunlu değildir ancak aracınızı kapsamlı şekilde korumak için önerilir."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Sigorta fiyatları nasıl hesaplanır?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sigorta fiyatları yaş, cinsiyet, meslek, şehir ve seçilen teminatlar gibi faktörlere göre hesaplanır."
                  }
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
