import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function JourneysPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">

      {/* CINEMATIC HEADER - Diperpendek sedikit di HP agar tidak terlalu mendominasi */}
      <section className="relative flex h-[35svh] md:h-[60svh] w-full items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://i.pinimg.com/1200x/27/86/75/278675d63555b232930e0e98669ea8d5.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 text-center mt-12 md:mt-20">
          <h1
            className="text-3xl md:text-6xl font-bold text-white mb-2 md:mb-6 tracking-wide uppercase drop-shadow-lg"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Curated Journeys
          </h1>
          <p className="text-[11px] md:text-lg text-white/90 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-md px-4">
            Embark on a voyage where untouched nature meets unparalleled comfort.
          </p>
        </div>
      </section>

      {/* JOURNEYS LIST - DIET KETAT UNTUK MOBILE */}
      <section className="container mx-auto px-5 max-w-6xl py-8 md:py-24">

        {/* 1. KOMODO SIGNATURE */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center py-8 md:py-16 border-b border-border/60 group">
          {/* Image - Disusutkan menjadi 200px di HP */}
          <div className="w-full md:w-1/2 h-[200px] md:h-[400px] shrink-0 overflow-hidden rounded-xl shadow-sm">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: "url('https://i.pinimg.com/1200x/fd/4e/14/fd4e14e2ff8b3f60fc0f741333375a0c.jpg')" }}
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
            <p className="text-secondary font-medium tracking-widest uppercase text-[9px] md:text-xs mb-1.5 md:mb-4">
              3D2N &nbsp;—&nbsp; From Rp 6.500.000
            </p>
            <h2
              className="text-2xl md:text-5xl font-bold text-primary mb-2.5 md:mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Komodo Signature
            </h2>
            <p className="text-muted-foreground font-light mb-5 md:mb-8 leading-relaxed text-xs md:text-base">
              Our quintessential sailing experience. Navigate through the heart of Komodo National Park, walk alongside ancient dragons, and snorkel in pristine pink sand beaches.
            </p>
            
            {/* Tombol Ramping (Inline-block & padding kecil) */}
            <Link href="/journeys/komodo-signature" className="inline-block">
              <Button variant="outline" className="rounded-md border-primary text-primary hover:bg-primary hover:text-white px-6 md:px-8 py-2.5 md:py-4 text-[10px] md:text-xs tracking-widest uppercase transition-all">
                Discover Itinerary
              </Button>
            </Link>
          </div>
        </div>

        {/* 2. LOMBOK TO LABUAN BAJO */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center py-8 md:py-16 border-b border-border/60 group">
          {/* Text */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center order-2 md:order-1">
            <p className="text-secondary font-medium tracking-widest uppercase text-[9px] md:text-xs mb-1.5 md:mb-4">
              3D2N &nbsp;—&nbsp; From Rp 7.000.000
            </p>
            <h2
              className="text-2xl md:text-5xl font-bold text-primary mb-2.5 md:mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Lombok to Labuan Bajo
            </h2>
            <p className="text-muted-foreground font-light mb-5 md:mb-8 leading-relaxed text-xs md:text-base">
              A grand crossing across the Wallace Line. Witness the dramatic shift from lush volcanic craters in Lombok to the rugged, untamed savannahs of Flores.
            </p>
            
            {/* Tombol Ramping */}
            <Link href="/journeys/lombok-to-labuan-bajo" className="inline-block">
              <Button variant="outline" className="rounded-md border-primary text-primary hover:bg-primary hover:text-white px-6 md:px-8 py-2.5 md:py-4 text-[10px] md:text-xs tracking-widest uppercase transition-all">
                Discover Itinerary
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 h-[200px] md:h-[400px] shrink-0 overflow-hidden rounded-xl shadow-sm order-1 md:order-2">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: "url('https://i.pinimg.com/736x/49/af/a4/49afa4486034609f3ed12ee75130965b.jpg')" }}
            />
          </div>
        </div>

        {/* 3. WAE REBO EXPEDITION */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center py-8 md:py-16 group">
          {/* Image */}
          <div className="w-full md:w-1/2 h-[200px] md:h-[400px] shrink-0 overflow-hidden rounded-xl shadow-sm">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: "url('https://i.pinimg.com/1200x/a4/91/e6/a491e6f43624aeb2b87ba04ea104a094.jpg')" }}
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
            <p className="text-secondary font-medium tracking-widest uppercase text-[9px] md:text-xs mb-1.5 md:mb-4">
              2D1N &nbsp;—&nbsp; From Rp 2.500.000
            </p>
            <h2
              className="text-2xl md:text-5xl font-bold text-primary mb-2.5 md:mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Wae Rebo Expedition
            </h2>
            <p className="text-muted-foreground font-light mb-5 md:mb-8 leading-relaxed text-xs md:text-base">
              Step off the boat and venture into the mystical highlands of Flores. Trek through lush rainforests to reach the "Village Above the Clouds", experiencing an authentic cultural immersion.
            </p>
            
            {/* Tombol Ramping */}
            <Link href="/journeys/wae-rebo" className="inline-block">
              <Button variant="outline" className="rounded-md border-primary text-primary hover:bg-primary hover:text-white px-6 md:px-8 py-2.5 md:py-4 text-[10px] md:text-xs tracking-widest uppercase transition-all">
                Discover Itinerary
              </Button>
            </Link>
          </div>
        </div>

      </section>
    </main>
  );
}