'use client';

import { useState } from 'react';

const translations = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      services: 'Hizmetler',
      about: 'Hakkımızda',
      contact: 'İletişim'
    },
    hero: {
      title: 'Sağlığınızı Allianz Tamamlayıcı Sağlık Sigortası ile Güvence Altına Alın',
      subtitle: 'Soner Şeker Mavi Sigorta ile SGK anlaşmalı hastanelerde fark ödemeden tedavi olun. Beylikdüzü\'nde 25 yıllık deneyimimizle yanınızdayız.',
      cta: 'Hemen Teklif Al',
      phone: 'Hemen Ara',
      securityTitle: '%100 Güvenli',
      securityDescription: 'Lisanslı ve profesyonel sigorta aracılık hizmetleri'
    },
    tss: {
      title: 'Allianz Tamamlayıcı Sağlık Sigortası (TSS)',
      subtitle: 'SGK ile anlaşmalı özel hastanelerde fark ücreti ödemeden sağlık hizmeti alın',
      benefits: [
        'SGK anlaşmalı hastanelerde fark ödemeden tedavi',
        'Ayakta tedavi hizmetleri',
        'Yatarak tedavi hizmetleri',
        'Online doktor hizmetleri',
        '24/7 tıbbi danışmanlık',
        'Ömür boyu yenileme garantisi'
      ],
      priceNote: 'TSS fiyatları yaş, cinsiyet ve şehire göre değişir. Hemen teklif alın!'
    },
    modular: {
      title: 'Modüler Sağlık Sigortası',
      subtitle: 'SGK\'dan bağımsız olarak Türkiye\'deki bütün özel hastanelerde kullanılabilen özel sağlık sigortası',
      description: 'Kapsamlı özel hastane sigortası ile sağlığınızı güvence altına alın'
    },
    services: {
      title: 'Hizmetlerimiz',
      subtitle: 'Tüm sigorta ihtiyaçlarınız için kapsamlı çözümler',
      items: [
        {
          title: 'Tamamlayıcı Sağlık Sigortası (TSS)',
          description: 'Allianz SGK anlaşmalı hastanelerde fark ödemeden tedavi',
          icon: 'health'
        },
        {
          title: 'Modüler Sağlık Sigortası',
          description: 'SGK\'dan bağımsız özel hastane sigortası',
          icon: 'health'
        },
        {
          title: 'Kasko Sigortası',
          description: 'Aracınızı her türlü hasara karşı koruyun',
          icon: 'car'
        },
        {
          title: 'Trafik Sigortası',
          description: 'Zorunlu trafik sigortası hizmetleri',
          icon: 'car'
        },
        {
          title: 'Nakliye Sigortaları',
          description: 'Kargo ve nakliye güvence sigortaları',
          icon: 'business'
        },
        {
          title: 'Ortak Alan Sigorta Poliçeleri',
          description: 'Apartman ve siteler için ortak alan sigortası',
          icon: 'home'
        },
        {
          title: 'Seyahat Sağlık Sigortası',
          description: 'Güvenli seyahatler için sağlık sigortası',
          icon: 'travel'
        },
        {
          title: 'Konut Sigorta Poliçesi',
          description: 'Evinizi doğal afetlere karşı koruyun',
          icon: 'home'
        },
        {
          title: 'İşyeri Sigorta Poliçesi',
          description: 'İşinizi güvence altına alın',
          icon: 'business'
        },
        {
          title: 'DASK Sigorta Poliçesi',
          description: 'Zorunlu deprem sigortası',
          icon: 'home'
        },
        {
          title: 'Yeşil Kart Sigorta Poliçesi',
          description: 'Yurtdışı araç sigortası',
          icon: 'car'
        },
        {
          title: 'Mavi Dalga Yat Sigorta Poliçesi',
          description: 'Deniz araçları için özel sigorta',
          icon: 'travel'
        },
        {
          title: 'İnşaat ALL Risk Sigorta Poliçesi',
          description: 'İnşaat projeleri için kapsamlı koruma',
          icon: 'business'
        },
        {
          title: 'İnşaat Montaj Sigorta Poliçesi',
          description: 'Montaj süreçleri için güvence',
          icon: 'business'
        },
        {
          title: 'AVM Sigorta Poliçesi',
          description: 'Alışveriş merkezleri için özel sigorta',
          icon: 'business'
        },
        {
          title: 'Sorumluluk Sigorta Poliçeleri',
          description: 'Mesleki ve genel sorumluluk sigortası',
          icon: 'business'
        }
      ]
    },
    about: {
      title: 'Neden Soner Şeker Mavi Sigorta?',
      items: [
        {
          title: '25+ Yıl Deneyim',
          description: 'Sigorta sektöründe çeyrek asırlık deneyim ve uzmanlık'
        },
        {
          title: 'Allianz Ortaklığı',
          description: 'Güvenilir Allianz sigorta ürünleri ve hizmetleri'
        },
        {
          title: 'Kapsamlı Hizmetler',
          description: '16 farklı sigorta türünde uzman danışmanlık'
        },
        {
          title: 'Beylikdüzü Merkez',
          description: 'İstanbul Beylikdüzü\'nde merkez ofis ile hızlı hizmet'
        }
      ]
    },
    testimonials: {
      title: 'Müşteri Yorumları',
      items: [
        {
          name: 'Ahmet B.',
          text: 'Soner Bey\'in Allianz TSS\'i sayesinde ameliyat farkı ödemeden tedavi oldum. 25 yıllık deneyimi gerçekten hissediliyor.',
          rating: 5
        },
        {
          name: 'Fatma K.',
          text: 'Modüler sağlık sigortası ile özel hastanede sorunsuz tedavi oldum. Mavi Sigorta\'ya teşekkürler.',
          rating: 5
        },
        {
          name: 'Mehmet D.',
          text: 'Yat sigortası için Mavi Dalga poliçesi aldım. Denizde güvenle seyahat ediyorum. Profesyonel hizmet.',
          rating: 5
        }
      ]
    },
    contact: {
      title: 'İletişim',
      subtitle: 'Bizimle iletişime geçin, size en uygun çözümü bulalım',
      phone: 'Telefon',
      email: 'E-posta',
      address: 'Adres',
      addressText: 'Adnan Kahveci Mah. Yavuz Sultan Selim Bulvarı No:116 Perlevista Rezidans A Blok Kat:6 Daire:49 Beylikdüzü/İstanbul',
      form: {
        name: 'Adınız Soyadınız',
        email: 'E-posta Adresiniz',
        phone: 'Telefon Numaranız',
        message: 'Mesajınız',
        send: 'Mesaj Gönder'
      }
    },
    footer: {
      rights: 'Tüm hakları saklıdır.',
      description: 'Beylikdüzü\'nde 25 yıllık deneyimle güvenilir sigorta aracılık hizmetleri',
      mission: 'Müşterilerimizin hayatlarını ve değerlerini korumak için Allianz güvencesi ile en uygun sigorta poliçelerini sunmak.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'Secure Your Health with Allianz Complementary Health Insurance',
      subtitle: 'Get treatment in SGK-affiliated private hospitals without extra fees with Soner Şeker Mavi Sigorta. We are with you with our 25 years of experience in Beylikdüzü.',
      cta: 'Get Quote Now',
      phone: 'Call Now',
      securityTitle: '100% Secure',
      securityDescription: 'Licensed and professional insurance brokerage services'
    },
    tss: {
      title: 'Allianz Complementary Health Insurance (TSS)',
      subtitle: 'Receive healthcare services without paying extra fees in SGK-affiliated private hospitals',
      benefits: [
        'Treatment without extra fees in SGK-affiliated hospitals',
        'Outpatient treatment services',
        'Inpatient treatment services',
        'Online doctor services',
        '24/7 medical consultation',
        'Lifetime renewal guarantee'
      ],
      priceNote: 'TSS prices vary by age, gender, and city. Get a quote now!'
    },
    modular: {
      title: 'Modular Health Insurance',
      subtitle: 'Private health insurance that can be used in all private hospitals in Turkey, independent of SGK',
      description: 'Secure your health with comprehensive private hospital insurance'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive solutions for all your insurance needs',
      items: [
        {
          title: 'Complementary Health Insurance (TSS)',
          description: 'Allianz SGK-affiliated hospitals treatment without extra fees',
          icon: 'health'
        },
        {
          title: 'Modular Health Insurance',
          description: 'SGK-independent private hospital insurance',
          icon: 'health'
        },
        {
          title: 'Auto Insurance',
          description: 'Protect your vehicle against all kinds of damage',
          icon: 'car'
        },
        {
          title: 'Traffic Insurance',
          description: 'Mandatory traffic insurance services',
          icon: 'car'
        },
        {
          title: 'Transportation Insurance',
          description: 'Cargo and transportation security insurance',
          icon: 'business'
        },
        {
          title: 'Common Area Insurance Policies',
          description: 'Common area insurance for apartments and sites',
          icon: 'home'
        },
        {
          title: 'Travel Health Insurance',
          description: 'Health insurance for safe travels',
          icon: 'travel'
        },
        {
          title: 'Home Insurance Policy',
          description: 'Protect your home against natural disasters',
          icon: 'home'
        },
        {
          title: 'Business Insurance Policy',
          description: 'Secure your business',
          icon: 'business'
        },
        {
          title: 'DASK Insurance Policy',
          description: 'Mandatory earthquake insurance',
          icon: 'home'
        },
        {
          title: 'Green Card Insurance Policy',
          description: 'International vehicle insurance',
          icon: 'car'
        },
        {
          title: 'Mavi Dalga Yacht Insurance Policy',
          description: 'Special insurance for marine vehicles',
          icon: 'travel'
        },
        {
          title: 'Construction ALL Risk Insurance Policy',
          description: 'Comprehensive protection for construction projects',
          icon: 'business'
        },
        {
          title: 'Construction Assembly Insurance Policy',
          description: 'Security for assembly processes',
          icon: 'business'
        },
        {
          title: 'Shopping Mall Insurance Policy',
          description: 'Special insurance for shopping centers',
          icon: 'business'
        },
        {
          title: 'Liability Insurance Policies',
          description: 'Professional and general liability insurance',
          icon: 'business'
        }
      ]
    },
    about: {
      title: 'Why Soner Şeker Mavi Sigorta?',
      items: [
        {
          title: '25+ Years Experience',
          description: 'Quarter century of experience and expertise in insurance industry'
        },
        {
          title: 'Allianz Partnership',
          description: 'Trusted Allianz insurance products and services'
        },
        {
          title: 'Comprehensive Services',
          description: 'Expert consultancy in 16 different types of insurance'
        },
        {
          title: 'Beylikdüzü Center',
          description: 'Fast service with central office in Istanbul Beylikdüzü'
        }
      ]
    },
    testimonials: {
      title: 'Customer Reviews',
      items: [
        {
          name: 'Ahmet B.',
          text: 'Thanks to Mr. Soner\'s Allianz TSS, I was treated without paying surgery fees. 25 years of experience really shows.',
          rating: 5
        },
        {
          name: 'Fatma K.',
          text: 'I was treated smoothly in private hospital with modular health insurance. Thanks to Mavi Sigorta.',
          rating: 5
        },
        {
          name: 'Mehmet D.',
          text: 'I got Mavi Dalga policy for yacht insurance. I travel safely at sea. Professional service.',
          rating: 5
        }
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch with us, let\'s find the most suitable solution for you',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      addressText: 'Adnan Kahveci District Yavuz Sultan Selim Boulevard No:116 Perlevista Residence A Block Floor:6 Apartment:49 Beylikdüzü/Istanbul',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        phone: 'Your Phone',
        message: 'Your Message',
        send: 'Send Message'
      }
    },
    footer: {
      rights: 'All rights reserved.',
      description: 'Trusted insurance brokerage services with 25 years of experience in Beylikdüzü',
      mission: 'To provide the most suitable insurance policies with Allianz assurance to protect our customers\' lives and values.'
    }
  }
};

