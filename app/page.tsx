"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Moon, Sun, Menu, X, ChevronRight, Download, Mail, 
  ExternalLink, MapPin, Code2, PenTool, Layout, Database, 
  Smartphone, Globe, Briefcase, GraduationCap, ChevronUp, 
  Image as ImageIcon, Code, UserCircle, Camera 
} from 'lucide-react';

const PERSONAL_INFO = {
  name: "Unasil Maftuh",
  role: ["Informatics Student", "Graphic Designer", "Web Development"],
  description: "Mahasiswa Informatika UIN Sunan Kalijaga yang bersemangat dalam menggabungkan estetika desain visual dengan fungsionalitas kode. Berpengalaman dalam Graphic Design dan Web Development.",
  email: "unasil.maftuh@gmail.com",
  phone: "6285172260107",
  instagram: "maftuhunas._",
  linkedin: "unasil-maftuh-039768360",
  github: "unasilmaftuh-cloud",
  location: "Yogyakarta, Indonesia"
};

const TECH_STACK = [
  "Figma", "Canva", 
  "VS Code", "Git", "HTML5", "CSS", "JavaScript", 
  "PHP", "MySQL"
];

const EDUCATION = [
  {
    year: "2025 - Sekarang",
    title: "S1 Informatika",
    org: "UIN Sunan Kalijaga Yogyakarta",
    desc: "Fokus pada pengembangan web, rekayasa perangkat lunak, dan perancangan antarmuka (UI/UX)."
  },
  {
    year: "2022 - 2025",
    title: "Teknik Jaringan Komputer & Telekomunikasi (TJKT)",
    org: "SMK Syubbanul Wathon Tegalrejo Magelang",
    desc: "Mempelajari dasar infrastruktur jaringan, hardware komputer, dan sistem operasi."
  }
];

const EXPERIENCES = [
  {
    year: "2025 - 2026",
    title: "Staff Divisi Informasi & Komunikasi",
    org: "Ikatan Mahasiswa UIN Sunan Kalijaga Asal Kebumen (IMASUKE)",
    desc: "Memimpin tim kreatif dalam merancang kebutuhan visual organisasi, mengelola sosial media, dan mengembangkan website himpunan."
  },
  {
    year: "2024",
    title: "Internship (PKL)",
    org: "Gime Muyufar",
    desc: "Merancang, membangun, dan menyelesaikan game edukasi kuis matematika berbasis Unity untuk siswa kelas 2 SD, mulai dari konsep, implementasi fitur, hingga menghasilkan aplikasi Android (APK) yang siap digunakan."
  }
];

const CATEGORIES = ["All", "Pamflet", "Dokumentasi"];

