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
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:+905324807617" className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.948.684l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(532) 480 76 17</span>
            </a>
            <a href="mailto:info@mavisigorta.net" className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>info@mavisigorta.net</span>
            </a>
          </div>
          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                         <div className="flex items-center space-x-1 text-xs">
               <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
               </svg>
               <span>Pazartesi-Cuma 09:00-18:00</span>
             </div>
             <div className="flex items-center space-x-1 text-xs">
               <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                 <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
               </svg>
               <span>SSL Guvenli</span>
             </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    <span className="hidden sm:inline">Soner Şeker Mavi Sigorta</span>
                    <span className="sm:hidden">Mavi Sigorta</span>
                  </h1>
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
      <section id="home" className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/doctor.jpeg)`
          }}
        ></div>
        {/* Dark Overlay on top of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    25 Yıllık Lisanslı Acente
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 12.798 5.555 8.835z" clipRule="evenodd" />
                    </svg>
                    10,000+ Memnun Müşteri
                  </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Guvenilir Sigorta Cozumleri, <span className="text-yellow-400">25 Yillik Deneyim</span>
                </h1>
                <p className="text-xl text-gray-100 leading-relaxed max-w-2xl">
                  Soner Seker Mavi Sigorta ile SGK anlasmali hastanelerde fark odemeden tedavi olun. Beylikduzu'nde ceyrek asirlik deneyimimiz ve Allianz guvencesi ile yaninizdasiniz.
                </p>
                
                                 {/* Trust Indicators */}
                 <div className="flex flex-wrap items-center gap-6 py-4">
                   <div className="flex items-center space-x-2">
                     <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <span className="text-sm font-medium text-white">SSL Guvenlik Sertifikasi</span>
                   </div>
                   <div className="flex items-center space-x-2">
                     <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <span className="text-sm font-medium text-white">TOBB Uyesi</span>
                   </div>
                   <div className="flex items-center space-x-2">
                     <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                       <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                       </svg>
                     </div>
                     <span className="text-sm font-medium text-white">4.8/5 Musteri Memnuniyeti</span>
                   </div>
                 </div>
                
                {/* SEO-friendly hidden text for search engines */}
                <div className="sr-only">
                  MaviSigorta İstanbul Beşiktaş merkezli sigorta acentesi olarak TSS tamamlayıcı sağlık sigortası, kasko sigortası, hayat sigortası, konut sigortası, işyeri sigortası ve seyahat sigortası alanlarında 15 yıldır hizmet vermektedir. SGK anlaşmalı hastanelerde fark ödemeden tedavi imkanı, 7/24 müşteri hizmetleri, anında sigorta teklifi ve uygun fiyat garantisi ile sigorta ihtiyaçlarınıza çözüm sunuyoruz.
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                  aria-label="TSS ve diger sigorta turleri icin ucretsiz teklif almak uzere iletisim formuna git"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Ucretsiz Teklif Alin
                </button>
                <a 
                  href="tel:+905324807617"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                  aria-label="MaviSigorta sigorta danismanini hemen aramak icin telefon et"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.435.74a1 1 0 01.836.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Hemen Ara: (532) 480 76 17
                </a>
              </div>
              
                             {/* Quick Stats */}
               <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white border-opacity-30">
                 <div className="text-center">
                   <div className="text-2xl font-bold text-yellow-400">25+</div>
                   <div className="text-sm text-gray-200">Yil Deneyim</div>
                 </div>
                 <div className="text-center">
                   <div className="text-2xl font-bold text-yellow-400">10K+</div>
                   <div className="text-sm text-gray-200">Musteri</div>
                 </div>
                 <div className="text-center">
                   <div className="text-2xl font-bold text-yellow-400">16</div>
                   <div className="text-sm text-gray-200">Sigorta Turu</div>
                 </div>
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">%100 Guvenli ve Lisansli</h2>
                    <p className="text-gray-600 text-lg mb-6">Lisansli ve profesyonel sigorta aracilik hizmetleri</p>
                    
                    {/* Trust Badges */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-4">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-semibold text-green-700">SSL Korumali</span>
                  </div>
                </div>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-semibold text-blue-700">Lisansli Acente</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="inline-flex items-center space-x-2 bg-yellow-50 px-4 py-2 rounded-full">
                          <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-sm font-semibold text-yellow-700">Allianz Partner</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Insurance Solutions */}
      <section className="py-16 bg-white" role="region" aria-labelledby="health-insurance-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
             <h2 id="health-insurance-section" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
               Saglik Sigortasi Cozumlerimiz
             </h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               Allianz guvencesi ile sagliginizi koruyun. SGK'li veya SGK'siz, her ihtiyaca uygun secenekler.
             </p>
           </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* TSS Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 bg-gradient-to-r from-blue-600 to-blue-700">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                                         <h3 className="text-2xl font-bold">Allianz TSS</h3>
                     <p className="text-blue-100 text-sm">Tamamlayici Saglik Sigortasi</p>
                  </div>
                </div>
                {/* Photo placeholder */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white bg-opacity-10 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
            </div>
            
                             <div className="p-6">
                 <p className="text-gray-600 mb-4">
                   SGK anlasmali ozel hastanelerde fark ucreti odemeden tedavi olun. Ayakta ve yatarak tedavi kapsaminda.
                 </p>
                 
                 <div className="space-y-3 mb-6">
                   <div className="flex items-center space-x-2">
                     <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                     <span className="text-sm text-gray-700">SGK anlasmali hastanelerde fark odemeden</span>
            </div>
                   <div className="flex items-center space-x-2">
                     <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                     <span className="text-sm text-gray-700">24/7 tibbi danismanlık hizmetleri</span>
          </div>
                   <div className="flex items-center space-x-2">
                     <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                     <span className="text-sm text-gray-700">Omur boyu yenileme garantisi</span>
        </div>
                 </div>
                 
                 <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                   <p className="text-sm text-yellow-800 font-medium">
                     Fiyatlar yas, cinsiyet ve sehire gore degisir. Hemen teklif alin!
                   </p>
                 </div>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  TSS Teklif Al
                </button>
                </div>
            </div>

            {/* Modular Health Insurance Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 bg-gradient-to-r from-green-600 to-emerald-700">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                                         <h3 className="text-2xl font-bold">Moduler Saglik</h3>
                     <p className="text-green-100 text-sm">Ozel Hastane Sigortasi</p>
                  </div>
                </div>
                {/* Photo placeholder */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white bg-opacity-10 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              
                             <div className="p-6">
                 <p className="text-gray-600 mb-4">
                   SGK'dan bagimsiz olarak Turkiye'deki tum ozel hastanelerde gecerli kapsamli saglik guvencesi.
                 </p>
                 
                 <div className="space-y-3 mb-6">
                   <div className="flex items-center space-x-2">
                     <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                     <span className="text-sm text-gray-700">Tum ozel hastanelerde gecerli</span>
                </div>
                   <div className="flex items-center space-x-2">
                     <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                     <span className="text-sm text-gray-700">SGK'dan tamamen bagimsiz</span>
                   </div>
                   <div className="flex items-center space-x-2">
                     <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                     <span className="text-sm text-gray-700">Esnek teminat secenekleri</span>
                   </div>
            </div>
            
                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                   <p className="text-sm text-blue-800 font-medium">
                     Premium saglik hizmetleri icin ideal secenek
                   </p>
                 </div>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                >
                  Modüler Teklif Al
                </button>
              </div>
            </div>
          </div>

          {/* Quick Comparison */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                         <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Hangisi Size Uygun?</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="text-center">
                 <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                   <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                   </svg>
                 </div>
                 <h4 className="text-lg font-semibold text-gray-900 mb-2">TSS Tercih Edenler</h4>
                 <p className="text-gray-600 text-sm">SGK'li ve mevcut devlet hastanesi hizmetlerini kullaniyor ancak ozel hastanelerde de fark odemeden tedavi olmak istiyorsaniz.</p>
               </div>
               <div className="text-center">
                 <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                   <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                   </svg>
                 </div>
                 <h4 className="text-lg font-semibold text-gray-900 mb-2">Moduler Tercih Edenler</h4>
                 <p className="text-gray-600 text-sm">SGK'siz veya premium ozel hastane hizmetlerinden tam olarak yararlanmak, en iyi doktor ve teknolojilere erismek istiyorsaniz.</p>
               </div>
             </div>
          </div>
            
            {/* SEO Content */}
            <div className="sr-only">
             Tamamlayici saglik sigortasi TSS fiyatlari Istanbul'da yas, cinsiyet ve saglik durumuna gore degiskenlik gosterir. MaviSigorta olarak en uygun TSS fiyatlarini sunmakta, SGK anlasmali hastanelerde fark odemeden tedavi imkani saglamaktayiz. Moduler saglik sigortasi, SGK'ya bagli olmayan kisilerin veya SGK'ya ek olarak ozel hastane hizmetlerinden yararlanmak isteyenlerin tercih ettigi sigorta turudur.
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Neden Soner Şeker Mavi Sigorta?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">25 yıllık deneyimimiz ve güvenilir Allianz ortaklığımızla yanınızdayız</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">25+ Yıl Deneyim</h3>
              <p className="text-gray-600 leading-relaxed">Sigorta sektöründe çeyrek asırlık deneyim ve uzmanlık</p>
              </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Allianz Ortaklığı</h3>
              <p className="text-gray-600 leading-relaxed">Güvenilir Allianz sigorta ürünleri ve hizmetleri</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Kapsamlı Hizmetler</h3>
              <p className="text-gray-600 leading-relaxed">16 farklı sigorta türünde uzman danışmanlık</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Beylikdüzü Merkez</h3>
              <p className="text-gray-600 leading-relaxed">İstanbul Beylikdüzü'nde merkez ofis ile hızlı hizmet</p>
            </div>
          </div>

          {/* Team & Company Story */}
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Hikayemiz</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  2000 yılında Soner Şeker tarafından kurulan Mavi Sigorta, 25 yıldır İstanbul Beylikdüzü'nde müşterilerine güvenilir sigorta hizmetleri sunmaktadır. Allianz'ın güvenilir ortağı olarak, binlerce aileye ve işletmeye sigorta güvencesi sağladık.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Amacımız, müşterilerimize sadece sigorta satmak değil, onların hayatlarındaki riskleri minimize ederek güvenli bir gelecek inşa etmelerine yardımcı olmaktır. Her müşterimizi ailemizin bir ferdi gibi görür, kişisel ihtiyaçlarına özel çözümler üretiriz.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">TOBB Üyesi - Lisanslı Sigorta Acentesi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Allianz Yetkili Ortağı</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">ISO 27001 Güvenlik Sertifikası</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <span className="text-white font-bold text-4xl">S</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Soner Şeker</h4>
                  <p className="text-blue-600 font-semibold mb-4">Kurucu & Genel Müdür</p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    "25 yıldır sigorta sektöründe çalışıyorum. Müşterilerimizin güvenini kazanmak ve onlara en iyi hizmeti sunmak birincil önceliğimizdir. Her bir poliçe arkasında bir aile, bir gelecek vardır."
                  </p>
                  <div className="mt-6 space-y-2">
                    <div className="text-sm text-gray-500">
                      <span className="font-semibold">Uzmanlık:</span> TSS, Modüler Sağlık, Yat Sigortası
                    </div>
                    <div className="text-sm text-gray-500">
                      <span className="font-semibold">Deneyim:</span> 25 Yıl Sigorta Sektörü
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Müşteri Yorumları</h2>
            <p className="text-xl text-gray-600">Memnun müşterilerimizin gerçek deneyimleri</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">"2 yıl önce Soner Bey'den Allianz TSS aldım. Geçen ay kalp ameliyatı oldum, 45.000 TL fark ücreti ödemeden Acıbadem'de tedavi oldum. Gerçekten hayat kurtardı bu sigorta."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  A
                  </div>
                  <div className="ml-4">
                  <p className="font-semibold text-gray-900">Ahmet Yılmaz</p>
                  <p className="text-sm text-gray-500">TSS - Ocak 2025</p>
                  <p className="text-sm text-blue-600">Doğrulandı ✓</p>
                  </div>
                </div>
              </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">"Modüler sağlık sigortası ile oğlumun apandisit ameliyatını özel hastanede yaptırdık. Hem hızlı hem de kaliteli hizmet aldık. Soner Bey'in deneyimi çok değerli."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  F
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Fatma Kaya</p>
                  <p className="text-sm text-gray-500">Modüler Sağlık - Aralık 2024</p>
                  <p className="text-sm text-blue-600">Doğrulandı ✓</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">"Teknemi için Mavi Dalga yat sigortası aldım. Ege'de fırtınaya yakalandım, tekne hasarlandı. Hasar ödemesi çok hızlı ve tam olarak yapıldı. 25 yıllık deneyim bu işte."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  M
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Mehmet Demir</p>
                  <p className="text-sm text-gray-500">Mavi Dalga - Eylül 2024</p>
                  <p className="text-sm text-blue-600">Doğrulandı ✓</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Güvenilirlik Kanıtları</h3>
              <p className="text-gray-600">Müşterilerimizin güvenini kazandıran faktörler</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">%98</div>
                <div className="text-sm text-gray-600">Müşteri Memnuniyeti</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">24sa</div>
                <div className="text-sm text-gray-600">Ortalama Yanıt Süresi</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-purple-600 mb-2">10K+</div>
                <div className="text-sm text-gray-600">Aktif Poliçe</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-yellow-600 mb-2">25</div>
                <div className="text-sm text-gray-600">Yıl Deneyim</div>
              </div>
            </div>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/905324807617?text=Merhaba, sigorta hizmetleri hakkında bilgi almak istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center space-x-3 group animate-bounce"
          aria-label="WhatsApp ile iletişim kurun"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          <span className="hidden group-hover:block text-sm font-semibold whitespace-nowrap">
            Hemen WhatsApp
          </span>
        </a>
      </div>

      {/* Live Chat Widget */}
      <div className="fixed bottom-6 left-6 z-50">
        <div className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 cursor-pointer group">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block">
            <div className="bg-white text-gray-900 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-semibold">
              Canlı Destek (7/24)
              <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            </div>
          </div>
        </div>
      </div>

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