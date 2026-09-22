import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Clock, MapPin, Map, ChevronRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function WaeReboPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      
      {/* 1. HERO SECTION */}
      <section className="relative flex h-[60svh] md:h-[80svh] w-full items-end justify-start overflow-hidden pb-12 md:pb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-out hover:scale-105"
          style={{ backgroundImage: "url('https://i.pinimg.com/1200x/a4/91/e6/a491e6f43624aeb2b87ba04ea104a094.jpg')" }} 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6 max-w-6xl flex flex-col items-start">
          <FadeIn delay={0.2} direction="up">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[1px] bg-secondary/80" />
              <span className="text-[9px] tracking-[0.2em] uppercase text-secondary font-medium">
                2 Days / 1 Night
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.4} direction="up">
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-[1.1] drop-shadow-xl" 
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Wae Rebo Expedition
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* 2. SPLIT LAYOUT CONTENT */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* KIRI: Narasi & Itinerary */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              <div className="mb-12 md:mb-16">
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                  The Experience
                </h2>
                <div className="text-muted-foreground font-light text-xs md:text-sm leading-[2] space-y-5">
                  <p>
                    Step off the boat and venture deep into the mountainous heart of Flores. Wae Rebo is a highly preserved traditional Manggarai village located at an altitude of 1,200 meters above sea level, completely isolated from modern roads.
                  </p>
                  <p>
                    This terrestrial expedition requires a scenic trek through dense, mist-covered rainforests. Upon arrival, you will be welcomed by the village elders, sleep in the iconic cone-shaped Mbaru Niang houses, and immerse yourself in an ancient way of life untouched by modernity. A true awakening for the soul.
                  </p>
                </div>
              </div>

              {/* Day by Day Itinerary */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Expedition Itinerary
                </h3>
                <div className="space-y-8 md:space-y-12 border-l border-border/40 pl-6 md:pl-8 ml-2">
                  
                  {/* Day 1 */}
                  <div className="relative">
                    <div className="absolute -left-[30px] md:-left-[41px] top-0 w-3 h-3 md:w-4 md:h-4 bg-secondary rounded-full ring-4 ring-background" />
                    <h4 className="text-[10px] md:text-xs text-secondary tracking-[0.2em] uppercase font-medium mb-1">Day 1</h4>
                    <h5 className="text-lg md:text-xl font-bold text-primary mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>The Ascent to the Clouds</h5>
                    <p className="text-muted-foreground font-light text-[11px] md:text-xs leading-[1.8]">
                      Morning departure via private transport from Labuan Bajo to Denge Village. From Denge, we begin a scenic 2-3 hour trek through lush jungle. Arriving at Wae Rebo, we participate in the traditional <em>Waelu</em> welcome ceremony with the village elder, followed by dinner and an overnight stay in the traditional Mbaru Niang house.
                    </p>
                  </div>

                  {/* Day 2 */}
                  <div className="relative">
                    <div className="absolute -left-[30px] md:-left-[41px] top-0 w-3 h-3 md:w-4 md:h-4 bg-secondary rounded-full ring-4 ring-background" />
                    <h4 className="text-[10px] md:text-xs text-secondary tracking-[0.2em] uppercase font-medium mb-1">Day 2</h4>
                    <h5 className="text-lg md:text-xl font-bold text-primary mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>Cultural Immersion & Descent</h5>
                    <p className="text-muted-foreground font-light text-[11px] md:text-xs leading-[1.8]">
                      Wake up to the misty, magical morning atmosphere of the village. Enjoy freshly brewed local Flores coffee and interact with the villagers to learn about their weaving and farming traditions. By mid-morning, we trek back down to Denge and drive back, arriving in Labuan Bajo by late afternoon.
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* KANAN: Sticky Info Card */}
            <div className="w-full lg:w-1/3 mt-10 lg:mt-0">
              <div className="sticky top-28 bg-[#F9F8F6] p-6 md:p-8 rounded-3xl border border-border/20 shadow-sm">
                
                {/* Key Details */}
                <div className="mb-8 space-y-4 border-b border-border/30 pb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span className="text-xs md:text-sm font-medium text-primary">2 Days, 1 Night</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Map className="w-4 h-4 text-secondary" />
                    <span className="text-xs md:text-sm font-medium text-primary">Flores Highlands</span>
                  </div>
                  {/* ATURAN LOGISTIK KHUSUS WAE REBO (TANPA KAPAL) */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                    <div>
                      <span className="text-xs md:text-sm font-medium text-primary block mb-1">Logistics:</span>
                      <span className="text-[10px] md:text-xs font-light text-muted-foreground leading-relaxed">
                        A fully overland (terrestrial) cultural expedition. No sailing vessel is required for this journey.
                      </span>
                    </div>
                  </div>
                </div>

                {/* What's Included */}
                <div className="mb-8">
                  <h4 className="text-[9px] tracking-[0.2em] uppercase font-bold text-primary mb-4">What's Included</h4>
                  <ul className="space-y-3 text-[10px] md:text-xs text-muted-foreground font-light">
                    {["1 Night in Mbaru Niang (Traditional House)", "Traditional welcome ceremony (Waelu)", "Local meals cooked by the villagers", "Private transport from Labuan Bajo", "Professional trekking guide"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-secondary mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ELEGANT CTA BUTTON */}
                <Link href="/contact" className="block w-full">
                  <Button className="w-full rounded-full bg-primary text-white border-transparent hover:bg-primary/90 transition-all duration-500 text-[9px] py-6 tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                    Plan Your Journey <ChevronRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}