const PROJECTS = [
  {
    id: 1,
    title: "Pamflet Hari Pendidikan Nasional",
    category: "Pamflet",
    image: "/images/pendidikan.png",
    desc: "Desain pamflet untuk perayaan Hari Pendidikan Nasional, menekankan pentingnya pendidikan dalam pembangunan bangsa.",
    purpose: "Meningkatkan kesadaran masyarakat tentang pentingnya pendidikan.",
    tech: ["Canva"],
    featured: false
  },
  {
    id: 2,
    title: "Dokumentasi Kegiatan Ziarah",
    category: "Dokumentasi",
    image: "/images/ziaroh.png",
    desc: "Dokumentasi visual untuk kegiatan ziarah, mencakup foto dari berbagai momen penting.",
    purpose: "Menciptakan dokumentasi yang lengkap dan menarik untuk kegiatan ziarah.",
    tech: ["Canva"],
    featured: false
  },
  {
    id: 3,
    title: "Pamflet Kenaikan Yesus Kristus",
    category: "Pamflet",
    image: "/images/kenaikan.png",
    desc: "Desain pamflet untuk perayaan Kenaikan Yesus Kristus, menekankan pesan kebangkitan dan harapan.",
    purpose: "Meningkatkan pemahaman masyarakat tentang pentingnya perayaan Kenaikan Yesus Kristus.",
    tech: ["Canva"],
    featured: false
  },
  {
    id: 4,
    title: "Dokumentasi Kegiatan Badminton",
    category: "Dokumentasi",
    image: "/images/badminton.png",
    desc: "Dokumentasi visual untuk kegiatan badminton, mencakup foto dari berbagai momen penting.",
    purpose: "Menciptakan dokumentasi yang lengkap dan menarik untuk kegiatan badminton.",
    tech: ["Canva"],
    featured: false
  },
  {
    id: 5,
    title: "Pamflet Kebangkitan Nasional",
    category: "Pamflet",
    image: "/images/kebangkitan.png",
    desc: "Desain pamflet untuk memperingati Hari Kebangkitan Nasional yang mengangkat semangat persatuan, nasionalisme, dan kebangkitan bangsa Indonesia.",
    purpose: "Menyampaikan informasi dan mengajak masyarakat untuk menumbuhkan semangat persatuan serta menghargai perjuangan para pahlawan bangsa.",
    tech: ["Canva"],
    featured: false
  },
  {
    id: 6,
    title: "Pamflet Idul Adha",
    category: "Pamflet",
    image: "/images/iduladha.png",
    desc: "Desain pamflet untuk perayaan Idul Adha, menekankan nilai-nilai kebersamaan dan syukur.",
    purpose: "Meningkatkan kesadaran masyarakat tentang pentingnya perayaan Idul Adha.",
    tech: ["Canva"],
    featured: false
  },
  {  
    id: 7,
    title: "Pamflet Waisak",
    category: "Pamflet",
    image: "/images/waisak.png",
    desc: "Desain pamflet untuk perayaan Waisak, menekankan nilai-nilai kebersamaan dan syukur.",
    purpose: "Meningkatkan kesadaran masyarakat tentang pentingnya perayaan Waisak.",
    tech: ["Canva"],
    featured: false
  },
  {
    id: 8,
    title: "Pamflet Pancasila",
    category: "Pamflet",
    image: "/images/pancasila.png",
    desc: "Desain pamflet untuk perayaan Hari Lahir Pancasila, menekankan nilai-nilai kebersamaan dan syukur.",
    purpose: "Meningkatkan kesadaran masyarakat tentang pentingnya perayaan Hari Lahir Pancasila.",
    tech: ["Canva"],
    featured: false
  },
  {
    id: 9,
    title: "Pamflet Tahun Baru Islam",
    category: "Pamflet",
    image: "/images/muharram.png",
    desc: "Desain pamflet untuk perayaan Tahun Baru Islam, menekankan nilai-nilai kebersamaan dan syukur.",
    purpose: "Meningkatkan kesadaran masyarakat tentang pentingnya perayaan Tahun Baru Islam.",
    tech: ["Canva"],
    featured: false
  }
];

