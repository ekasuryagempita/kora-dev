"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Anchor, Maximize, Wind, Compass, Waves, Check, ChevronRight } from "lucide-react";

// Data Spesifikasi Kora Nera
const VESSEL_SPECS = [
  { label: "Length / Beam", value: "30m / 7.0m", icon: Maximize },
  { label: "Cruising Speed", value: "8 - 10 Knots", icon: Wind },
  { label: "Capacity", value: "10 Guests", icon: Users },
  { label: "Cabins", value: "5 En-suite", icon: Anchor },
  { label: "Navigation", value: "GPS, AIS, Radar", icon: Compass },
  { label: "Water Supply", value: "5000L / Watermaker", icon: Waves },
];

// Data Kabin Kora Nera
const CABINS = [
  {
    id: "master",
    name: "Master Suite",
    subtitle: "1 Cabin • Upper Deck",
    desc: "A warm and intimate sanctuary draped in rich mahogany. Features a private aft terrace where you can enjoy your morning coffee while watching the golden sunrise over the archipelago.",
    img: "https://i.pinimg.com/1200x/b8/04/78/b80478a67fc21e3aa90d321e3eb50645.jpg",
    amenities: ["King-size bed", "Private aft terrace", "Large scenic windows", "Writing desk", "Luxury en-suite bathroom"]
  },
  {
    id: "deluxe",
    name: "Deluxe Suites",
    subtitle: "4 Cabins • Lower Deck",
    desc: "Nestled in the quiet lower deck, these cabins exude a cozy, lantern-lit ambiance. Perfect for a restful retreat after a day of diving and exploring the islands.",
    img: "https://i.pinimg.com/1200x/4a/88/f7/4a88f7b985ea87dea5a0f3880787f466.jpg",
    amenities: ["Queen or Twin configuration", "Classic porthole windows", "Spacious wardrobe storage", "Warm ambient lighting", "En-suite bathroom"]
  }
];

