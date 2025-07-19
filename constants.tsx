

import React from 'react';
import type { NavLink, NewsArticle, VillageService, SME, TourismSpot, GovernmentMember, HeroSlide } from './types';

// SVG Icons
export const IconFileText = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></svg>
);

export const IconBriefcase = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
);

export const IconHome = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
);

export const IconHelpCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
);

export const IconPhone = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

export const IconMail = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);


export const IconMapPin = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    src="https://raw.githubusercontent.com/digitalninjanv/Template-web-desa/refs/heads/main/img/fire_8722283.png"
    alt="IconMapPin Icon"
    {...props}
  />
);

// Navigation
export const NAV_LINKS: NavLink[] = [
  { name: 'Beranda', path: '/' },
  { name: 'Profil Desa', path: '/profil' },
  { name: 'Berita', path: '/berita' },
  { name: 'Layanan', path: '/layanan' },
  { name: 'Ekonomi', path: '/ekonomi' },
  { name: 'Kontak', path: '/kontak' },
];

// Mock Data
export const VILLAGE_PROFILE = {
  history: 'Desa Maju Sejahtera didirikan pada tahun 1980 oleh para transmigran yang bersemangat membangun kehidupan baru. Dengan semangat gotong royong, desa ini berkembang pesat dari sebuah pemukiman kecil menjadi pusat kegiatan agraris dan budaya di wilayah ini. Nama "Maju Sejahtera" adalah cerminan dari doa dan harapan para pendirinya untuk kemajuan dan kesejahteraan bersama.',
  vision: 'Menjadi desa yang mandiri, inovatif, dan berdaya saing dengan tetap menjunjung tinggi kearifan lokal serta kelestarian lingkungan.',
  mission: [
    'Meningkatkan kualitas sumber daya manusia melalui pendidikan dan pelatihan.',
    'Mengoptimalkan potensi ekonomi desa berbasis agribisnis dan pariwisata.',
    'Mewujudkan tata kelola pemerintahan yang transparan, akuntabel, dan melayani.',
    'Meningkatkan infrastruktur desa yang merata dan berkelanjutan.',
    'Melestarikan budaya dan tradisi sebagai identitas dan kebanggaan desa.',
  ]
};

export const MOCK_GOVERNMENT: GovernmentMember[] = [
  { id: 1, name: 'Budi Santoso', position: 'Kepala Desa', imageUrl: 'https://picsum.photos/seed/gov1/400/400' },
  { id: 2, name: 'Siti Aminah', position: 'Sekretaris Desa', imageUrl: 'https://picsum.photos/seed/gov2/400/400' },
  { id: 3, name: 'Ahmad Dahlan', position: 'Kaur Keuangan', imageUrl: 'https://picsum.photos/seed/gov3/400/400' },
  { id: 4, name: 'Dewi Lestari', position: 'Kaur Perencanaan', imageUrl: 'https://picsum.photos/seed/gov4/400/400' },
  { id: 5, name: 'Joko Susilo', position: 'Kasi Pemerintahan', imageUrl: 'https://picsum.photos/seed/gov5/400/400' },
  { id: 6, name: 'Rina Wati', position: 'Kasi Kesejahteraan', imageUrl: 'https://picsum.photos/seed/gov6/400/400' },
];


