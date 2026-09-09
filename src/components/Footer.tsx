import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 border-t border-primary/20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Bagian Kiri: Brand & Intro */}
          <div className="md:col-span-2">
            <span 
              className="text-3xl font-bold tracking-widest mb-6 block" 
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              KORA
            </span>
            <p className="text-primary-foreground/70 font-light max-w-md leading-relaxed">
              Premium sailing experiences in Labuan Bajo & Komodo. Where the ocean meets the wild, curated for those who seek elegance and adventure.
            </p>
          </div>

          {/* Bagian Tengah: Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 tracking-wider uppercase text-sm">Explore</h4>
            <ul className="space-y-4 text-primary-foreground/70 font-light text-sm">
              <li>
                <Link href="/journeys" className="hover:text-secondary transition-colors">Journeys</Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-secondary transition-colors">The Fleet</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Bagian Kanan: Contact Info & Socials */}
          <div>
            <h4 className="font-semibold mb-6 tracking-wider uppercase text-sm">Contact</h4>
            <ul className="space-y-4 text-primary-foreground/70 font-light text-sm">
              <li>
                Labuan Bajo, Flores<br/>
                East Nusa Tenggara, Indonesia
              </li>
              <li className="pt-2 border-t border-primary-foreground/10 mt-4">
                {/* Tautan WhatsApp KORA */}
                <a 
                  href="https://wa.me/6285393271357" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-secondary transition-colors block py-1"
                >
                  WA: 0853 9327 1357
                </a>
                <a 
                  href="mailto:hello@kora-sailing.com" 
                  className="hover:text-secondary transition-colors block py-1"
                >
                  hello@kora-sailing.com
                </a>
              </li>
              <li className="pt-4 flex items-center gap-4">
                {/* Tautan Social Media KORA */}
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-secondary transition-colors font-medium tracking-wide"
                >
                  Instagram
                </a>
                <span className="text-primary-foreground/30">•</span>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-secondary transition-colors font-medium tracking-wide"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-primary-foreground/10 text-xs text-primary-foreground/50 font-light">
          <p>&copy; {new Date().getFullYear()} KORA Sailing. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}