export default function KoraNeraDetail() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="flex min-h-screen flex-col bg-background">
      
      {/* HERO SECTION - Statis, Clean, tanpa pt- (Padding Top) agar Navigation bar putih terlihat */}
      <section className="relative flex h-[45svh] md:h-[70svh] w-full items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://093007acd4aeb68adf71.b-cdn.net/wp-content/uploads/2019/12/prana-blog1.jpg')" }} 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-black/20 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-5 flex flex-col items-center text-center mt-10 md:mt-20">
          <div className="mb-4 flex items-center gap-4 text-sm tracking-widest uppercase text-white/90 font-medium">
            <span>THE WARMTH</span>
          </div>
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 md:mb-6 drop-shadow-lg" 
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Kora Nera
          </h1>
          <p className="text-xs md:text-xl text-white/90 font-light drop-shadow-md max-w-2xl px-2">
            An inviting vessel crafted for close connections and golden sunsets.
          </p>
        </div>
      </section>

      {/* OVERVIEW & FULL SPECIFICATIONS */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-5 sm:px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
            
            {/* Left: The Philosophy */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-3 mb-5 md:mb-8">
                <div className="w-8 h-px bg-secondary" />
                <h2 className="text-[10px] md:text-sm font-medium tracking-widest uppercase text-secondary">
                  Design & Philosophy
                </h2>
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-primary mb-4 md:mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                Radiating intimacy and the glow of traditional craftsmanship.
              </h3>
              <div className="text-muted-foreground font-light leading-relaxed md:leading-loose space-y-4 md:space-y-6 text-sm md:text-lg">
                <p className="text-primary/90 font-medium">
                  Inspired by the warm glow of a lantern at sea, Kora Nera features rich mahogany interiors and intimate communal spaces.
                </p>
                <p>
                  With a capacity tailored for just 10 guests, she is an inviting vessel crafted for close connections—be it with family, close friends, or the pristine nature surrounding you. Every corner is designed to create a sense of home while you navigate the untamed beauty of the islands.
                </p>
              </div>
            </div>

            {/* Right: Technical Specifications */}
            <div className="w-full lg:w-1/2">
              <div className="bg-muted/10 md:bg-white md:dark:bg-muted/10 p-6 md:p-10 rounded-2xl md:shadow-sm border border-border/40">
                <h3 className="text-base md:text-xl font-bold text-primary mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Vessel Specifications
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 divide-y divide-border/50 sm:divide-y-0">
                  {VESSEL_SPECS.map((spec, idx) => (
                    <div key={idx} className={`flex items-start gap-3 py-3 md:py-4 ${idx > 1 ? "sm:border-t sm:border-border/50" : ""}`}>
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-muted/40 flex items-center justify-center shrink-0">
                        <spec.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" />
                      </div>
                      <div>
                        <p className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest font-medium mb-0.5">
                          {spec.label}
                        </p>
                        <p className="text-xs md:text-sm text-primary font-medium">
                          {spec.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CABIN CONFIGURATION - Slim Interactive Tabs */}
      <section className="py-12 md:py-24 bg-muted/20 border-y border-border/50">
        <div className="container mx-auto px-5 max-w-5xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
              Cabin Sanctuaries
            </h2>
            <p className="text-xs md:text-base text-muted-foreground font-light max-w-xl mx-auto">
              Lima kabin eksklusif yang dirancang untuk kenyamanan privat.
            </p>
          </div>

          {/* Deretan Tombol - Ramping di HP */}
          <div className="flex justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-4 md:mb-8 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
            {CABINS.map((cabin, idx) => (
              <button
                key={cabin.id}
                onClick={() => setActiveTab(idx)}
                className={`relative shrink-0 snap-center px-4 py-2 md:px-8 md:py-3.5 rounded-full text-[9px] md:text-xs tracking-widest uppercase font-medium transition-colors duration-200 ${
                  activeTab === idx 
                    ? "text-primary bg-background shadow-sm border border-border" 
                    : "text-muted-foreground hover:text-primary border border-transparent hover:bg-background/50"
                }`}
              >
                {cabin.name}
              </button>
            ))}
          </div>

          {/* Konten Kabin - Tinggi Gambar Dibatasi, Padding Dikecilkan, Animasi Simple Fade */}
          <div className="bg-background rounded-2xl overflow-hidden shadow-sm border border-border/50 animate-in fade-in duration-300" key={activeTab}>
            <div className="flex flex-col md:flex-row">
              
              {/* Gambar Visual */}
              <div className="w-full md:w-[50%] h-55 md:h-auto md:aspect-square bg-cover bg-center" style={{ backgroundImage: `url('${CABINS[activeTab].img}')` }} />
              
              {/* Info Kabin */}
              <div className="w-full md:w-[50%] p-5 md:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-secondary/10 px-2.5 py-1 rounded-full w-max mb-3 md:mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <p className="text-[9px] md:text-[10px] text-secondary tracking-widest uppercase font-semibold">
                    {CABINS[activeTab].subtitle}
                  </p>
                </div>
                
                {/* Judul & Deskripsi lebih ramping */}
                <h3 className="text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {CABINS[activeTab].name}
                </h3>
                <p className="text-muted-foreground font-light text-xs md:text-sm leading-relaxed mb-5 md:mb-8">
                  {CABINS[activeTab].desc}
                </p>
                
                {/* Amenities List */}
                <div className="space-y-2.5 text-[11px] md:text-sm text-primary/80 font-light border-t border-border/50 pt-4 md:pt-6 w-full">
                  {CABINS[activeTab].amenities.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-px">
                        <Check className="w-2.5 h-2.5 text-secondary" />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION - Clean & Simple */}
      <section className="py-16 md:py-24 bg-background flex flex-col items-center justify-center text-center px-5">
        <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
          Sail with Kora Nera
        </h2>
        <p className="text-muted-foreground font-light text-xs md:text-base mb-8 md:mb-10 max-w-md leading-relaxed">
          Experience the ultimate intimate journey. Kora Nera is currently available for private charters and select scheduled expeditions.
        </p>
        
        <Link href="/journeys" className="inline-block group">
          <Button variant="outline" className="px-6 md:px-10 py-5 md:py-6 text-[10px] md:text-xs tracking-widest uppercase rounded-full border-primary/30 flex items-center gap-2 transition-all">
            View Available Journeys <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </section>

    </main>
  );
}