import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Anchor, Compass, Heart, Shield, Waves, ChevronRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background overflow-hidden">
      
      {/* HERO SECTION - Ketinggian diturunkan drastis di HP (50svh) */}
      <section className="relative flex h-[50svh] md:h-[85svh] w-full items-end justify-start overflow-hidden pb-10 md:pb-24">
        <div 
          className="absolute inset-0 bg-cover bg-top bg-no-repeat transition-transform duration-[15s] ease-out hover:scale-110"
          style={{ backgroundImage: "url('https://i.pinimg.com/1200x/0c/7b/d1/0c7bd13a1e237a1864ee7b89abea3649.jpg')" }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/10" />
        
        <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-3 md:mb-6">
            <div className="w-6 md:w-8 h-[1px] bg-secondary" />
            <span className="text-[9px] md:text-xs tracking-[0.3em] uppercase text-secondary font-medium">
              Our Story
            </span>
          </div>
          {/* Ukuran font HP diturunkan ke text-4xl */}
          <h1 
            className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-2 md:mb-4 leading-[1.1] md:leading-[1.1] drop-shadow-xl" 
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Beyond The <br /> Horizon.
          </h1>
          <p className="text-[11px] md:text-xl text-white/80 font-light max-w-xl md:leading-relaxed mt-1 md:mt-2">
            Redefining luxury expeditions through the untamed beauty of the Indonesian archipelago.
          </p>
        </div>
      </section>

      {/* CHAPTER 1: THE VISION - Padding dipangkas, teks diperkecil */}
      <section className="py-12 md:py-32 bg-background relative flex items-center justify-center px-5">
        <div className="absolute top-4 md:top-10 left-4 md:left-20 text-[100px] md:text-[300px] text-muted/30 font-serif leading-none select-none">
          "
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 md:mb-12 leading-[1.5] md:leading-[1.4]" style={{ fontFamily: 'var(--font-playfair)' }}>
            KORA represents the delicate harmony between the vibrant life beneath the surface and the rugged majesty of the land.
          </h2>
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-left text-muted-foreground font-light leading-[1.7] md:leading-[1.8] text-[11px] md:text-base">
            <p className="flex-1">
              Born from a deep reverence for the ocean, KORA was established with a singular vision: to offer discerning travelers a gateway to the world's most pristine marine environments without compromising on unparalleled comfort.
            </p>
            <p className="flex-1">
              We believe that true luxury lies in the privilege of access—standing on pink sand beaches at dawn, swimming alongside gentle manta rays, and retreating to a beautifully crafted floating sanctuary.
            </p>
          </div>
        </div>
      </section>

      {/* CHAPTER 2: THE HERITAGE - Tinggi gambar dikurangi jadi 250px di HP */}
      <section className="py-10 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="relative w-full">
            {/* Background Image memanjang namun ramping di HP */}
            <div className="w-full h-[250px] md:h-[600px] rounded-xl md:rounded-3xl overflow-hidden relative">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
                style={{ backgroundImage: "url('https://i.pinimg.com/1200x/20/06/99/2006998d9e568fb79f31c42e975ac135.jpg')" }} 
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Kotak Teks Overlapping - Padding disusutkan, margin top disesuaikan */}
            <div className="relative z-10 w-[92%] md:w-[600px] bg-background p-6 md:p-14 rounded-xl md:rounded-tl-3xl md:rounded-br-3xl shadow-xl mx-auto md:ml-auto md:mr-12 -mt-16 md:-mt-48 border border-border/40">
              <div className="flex items-center gap-3 mb-3 md:mb-6">
                <div className="w-6 md:w-10 h-px bg-secondary" />
                <h3 className="text-[9px] md:text-xs font-medium tracking-[0.2em] uppercase text-secondary">
                  The Heritage
                </h3>
              </div>
              <h2 className="text-2xl md:text-5xl font-bold text-primary mb-3 md:mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                The Phinisi Legacy
              </h2>
              <div className="text-muted-foreground font-light leading-[1.7] md:leading-[1.8] space-y-3 md:space-y-5 text-[11px] md:text-sm">
                <p>
                  Every vessel in the KORA fleet is a masterpiece of traditional Indonesian maritime engineering. Handcrafted by the masterful boat builders of the Bugis-Makassar tribes in South Sulawesi, our Phinisi yachts are built using century-old techniques.
                </p>
                <p>
                  Constructed from highly durable Ironwood and Teak, these majestic wooden schooners were historically used for the spice trade. Today, they are retrofitted with state-of-the-art navigation and luxury amenities.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CHAPTER 3: THE KORA PROMISE - Ultra-Slim Swipeable Cards */}
      <section className="py-12 md:py-32 bg-muted/10 border-t border-border/50">
        <div className="container mx-auto max-w-7xl">
          
          <div className="px-5 md:px-8 mb-6 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-2">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-5xl font-bold text-primary mb-2 md:mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                The KORA Promise
              </h2>
              <p className="text-[11px] md:text-base text-muted-foreground font-light leading-relaxed">
                We hold ourselves to the highest standards. <br className="md:hidden" />
                <span className="md:hidden italic text-secondary">Geser untuk melihat selengkapnya &rarr;</span>
              </p>
            </div>
          </div>

          {/* Wrapper Horizontal Scroll Khusus Mobile - w-[75vw] agar mengintip */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 md:gap-8 px-5 md:px-8 pb-8 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3">
            
            {/* Card 1 */}
            <div className="w-[75vw] sm:w-[350px] md:w-auto shrink-0 snap-center bg-background border border-border/40 p-5 md:p-10 rounded-xl md:rounded-3xl hover:shadow-xl transition-all duration-300 group">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-4 h-4 md:w-7 md:h-7 text-secondary" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>Uncompromised Safety</h3>
              <p className="text-muted-foreground font-light text-[11px] md:text-sm leading-[1.6] md:leading-[1.7]">
                Equipped with modern GPS, AIS, Radar, and certified crews trained in international maritime safety protocols.
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-[75vw] sm:w-[350px] md:w-auto shrink-0 snap-center bg-background border border-border/40 p-5 md:p-10 rounded-xl md:rounded-3xl hover:shadow-xl transition-all duration-300 group">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-4 h-4 md:w-7 md:h-7 text-secondary" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>Intuitive Hospitality</h3>
              <p className="text-muted-foreground font-light text-[11px] md:text-sm leading-[1.6] md:leading-[1.7]">
                From curated dining featuring local flavors to anticipating your needs before you even ask. Our crew delivers a personalized service.
              </p>
            </div>

            {/* Card 3 */}
            <div className="w-[75vw] sm:w-[350px] md:w-auto shrink-0 snap-center bg-background border border-border/40 p-5 md:p-10 rounded-xl md:rounded-3xl hover:shadow-xl transition-all duration-300 group">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Compass className="w-4 h-4 md:w-7 md:h-7 text-secondary" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>Sustainable Exploration</h3>
              <p className="text-muted-foreground font-light text-[11px] md:text-sm leading-[1.6] md:leading-[1.7]">
                We navigate responsibly by minimizing single-use plastics and supporting local conservation efforts, ensuring the wild remains pristine.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION - Diet Padding */}
      <section className="py-16 md:py-32 bg-background flex flex-col items-center justify-center text-center px-5 relative overflow-hidden">
        <h2 className="text-2xl md:text-5xl font-bold text-primary mb-3 md:mb-6 relative z-10" style={{ fontFamily: 'var(--font-playfair)' }}>
          Write Your Own Story
        </h2>
        <p className="text-muted-foreground font-light text-[11px] md:text-lg mb-8 md:mb-12 max-w-lg leading-[1.7] md:leading-[1.8] relative z-10">
          Join us on a voyage where every sunrise brings a new discovery and every sunset marks an unforgettable memory.
        </p>
        
        <Link href="/journeys" className="inline-block relative z-10 group">
          <Button variant="outline" className="px-6 md:px-10 py-5 md:py-7 text-[9px] md:text-xs tracking-[0.2em] uppercase transition-all duration-500 rounded-full border-primary/30 hover:border-primary hover:bg-primary hover:text-white flex items-center gap-2 md:gap-3 shadow-sm hover:shadow-xl">
            Explore Our Journeys <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </section>

    </main>
  );
}