const useTypingEffect = (words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const i = loopNum % words.length;
    const fullText = words[i];

    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

// Scroll Reveal Component Wrapper
const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div 
      ref={ref} 
      style={{ 
        opacity: isVisible ? 1 : 0, 
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default function App() {
  const [theme, setTheme] = useState('dark'); // Default dark
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const typedRole = useTypingEffect(PERSONAL_INFO.role);

  // Initialize Theme
  // Initialize Theme (Paksa Dark Mode di awal)
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    
    // Jika user sebelumnya sengaja menyimpan mode terang (light), maka tampilkan terang.
    // Selain itu (termasuk saat web baru pertama kali dibuka), paksa ke mode gelap (dark).
    if (storedTheme === 'light') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 64; // Tinggi navbar (16 rem / 64px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const filteredProjects = activeFilter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  const ProjectModal = () => {
    if (!selectedProject) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm transition-opacity"
           onClick={() => setSelectedProject(null)}>
        
        {/* Container Utama: Dibuat transparan dan diberi jarak (gap) antar elemen */}
        <div 
          className="relative w-full max-w-5xl flex flex-col md:flex-row max-h-[95vh] md:max-h-[85vh] gap-4 md:gap-8"
          onClick={e => e.stopPropagation()}
        >
          
          {/* Bagian Kiri: Pamflet Melayang Tanpa Background */}
          <div className="w-full md:w-1/2 flex-shrink-0 flex items-center justify-center relative h-[45vh] md:h-auto">
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title}
              // Menambahkan drop shadow agar gambar terlihat benar-benar melayang
              className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] rounded-md"
            />
          </div>
          
          {/* Bagian Kanan: Teks & Deskripsi dengan Efek Glassmorphism */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-2xl shadow-2xl relative">
            
            {/* Tombol Close dipindah ke dalam kotak glass */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/10 dark:bg-black/50 text-gray-900 dark:text-white rounded-full hover:bg-black/20 dark:hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="flex items-center gap-2 mb-3 mt-2 md:mt-0">
              <span className="px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full shadow-sm">
                {selectedProject.category}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-sm">
              {selectedProject.title}
            </h3>
            
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Deskripsi</h4>
                <p className="text-sm sm:text-base leading-relaxed opacity-90">{selectedProject.desc}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Tujuan</h4>
                <p className="text-sm sm:text-base leading-relaxed opacity-90">{selectedProject.purpose}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tech Stack / Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t: string) => (
                    <span key={t} className="px-3 py-1 text-sm bg-white/60 dark:bg-black/40 text-gray-900 dark:text-gray-100 rounded-md border border-white/50 dark:border-white/10 shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-black dark:text-gray-100 font-sans selection:bg-blue-500/30 transition-colors duration-300">
      
      {/* Global CSS for utilities not easily done with Tailwind classes in this env */}
      <style>{`
        .glass-nav { 
          background: rgba(255, 255, 255, 0.7); 
          backdrop-filter: blur(12px); 
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .dark .glass-nav { 
          background: rgba(0, 0, 0, 0.7); 
          backdrop-filter: blur(12px); 
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .typing-cursor::after {
          content: '|';
          animation: blink 1s step-start infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .dark .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .dark ::-webkit-scrollbar-thumb { background: #334155; }
      `}</style>

      {/* Navbar */}
      <nav className="fixed w-full top-0 z-40 glass-nav transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <span className="font-bold text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                UM
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="px-4 pt-2 pb-6 flex flex-col space-y-4 text-center">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {}
      <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
            
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <Reveal delay={100}>
                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4 border border-blue-100 dark:border-blue-800/50">
                  👋 Halo, Selamat Datang!
                </span>
              </Reveal>
              <Reveal delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
                  Saya <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    {PERSONAL_INFO.name}
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={300}>
                <h2 className="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6 h-8">
                  <span className="typing-cursor">{typedRole}</span>
                </h2>
              </Reveal>
              <Reveal delay={400}>
                <p className="max-w-2xl mx-auto lg:mx-0 text-gray-500 dark:text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
                  {PERSONAL_INFO.description}
                </p>
              </Reveal>
              <Reveal delay={500}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="w-full sm:w-auto px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2"
                  >
                    Lihat Portfolio <ChevronRight size={18} />
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Profile Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <Reveal delay={300}>
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full animate-[spin_8s_linear_infinite] blur-md opacity-50 dark:opacity-40"></div>
                  <div className="absolute inset-2 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 z-10 flex items-center justify-center">
                    {/* Placeholder for real image */}
                    <img 
                      src="/images/profil.jpg" 
                      alt="Profile Unasil Maftuh" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Floating badges */}
                  <div className="absolute top-10 -left-6 z-20 bg-white dark:bg-zinc-800 p-3 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-700 animate-[bounce_4s_infinite]">
                    <PenTool className="text-blue-500" size={24} />
                  </div>
                  <div className="absolute bottom-10 -right-6 z-20 bg-white dark:bg-zinc-800 p-3 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-700 animate-[bounce_5s_infinite]">
                    <Code2 className="text-cyan-500" size={24} />
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {}
      <section id="about" className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            </div>
          </Reveal>

          {/* Wrapper diubah menjadi max-w-4xl agar pas di tengah dan nyaman dibaca */}
          <div className="max-w-4xl mx-auto">
            <Reveal delay={100}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold flex items-center justify-center gap-2 mb-8">
                  <Globe className="text-blue-500" /> Ringkasan Perjalanan
                </h3>
                
                <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-lg text-justify md:text-center">
                  <p>
                    Saya merupakan mahasiswa aktif Program Studi Informatika di UIN Sunan Kalijaga Yogyakarta yang memiliki ketertarikan pada pengembangan perangkat lunak dan desain antarmuka. Saya percaya bahwa sebuah aplikasi yang baik tidak hanya dibangun dengan kode yang berkualitas, tetapi juga menghadirkan pengalaman pengguna yang nyaman, intuitif, dan menarik secara visual.
                  </p>
                  <p>
                    Melalui berbagai proyek freelance, kepanitiaan, serta organisasi kemahasiswaan, saya terus mengembangkan kemampuan dalam UI/UX Design, frontend development, dan pengembangan aplikasi. Saya senang mempelajari teknologi baru serta berkomitmen untuk menciptakan solusi digital yang fungsional, modern, dan memberikan nilai bagi penggunanya.
                  </p>
                </div>

                {/* Bagian Angka / Statistik (Dibuat memusat di tengah) */}
                <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
                  <div className="w-full sm:w-48 p-4 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 text-center">
                    <h4 className="font-bold text-3xl text-blue-600 dark:text-blue-400 mb-1">1+</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Tahun Pengalaman Desain</p>
                  </div>
                  <div className="w-full sm:w-48 p-4 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 text-center">
                    <h4 className="font-bold text-3xl text-blue-600 dark:text-blue-400 mb-1">10+</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Proyek Terselesaikan</p>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {}

      <section id="experience" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Bagian Tools/Technologies (Tetap dipertahankan) */}
          <Reveal>
            <div className="mb-24">
              <h3 className="text-center text-lg font-medium text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-widest">
                Tools & Technologies I Use
              </h3>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
                {TECH_STACK.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Judul Section */}
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Experience</h2>
              <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            </div>
          </Reveal>

          {/* Layout 2 Kolom dengan Garis Tengah (Timeline Style) */}
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto relative">
            
            {/* Garis Vertikal Pembatas di Tengah (Hanya muncul di Desktop/Laptop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-zinc-800 -translate-x-1/2"></div>

            {/* KOLOM KIRI: EDUCATION (Rata Kanan) */}
            <Reveal delay={100}>
              <div className="md:text-right md:pr-6">
                <h3 className="text-2xl font-bold mb-8 flex items-center md:justify-end gap-3 text-gray-900 dark:text-white border-b border-gray-200 dark:border-zinc-800 pb-4">
                  {/* Urutan teks dan ikon dibalik saat mode desktop supaya rapi */}
                  <span className="hidden md:inline">Education</span>
                  <GraduationCap className="text-blue-500" size={28} /> 
                  <span className="md:hidden">Education</span>
                </h3>
                <div className="space-y-6">
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                      {/* Efek garis hover biru dipindah ke sisi KANAN */}
                      <div className="absolute top-0 right-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full mb-3">
                        {edu.year}
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.title}</h4>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">{edu.org}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{edu.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* KOLOM KANAN: EXPERIENCE (Rata Kiri) */}
            <Reveal delay={200}>
              <div className="md:text-left md:pl-6">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white border-b border-gray-200 dark:border-zinc-800 pb-4">
                  <Briefcase className="text-cyan-500" size={28} /> Experience
                </h3>
                <div className="space-y-6">
                  {EXPERIENCES.map((exp, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                      {/* Efek garis hover cyan tetap di sisi KIRI */}
                      <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="inline-block px-3 py-1 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold rounded-full mb-3">
                        {exp.year}
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h4>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">{exp.org}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {}
      <section id="projects" className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio Works</h2>
              <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Koleksi karya saya di bidang desain grafis.
              </p>
            </div>
          </Reveal>

          {/* Filter Categories */}
          <Reveal delay={100}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === cat 
                      ? "bg-blue-600 text-white shadow-md" 
                      : "bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <Reveal key={project.id} delay={idx * 50}>
                <div 
                  className="group relative bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-200 dark:bg-zinc-800">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
                        <ExternalLink size={24} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="text-[10px] px-2 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 rounded-full font-bold">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4 flex-grow">
                      {project.desc}
                    </p>
                    
                    {/* Tech Badges (Max 3) */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="text-[10px] font-medium px-2 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400 rounded-md">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[10px] font-medium px-2 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400 rounded-md">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-gray-500 dark:text-gray-400">
              <ImageIcon size={48} className="mx-auto mb-4 opacity-20" />
              <p>Belum ada karya untuk kategori ini.</p>
            </div>
          )}

        </div>
      </section>

      {}
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* BG Accent */}
        <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/5 -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-zinc-800">
              <div className="grid md:grid-cols-2">
                
                {/* Contact Info */}
                <div className="p-10 md:p-12 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                  <h2 className="text-3xl font-bold mb-4">Mari Berkolaborasi</h2>
                  <p className="text-blue-100 mb-8 leading-relaxed">
                    Tertarik untuk bekerja sama, butuh bantuan desain, atau sekadar ingin berdiskusi tentang teknologi? Jangan ragu untuk menghubungi saya.
                  </p>
                  
                  <div className="space-y-6">
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-blue-100">Email</p>
                        <p className="font-medium">{PERSONAL_INFO.email}</p>
                      </div>
                    </a>
                    
                    <a href={`https://wa.me/${PERSONAL_INFO.phone}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Smartphone size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-blue-100">WhatsApp</p>
                        <p className="font-medium">+{PERSONAL_INFO.phone}</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-blue-100">Lokasi</p>
                        <p className="font-medium">{PERSONAL_INFO.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Socials */}
                <div className="p-10 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Temukan Saya di</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <a href={`https://instagram.com/${PERSONAL_INFO.instagram}`} target="_blank" rel="noreferrer" 
                       className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-zinc-800 rounded-2xl hover:bg-pink-50 hover:text-pink-600 dark:hover:bg-pink-900/20 dark:hover:text-pink-400 transition-colors group">
                      <Camera size={32} className="mb-3 text-gray-400 group-hover:text-pink-500 transition-colors" />
                      <span className="font-medium text-sm">Instagram</span>
                    </a>
                    <a href={`https://linkedin.com/in/${PERSONAL_INFO.linkedin}`} target="_blank" rel="noreferrer" 
                       className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-zinc-800 rounded-2xl hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-400 transition-colors group">
                      <UserCircle size={32} className="mb-3 text-gray-400 group-hover:text-blue-500 transition-colors" />
                      <span className="font-medium text-sm">LinkedIn</span>
                    </a>
                    <a href={`https://github.com/${PERSONAL_INFO.github}`} target="_blank" rel="noreferrer" 
                       className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-zinc-800 rounded-2xl hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-black dark:hover:text-white transition-colors group col-span-2">
                      <Code size={32} className="mb-3 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                      <span className="font-medium text-sm">GitHub</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black py-8 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Unasil Maftuh. All rights reserved.
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-xs mt-2 flex items-center justify-center gap-1">
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>

      {/* Project Detail Modal */}
      <ProjectModal />

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all z-40 transform ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
        }`}
        aria-label="Back to Top"
      >
        <ChevronUp size={24} />
      </button>

    </div>
  );
}