import Link from "next/link";
import Image from "next/image";

// Inline SVGs yang 100% Anti-Error (Bebas dari Lucide)
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 7.1C2.5 7.1 2 8.8 2 12c0 3.2.5 4.9.5 4.9c.3 1.1 1.2 2 2.3 2.1 3.5.3 7.2.3 7.2.3s3.7 0 7.2-.3c1.1-.1 2-1 2.3-2.1.0 0 .5-1.7.5-4.9 0-3.2-.5-4.9-.5-4.9c-.3-1.1-1.2-2-2.3-2.1-3.5-.3-7.2-.3-7.2-.3s-3.7 0-7.2.3c-1.1.1-2 1-2.3 2.1z"/>
    <path d="M10 15l5-3-5-3v6z"/>
  </svg>
);

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
);

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
    <path d="M9 10a0.5 0.5 0 0 0 1 0V9a0.5 0.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a0.5 0.5 0 0 0 0-1h-1a0.5 0.5 0 0 0 0 1"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[#172136] text-white/70 pt-16 pb-8 md:pt-24 md:pb-12 border-t border-white/5">
      <div className="container mx-auto px-5 max-w-7xl">
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-between">
          
          {/* Bagian Brand Logo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3 shrink-0">
            <Link href="/" className="mb-6">
              <Image 
                src="/logo-3.png"
                alt="KORA" 
                width={120} 
                height={40}
                className="w-[100px] md:w-[120px] h-auto object-contain brightness-0 invert opacity-90 transition-opacity hover:opacity-100"
              />
            </Link>
            <p className="text-xs md:text-sm font-light leading-relaxed max-w-[280px] text-white/60">
              Premium sailing experiences in Labuan Bajo & Komodo. Where the ocean meets the wild.
            </p>
          </div>

          {/* Bagian Navigasi */}
          <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 md:gap-12">
            
            {/* Kolom 1: Explore */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-semibold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-5 md:mb-6">Explore</h4>
              <div className="flex flex-col gap-3 md:gap-4 text-[11px] md:text-sm font-light text-white/60">
                <Link href="/journeys" className="hover:text-secondary hover:translate-x-1 transition-all duration-300">Journeys</Link>
                <Link href="/fleet" className="hover:text-secondary hover:translate-x-1 transition-all duration-300">The Fleet</Link>
                <Link href="/about" className="hover:text-secondary hover:translate-x-1 transition-all duration-300">About Us</Link>
              </div>
            </div>

            {/* Kolom 2: Legal */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-semibold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-5 md:mb-6">Legal</h4>
              <div className="flex flex-col gap-3 md:gap-4 text-[11px] md:text-sm font-light text-white/60">
                <Link href="#" className="hover:text-secondary hover:translate-x-1 transition-all duration-300">Terms of Service</Link>
                <Link href="#" className="hover:text-secondary hover:translate-x-1 transition-all duration-300">Privacy Policy</Link>
              </div>
            </div>

            {/* Kolom 3: Contact */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left col-span-2 md:col-span-1 border-t border-white/5 md:border-transparent pt-8 md:pt-0">
              <h4 className="text-white font-semibold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-5 md:mb-6">Contact</h4>
              <div className="flex flex-col gap-3 md:gap-4 text-[11px] md:text-sm font-light text-white/60 items-center md:items-start">
                <p className="leading-relaxed">Labuan Bajo, Flores<br className="hidden md:block"/> Indonesia</p>
                <a href="mailto:hello@kora.com" className="hover:text-secondary text-white/90 transition-colors">hello@kora.com</a>
                
                {/* Ikon Social Media sesuai Request (IG, YT, Tiktok, WA) */}
                <div className="flex gap-3 mt-3">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300 group">
                    <InstagramIcon className="w-3.5 h-3.5 text-white/70 group-hover:text-white" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300 group">
                    <YoutubeIcon className="w-4 h-4 text-white/70 group-hover:text-white" />
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300 group">
                    <TiktokIcon className="w-3.5 h-3.5 text-white/70 group-hover:text-white" />
                  </a>
                  {/* Tautan WhatsApp dengan API wa.me + Nomor Anda */}
                  <a href="https://wa.me/6285393271357" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300 group">
                    <WhatsappIcon className="w-3.5 h-3.5 text-white/70 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>

          </div>
          
        </div>

        {/* Copyright Bar */}
        <div className="mt-16 md:mt-24 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[9px] md:text-[10px] font-light tracking-[0.15em] text-white/40 uppercase">
          <p>&copy; {new Date().getFullYear()} KORA Sailing. All rights reserved.</p>
          <p>Designed in Bali</p>
        </div>
      </div>
    </footer>
  );
}