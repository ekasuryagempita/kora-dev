import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function JourneysPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background pt-32">
      
      {/* HEADER SECTION - Clean & Centered */}
      <section className="container mx-auto px-4 max-w-4xl text-center mb-24 md:mb-32 mt-8">
        <h1 
          className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-wide uppercase"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Curated Journeys
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
          Embark on a voyage where untouched nature meets unparalleled comfort. 
          Choose your path through the wonders of the Indonesian archipelago.
        </p>
      </section>

      {/* JOURNEYS LIST - CLASSIC EDITORIAL MAGAZINE SPREAD */}
      <section className="container mx-auto px-4 max-w-7xl pb-32">
        
        {/* 1. KOMODO SIGNATURE */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-center py-20 border-t border-primary/20 group">
          {/* Image - Clean, no heavy shadows */}
          <div className="md:col-span-7 aspect-[3/2] overflow-hidden rounded-xl">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516690553959-71a414d6b9b6?q=80&w=2070&auto=format&fit=crop')" }} 
            />
          </div>
          
          {/* Text - Elegant, breathable */}
          <div className="md:col-span-5 flex flex-col items-start">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4">
              3 Days / 2 Nights &nbsp;—&nbsp; From Rp 6.500.000
            </p>
            <h2 
              className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Komodo <br /> Signature
            </h2>
            <p className="text-muted-foreground font-light mb-10 leading-relaxed text-lg">
              Our quintessential sailing experience. Navigate through the heart of Komodo National Park, walk alongside ancient dragons, and snorkel in pristine pink sand beaches.
            </p>
            <Link href="/journeys/komodo-signature">
              <Button variant="outline" className="rounded-md border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-sm tracking-widest uppercase transition-all">
                Discover Itinerary
              </Button>
            </Link>
          </div>
        </div>

        {/* 2. LOMBOK TO LABUAN BAJO */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-center py-20 border-t border-primary/20 group">
          {/* Text - Alternating to the left on Desktop */}
          <div className="md:col-span-5 flex flex-col items-start order-2 md:order-1">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4">
              3 Days / 2 Nights &nbsp;—&nbsp; From Rp 7.000.000
            </p>
            <h2 
              className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Lombok to <br /> Labuan Bajo
            </h2>
            <p className="text-muted-foreground font-light mb-10 leading-relaxed text-lg">
              A grand crossing across the Wallace Line. Witness the dramatic shift from lush volcanic craters in Lombok to the rugged, untamed savannahs of Flores, while swimming with majestic manta rays.
            </p>
            <Link href="/journeys/lombok-to-labuan-bajo">
              <Button variant="outline" className="rounded-md border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-sm tracking-widest uppercase transition-all">
                Discover Itinerary
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="md:col-span-7 aspect-[3/2] overflow-hidden rounded-xl order-1 md:order-2">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505993597083-3bf4382892b3?q=80&w=2013&auto=format&fit=crop')" }} 
            />
          </div>
        </div>

        {/* 3. WAE REBO EXPEDITION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-center py-20 border-y border-primary/20 group">
          {/* Image */}
          <div className="md:col-span-7 aspect-[3/2] overflow-hidden rounded-xl">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580914960731-b823df162fa9?q=80&w=2070&auto=format&fit=crop')" }} 
            />
          </div>
          
          {/* Text */}
          <div className="md:col-span-5 flex flex-col items-start">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4">
              2 Days / 1 Night &nbsp;—&nbsp; From Rp 2.500.000
            </p>
            <h2 
              className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Wae Rebo <br /> Expedition
            </h2>
            <p className="text-muted-foreground font-light mb-10 leading-relaxed text-lg">
              Step off the boat and venture into the mystical highlands of Flores. Trek through lush rainforests to reach the "Village Above the Clouds," experiencing an authentic cultural immersion.
            </p>
            <Link href="/journeys/wae-rebo">
              <Button variant="outline" className="rounded-md border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-sm tracking-widest uppercase transition-all">
                Discover Itinerary
              </Button>
            </Link>
          </div>
        </div>

      </section>
    </main>
  );
}