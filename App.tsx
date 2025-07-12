import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import type { NewsArticle, VillageService, SME, TourismSpot, GovernmentMember, HeroSlide } from './types';
import { 
  NAV_LINKS, MOCK_NEWS_ARTICLES, MOCK_VILLAGE_SERVICES, MOCK_SMES, MOCK_TOURISM_SPOTS, VILLAGE_PROFILE, MOCK_GOVERNMENT, HERO_SLIDES,
  IconFileText, IconBriefcase, IconHome, IconHelpCircle, IconPhone, IconMail, IconMapPin
} from './constants';

// UTILITY COMPONENT
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// LAYOUT COMPONENTS
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src="https://raw.githubusercontent.com/digitalninjanv/ai/refs/heads/main/logo.webp" alt="Logo Desa" className="h-10 w-10 rounded-full object-cover" />
            <span className="text-xl font-bold text-gray-800">Desa Maju Sejahtera</span>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-700 hover:bg-teal-50 hover:text-teal-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-700 hover:bg-teal-50 hover:text-teal-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold">Desa Maju Sejahtera</h3>
          <p className="mt-2 text-gray-400">Jendela Informasi, Pintu Pelayanan, Jembatan Komunitas, Sumber Kemakmuran.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Tautan Cepat</h3>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map(link => (
              <li key={link.path}><Link to={link.path} className="text-gray-400 hover:text-white transition-colors">{link.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Hubungi Kami</h3>
          <ul className="mt-4 space-y-3 text-gray-400">
            <li className="flex items-start"><IconMapPin className="w-5 h-5 mr-3 mt-1 text-teal-400 flex-shrink-0" /><span>Jl. Pembangunan No. 1, Kec. Sejahtera, Kab. Makmur, 12345</span></li>
            <li className="flex items-center"><IconPhone className="w-5 h-5 mr-3 text-teal-400 flex-shrink-0" /><span>(021) 123-4567</span></li>
            <li className="flex items-center"><IconMail className="w-5 h-5 mr-3 text-teal-400 flex-shrink-0" /><span>kontak@majusejahtera.desa.id</span></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Pemerintah Desa Maju Sejahtera. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// UI COMPONENTS
interface CardProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  description: string;
  link?: string;
}
const Card: React.FC<CardProps> = ({ imageUrl, title, subtitle, description, link }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 group flex flex-col">
    <div className="relative">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      {link && <Link to={link} className="absolute inset-0" aria-label={title}></Link>}
    </div>
    <div className="p-6 flex flex-col flex-grow">
      {subtitle && <p className="text-sm text-teal-600 font-semibold mb-1">{subtitle}</p>}
      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-teal-700 transition-colors">{link ? <Link to={link}>{title}</Link> : title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-grow">{description}</p>
      {link && (
        <Link to={link} className="inline-block mt-4 text-teal-600 font-semibold hover:text-teal-800 transition-colors self-start">
          Lihat Detail &rarr;
        </Link>
      )}
    </div>
  </div>
);

interface PageTitleProps {
  title: string;
  subtitle: string;
}
const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => (
  <div className="bg-gray-100 py-16 text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">{title}</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  </div>
);

// PAGE COMPONENTS
const HeroSlider: React.FC<{ slides: HeroSlide[] }> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = React.useRef<number | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = window.setTimeout(
            () => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length),
            5000 // Change slide every 5 seconds
        );

        return () => {
            resetTimeout();
        };
    }, [currentIndex, slides.length]);
    
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    if (!slides || slides.length === 0) {
        return null;
    }

    return (
        <section className="relative h-[75vh] min-h-[500px] w-full" aria-roledescription="carousel" aria-label="Sorotan utama">
            <div className="w-full h-full overflow-hidden">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${slideIndex === currentIndex ? 'opacity-100 z-10' : 'opacity-0'}`}
                        aria-hidden={slideIndex !== currentIndex}
                    >
                        <img src={slide.imageUrl} alt={slide.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10"></div>
                        <div className="absolute inset-0 container mx-auto flex flex-col justify-end items-center text-center text-white p-6 pb-24 sm:pb-28 z-20">
                            <p className="text-base sm:text-lg font-semibold uppercase tracking-wider">{slide.subtitle}</p>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-2 max-w-4xl leading-tight">{slide.title}</h1>
                            <Link to={slide.link} className="mt-8 px-8 py-3 bg-teal-600 hover:bg-teal-700 rounded-full font-bold transition-transform transform hover:scale-105">
                                {slide.linkLabel}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Left Arrow */}
            <button 
                onClick={goToPrevious}
                className="absolute top-1/2 left-3 sm:left-6 -translate-y-1/2 z-30 p-2 bg-white/30 hover:bg-white/50 rounded-full text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Previous slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            {/* Right Arrow */}
            <button 
                onClick={goToNext}
                className="absolute top-1/2 right-3 sm:right-6 -translate-y-1/2 z-30 p-2 bg-white/30 hover:bg-white/50 rounded-full text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Next slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
                {slides.map((_, slideIndex) => (
                    <button
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`w-3 h-3 rounded-full transition-colors ${currentIndex === slideIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
                        aria-label={`Go to slide ${slideIndex + 1}`}
                        aria-current={currentIndex === slideIndex ? 'true' : 'false'}
                    ></button>
                ))}
            </div>
        </section>
    );
};