export const MOCK_NEWS_ARTICLES: NewsArticle[] = [
  { id: 1, title: 'Kerja Bakti Bulanan: Warga Kompak Bersihkan Lingkungan', category: 'Kegiatan Desa', date: '15 Juli 2024', excerpt: 'Dalam rangka menjaga kebersihan dan keindahan desa, warga Desa Maju Sejahtera kembali mengadakan kerja bakti rutin...', imageUrl: 'https://picsum.photos/seed/news1/600/400', content: 'Dalam rangka menjaga kebersihan dan keindahan desa, warga Desa Maju Sejahtera kembali mengadakan kerja bakti rutin pada hari Minggu pagi. Kegiatan ini diikuti oleh puluhan warga dari berbagai dusun yang dengan antusias membersihkan selokan, merapikan tanaman di pinggir jalan, dan mengelola sampah. Kepala Desa, Budi Santoso, menyatakan bahwa kegiatan ini tidak hanya bertujuan untuk menciptakan lingkungan yang bersih dan sehat, tetapi juga untuk mempererat tali silaturahmi dan semangat gotong royong antarwarga. "Semangat seperti inilah yang menjadi pondasi kemajuan desa kita," ujarnya di sela-sela kegiatan.' },
  { id: 2, title: 'Penyuluhan Pertanian Organik Tingkatkan Hasil Panen', category: 'Pembangunan', date: '12 Juli 2024', excerpt: 'Pemerintah desa bekerja sama dengan Dinas Pertanian mengadakan penyuluhan untuk mendorong praktik pertanian organik...', imageUrl: 'https://picsum.photos/seed/news2/600/400', content: 'Pemerintah desa bekerja sama dengan Dinas Pertanian mengadakan penyuluhan untuk mendorong praktik pertanian organik yang lebih ramah lingkungan dan sehat. Acara yang dihadiri oleh sebagian besar petani desa ini menghadirkan ahli pertanian yang memberikan materi tentang pembuatan pupuk kompos, pestisida nabati, dan teknik tanam modern. Diharapkan dengan beralih ke pertanian organik, hasil panen warga tidak hanya meningkat kualitasnya tetapi juga memiliki nilai jual yang lebih tinggi di pasaran.' },
  { id: 3, title: 'Festival Budaya Desa Sukses Digelar, Penuh Warna dan Makna', category: 'Budaya', date: '5 Juli 2024', excerpt: 'Festival budaya tahunan kembali digelar dengan meriah, menampilkan berbagai kesenian dan tradisi lokal...', imageUrl: 'https://picsum.photos/seed/news3/600/400', content: 'Festival budaya tahunan Desa Maju Sejahtera kembali digelar dengan sangat meriah di lapangan utama desa. Acara yang berlangsung selama dua hari ini menampilkan berbagai kesenian lokal seperti tari-tarian tradisional, pagelaran wayang kulit, serta pameran kerajinan tangan dari para perajin desa. Ribuan pengunjung, baik dari desa sendiri maupun dari luar daerah, turut meramaikan acara ini. Festival ini menjadi bukti nyata komitmen warga dalam melestarikan warisan budaya leluhur.' },
  { id: 4, title: 'Pengumuman: Jadwal Posyandu Bulan Agustus 2024', category: 'Pengumuman', date: '1 Juli 2024', excerpt: 'Berikut adalah jadwal kegiatan Posyandu untuk balita dan lansia selama bulan Agustus 2024. Diharapkan warga dapat hadir...', imageUrl: 'https://picsum.photos/seed/news4/600/400', content: 'Pemerintah Desa Maju Sejahtera mengumumkan jadwal kegiatan Posyandu untuk balita dan lansia selama bulan Agustus 2024. Kegiatan akan dilaksanakan di Balai Desa pada setiap hari Rabu, minggu pertama dan ketiga. Untuk balita, layanan meliputi penimbangan berat badan, imunisasi, dan pemberian vitamin. Sementara untuk lansia, akan ada pemeriksaan kesehatan ringan seperti tensi darah dan gula darah. Diharapkan seluruh warga yang memiliki balita dan lansia untuk dapat hadir tepat waktu demi kesehatan bersama.' },
  { id: 5, title: 'Infrastruktur Baru: Jembatan Antar Dusun Selesai Dibangun', category: 'Pembangunan', date: '28 Juni 2024', excerpt: 'Pembangunan jembatan yang menghubungkan Dusun Harapan dan Dusun Makmur telah rampung dan siap digunakan oleh warga.', imageUrl: 'https://picsum.photos/seed/news5/600/400', content: 'Kabar gembira bagi warga Desa Maju Sejahtera, pembangunan jembatan yang menghubungkan Dusun Harapan dan Dusun Makmur telah rampung 100% dan diresmikan langsung oleh Kepala Desa. Pembangunan yang memakan waktu tiga bulan ini didanai dari alokasi dana desa dan swadaya masyarakat. Dengan adanya jembatan baru ini, akses transportasi dan ekonomi antar dusun diharapkan menjadi lebih lancar dan efisien, serta meningkatkan interaksi sosial antarwarga.' },
  { id: 6, title: 'Tim Voli Desa Raih Juara di Turnamen Antar Desa', category: 'Olahraga', date: '25 Juni 2024', excerpt: 'Prestasi membanggakan diraih oleh tim bola voli putra Desa Maju Sejahtera yang berhasil menjadi juara pertama.', imageUrl: 'https://picsum.photos/seed/news6/600/400', content: 'Prestasi membanggakan kembali diukir oleh pemuda Desa Maju Sejahtera. Tim bola voli putra "Garuda Perkasa" berhasil meraih gelar juara pertama dalam Turnamen Bola Voli Antar Desa se-Kecamatan Sejahtera. Dalam pertandingan final yang sengit, tim kita berhasil mengalahkan tim dari Desa Tetangga dengan skor 3-1. Kemenangan ini merupakan hasil dari latihan keras dan kekompakan tim. Seluruh warga desa menyambut para pahlawan olahraga ini dengan penuh suka cita.' },
];

