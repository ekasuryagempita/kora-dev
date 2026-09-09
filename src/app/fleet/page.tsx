import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Anchor, Maximize, Wind } from "lucide-react";

export default function FleetPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background pt-32">
      
      {/* HEADER SECTION */}
      <section className="container mx-auto px-4 max-w-4xl text-center mb-24 md:mb-32 mt-8">
        <h1 
          className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-wide uppercase"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          The Fleet
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
          Three vessels, each with its own soul. Crafted by masterful boat builders in Sulawesi, 
          our Phinisi fleet seamlessly blends ancient maritime traditions with modern luxury.
        </p>
      </section>

      {/* THE VESSELS - EDITORIAL LAYOUT */}
      <section className="container mx-auto px-4 max-w-7xl pb-32">
        
        {/* 1. KORA TALA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center py-20 border-t border-primary/20 group">
          <div className="lg:col-span-7 aspect-[16/10] overflow-hidden rounded-xl">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: "url('https://i.pinimg.com/736x/94/5e/2d/945e2d2d6b37f54eebccd02b897ad800.jpg')" }} 
            />
          </div>
          
          <div className="lg:col-span-5 flex flex-col items-start">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4">
              The Guidance
            </p>
            <h2 
              className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Kora Tala
            </h2>
            <p className="text-muted-foreground font-light mb-8 leading-relaxed text-lg">
              Representing the guiding star, Tala offers unparalleled elegance and calm navigation. Designed with expansive teak decks and panoramic suites, it is perfect for those seeking a serene and composed journey across the archipelago.
            </p>
            
            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10 text-sm text-primary/80">
              <div className="flex items-center gap-2"><Users className="w-4 h-4 text-secondary" /> 14 Guests</div>
              <div className="flex items-center gap-2"><Anchor className="w-4 h-4 text-secondary" /> 7 Cabins</div>
              <div className="flex items-center gap-2"><Maximize className="w-4 h-4 text-secondary" /> 35m Length</div>
              <div className="flex items-center gap-2"><Wind className="w-4 h-4 text-secondary" /> 8-10 Knots</div>
            </div>

            <Link href="/fleet/kora-tala">
              <Button variant="outline" className="rounded-md border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-sm tracking-widest uppercase transition-all">
                Explore Tala
              </Button>
            </Link>
          </div>
        </div>

        {/* 2. KORA NERA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center py-20 border-t border-primary/20 group">
          <div className="lg:col-span-5 flex flex-col items-start order-2 lg:order-1">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4">
              The Warmth
            </p>
            <h2 
              className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Kora Nera
            </h2>
            <p className="text-muted-foreground font-light mb-8 leading-relaxed text-lg">
              Inspired by the lantern's glow, Nera radiates warmth and intimacy. Featuring rich mahogany interiors and cozy communal spaces, it is an inviting vessel crafted for close connections and golden sunsets.
            </p>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10 text-sm text-primary/80">
              <div className="flex items-center gap-2"><Users className="w-4 h-4 text-secondary" /> 10 Guests</div>
              <div className="flex items-center gap-2"><Anchor className="w-4 h-4 text-secondary" /> 5 Cabins</div>
              <div className="flex items-center gap-2"><Maximize className="w-4 h-4 text-secondary" /> 30m Length</div>
              <div className="flex items-center gap-2"><Wind className="w-4 h-4 text-secondary" /> 8-10 Knots</div>
            </div>

            <Link href="/fleet/kora-nera">
              <Button variant="outline" className="rounded-md border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-sm tracking-widest uppercase transition-all">
                Explore Nera
              </Button>
            </Link>
          </div>

          <div className="lg:col-span-7 aspect-[16/10] overflow-hidden rounded-xl order-1 lg:order-2">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: "url('https://i.pinimg.com/1200x/b6/49/0e/b6490ec7524d86a174e1b56426942bfd.jpg')" }} 
            />
          </div>
        </div>

        {/* 3. KORA SAMAWA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center py-20 border-y border-primary/20 group">
          <div className="lg:col-span-7 aspect-[16/10] overflow-hidden rounded-xl">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: "url('https://i.pinimg.com/736x/18/c2/8a/18c28a883ee9c6920c65ae2278cc233b.jpg')" }} 
            />
          </div>
          
          <div className="lg:col-span-5 flex flex-col items-start">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4">
              The Serenity
            </p>
            <h2 
              className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Kora Samawa
            </h2>
            <p className="text-muted-foreground font-light mb-8 leading-relaxed text-lg">
              Embodying harmony and peaceful waters. Samawa provides a grounded, natural retreat with earthy tones and open-air lounges for those who wish to deeply align with the ocean's gentle rhythm.
            </p>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10 text-sm text-primary/80">
              <div className="flex items-center gap-2"><Users className="w-4 h-4 text-secondary" /> 12 Guests</div>
              <div className="flex items-center gap-2"><Anchor className="w-4 h-4 text-secondary" /> 6 Cabins</div>
              <div className="flex items-center gap-2"><Maximize className="w-4 h-4 text-secondary" /> 32m Length</div>
              <div className="flex items-center gap-2"><Wind className="w-4 h-4 text-secondary" /> 8-10 Knots</div>
            </div>

            <Link href="/fleet/kora-samawa">
              <Button variant="outline" className="rounded-md border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-sm tracking-widest uppercase transition-all">
                Explore Samawa
              </Button>
            </Link>
          </div>
        </div>

      </section>
    </main>
  );
}