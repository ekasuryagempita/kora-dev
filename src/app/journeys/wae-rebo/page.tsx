import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Mountain, Home, MapPin, Sun, Coffee } from "lucide-react";

export default function WaeReboDetail() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      
      {/* HERO SECTION */}
      <section className="relative flex h-[70vh] w-full items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580914960731-b823df162fa9?q=80&w=2070&auto=format&fit=crop')" }} 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-20">
          <div className="mb-4 flex items-center gap-4 text-sm tracking-widest uppercase text-white/90 font-medium">
            <span>2 Days / 1 Night</span>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span>Overland Cultural Trek</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg" style={{ fontFamily: 'var(--font-playfair)' }}>
            Wae Rebo Expedition
          </h1>
          <p className="text-xl text-white/90 font-light drop-shadow-md">
            From Rp 2.500.000 <span className="text-sm opacity-70">/ person</span>
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
                  Step off the boat and venture deep into the mountainous heart of Flores. Wae Rebo is a highly preserved traditional Manggarai village located at an altitude of 1,200 meters above sea level.
                </p>
                <p>
                  This expedition requires a scenic trek through dense rainforests. Upon arrival, you will be welcomed by the village elders, sleep in the iconic cone-shaped Mbaru Niang houses, and immerse yourself in an ancient way of life untouched by modernity. A true awakening for the soul.
                </p>
              </div>
            </div>

            <div className="bg-muted/30 p-8 rounded-xl border border-border">
              <h3 className="text-lg font-bold text-primary mb-6 uppercase tracking-wider">What's Included</h3>
              <ul className="space-y-4 text-sm text-muted-foreground font-light mb-8">
                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> 1 Night in Mbaru Niang (Traditional House)</li>
                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> Traditional welcome ceremony (Waelu)</li>
                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> Local meals cooked by the villagers</li>
                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> Private transport from Labuan Bajo</li>
                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> Professional trekking guide</li>
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
                <p className="text-sm text-secondary font-medium tracking-widest uppercase">The Ascent</p>
              </div>
              <div className="md:w-3/4 border-l-2 border-primary/10 pl-6 md:pl-10 pb-12 relative">
                <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[7px] top-2" />
                <h4 className="text-xl font-semibold text-primary mb-4">Journey to the Clouds</h4>
                <p className="text-muted-foreground font-light leading-relaxed mb-4">
                  We depart early from Labuan Bajo, enjoying a scenic drive through the Flores highlands to Denge village. From here, a 2.5-hour trek through dense, melodious rainforest leads us to Wae Rebo. Upon arrival, you will participate in the sacred 'Waelu' welcoming ceremony before settling into your Mbaru Niang and enjoying a traditional communal dinner.
                </p>
                <div className="flex gap-4 text-xs text-primary/60">
                  <span className="flex items-center gap-1"><Mountain className="w-3 h-3" /> Trekking</span>
                  <span className="flex items-center gap-1"><Home className="w-3 h-3" /> Cultural Immersion</span>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="md:w-1/4 shrink-0">
                <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Day 02</h3>
                <p className="text-sm text-secondary font-medium tracking-widest uppercase">Morning Mist</p>
              </div>
              <div className="md:w-3/4 border-l-2 border-transparent pl-6 md:pl-10 relative">
                <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[7px] top-2" />
                <h4 className="text-xl font-semibold text-primary mb-4">Descent & Spider Web Rice Fields</h4>
                <p className="text-muted-foreground font-light leading-relaxed mb-4">
                  Wake up to the ethereal mist blanketing the village. Savor a cup of locally grown Flores coffee as the village comes to life. After breakfast, we bid farewell and trek back down to Denge. On the drive back to Labuan Bajo, we make a special stop at Cancar to witness the unique Lingko 'Spider Web' rice fields.
                </p>
                <div className="flex gap-4 text-xs text-primary/60">
                  <span className="flex items-center gap-1"><Sun className="w-3 h-3" /> Morning Views</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Scenic Stops</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}