export const MOCK_VILLAGE_SERVICES: VillageService[] = [
  { id: 1, title: 'Surat Keterangan Usaha (SKU)', description: 'Ajukan permohonan Surat Keterangan Usaha untuk keperluan administrasi bisnis Anda.', icon: <IconBriefcase className="w-12 h-12 text-teal-600" /> },
  { id: 2, title: 'Surat Keterangan Domisili', description: 'Dapatkan surat keterangan domisili untuk berbagai keperluan resmi.', icon: <IconHome className="w-12 h-12 text-teal-600" /> },
  { id: 3, title: 'Surat Pengantar Nikah', description: 'Lengkapi persyaratan administrasi pernikahan Anda dengan surat pengantar dari desa.', icon: <IconFileText className="w-12 h-12 text-teal-600" /> },
  { id: 4, title: 'Pelaporan & Aspirasi', description: 'Sampaikan laporan, keluhan, atau aspirasi Anda untuk kemajuan desa.', icon: <IconHelpCircle className="w-12 h-12 text-teal-600" /> },
];

export const MOCK_SMES: SME[] = [
  { id: 1, name: 'Keripik Singkong "Renyah"', category: 'Makanan', product: 'Keripik aneka rasa', imageUrl: 'https://picsum.photos/seed/sme1/600/400', owner: 'Ibu Wati', contact: '0812-3456-7890', description: 'Keripik Singkong "Renyah" adalah usaha rumahan yang memproduksi keripik singkong berkualitas tinggi dengan berbagai varian rasa, mulai dari original, balado, hingga keju. Dibuat dari singkong pilihan hasil panen petani lokal dan diolah tanpa bahan pengawet, menjadikannya camilan yang sehat dan lezat untuk semua kalangan.' },
  { id: 2, name: 'Batik Tulis "Sekar Jagad"', category: 'Kerajinan', product: 'Kain batik tulis & cap', imageUrl: 'https://picsum.photos/seed/sme2/600/400', owner: 'Bapak Hartono', contact: '0813-3456-7891', description: 'Batik Tulis "Sekar Jagad" melestarikan seni membatik tradisional dengan sentuhan desain modern. Setiap kain adalah karya seni yang unik, dibuat dengan tangan-tangan terampil pengrajin lokal. Kami menyediakan batik tulis dan cap dengan motif khas Desa Maju Sejahtera yang sarat akan makna filosofis.' },
  { id: 3, name: 'Madu Hutan "Alami"', category: 'Pertanian', product: 'Madu murni dari lebah hutan', imageUrl: 'https://picsum.photos/seed/sme3/600/400', owner: 'Kelompok Tani Hutan Lestari', contact: '0814-3456-7892', description: 'Madu Hutan "Alami" dipanen secara lestari dari hutan di sekitar desa. Madu kami 100% murni tanpa tambahan apapun, dengan rasa dan aroma khas nektar bunga hutan. Khasiatnya untuk kesehatan sudah tidak diragukan lagi dan menjadi produk unggulan kebanggaan desa kami.' },
  { id: 4, name: 'Meubel Jati "Karya Mandiri"', category: 'Kerajinan', product: 'Perabotan rumah tangga dari kayu jati', imageUrl: 'https://picsum.photos/seed/sme4/600/400', owner: 'Bapak Joko', contact: '0815-3456-7893', description: 'Meubel Jati "Karya Mandiri" menghasilkan perabotan kayu jati berkualitas ekspor. Dengan desain yang elegan dan pengerjaan yang teliti, produk kami meliputi meja, kursi, lemari, hingga dekorasi rumah yang akan mempercantik hunian Anda. Kami menerima pesanan custom sesuai keinginan pelanggan.' },
];

