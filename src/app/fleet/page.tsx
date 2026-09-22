import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Anchor, Maximize, Wind } from "lucide-react";

export default function FleetPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      
      {/* CINEMATIC HERO SECTION - Memperbaiki Navbar putih yang hilang & memberi nuansa premium */}
      <section className="relative flex h-[35svh] md:h-[60svh] w-full items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero.png')" }} 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 text-center mt-12 md:mt-20">
          <h1 
            className="text-3xl md:text-6xl font-bold text-white mb-2 md:mb-6 tracking-wide uppercase drop-shadow-lg"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            The Fleet
          </h1>
          <p className="text-[11px] md:text-lg text-white/90 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-md px-4">
            Three vessels, each with its own soul. Crafted by masterful boat builders in Sulawesi, our Phinisi fleet seamlessly blends ancient maritime traditions with modern luxury.
          </p>
        </div>
      </section>

      {/* THE VESSELS - MOBILE SLIM & DESKTOP EDITORIAL */}
      <section className="container mx-auto px-5 max-w-6xl py-8 md:py-24">
        
        {/* 1. KORA TALA */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center py-8 md:py-16 border-b border-border/60 group">
          {/* Image - Ramping di HP (200px), Setengah layar di Desktop */}
          <div className="w-full md:w-1/2 h-[200px] md:h-[400px] shrink-0 overflow-hidden rounded-xl shadow-sm">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: "url('https://i.pinimg.com/736x/94/5e/2d/945e2d2d6b37f54eebccd02b897ad800.jpg')" }} 
            />
          </div>
          
          {/* Text */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
            <p className="text-secondary font-medium tracking-widest uppercase text-[9px] md:text-xs mb-1.5 md:mb-4">
              The Guidance
            </p>
            <h2 
              className="text-2xl md:text-5xl font-bold text-primary mb-2.5 md:mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Kora Tala
            </h2>
            <p className="text-muted-foreground font-light mb-5 md:mb-8 leading-relaxed text-xs md:text-base">
              Representing the guiding star, Tala offers unparalleled elegance and calm navigation. Designed with expansive teak decks and panoramic suites, it is perfect for those seeking a serene and composed journey across the archipelago.
            </p>
            
            {/* Quick Specs - Compact Grid for Mobile */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-6 md:mb-10 text-[10px] md:text-sm text-primary/80 bg-muted/20 md:bg-transparent p-4 md:p-0 rounded-lg border border-border/50 md:border-none w-full md:w-auto">
              <div className="flex items-center gap-2"><Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" /> 14 Guests</div>
              <div className="flex items-center gap-2"><Anchor className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" /> 7 Cabins</div>
              <div className="flex items-center gap-2"><Maximize className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" /> 35m Length</div>
              <div className="flex items-center gap-2"><Wind className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" /> 8-10 Knots</div>
            </div>

            {/* Tombol Ramping */}
            <Link href="/fleet/kora-tala" className="inline-block">
              <Button variant="outline" className="rounded-md border-primary text-primary hover:bg-primary hover:text-white px-6 md:px-8 py-2.5 md:py-4 text-[10px] md:text-xs tracking-widest uppercase transition-all">
                Explore Tala
              </Button>
            </Link>
          </div>
        </div>

        {/* 2. KORA NERA */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center py-8 md:py-16 border-b border-border/60 group">
          {/* Text - Alternating (Kiri di Desktop, Bawah di HP) */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center order-2 md:order-1">
            <p className="text-secondary font-medium tracking-widest uppercase text-[9px] md:text-xs mb-1.5 md:mb-4">
              The Warmth
            </p>
            <h2 
              className="text-2xl md:text-5xl font-bold text-primary mb-2.5 md:mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Kora Nera
            </h2>
            <p className="text-muted-foreground font-light mb-5 md:mb-8 leading-relaxed text-xs md:text-base">
              Inspired by the lantern's glow, Nera radiates warmth and intimacy. Featuring rich mahogany interiors and cozy communal spaces, it is an inviting vessel crafted for close connections and golden sunsets.
            </p>
            
            <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-6 md:mb-10 text-[10px] md:text-sm text-primary/80 bg-muted/20 md:bg-transparent p-4 md:p-0 rounded-lg border border-border/50 md:border-none w-full md:w-auto">
              <div className="flex items-center gap-2"><Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" /> 10 Guests</div>
              <div className="flex items-center gap-2"><Anchor className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" /> 5 Cabins</div>
              <div className="flex items-center gap-2"><Maximize className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" /> 30m Length</div>
              <div className="flex items-center gap-2"><Wind className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" /> 8-10 Knots</div>
            </div>

            <Link href="/fleet/kora-nera" className="inline-block">
              <Button variant="outline" className="rounded-md border-primary text-primary hover:bg-primary hover:text-white px-6 md:px-8 py-2.5 md:py-4 text-[10px] md:text-xs tracking-widest uppercase transition-all">
                Explore Nera
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 h-[200px] md:h-[400px] shrink-0 overflow-hidden rounded-xl shadow-sm order-1 md:order-2">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: "url('https://i.pinimg.com/1200x/b6/49/0e/b6490ec7524d86a174e1b56426942bfd.jpg')" }} 
            />
          </div>
        </div>

        {/* 3. KORA SAMAWA */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center py-8 md:py-16 group">
          {/* Image */}
          <div className="w-full md:w-1/2 h-[200px] md:h-[400px] shrink-0 overflow-hidden rounded-xl shadow-sm">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: "url('https://i.pinimg.com/736x/18/c2/8a/18c28a883ee9c6920c65ae2278cc233b.jpg')" }} 
            />
          </div>
          
          {/* Text */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
            <p className="text-secondary font-medium tracking-widest uppercase text-[9px] md:text-xs mb-1.5 md:mb-4">
              The Serenity
            </p>
            <h2 
              className="text-2xl md:text-5xl font-bold text-primary mb-2.5 md:mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Kora Samawa
            </h2>
            <p className="text-muted-foreground font-light mb-5 md:mb-8 leading-relaxed text-xs md:text-base">
              Embodying harmony and peaceful waters. Samawa provides a grounded, natural retreat with earthy tones and open-air lounges for those who wish to deeply align with the ocean's gentle rhythm.
            </p>
            
            <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-6 md:mb-10 text-[10px] md:text-sm text-primary/80 bg-muted/20 md:bg-transparent p-4 md:p-0 rounded-lg border border-border/50 md:border-none w-full md:w-auto">
              <div className="flex items-center gap-2"><Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" /> 12 Guests</div>
              <div className="flex items-center gap-2"><Anchor className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" /> 6 Cabins</div>
              <div className="flex items-center gap-2"><Maximize className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" /> 32m Length</div>
              <div className="flex items-center gap-2"><Wind className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" /> 8-10 Knots</div>
            </div>

            <Link href="/fleet/kora-samawa" className="inline-block">
              <Button variant="outline" className="rounded-md border-primary text-primary hover:bg-primary hover:text-white px-6 md:px-8 py-2.5 md:py-4 text-[10px] md:text-xs tracking-widest uppercase transition-all">
                Explore Samawa
              </Button>
            </Link>
          </div>
        </div>

      </section>
    </main>
  );
}