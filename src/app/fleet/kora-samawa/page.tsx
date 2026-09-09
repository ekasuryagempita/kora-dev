import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Anchor, Maximize, Wind, Compass, Waves, BedDouble, Check } from "lucide-react";

export default function KoraSamawaDetail() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      
      {/* HERO SECTION */}
      <section className="relative flex h-[70vh] w-full items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1974&auto=format&fit=crop')" }} 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-20">
          <div className="mb-4 flex items-center gap-4 text-sm tracking-widest uppercase text-white/90 font-medium">
            <span>The Serenity</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg" style={{ fontFamily: 'var(--font-playfair)' }}>
            Kora Samawa
          </h1>
          <p className="text-xl text-white/90 font-light drop-shadow-md max-w-2xl">
            A grounded, natural retreat designed to deeply align you with the ocean's gentle rhythm.
          </p>
        </div>
      </section>

      {/* OVERVIEW & SPECIFICATIONS */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* The Philosophy */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>Design & Philosophy</h2>
              <div className="text-muted-foreground font-light leading-relaxed space-y-6 text-lg">
                <p>
                  Embodying harmony and peaceful waters, Kora Samawa is designed to blur the lines between indoor luxury and outdoor majesty. Her architecture highlights earthy tones, raw natural textures, and open-air spaces.
                </p>
                <p>
                  Ideal for those who seek mindfulness and tranquility, Samawa features a dedicated yoga/meditation deck, spacious lounging areas, and 6 beautifully crafted cabins accommodating up to 12 guests in absolute serenity.
                </p>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-muted/30 p-8 md:p-10 rounded-xl border border-border">
              <h3 className="text-lg font-bold text-primary mb-8 uppercase tracking-wider">Vessel Specifications</h3>
              
              <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                <div>
                  <p className="text-xs text-secondary font-medium tracking-widest uppercase mb-1">Length / Beam</p>
                  <p className="text-primary font-medium flex items-center gap-2"><Maximize className="w-4 h-4 text-muted-foreground" /> 32m / 7.2m</p>
                </div>
                <div>
                  <p className="text-xs text-secondary font-medium tracking-widest uppercase mb-1">Cruising Speed</p>
                  <p className="text-primary font-medium flex items-center gap-2"><Wind className="w-4 h-4 text-muted-foreground" /> 8 - 10 Knots</p>
                </div>
                <div>
                  <p className="text-xs text-secondary font-medium tracking-widest uppercase mb-1">Capacity</p>
                  <p className="text-primary font-medium flex items-center gap-2"><Users className="w-4 h-4 text-muted-foreground" /> 12 Guests</p>
                </div>
                <div>
                  <p className="text-xs text-secondary font-medium tracking-widest uppercase mb-1">Cabins</p>
                  <p className="text-primary font-medium flex items-center gap-2"><Anchor className="w-4 h-4 text-muted-foreground" /> 6 En-suite</p>
                </div>
                <div>
                  <p className="text-xs text-secondary font-medium tracking-widest uppercase mb-1">Navigation</p>
                  <p className="text-primary font-medium flex items-center gap-2"><Compass className="w-4 h-4 text-muted-foreground" /> GPS, AIS, Radar</p>
                </div>
                <div>
                  <p className="text-xs text-secondary font-medium tracking-widest uppercase mb-1">Water Supply</p>
                  <p className="text-primary font-medium flex items-center gap-2"><Waves className="w-4 h-4 text-muted-foreground" /> 5500L / Watermaker</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CABIN CONFIGURATION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Cabin Configuration
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Six harmonious spaces featuring soft linens, natural ventilation options, and en-suite bathrooms, crafted to bring you closer to nature.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Signature Suites */}
            <div className="border border-border rounded-xl p-8 hover:shadow-lg transition-shadow bg-card">
              <BedDouble className="w-8 h-8 text-secondary mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Signature Suites</h3>
              <p className="text-xs text-secondary tracking-widest uppercase font-medium mb-4">2 Cabins • Upper Deck</p>
              <p className="text-muted-foreground font-light text-sm mb-6 leading-relaxed">
                Elevated sanctuaries offering unobstructed ocean vistas, natural light, and immediate access to the open-air lounge.
              </p>
              <ul className="space-y-2 text-sm text-primary/80 font-light">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> Queen-size bed</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> Floor-to-ceiling style windows</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> Premium natural bath amenities</li>
              </ul>
            </div>

            {/* Deluxe Cabins */}
            <div className="border border-border rounded-xl p-8 hover:shadow-lg transition-shadow bg-card">
              <BedDouble className="w-8 h-8 text-secondary mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Deluxe Cabins</h3>
              <p className="text-xs text-secondary tracking-widest uppercase font-medium mb-4">4 Cabins • Lower Deck</p>
              <p className="text-muted-foreground font-light text-sm mb-6 leading-relaxed">
                Grounding and serene cabins featuring beautiful woodwork, offering a cool and tranquil environment for deep relaxation.
              </p>
              <ul className="space-y-2 text-sm text-primary/80 font-light">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> Queen or Twin configuration</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> Ample wardrobe space</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> Private en-suite bathroom</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-muted/30 border-t border-border flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>Find Your Peace</h2>
        <p className="text-muted-foreground font-light mb-10 max-w-lg">
          Kora Samawa invites you to disconnect from the noise and reconnect with nature.
        </p>
        <Link href="/journeys">
          <Button size="lg" className="px-10 py-6 text-sm tracking-widest uppercase">
            View Available Journeys
          </Button>
        </Link>
      </section>

    </main>
  );
}