export const MOCK_TOURISM_SPOTS: TourismSpot[] = [
  { id: 1, name: 'Air Terjun Pelangi', description: 'Nikmati kesegaran dan keindahan alam di Air Terjun Pelangi yang memesona. Terletak di tengah hutan lindung desa, air terjun ini menawarkan pemandangan yang spektakuler, terutama saat pagi hari ketika sinar matahari menciptakan pelangi di antara percikan air. Suasananya yang tenang dan asri menjadikannya tempat yang sempurna untuk melepaskan penat.', imageUrl: 'https://picsum.photos/seed/tourism1/600/400', activities: ['Berenang di kolam alami', 'Piknik', 'Fotografi alam', 'Trekking ringan'], facilities: ['Area parkir', 'Gazebo', 'Warung makanan & minuman', 'Toilet'] },
  { id: 2, name: 'Bukit Bintang', description: 'Saksikan pemandangan matahari terbit dan gemerlap bintang dari puncak Bukit Bintang. Tempat ini adalah spot favorit untuk berkemah dan menikmati keindahan alam dari ketinggian. Dari sini, Anda bisa melihat hamparan sawah dan perbukitan hijau yang mengelilingi desa.', imageUrl: 'https://picsum.photos/seed/tourism2/600/400', activities: ['Melihat matahari terbit/terbenam', 'Berkemah', 'Stargazing', 'Fotografi lanskap'], facilities: ['Area kemah', 'Api unggun', 'Toilet', 'Penyewaan tenda'] },
  { id: 3, name: 'Rumah Budaya', description: 'Pelajari sejarah dan budaya lokal melalui koleksi benda-benda bersejarah di Rumah Budaya. Bangunan ini merupakan rumah adat yang telah direstorasi dan kini berfungsi sebagai museum mini. Di sini, Anda dapat melihat alat-alat pertanian tradisional, kostum tari, dan arsip foto desa dari masa ke masa.', imageUrl: 'https://picsum.photos/seed/tourism3/600/400', activities: ['Wisata edukasi sejarah', 'Workshop membatik', 'Melihat pertunjukan seni', 'Membeli suvenir'], facilities: ['Pemandu wisata', 'Ruang pameran', 'Toko suvenir', 'Pendopo'] },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'welcome',
    title: 'Selamat Datang di Desa Maju Sejahtera',
    subtitle: 'Jendela Informasi, Pintu Pelayanan, Jembatan Komunitas, dan Sumber Kemakmuran.',
    imageUrl: 'https://picsum.photos/seed/hero/1600/900',
    link: '/profil',
    linkLabel: 'Jelajahi Desa Kami',
  },
  {
    id: `news-${MOCK_NEWS_ARTICLES[0].id}`,
    title: MOCK_NEWS_ARTICLES[0].title,
    subtitle: 'Berita Terkini Desa',
    imageUrl: MOCK_NEWS_ARTICLES[0].imageUrl,
    link: `/berita/${MOCK_NEWS_ARTICLES[0].id}`,
    linkLabel: 'Baca Selengkapnya',
  },
  {
    id: `tourism-${MOCK_TOURISM_SPOTS[0].id}`,
    title: MOCK_TOURISM_SPOTS[0].name,
    subtitle: 'Destinasi Wisata Unggulan',
    imageUrl: MOCK_TOURISM_SPOTS[0].imageUrl,
    link: `/ekonomi/wisata/${MOCK_TOURISM_SPOTS[0].id}`,
    linkLabel: 'Lihat Detail',
  },
  {
    id: `sme-${MOCK_SMES[1].id}`,
    title: MOCK_SMES[1].name,
    subtitle: 'Produk UMKM Lokal',
    imageUrl: MOCK_SMES[1].imageUrl,
    link: `/ekonomi/umkm/${MOCK_SMES[1].id}`,
    linkLabel: 'Temukan Produk',
  },
];
