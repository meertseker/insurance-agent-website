import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soner Şeker Mavi Sigorta - Allianz Tamamlayıcı Sağlık Sigortası TSS | Modüler Sağlık Sigortası Beylikdüzü İstanbul",
  description: "Soner Şeker Mavi Sigorta Aracılık Hizmetleri ile Allianz TSS tamamlayıcı sağlık sigortası, modüler sağlık sigortası, kasko, trafik, nakliye, DASK sigortası için en uygun fiyatlarla teklif alın. Beylikdüzü İstanbul'da 25 yıllık deneyim. SGK anlaşmalı hastanelerde fark ödemeden tedavi, özel hastane modüler sağlık sigortası, yat sigortası, inşaat ALL risk sigortası.",
  keywords: "Soner Şeker, Mavi Sigorta, Allianz tamamlayıcı sağlık sigortası, TSS, modüler sağlık sigortası, kasko sigortası, trafik sigortası, nakliye sigortaları, ortak alan sigortası, seyahat sağlık sigortası, konut sigortası, işyeri sigortası, DASK sigortası, yeşil kart sigortası, Mavi Dalga yat sigortası, inşaat ALL risk sigortası, inşaat montaj sigortası, AVM sigortası, sorumluluk sigortası, Beylikdüzü sigorta, İstanbul sigorta, sigorta acentesi, sigorta aracılık hizmetleri, en ucuz sigorta, uygun fiyat sigorta, anında sigorta teklifi, SGK anlaşmalı hastane, özel hastane sigortası, Allianz sigorta, 25 yıl deneyim sigorta, profesyonel sigorta danışmanlığı, sigorta uzmanı, güvenilir sigorta, lisanslı sigorta acentesi, online sigorta, dijital sigorta, sigorta karşılaştırma, sigorta hesaplama, Perlevista Rezidans sigorta, Adnan Kahveci mahallesi sigorta",
  authors: [{ name: "Soner Şeker Mavi Sigorta Aracılık Hizmetleri" }],
  creator: "Soner Şeker Mavi Sigorta Aracılık Hizmetleri",
  publisher: "Mavi Sigorta",
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
    title: "Soner Şeker Mavi Sigorta - Allianz TSS ve Modüler Sağlık Sigortası Beylikdüzü İstanbul",
    description: "25 yıllık deneyimle Allianz TSS, modüler sağlık sigortası, kasko, DASK, yat sigortası için en uygun fiyatlarla hizmet. SGK anlaşmalı ve özel hastanelerde kapsamlı koruma.",
    url: "https://mavisigorta.net",
    siteName: "Soner Şeker Mavi Sigorta",
    images: [
      {
        url: "https://mavisigorta.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Soner Şeker Mavi Sigorta - Beylikdüzü İstanbul Sigorta Acentesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soner Şeker Mavi Sigorta - Allianz TSS Modüler Sağlık Sigortası",
    description: "25 yıllık deneyimle TSS, modüler sağlık sigortası, kasko, yat sigortası için en uygun fiyatlarla teklif alın.",
    images: ["https://mavisigorta.net/twitter-image.jpg"],
    creator: "@mavisigorta",
    site: "@mavisigorta",
  },
  alternates: {
    canonical: "https://mavisigorta.net",
    languages: {
      'tr-TR': 'https://mavisigorta.net',
      'en-US': 'https://mavisigorta.net/en',
    },
  },
  category: "Business",
  classification: "Sigorta Aracılık Hizmetleri",
  other: {
    'geo.region': 'TR-34',
    'geo.placename': 'Beylikdüzü, İstanbul',
    'geo.position': '41.0082;28.6792',
    'ICBM': '41.0082, 28.6792',
    'DC.title': 'Soner Şeker Mavi Sigorta - Beylikdüzü İstanbul Sigorta Acentesi',
    'DC.creator': 'Soner Şeker',
    'DC.subject': 'Sigorta, TSS, Modüler Sağlık, Kasko, Yat Sigortası, DASK',
    'DC.description': 'Beylikdüzü\'nde 25 yıllık deneyimle sigorta aracılık hizmetleri',
    'DC.publisher': 'Mavi Sigorta Aracılık Hizmetleri',
    'DC.contributor': 'Soner Şeker Mavi Sigorta Uzman Ekip',
    'DC.date': '2025',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://mavisigorta.net',
    'DC.source': 'https://mavisigorta.net',
    'DC.language': 'tr',
    'DC.coverage': 'Beylikdüzü, İstanbul, Türkiye',
    'DC.rights': 'Copyright 2025 Soner Şeker Mavi Sigorta',
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
        "@id": "https://mavisigorta.net/#organization",
        "name": "Soner Şeker Mavi Sigorta Aracılık Hizmetleri",
        "alternateName": ["Mavi Sigorta", "Soner Şeker Sigorta", "Mavi Sigorta Aracılık"],
        "url": "https://mavisigorta.net",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mavisigorta.net/logo.png",
          "width": 200,
          "height": 200
        },
        "description": "Beylikdüzü'nde 25 yıllık deneyimle Allianz TSS, modüler sağlık sigortası ve tüm sigorta türleri.",
        "foundingDate": "2000",
        "founder": {
          "@type": "Person",
          "name": "Soner Şeker"
        },
        "email": "info@mavisigorta.net",
        "telephone": "+905324807617",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Adnan Kahveci Mahallesi Yavuz Sultan Selim Bulvarı No:116 Perlevista Rezidans A Blok Kat:6 Daire:49",
          "addressLocality": "Beylikdüzü",
          "addressRegion": "İstanbul",
          "postalCode": "34520",
          "addressCountry": "TR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 41.0082,
          "longitude": 28.6792
        },
        "areaServed": {
          "@type": "Place",
          "name": "İstanbul, Türkiye"
        },
        "sameAs": [
          "https://www.facebook.com/mavisigorta",
          "https://www.twitter.com/mavisigorta",
          "https://www.linkedin.com/company/mavisigorta"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+905324807617",
          "contactType": "customer service",
          "availableLanguage": ["Turkish", "English"],
          "areaServed": "TR"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://mavisigorta.net/#website",
        "url": "https://mavisigorta.net",
        "name": "Soner Şeker Mavi Sigorta",
        "description": "Beylikdüzü sigorta acentesi. Allianz TSS, modüler sağlık, kasko, yat sigortası hizmetleri.",
        "publisher": {
          "@id": "https://mavisigorta.net/#organization"
        },
        "inLanguage": "tr-TR",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://mavisigorta.net/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://mavisigorta.net/#localbusiness",
        "name": "Soner Şeker Mavi Sigorta Aracılık Hizmetleri",
        "image": "https://mavisigorta.net/business-image.jpg",
        "telephone": "+905324807617",
        "email": "info@mavisigorta.net",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Adnan Kahveci Mahallesi Yavuz Sultan Selim Bulvarı No:116 Perlevista Rezidans A Blok Kat:6 Daire:49",
          "addressLocality": "Beylikdüzü",
          "addressRegion": "İstanbul",
          "postalCode": "34520",
          "addressCountry": "TR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 41.0082,
          "longitude": 28.6792
        },
        "url": "https://mavisigorta.net",
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
        "paymentAccepted": "Cash, Credit Card, Bank Transfer",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Sigorta Hizmetleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Allianz Tamamlayıcı Sağlık Sigortası (TSS)",
                "description": "SGK anlaşmalı hastanelerde fark ödemeden tedavi"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Modüler Sağlık Sigortası",
                "description": "SGK'dan bağımsız özel hastane sigortası"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mavi Dalga Yat Sigortası",
                "description": "Denizcilik sigortası hizmetleri"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "DASK Sigortası",
                "description": "Zorunlu deprem sigortası"
              }
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://mavisigorta.net/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Ana Sayfa",
            "item": "https://mavisigorta.net"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Tamamlayıcı Sağlık Sigortası",
        "provider": {
          "@id": "https://mavisigorta.net/#organization"
        },
        "areaServed": "İstanbul",
        "brand": {
          "@type": "Brand",
          "name": "Allianz"
        },
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
        <meta name="subject" content="Sigorta Aracılık Hizmetleri" />
        <meta name="copyright" content="Soner Şeker Mavi Sigorta" />
        <meta name="language" content="Turkish" />
        <meta name="revised" content="Sunday, January 9th, 2025, 5:15 pm" />
        <meta name="abstract" content="Beylikdüzü'nde 25 yıllık deneyimle sigorta aracılık hizmetleri" />
        <meta name="topic" content="Sigorta, TSS, Modüler Sağlık, Kasko, Yat Sigortası, DASK" />
        <meta name="summary" content="Soner Şeker Mavi Sigorta ile tüm sigorta ihtiyaçlarınız için çözüm" />
        <meta name="owner" content="Soner Şeker" />
        <meta name="url" content="https://mavisigorta.net" />
        <meta name="identifier-URL" content="https://mavisigorta.net" />
        <meta name="directory" content="submission" />
        <meta name="category" content="Business, Insurance, Health, Finance, Maritime" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="1 days" />
        <meta name="subtitle" content="25 Yıllık Deneyimle Güvenilir Sigorta Partneri" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="og:email" content="info@mavisigorta.net" />
        <meta name="og:phone_number" content="+905324807617" />
        <meta name="og:fax_number" content="+905324807617" />
        <meta name="og:latitude" content="41.0082" />
        <meta name="og:longitude" content="28.6792" />
        <meta name="og:street-address" content="Adnan Kahveci Mahallesi Yavuz Sultan Selim Bulvarı No:116" />
        <meta name="og:locality" content="Beylikdüzü" />
        <meta name="og:region" content="İstanbul" />
        <meta name="og:postal-code" content="34520" />
        <meta name="og:country-name" content="Turkey" />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://mavisigorta.net" />
        <link rel="alternate" hrefLang="tr-tr" href="https://mavisigorta.net" />
        <link rel="alternate" hrefLang="en-us" href="https://mavisigorta.net/en" />
        <link rel="alternate" hrefLang="x-default" href="https://mavisigorta.net" />
        
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
                  "name": "Modüler sağlık sigortası nedir?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Modüler sağlık sigortası, SGK'dan bağımsız olarak Türkiye'deki bütün özel hastanelerde kullanılabilen özel sağlık sigortası poliçesidir."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Mavi Dalga yat sigortası nedir?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Mavi Dalga yat sigortası, deniz araçları için özel olarak tasarlanmış kapsamlı sigorta poliçesidir."
                  }
                },
                {
                  "@type": "Question",
                  "name": "DASK sigortası zorunlu mu?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Evet, DASK (Doğal Afet Sigortaları Kurumu) sigortası Türkiye'de zorunlu deprem sigortasıdır."
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
