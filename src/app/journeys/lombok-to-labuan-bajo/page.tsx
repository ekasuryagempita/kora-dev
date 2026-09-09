import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Anchor, MapPin, Waves, Mountain, Camera } from "lucide-react";

export default function LombokToLabuanBajoDetail() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      
      {/* HERO SECTION */}
      <section className="relative flex h-[70vh] w-full items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505993597083-3bf4382892b3?q=80&w=2013&auto=format&fit=crop')" }} 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-20">
          <div className="mb-4 flex items-center gap-4 text-sm tracking-widest uppercase text-white/90 font-medium">
            <span>3 Days / 2 Nights</span>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span>One Way Expedition</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg" style={{ fontFamily: 'var(--font-playfair)' }}>
            Lombok to Labuan Bajo
          </h1>
          <p className="text-xl text-white/90 font-light drop-shadow-md">
            From Rp 7.000.000 <span className="text-sm opacity-70">/ person</span>
          </p>
        </div>
      </section>

      {/* OVERVIEW & INCLUSIONS */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>The Experience</h2>
              <div className="text-muted-foreground font-light leading-relaxed space-y-6 text-lg">
                <p>
                  A grand crossing across the majestic Wallace Line. This one-way expedition is designed for true explorers who wish to witness the dramatic transition of landscapes and biodiversity from the western to the eastern archipelago.
                </p>
                <p>
                  Over three days, you will sail past the towering Mount Rinjani, swim in remote crater lakes, seek out the gentle giants in Saleh Bay, and anchor in pristine bays untouched by mass tourism, before finally entering the realm of the Komodo dragons.
                </p>
              </div>
            </div>

            <div className="bg-muted/30 p-8 rounded-xl border border-border">
              <h3 className="text-lg font-bold text-primary mb-6 uppercase tracking-wider">What's Included</h3>
              <ul className="space-y-4 text-sm text-muted-foreground font-light mb-8">
                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> Premium cabin accommodation</li>
                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> All gourmet meals on board</li>
                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> Land excursions & entrance fees</li>
                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> Snorkeling gear & paddleboards</li>
              </ul>
              <Button className="w-full py-6 text-sm tracking-widest uppercase shadow-md">Inquire Availability</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ITINERARY (Day by Day) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-primary mb-16 text-center" style={{ fontFamily: 'var(--font-playfair)' }}>
            Your Itinerary
          </h2>

          <div className="space-y-12">
            {/* Day 1 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="md:w-1/4 shrink-0">
                <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Day 01</h3>
                <p className="text-sm text-secondary font-medium tracking-widest uppercase">The Great Departure</p>
              </div>
              <div className="md:w-3/4 border-l-2 border-primary/10 pl-6 md:pl-10 pb-12 relative">
                <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[7px] top-2" />
                <h4 className="text-xl font-semibold text-primary mb-4">Moyo Island & Satonda Crater</h4>
                <p className="text-muted-foreground font-light leading-relaxed mb-4">
                  We depart from East Lombok, sailing towards the hidden gem of Moyo Island. A short trek through the jungle leads to the stunning Mata Jitu waterfall. In the afternoon, we reach Satonda Island, a sunken volcanic crater where you can swim in its saline lake.
                </p>
                <div className="flex gap-4 text-xs text-primary/60">
                  <span className="flex items-center gap-1"><Mountain className="w-3 h-3" /> Jungle Trek</span>
                  <span className="flex items-center gap-1"><Waves className="w-3 h-3" /> Lake Swim</span>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="md:w-1/4 shrink-0">
                <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Day 02</h3>
                <p className="text-sm text-secondary font-medium tracking-widest uppercase">Giants of the Sea</p>
              </div>
              <div className="md:w-3/4 border-l-2 border-primary/10 pl-6 md:pl-10 pb-12 relative">
                <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[7px] top-2" />
                <h4 className="text-xl font-semibold text-primary mb-4">Saleh Bay & Gili Banta</h4>
                <p className="text-muted-foreground font-light leading-relaxed mb-4">
                  Wake up before dawn in Saleh Bay for a once-in-a-lifetime opportunity to swim with majestic Whale Sharks. As the day progresses, we set sail eastward, anchoring at the pristine beaches of Gili Banta to relax and witness a golden sunset.
                </p>
                <div className="flex gap-4 text-xs text-primary/60">
                  <span className="flex items-center gap-1"><Camera className="w-3 h-3" /> Wildlife Encounter</span>
                  <span className="flex items-center gap-1"><Waves className="w-3 h-3" /> Snorkeling</span>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="md:w-1/4 shrink-0">
                <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Day 03</h3>
                <p className="text-sm text-secondary font-medium tracking-widest uppercase">The Dragon's Gate</p>
              </div>
              <div className="md:w-3/4 border-l-2 border-transparent pl-6 md:pl-10 relative">
                <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[7px] top-2" />
                <h4 className="text-xl font-semibold text-primary mb-4">Komodo National Park & Arrival</h4>
                <p className="text-muted-foreground font-light leading-relaxed mb-4">
                  Entering the boundaries of Komodo National Park, we stop at Manta Point to glide alongside these graceful creatures. After a final gourmet lunch on board, we slowly cruise into Labuan Bajo harbor, concluding your grand expedition.
                </p>
                <div className="flex gap-4 text-xs text-primary/60">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Marine Exploration</span>
                  <span className="flex items-center gap-1"><Anchor className="w-3 h-3" /> Disembarkation</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}