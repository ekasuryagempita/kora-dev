import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Anchor, Compass, HeartHandshake } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      
      {/* HERO SECTION */}
      <section className="relative flex h-[60vh] md:h-[80vh] w-full items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522008342704-6b265b543c46?q=80&w=2070&auto=format&fit=crop')" }} 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-20">
          <p className="mb-4 text-sm tracking-widest uppercase text-white/90 font-medium">
            Our Heritage
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-lg" style={{ fontFamily: 'var(--font-playfair)' }}>
            The KORA Story
          </h1>
        </div>
      </section>

      {/* THE ORIGIN - EDITORIAL SPREAD */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
            
            <div className="md:col-span-5 flex flex-col items-start order-2 md:order-1">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                Born from a Profound Respect for the Sea.
              </h2>
              <div className="text-muted-foreground font-light leading-relaxed space-y-6 text-lg">
                <p>
                  KORA was not simply founded; it was forged from a deep-rooted passion for the Indonesian archipelago. We recognized that the true magic of Komodo and its surrounding waters lies not just in the destination, but in the rhythm of the journey.
                </p>
                <p>
                  We partnered with master shipwrights in South Sulawesi, blending centuries-old Phinisi boat-building traditions with the refined comforts of a world-class boutique hotel. The result is a fleet that respects the ocean's heritage while offering an uncompromising standard of modern luxury.
                </p>
              </div>
            </div>

            <div className="md:col-span-7 aspect-[4/5] md:aspect-square overflow-hidden rounded-xl order-1 md:order-2">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=1939&auto=format&fit=crop')" }} 
              />
            </div>

          </div>
        </div>
      </section>

      {/* OUR PILLARS */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-primary mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Our Pillars
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              The foundational values that guide every voyage we design, ensuring your experience is as meaningful as it is magnificent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-background border border-primary/10 flex items-center justify-center mb-6 shadow-sm">
                <Compass className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>Authentic Exploration</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                We take you beyond the curated tourist paths, venturing into hidden coves, unnamed beaches, and authentic local communities that define the true spirit of Flores.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-background border border-primary/10 flex items-center justify-center mb-6 shadow-sm">
                <Anchor className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>Maritime Heritage</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Our vessels are living testaments to the UNESCO-recognized Phinisi heritage. Handcrafted from ironwood and teak, they honor the ancient Bugis sailors of Indonesia.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-background border border-primary/10 flex items-center justify-center mb-6 shadow-sm">
                <HeartHandshake className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>Sustainable Luxury</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                We operate with a zero-plastic policy, utilize advanced water-making technologies, and heavily employ local crews to ensure we give back to the communities and seas we navigate.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}