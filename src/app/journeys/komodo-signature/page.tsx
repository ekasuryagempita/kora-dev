import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Clock, Anchor, Map, ChevronRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function KomodoSignaturePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      
      {/* 1. HERO SECTION - Cinematic */}
      <section className="relative flex h-[60svh] md:h-[80svh] w-full items-end justify-start overflow-hidden pb-12 md:pb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-out hover:scale-105"
          style={{ backgroundImage: "url('https://i.pinimg.com/1200x/27/86/75/278675d63555b232930e0e98669ea8d5.jpg')" }} 
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6 max-w-6xl flex flex-col items-start">
          <FadeIn delay={0.2} direction="up">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-secondary/80" />
              <span className="text-[9px] tracking-[0.2em] uppercase text-secondary font-medium">
                3 Days / 2 Nights
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.4} direction="up">
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-[1.1] drop-shadow-xl" 
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Komodo Signature
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
                <div className="text-muted-foreground font-light text-xs md:text-sm leading-loose space-y-5">
                  <p>
                    Our Komodo Signature is the ultimate journey through the heart of the UNESCO World Heritage site. Designed for those who seek the perfect balance of thrilling adventure and serene luxury.
                  </p>
                  <p>
                    Over three days, you will sail across crystal-clear waters, hike to iconic viewpoints, relax on pink sand beaches, and encounter the prehistoric Komodo dragons in their natural habitat. Every evening, retreat to your elegant cabin or enjoy a curated dining experience under the stars.
                  </p>
                </div>
              </div>

              {/* Day by Day Itinerary */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Voyage Itinerary
                </h3>
                <div className="space-y-8 md:space-y-12 border-l border-border/40 pl-6 md:pl-8 ml-2">
                  
                  {/* Day 1 */}
                  <div className="relative">
                    <div className="absolute -left-7.5 md:-left-10.25 top-0 w-3 h-3 md:w-4 md:h-4 bg-secondary rounded-full ring-4 ring-background" />
                    <h4 className="text-[10px] md:text-xs text-secondary tracking-[0.2em] uppercase font-medium mb-1">Day 1</h4>
                    <h5 className="text-lg md:text-xl font-bold text-primary mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>Setting Sail & Sunset Bats</h5>
                    <p className="text-muted-foreground font-light text-[11px] md:text-xs leading-[1.8]">
                      Board your vessel at Labuan Bajo harbor. We set sail towards Kelor Island for a short hike revealing panoramic views. In the afternoon, enjoy snorkeling at Manjarite before anchoring at Kalong Island to witness thousands of flying foxes migrating at sunset.
                    </p>
                  </div>

                  {/* Day 2 */}
                  <div className="relative">
                    <div className="absolute -left-7.5 md:-left-10.25 top-0 w-3 h-3 md:w-4 md:h-4 bg-secondary rounded-full ring-4 ring-background" />
                    <h4 className="text-[10px] md:text-xs text-secondary tracking-[0.2em] uppercase font-medium mb-1">Day 2</h4>
                    <h5 className="text-lg md:text-xl font-bold text-primary mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>Dragons & Pink Sands</h5>
                    <p className="text-muted-foreground font-light text-[11px] md:text-xs leading-[1.8]">
                      Dawn trek at Padar Island for the iconic tri-colored beach view. Midday is spent relaxing and swimming at the famous Pink Beach. In the afternoon, step foot on Komodo Island for a guided trek to find the legendary Komodo Dragons.
                    </p>
                  </div>

                  {/* Day 3 */}
                  <div className="relative">
                    <div className="absolute -left-7.5 md:-left-10.25 top-0 w-3 h-3 md:w-4 md:h-4 bg-secondary rounded-full ring-4 ring-background" />
                    <h4 className="text-[10px] md:text-xs text-secondary tracking-[0.2em] uppercase font-medium mb-1">Day 3</h4>
                    <h5 className="text-lg md:text-xl font-bold text-primary mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>Manta Rays & Return</h5>
                    <p className="text-muted-foreground font-light text-[11px] md:text-xs leading-[1.8]">
                      Morning drift snorkel at Manta Point, where you might swim alongside majestic manta rays. We make a final stop at Kanawa Island for pristine coral gardens before sailing back to Labuan Bajo, concluding the journey by late afternoon.
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* KANAN: Sticky Info Card (Pengganti desain abu-abu + tombol oranye jelek) */}
            <div className="w-full lg:w-1/3 mt-10 lg:mt-0">
              <div className="sticky top-28 bg-[#F9F8F6] p-6 md:p-8 rounded-3xl border border-border/20 shadow-sm">
                
                {/* Key Details */}
                <div className="mb-8 space-y-4 border-b border-border/30 pb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span className="text-xs md:text-sm font-medium text-primary">3 Days, 2 Nights</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Map className="w-4 h-4 text-secondary" />
                    <span className="text-xs md:text-sm font-medium text-primary">Labuan Bajo ⇄ Komodo</span>
                  </div>
                  {/* ATURAN ARMADA DIMASUKKAN KE SINI */}
                  <div className="flex items-start gap-3">
                    <Anchor className="w-4 h-4 text-secondary mt-0.5" />
                    <div>
                      <span className="text-xs md:text-sm font-medium text-primary block mb-1">Served By:</span>
                      <span className="text-[10px] md:text-xs font-light text-muted-foreground leading-relaxed">
                        Navigated intimately by our boutique vessels, <Link href="/fleet/kora-nera" className="text-primary font-medium hover:text-secondary underline underline-offset-2">Kora Nera</Link> or <Link href="/fleet/kora-samawa" className="text-primary font-medium hover:text-secondary underline underline-offset-2">Kora Samawa</Link>.
                      </span>
                    </div>
                  </div>
                </div>

                {/* What's Included */}
                <div className="mb-8">
                  <h4 className="text-[9px] tracking-[0.2em] uppercase font-bold text-primary mb-4">What's Included</h4>
                  <ul className="space-y-3 text-[10px] md:text-xs text-muted-foreground font-light">
                    {["Premium cabin accommodation", "All gourmet meals and beverages", "Snorkeling gear & paddleboards", "Airport/Hotel VIP transfers", "Expert local guide & cruise director"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-secondary mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ELEGANT CTA BUTTON - Menuju Concierge */}
                <Link href="/contact" className="block w-full">
                  <Button className="w-full rounded-full bg-primary text-white border-transparent hover:bg-primary/90 transition-all duration-500 text-[9px] py-6 tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                    Plan Your Journey <ChevronRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
                <p className="text-center text-[8px] text-muted-foreground mt-4 tracking-widest uppercase">
                  Subject to vessel availability
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}