import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Anchor, Utensils, MapPin, Waves, Calendar } from "lucide-react";

export default function KomodoSignatureDetail() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      
      {/* HERO SECTION - Cinematic Detail */}
      <section className="relative flex h-[70vh] w-full items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516690553959-71a414d6b9b6?q=80&w=2070&auto=format&fit=crop')" }} 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-20">
          <div className="mb-4 flex items-center gap-4 text-sm tracking-widest uppercase text-white/90 font-medium">
            <span>3 Days / 2 Nights</span>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span>Labuan Bajo Return</span>
          </div>
          <h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Komodo Signature
          </h1>
          <p className="text-xl text-white/90 font-light drop-shadow-md">
            From Rp 6.500.000 <span className="text-sm opacity-70">/ person</span>
          </p>
        </div>
      </section>

      {/* OVERVIEW & INCLUSIONS */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Left: Overview */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                The Experience
              </h2>
              <div className="text-muted-foreground font-light leading-relaxed space-y-6 text-lg">
                <p>
                  Our Komodo Signature is the ultimate journey through the heart of the UNESCO World Heritage site. Designed for those who seek the perfect balance of thrilling adventure and serene luxury.
                </p>
                <p>
                  Over three days, you will sail across crystal-clear waters, hike to iconic viewpoints, relax on pink sand beaches, and encounter the prehistoric Komodo dragons in their natural habitat. Every evening, retreat to your elegant cabin or enjoy a curated dining experience under the stars.
                </p>
              </div>
            </div>

            {/* Right: Quick Facts & Inclusions */}
            <div className="bg-muted/30 p-8 rounded-xl border border-border">
              <h3 className="text-lg font-bold text-primary mb-6 uppercase tracking-wider">What's Included</h3>
              <ul className="space-y-4 text-sm text-muted-foreground font-light mb-8">
                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> Premium cabin accommodation</li>
                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> All gourmet meals and non-alcoholic beverages</li>
                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> Snorkeling gear & paddleboards</li>
                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> Airport/Hotel transfers in Labuan Bajo</li>
                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> Expert local guide & cruise director</li>
              </ul>
              
              <Button className="w-full py-6 text-sm tracking-widest uppercase shadow-md">
                Inquire Availability
              </Button>
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
                <p className="text-sm text-secondary font-medium tracking-widest uppercase">The Voyage Begins</p>
              </div>
              <div className="md:w-3/4 border-l-2 border-primary/10 pl-6 md:pl-10 pb-12 relative">
                <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[7px] top-2" />
                <h4 className="text-xl font-semibold text-primary mb-4">Kelor Island & Manjarite</h4>
                <p className="text-muted-foreground font-light leading-relaxed mb-4">
                  After a morning welcome on board, we set sail to Kelor Island for a short hike offering panoramic views. Following a curated lunch, we head to Manjarite for your first snorkeling experience amidst vibrant coral gardens.
                </p>
                <div className="flex gap-4 text-xs text-primary/60">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Trekking</span>
                  <span className="flex items-center gap-1"><Waves className="w-3 h-3" /> Snorkeling</span>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="md:w-1/4 shrink-0">
                <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Day 02</h3>
                <p className="text-sm text-secondary font-medium tracking-widest uppercase">The Wild Heart</p>
              </div>
              <div className="md:w-3/4 border-l-2 border-primary/10 pl-6 md:pl-10 pb-12 relative">
                <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[7px] top-2" />
                <h4 className="text-xl font-semibold text-primary mb-4">Padar, Komodo & Pink Beach</h4>
                <p className="text-muted-foreground font-light leading-relaxed mb-4">
                  A sunrise hike at Padar Island to witness one of the world's most iconic landscapes. Next, step ashore on Komodo Island to encounter the legendary dragons. The day concludes with a relaxing afternoon at the surreal Pink Beach.
                </p>
                <div className="flex gap-4 text-xs text-primary/60">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Wildlife & Hiking</span>
                  <span className="flex items-center gap-1"><Waves className="w-3 h-3" /> Beach Leisure</span>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="md:w-1/4 shrink-0">
                <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Day 03</h3>
                <p className="text-sm text-secondary font-medium tracking-widest uppercase">Farewell Seas</p>
              </div>
              <div className="md:w-3/4 border-l-2 border-transparent pl-6 md:pl-10 relative">
                <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[7px] top-2" />
                <h4 className="text-xl font-semibold text-primary mb-4">Manta Point & Kanawa</h4>
                <p className="text-muted-foreground font-light leading-relaxed mb-4">
                  We seek out the majestic manta rays at Manta Point for an unforgettable swim. Our final stop is Kanawa Island for a farewell snorkel before cruising back to Labuan Bajo harbor.
                </p>
                <div className="flex gap-4 text-xs text-primary/60">
                  <span className="flex items-center gap-1"><Waves className="w-3 h-3" /> Marine Life</span>
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