export default function Home() {
  const [language, setLanguage] = useState<'tr' | 'en'>('tr');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const t = translations[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const getServiceIcon = (iconType: string) => {
    switch (iconType) {
      case 'health':
        return (
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      case 'car':
        return (
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'home':
        return (
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Soner Şeker Mavi Sigorta</h1>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-semibold transition-all duration-200 hover:bg-blue-50 rounded-lg">
                  {t.nav.home}
                </button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-semibold transition-all duration-200 hover:bg-blue-50 rounded-lg">
                  {t.nav.services}
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-semibold transition-all duration-200 hover:bg-blue-50 rounded-lg">
                  {t.nav.about}
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-semibold transition-all duration-200 hover:bg-blue-50 rounded-lg">
                  {t.nav.contact}
                </button>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center space-x-4">
              <div className="flex bg-gray-100 rounded-xl p-1 shadow-inner">
                <button
                  onClick={() => setLanguage('tr')}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    language === 'tr' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  TR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    language === 'en' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-all duration-200"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md">
              <button onClick={() => scrollToSection('home')} className="block text-gray-700 hover:text-blue-600 px-3 py-3 text-base font-semibold w-full text-left rounded-lg hover:bg-blue-50 transition-all duration-200">
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-gray-700 hover:text-blue-600 px-3 py-3 text-base font-semibold w-full text-left rounded-lg hover:bg-blue-50 transition-all duration-200">
                {t.nav.services}
              </button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-blue-600 px-3 py-3 text-base font-semibold w-full text-left rounded-lg hover:bg-blue-50 transition-all duration-200">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-blue-600 px-3 py-3 text-base font-semibold w-full text-left rounded-lg hover:bg-blue-50 transition-all duration-200">
                {t.nav.contact}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                  {t.hero.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  {t.hero.subtitle}
                </p>
                {/* SEO-friendly hidden text for search engines */}
                <div className="sr-only">
                  MaviSigorta İstanbul Beşiktaş merkezli sigorta acentesi olarak TSS tamamlayıcı sağlık sigortası, kasko sigortası, hayat sigortası, konut sigortası, işyeri sigortası ve seyahat sigortası alanlarında 15 yıldır hizmet vermektedir. SGK anlaşmalı hastanelerde fark ödemeden tedavi imkanı, 7/24 müşteri hizmetleri, anında sigorta teklifi ve uygun fiyat garantisi ile sigorta ihtiyaçlarınıza çözüm sunuyoruz.
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  aria-label="TSS ve diğer sigorta türleri için ücretsiz teklif almak üzere iletişim formuna git"
                >
                  {t.hero.cta}
                </button>
                <a 
                  href="tel:+905324807617"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  aria-label="MaviSigorta sigorta danışmanını hemen aramak için telefon et"
                >
                  {t.hero.phone}
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 backdrop-blur-sm">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg" aria-label="Güvenlik ikonu">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-labelledby="security-icon">
                      <title id="security-icon">Güvenlik ve koruma simgesi</title>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.hero.securityTitle}</h2>
                    <p className="text-gray-600 text-lg">{t.hero.securityDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TSS Highlight Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800" role="region" aria-labelledby="tss-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white space-y-8">
            <h2 id="tss-section" className="text-4xl md:text-5xl font-bold">{t.tss.title}</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">{t.tss.subtitle}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {t.tss.benefits.map((benefit, index) => (
                <article key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-green-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-label="Onay işareti">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
                </article>
              ))}
            </div>
            
            <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-2xl mx-auto">
              <p className="text-lg font-semibold text-yellow-300">{t.tss.priceNote}</p>
            </article>
            
            {/* SEO Content */}
            <div className="sr-only">
              Tamamlayıcı sağlık sigortası TSS fiyatları İstanbul'da yaş, cinsiyet ve sağlık durumuna göre değişkenlik gösterir. MaviSigorta olarak en uygun TSS fiyatlarını sunmakta, SGK anlaşmalı hastanelerde fark ödemeden tedavi imkanı sağlamaktayız. Özel hastane TSS sigortası, ambulans hizmeti TSS, yoğun bakım TSS teminatı gibi kapsamlı sağlık sigortası seçenekleri mevcuttur.
            </div>
          </div>
        </div>
      </section>

      {/* Modular Health Insurance Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-700" role="region" aria-labelledby="modular-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white space-y-8">
            <h2 id="modular-section" className="text-4xl md:text-5xl font-bold">{t.modular.title}</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">{t.modular.subtitle}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-label="Onay işareti">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white font-medium">SGK'dan bağımsız özel hastane sigortası</span>
                </div>
              </article>
              
              <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-label="Onay işareti">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white font-medium">Türkiye'deki tüm özel hastanelerde geçerli</span>
                </div>
              </article>
              
              <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-label="Onay işareti">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white font-medium">Kapsamlı sağlık teminatları</span>
                </div>
              </article>
            </div>
            
            <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-2xl mx-auto">
              <p className="text-lg font-semibold text-yellow-300">{t.modular.description}</p>
            </article>
            
            {/* SEO Content */}
            <div className="sr-only">
              Modüler sağlık sigortası, SGK'ya bağlı olmayan kişilerin veya SGK'ya ek olarak özel hastane hizmetlerinden yararlanmak isteyenlerin tercih ettiği sigorta türüdür. Türkiye'nin dört bir yanındaki özel hastanelerde geçerli olan bu sigorta türü ile sağlık hizmetlerine daha kolay erişim sağlanır.
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white" role="region" aria-labelledby="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16 space-y-4">
            <h2 id="services-section" className="text-4xl md:text-5xl font-bold text-gray-900">{t.services.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.services.subtitle}</p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((service, index) => (
              <article key={index} className={`group rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl border-2 ${
                index === 0 
                  ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg' 
                  : 'bg-white hover:bg-gray-50 border-gray-100 shadow-lg hover:border-blue-200'
              }`}>
                <div className="space-y-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                    index === 0 ? 'bg-blue-600' : 'bg-blue-100 group-hover:bg-blue-600'
                  } transition-all duration-300`} role="img" aria-label={`${service.title} simgesi`}>
                    <div className={index === 0 ? 'text-white' : 'text-blue-600 group-hover:text-white'}>
                      {getServiceIcon(service.icon)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                  {index === 0 && (
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                      aria-label="TSS tamamlayıcı sağlık sigortası için teklif almak üzere iletişime geç"
                    >
                      {language === 'tr' ? 'TSS Teklif Al' : 'Get TSS Quote'}
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
          
          {/* Additional SEO Content */}
          <div className="sr-only">
            <h3>İstanbul Sigorta Hizmetleri Detayları</h3>
            <p>MaviSigorta Beşiktaş merkezli sigorta acentesi olarak kasko sigortası fiyatları, hayat sigortası primleri, konut sigortası teminatları, işyeri sigortası kapsamı ve seyahat sigortası poliçeleri konusunda uzman danışmanlık hizmeti vermektedir. Online sigorta teklifi, dijital sigorta poliçesi ve anında sigorta onayı ile modern sigorta çözümleri sunmaktayız.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{t.about.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.items.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{t.testimonials.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{t.contact.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.contact.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.435.74a1 1 0 01.836.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{t.contact.phone}</h3>
                    <a href="tel:+905324807617" className="text-blue-600 hover:text-blue-700 font-medium text-lg">+90 532 480 76 17</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{t.contact.email}</h3>
                    <a href="mailto:info@mavisigorta.net" className="text-blue-600 hover:text-blue-700 font-medium text-lg">info@mavisigorta.net</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{t.contact.address}</h3>
                    <p className="text-gray-600 font-medium text-lg">{t.contact.addressText}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Çalışma Saatleri</h3>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-semibold">Pazartesi - Cuma:</span> 09:00 - 18:00</p>
                  <p><span className="font-semibold">Cumartesi:</span> 09:00 - 15:00</p>
                  <p><span className="font-semibold">Pazar:</span> Kapalı</p>
                  <p className="text-blue-600 font-semibold mt-4">Acil durumlar için 7/24 ulaşabilirsiniz</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.name}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder={t.contact.form.name}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.email}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder={t.contact.form.email}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.phone}</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder={t.contact.form.phone}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.message}</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder={t.contact.form.message}
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {t.contact.form.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Soner Şeker Mavi Sigorta</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">{t.footer.description}</p>
              <p className="text-gray-400 text-sm italic">{t.footer.mission}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Hızlı Linkler</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors duration-200">{t.nav.home}</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors duration-200">{t.nav.services}</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors duration-200">{t.nav.about}</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors duration-200">{t.nav.contact}</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">İletişim</h4>
              <div className="space-y-3">
                <a href="tel:+905324807617" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.948.684l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +90 532 480 76 17
                </a>
                <a href="mailto:info@mavisigorta.net" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  info@mavisigorta.net
                </a>
                <div className="flex items-start text-gray-300">
                  <svg className="w-4 h-4 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {t.contact.addressText}
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Soner Şeker Mavi Sigorta. {t.footer.rights}</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Gizlilik Politikası</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Kullanım Şartları</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}