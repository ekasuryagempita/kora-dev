import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Anchor, Maximize, Wind, Compass, Waves, BedDouble, Check } from "lucide-react";

export default function KoraNeraDetail() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      
      {/* HERO SECTION */}
      <section className="relative flex h-[70vh] w-full items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518182170546-076616fdacdf?q=80&w=2070&auto=format&fit=crop')" }} 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-20">
          <div className="mb-4 flex items-center gap-4 text-sm tracking-widest uppercase text-white/90 font-medium">
            <span>The Warmth</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg" style={{ fontFamily: 'var(--font-playfair)' }}>
            Kora Nera
          </h1>
          <p className="text-xl text-white/90 font-light drop-shadow-md max-w-2xl">
            An inviting vessel crafted for close connections and golden sunsets.
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
                  Inspired by the comforting glow of a lantern, Kora Nera radiates warmth and intimacy. Built with rich mahogany interiors and soft ambient lighting, she provides a highly personalized boutique sailing experience.
                </p>
                <p>
                  Designed specifically for smaller, close-knit groups of up to 10 guests, Nera features cozy communal spaces, a beautifully appointed shaded deck, and an atmosphere that encourages meaningful conversations as the sun dips below the horizon.
                </p>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-muted/30 p-8 md:p-10 rounded-xl border border-border">
              <h3 className="text-lg font-bold text-primary mb-8 uppercase tracking-wider">Vessel Specifications</h3>
              
              <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                <div>
                  <p className="text-xs text-secondary font-medium tracking-widest uppercase mb-1">Length / Beam</p>
                  <p className="text-primary font-medium flex items-center gap-2"><Maximize className="w-4 h-4 text-muted-foreground" /> 30m / 6.8m</p>
                </div>
                <div>
                  <p className="text-xs text-secondary font-medium tracking-widest uppercase mb-1">Cruising Speed</p>
                  <p className="text-primary font-medium flex items-center gap-2"><Wind className="w-4 h-4 text-muted-foreground" /> 8 - 10 Knots</p>
                </div>
                <div>
                  <p className="text-xs text-secondary font-medium tracking-widest uppercase mb-1">Capacity</p>
                  <p className="text-primary font-medium flex items-center gap-2"><Users className="w-4 h-4 text-muted-foreground" /> 10 Guests</p>
                </div>
                <div>
                  <p className="text-xs text-secondary font-medium tracking-widest uppercase mb-1">Cabins</p>
                  <p className="text-primary font-medium flex items-center gap-2"><Anchor className="w-4 h-4 text-muted-foreground" /> 5 En-suite</p>
                </div>
                <div>
                  <p className="text-xs text-secondary font-medium tracking-widest uppercase mb-1">Navigation</p>
                  <p className="text-primary font-medium flex items-center gap-2"><Compass className="w-4 h-4 text-muted-foreground" /> GPS, AIS, VHF</p>
                </div>
                <div>
                  <p className="text-xs text-secondary font-medium tracking-widest uppercase mb-1">Water Supply</p>
                  <p className="text-primary font-medium flex items-center gap-2"><Waves className="w-4 h-4 text-muted-foreground" /> 5000L / Watermaker</p>
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
              Five intimate and luxurious cabins, detailed with rich woods and warm tones to create a perfect resting place after a day of adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Master Suite */}
            <div className="border border-border rounded-xl p-8 hover:shadow-lg transition-shadow bg-card">
              <BedDouble className="w-8 h-8 text-secondary mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Owner's Suite</h3>
              <p className="text-xs text-secondary tracking-widest uppercase font-medium mb-4">1 Cabin • Main Deck</p>
              <p className="text-muted-foreground font-light text-sm mb-6 leading-relaxed">
                A gorgeous suite located at the aft, offering expansive windows, direct deck access, and an indulgent king-size bed.
              </p>
              <ul className="space-y-2 text-sm text-primary/80 font-light">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> King-size bed</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> Direct deck access</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> Double vanity bathroom</li>
              </ul>
            </div>

            {/* Deluxe Cabins */}
            <div className="border border-border rounded-xl p-8 hover:shadow-lg transition-shadow bg-card">
              <BedDouble className="w-8 h-8 text-secondary mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Deluxe Cabins</h3>
              <p className="text-xs text-secondary tracking-widest uppercase font-medium mb-4">4 Cabins • Lower Deck</p>
              <p className="text-muted-foreground font-light text-sm mb-6 leading-relaxed">
                Beautifully appointed cabins that maximize space and comfort, featuring mahogany accents and plush bedding.
              </p>
              <ul className="space-y-2 text-sm text-primary/80 font-light">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> Queen-size bed</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> Traditional porthole windows</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> Private en-suite bathroom</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-muted/30 border-t border-border flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>Experience True Warmth</h2>
        <p className="text-muted-foreground font-light mb-10 max-w-lg">
          Kora Nera is the perfect choice for private family charters and intimate group getaways.
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