const HomePage: React.FC = () => (
  <div>
    {/* Hero Section */}
    <HeroSlider slides={HERO_SLIDES} />

    {/* Quick Access Services */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">Layanan Cepat Untuk Warga</h2>
        <p className="text-center text-gray-600 mt-2 mb-12">Akses layanan administrasi desa dengan mudah dan cepat.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_VILLAGE_SERVICES.map(service => (
            <Link to={`/layanan/${service.id}`} key={service.id} className="block text-center p-8 bg-gray-50 rounded-lg shadow-md hover:shadow-xl hover:bg-teal-50 transition-all duration-300">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Latest News */}
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">Berita & Informasi Terkini</h2>
        <p className="text-center text-gray-600 mt-2 mb-12">Ikuti perkembangan dan kegiatan terbaru di desa kita.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_NEWS_ARTICLES.slice(0, 3).map(article => (
            <Card key={article.id} imageUrl={article.imageUrl} title={article.title} subtitle={`${article.category} • ${article.date}`} description={article.excerpt} link={`/berita/${article.id}`} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/berita" className="px-8 py-3 bg-teal-600 text-white rounded-full font-bold hover:bg-teal-700 transition-transform transform hover:scale-105">Lihat Semua Berita</Link>
        </div>
      </div>
    </section>

    {/* Economy Showcase */}
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800">Potensi Ekonomi Desa</h2>
            <p className="text-center text-gray-600 mt-2 mb-12">Temukan produk unggulan dan destinasi wisata menarik di Desa Maju Sejahtera.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {MOCK_SMES.slice(0, 2).map(sme => (
                    <Card key={sme.id} imageUrl={sme.imageUrl} title={sme.name} subtitle={sme.category} description={`${sme.description.substring(0, 70)}...`} link={`/ekonomi/umkm/${sme.id}`} />
                ))}
                {MOCK_TOURISM_SPOTS.slice(0, 2).map(spot => (
                    <Card key={spot.id} imageUrl={spot.imageUrl} title={spot.name} subtitle="Destinasi Wisata" description={`${spot.description.substring(0, 70)}...`} link={`/ekonomi/wisata/${spot.id}`} />
                ))}
            </div>
             <div className="text-center mt-12">
                <Link to="/ekonomi" className="px-8 py-3 bg-teal-600 text-white rounded-full font-bold hover:bg-teal-700 transition-transform transform hover:scale-105">Lihat Semua Potensi</Link>
            </div>
        </div>
    </section>

  </div>
);

const ProfilePage: React.FC = () => (
  <div>
    <PageTitle title="Profil Desa Maju Sejahtera" subtitle="Mengenal lebih dekat sejarah, visi, misi, dan aparatur pemerintahan desa." />
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 space-y-16">
        {/* Sejarah */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sejarah Desa</h2>
          <p className="text-gray-600 leading-relaxed">{VILLAGE_PROFILE.history}</p>
        </div>
        {/* Visi & Misi */}
        <div className="max-w-4xl mx-auto bg-teal-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Visi & Misi</h2>
          <h3 className="text-xl font-semibold text-teal-700">Visi</h3>
          <p className="text-gray-600 italic mt-2 mb-6">"{VILLAGE_PROFILE.vision}"</p>
          <h3 className="text-xl font-semibold text-teal-700">Misi</h3>
          <ul className="mt-2 space-y-2 list-decimal list-inside text-gray-600">
            {VILLAGE_PROFILE.mission.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        {/* Struktur Pemerintahan */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Struktur Pemerintahan Desa</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {MOCK_GOVERNMENT.map(member => (
              <div key={member.id} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-teal-200" />
                <h4 className="text-lg font-bold text-gray-800">{member.name}</h4>
                <p className="text-teal-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const NewsPage: React.FC = () => (
  <div>
    <PageTitle title="Berita & Pengumuman" subtitle="Ikuti seluruh informasi, kegiatan, dan pengumuman resmi dari Pemerintah Desa Maju Sejahtera." />
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_NEWS_ARTICLES.map(article => (
            <Card key={article.id} imageUrl={article.imageUrl} title={article.title} subtitle={`${article.category} • ${article.date}`} description={article.excerpt} link={`/berita/${article.id}`} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const articleId = id ? parseInt(id, 10) : NaN;
  const article = MOCK_NEWS_ARTICLES.find(a => a.id === articleId);
  const otherArticles = MOCK_NEWS_ARTICLES.filter(a => a.id !== articleId).slice(0, 3);

  if (!article) {
    return (
      <div className="text-center py-20 bg-gray-50">
        <h1 className="text-3xl font-bold">404 - Artikel Tidak Ditemukan</h1>
        <p className="text-gray-600 mt-4">Maaf, berita yang Anda cari tidak ada.</p>
        <Link to="/berita" className="mt-8 inline-block px-6 py-3 bg-teal-600 text-white rounded-full font-bold hover:bg-teal-700 transition-colors">
          Kembali ke Halaman Berita
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <style>{`
        .prose p { margin-bottom: 1.25em; }
        .prose h1, .prose h2, .prose h3 { margin-bottom: 0.8em; margin-top: 1.6em; }
        .prose ul, .prose ol { margin-left: 1.5em; }
        .prose li { margin-bottom: 0.5em; }
        .prose-custom-response h3 { font-size: 1.25em; color: #0d9488; border-bottom: 2px solid #ccfbf1; padding-bottom: 0.5rem; margin-top: 2rem; margin-bottom: 1rem; }
        .prose-custom-response ul { list-style-type: disc; padding-left: 1.5rem; }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <main className="lg:col-span-2">
            <article>
              <header>
                <Link to="/berita" className="text-teal-600 font-semibold hover:underline">{article.category}</Link>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 my-4 leading-tight">{article.title}</h1>
                <p className="text-gray-500 text-sm">Dipublikasikan pada {article.date}</p>
              </header>
              <img src={article.imageUrl} alt={article.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg my-8 shadow-lg" />
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }} />
            </article>
          </main>
          <aside>
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-teal-500 pb-2">Berita Lainnya</h3>
              <ul className="space-y-6">
                {otherArticles.map(other => (
                  <li key={other.id}>
                    <Link to={`/berita/${other.id}`} className="group block">
                      <div className="flex items-center space-x-4">
                        <img src={other.imageUrl} alt={other.title} className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-800 group-hover:text-teal-600 transition-colors">{other.title}</h4>
                          <p className="text-xs text-gray-500 mt-1">{other.date}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/berita" className="mt-8 inline-block w-full text-center px-6 py-3 bg-gray-100 text-teal-700 rounded-lg font-bold hover:bg-gray-200 transition-colors">
                Lihat Semua Berita
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};


const ServicesPage: React.FC = () => (
    <div>
        <PageTitle title="Layanan Publik Desa" subtitle="Kami menyediakan kemudahan akses bagi warga untuk mengajukan berbagai layanan administrasi desa secara online." />
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {MOCK_VILLAGE_SERVICES.map(service => (
                        <div key={service.id} className="bg-white p-8 rounded-lg shadow-lg flex items-start space-x-6">
                            <div className="flex-shrink-0 bg-teal-100 p-4 rounded-full">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                                <p className="mt-2 text-gray-600">{service.description}</p>
                                <Link to={`/layanan/${service.id}`} className="mt-4 inline-block px-6 py-2 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-colors">
                                    Ajukan Sekarang
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const ServiceRequestPage: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const serviceId = id ? parseInt(id, 10) : NaN;
    const service = MOCK_VILLAGE_SERVICES.find(s => s.id === serviceId);
    
    const [formData, setFormData] = useState({ name: '', nik: '', phone: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({...prev, [id]: value}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 1500);
    };

    if (!service) {
        return (
          <div className="text-center py-20 bg-gray-50">
            <h1 className="text-3xl font-bold">404 - Layanan Tidak Ditemukan</h1>
            <p className="text-gray-600 mt-4">Maaf, layanan yang Anda cari tidak ada.</p>
            <Link to="/layanan" className="mt-8 inline-block px-6 py-3 bg-teal-600 text-white rounded-full font-bold hover:bg-teal-700 transition-colors">
              Kembali ke Halaman Layanan
            </Link>
          </div>
        );
    }
    
    if (submitted) {
        return (
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-2xl text-center">
                    <div className="bg-white p-12 rounded-lg shadow-lg">
                        <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <h2 className="text-3xl font-bold text-gray-800 mt-6">Permohonan Terkirim!</h2>
                        <p className="text-gray-600 mt-4">Terima kasih. Permohonan Anda untuk <strong>{service.title}</strong> telah berhasil kami terima. Kami akan segera memprosesnya dan akan menghubungi Anda jika diperlukan.</p>
                        <Link to="/layanan" className="mt-8 inline-block px-8 py-3 bg-teal-600 text-white rounded-full font-bold hover:bg-teal-700 transition-colors">
                            Kembali ke Daftar Layanan
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <PageTitle title="Formulir Permohonan Layanan" subtitle={`Isi formulir di bawah ini untuk mengajukan ${service.title}.`} />
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-2xl">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <div className="flex items-start space-x-6 mb-8 pb-8 border-b">
                            <div className="flex-shrink-0 bg-teal-100 p-4 rounded-full">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                                <p className="mt-1 text-gray-600">{service.description}</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                                <input type="text" id="name" value={formData.name} onChange={handleChange} className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" required />
                            </div>
                            <div>
                                <label htmlFor="nik" className="block text-sm font-medium text-gray-700 mb-1">Nomor Induk Kependudukan (NIK)</label>
                                <input type="text" id="nik" value={formData.nik} onChange={handleChange} className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" pattern="\d{16}" title="NIK harus terdiri dari 16 digit angka" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon / WhatsApp</label>
                                <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan / Keterangan Tambahan</label>
                                <textarea id="message" rows={4} value={formData.message} onChange={handleChange} className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"></textarea>
                            </div>
                            <div className="text-right">
                                <button type="submit" disabled={isSubmitting} className="inline-flex justify-center px-8 py-3 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-colors disabled:bg-teal-400 disabled:cursor-not-allowed">
                                    {isSubmitting ? 'Mengirim...' : 'Kirim Permohonan'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EconomyPage: React.FC = () => {
    return (
        <div>
            <PageTitle title="Ekonomi & Potensi Desa" subtitle="Mengangkat dan memasarkan potensi ekonomi, pariwisata, serta kekayaan budaya desa." />
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 space-y-16">
                    <div>
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">UMKM Unggulan Desa</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {MOCK_SMES.map(sme => (
                                <Card key={sme.id} imageUrl={sme.imageUrl} title={sme.name} subtitle={sme.category} description={`${sme.description.substring(0, 90)}...`} link={`/ekonomi/umkm/${sme.id}`} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Destinasi Wisata</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {MOCK_TOURISM_SPOTS.map(spot => (
                                <Card key={spot.id} imageUrl={spot.imageUrl} title={spot.name} subtitle="Wisata Alam & Budaya" description={`${spot.description.substring(0, 90)}...`} link={`/ekonomi/wisata/${spot.id}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


const SmeDetailPage: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const smeId = id ? parseInt(id, 10) : NaN;
    const sme = MOCK_SMES.find(s => s.id === smeId);
    const otherSmes = MOCK_SMES.filter(s => s.id !== smeId).slice(0, 3);

    if (!sme) {
        return (
          <div className="text-center py-20 bg-gray-50">
            <h1 className="text-3xl font-bold">404 - UMKM Tidak Ditemukan</h1>
            <p className="text-gray-600 mt-4">Maaf, data UMKM yang Anda cari tidak ada.</p>
            <Link to="/ekonomi" className="mt-8 inline-block px-6 py-3 bg-teal-600 text-white rounded-full font-bold hover:bg-teal-700 transition-colors">
              Kembali ke Halaman Ekonomi
            </Link>
          </div>
        );
    }
    
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <main className="lg:col-span-2">
                        <article>
                            <header>
                                <Link to="/ekonomi" className="text-teal-600 font-semibold hover:underline">{sme.category}</Link>
                                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 my-4 leading-tight">{sme.name}</h1>
                            </header>
                            <img src={sme.imageUrl} alt={sme.name} className="w-full h-auto max-h-[500px] object-cover rounded-lg my-8 shadow-lg" />
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                                <p>{sme.description}</p>
                                <div className="mt-8 p-6 bg-gray-50 rounded-lg border">
                                    <h3 className="font-bold text-xl text-gray-800 mb-4">Informasi Usaha</h3>
                                    <p><strong>Produk Unggulan:</strong> {sme.product}</p>
                                    <p><strong>Pemilik:</strong> {sme.owner}</p>
                                    <p><strong>Kontak:</strong> {sme.contact}</p>
                                </div>
                            </div>
                        </article>
                    </main>
                    <aside>
                        <div className="sticky top-24">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-teal-500 pb-2">UMKM Lainnya</h3>
                            <ul className="space-y-6">
                                {otherSmes.map(other => (
                                    <li key={other.id}>
                                        <Link to={`/ekonomi/umkm/${other.id}`} className="group block">
                                            <div className="flex items-center space-x-4">
                                                <img src={other.imageUrl} alt={other.name} className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-gray-800 group-hover:text-teal-600 transition-colors">{other.name}</h4>
                                                    <p className="text-xs text-gray-500 mt-1">{other.category}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/ekonomi" className="mt-8 inline-block w-full text-center px-6 py-3 bg-gray-100 text-teal-700 rounded-lg font-bold hover:bg-gray-200 transition-colors">
                                Lihat Semua Potensi
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

const TourismSpotDetailPage: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const spotId = id ? parseInt(id, 10) : NaN;
    const spot = MOCK_TOURISM_SPOTS.find(t => t.id === spotId);
    const otherSpots = MOCK_TOURISM_SPOTS.filter(t => t.id !== spotId).slice(0, 2);

    if (!spot) {
        return (
          <div className="text-center py-20 bg-gray-50">
            <h1 className="text-3xl font-bold">404 - Destinasi Tidak Ditemukan</h1>
            <p className="text-gray-600 mt-4">Maaf, destinasi wisata yang Anda cari tidak ada.</p>
            <Link to="/ekonomi" className="mt-8 inline-block px-6 py-3 bg-teal-600 text-white rounded-full font-bold hover:bg-teal-700 transition-colors">
              Kembali ke Halaman Ekonomi
            </Link>
          </div>
        );
    }
    
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <main className="lg:col-span-2">
                        <article>
                            <header>
                                <Link to="/ekonomi" className="text-teal-600 font-semibold hover:underline">Destinasi Wisata</Link>
                                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 my-4 leading-tight">{spot.name}</h1>
                            </header>
                            <img src={spot.imageUrl} alt={spot.name} className="w-full h-auto max-h-[500px] object-cover rounded-lg my-8 shadow-lg" />
                             <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                                <p>{spot.description}</p>
                                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-teal-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-xl text-teal-800 mb-3">Aktivitas</h3>
                                        <ul className="list-disc list-inside text-teal-900 space-y-1">
                                            {spot.activities.map(item => <li key={item}>{item}</li>)}
                                        </ul>
                                    </div>
                                     <div className="bg-orange-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-xl text-orange-800 mb-3">Fasilitas</h3>
                                        <ul className="list-disc list-inside text-orange-900 space-y-1">
                                            {spot.facilities.map(item => <li key={item}>{item}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </main>
                    <aside>
                        <div className="sticky top-24">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-teal-500 pb-2">Destinasi Lainnya</h3>
                            <ul className="space-y-6">
                                {otherSpots.map(other => (
                                    <li key={other.id}>
                                        <Link to={`/ekonomi/wisata/${other.id}`} className="group block">
                                            <div className="flex items-center space-x-4">
                                                <img src={other.imageUrl} alt={other.name} className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-gray-800 group-hover:text-teal-600 transition-colors">{other.name}</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/ekonomi" className="mt-8 inline-block w-full text-center px-6 py-3 bg-gray-100 text-teal-700 rounded-lg font-bold hover:bg-gray-200 transition-colors">
                                Lihat Semua Potensi
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};


const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000); // Hide message after 5 seconds
        }, 1500);
    };

    return (
    <div>
        <PageTitle title="Hubungi Kami" subtitle="Kami siap melayani Anda. Sampaikan pertanyaan atau kunjungi kami langsung di kantor desa." />
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h3>
                        {submitted ? (
                            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md" role="alert">
                                <p className="font-bold">Pesan Terkirim!</p>
                                <p>Terima kasih telah menghubungi kami. Kami akan segera merespon pesan Anda.</p>
                            </div>
                        ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                                <input type="text" id="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Alamat Email</label>
                                <input type="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan Anda</label>
                                <textarea id="message" value={formData.message} onChange={handleChange} rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" required></textarea>
                            </div>
                            <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-teal-600 text-white rounded-md font-semibold hover:bg-teal-700 transition-colors disabled:bg-teal-400">
                                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                            </button>
                        </form>
                        )}
                    </div>
                    {/* Contact Info & Map */}
                    <div>
                        <div className="space-y-4 text-gray-700">
                             <div className="flex items-start"><IconMapPin className="w-6 h-6 mr-4 mt-1 text-teal-600 flex-shrink-0" /><div><h4 className="font-bold">Alamat Kantor Desa</h4><p>Jl. Pembangunan No. 1, Kec. Sejahtera, Kab. Makmur, 12345</p></div></div>
                            <div className="flex items-start"><IconPhone className="w-6 h-6 mr-4 mt-1 text-teal-600 flex-shrink-0" /><div><h4 className="font-bold">Telepon</h4><p>(021) 123-4567</p></div></div>
                            <div className="flex items-start"><IconMail className="w-6 h-6 mr-4 mt-1 text-teal-600 flex-shrink-0" /><div><h4 className="font-bold">Email</h4><p>kontak@majusejahtera.desa.id</p></div></div>
                        </div>
                        <div className="mt-8 rounded-lg overflow-hidden shadow-lg h-80">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322732!2d106.81959731476882!3d-6.194741395514963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f428e9348e3d%3A0x39a1d4b6842e4a83!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1671234567890!5m2!1sen!2sid" 
                                width="100%" 
                                height="100%" 
                                style={{border:0}} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)};


export const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profil" element={<ProfilePage />} />
            <Route path="/berita" element={<NewsPage />} />
            <Route path="/berita/:id" element={<NewsDetailPage />} />
            <Route path="/layanan" element={<ServicesPage />} />
            <Route path="/layanan/:id" element={<ServiceRequestPage />} />
            <Route path="/ekonomi" element={<EconomyPage />} />
            <Route path="/ekonomi/umkm/:id" element={<SmeDetailPage />} />
            <Route path="/ekonomi/wisata/:id" element={<TourismSpotDetailPage />} />
            <Route path="/kontak" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};
