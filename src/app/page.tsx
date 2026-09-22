import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Anchor, Waves, Utensils, ShieldCheck, MapPin, Star, Quote, ChevronRight, Info } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-background">
      
      {/* 1. HERO SECTION - Transisi Halus, Anti-Garis Hitam, dan Indikator Kontras */}
      <section className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 overflow-hidden">
          <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

  {/* Overlay kalau diperlukan */}
  <div className="absolute inset-0 bg-black/30" />
</div>
        
        {/* Lapis 1: Penggelap merata agar foto terlihat mewah & tulisan tengah aman */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Lapis 2: Vignette atas dan tengah (Tidak menggunakan gradien hitam di bawah agar tidak tabrakan dengan asap putih) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        
        {/* Lapis 3: Efek Asap/Transisi - Diberi -bottom-1 untuk membasmi garis hitam 1px! */}
        <div className="absolute -bottom-1 left-0 right-0 h-[25vh] md:h-[35vh] bg-gradient-to-t from-background via-background/80 to-transparent z-10" />

        <div className="relative z-20 container mx-auto px-5 flex flex-col items-center text-center justify-center h-full pt-16">
          <div className="max-w-4xl flex flex-col items-center">
            
            <FadeIn delay={0.2} direction="up">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-4 md:w-8 h-[1px] bg-white/60" />
                <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/90 font-medium">
                  Welcome to KORA
                </span>
                <div className="w-4 md:w-8 h-[1px] bg-white/60" />
              </div>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <h1
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-5 tracking-wide leading-[1.2] drop-shadow-xl"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                WHERE THE OCEAN <br className="hidden sm:block" /> MEETS THE WILD.
              </h1>
            </FadeIn>

            <FadeIn delay={0.6} direction="up">
              <p className="text-xs md:text-sm text-white/90 mb-8 md:mb-10 max-w-md mx-auto leading-relaxed md:leading-[2] font-light drop-shadow-md">
                Sail through the extraordinary landscapes of Komodo, from vibrant coral gardens beneath the sea to rugged islands above.
              </p>
            </FadeIn>

            <FadeIn delay={0.8} direction="up">
              <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full justify-center drop-shadow-lg">
                {/* TOMBOL PLAN YOUR JOURNEY (AKTIF) */}
                <Link href="/contact" className="group w-full sm:w-auto">
                  <div className="flex items-center justify-center gap-2 px-6 md:px-8 py-2.5 rounded-full border border-white/40 bg-black/20 backdrop-blur-md text-white text-[9px] tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-black transition-all duration-500 shadow-lg">
                    Plan Your Journey
                  </div>
                </Link>
                
                <Link href="/fleet" className="group w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full px-6 md:px-8 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white border-white/60 hover:bg-white hover:text-black transition-all duration-500 text-[9px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 font-medium h-auto shadow-lg"
                  >
                    Explore The Fleet <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* INDIKATOR SCROLL PREMIUM - Diubah ke warna Gelap (text-primary) agar terlihat tegas di atas asap putih */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-3 z-30">
          <span className="text-[7px] md:text-[8px] tracking-[0.4em] uppercase text-primary/80 font-bold">Discover</span>
          <div className="w-[1px] h-10 md:h-14 bg-primary/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. THE BRAND STORY */}
      <section className="py-16 md:py-32 bg-background relative border-b border-border/30">
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            
            <div className="w-full md:w-1/2 relative flex justify-center md:justify-start">
              <div className="w-[70%] md:w-full aspect-[2/3] md:aspect-[3/4] rounded-t-full rounded-b-2xl overflow-hidden relative shadow-sm border border-border/40">
                <div className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-[10s]" style={{ backgroundImage: "url('https://i.pinimg.com/736x/f1/cb/9d/f1cb9d1dbd53aed1e6e38e2531924d04.jpg')" }} />
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-2 md:mt-0">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div className="w-6 h-[1px] bg-secondary/80" />
                <span className="text-[9px] tracking-[0.2em] uppercase text-secondary font-medium">The Vision</span>
                <div className="w-6 h-[1px] bg-secondary/80 md:hidden" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-5 md:mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                Koral <span className="text-secondary italic font-light mx-1">&</span> Ora
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground font-light leading-[1.8] md:leading-[2] mb-4 md:mb-5 max-w-md md:max-w-none">
                KORA represents the delicate harmony of two worlds. The vibrant, unseen life beneath the surface, and the rugged, untamed majesty of Komodo&apos;s lands.
              </p>
              <p className="text-xs md:text-sm text-muted-foreground font-light leading-[1.8] md:leading-[2] max-w-md md:max-w-none">
                Our vessels are more than just ships; they are floating sanctuaries designed to connect you deeply with the untamed archipelago while enveloping you in effortless comfort.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. JOURNEYS SECTION */}
      <section className="py-16 md:py-28 bg-[#F9F8F6]">
        <div className="container mx-auto max-w-6xl">
          <div className="px-5 md:px-0 mb-8 md:mb-12 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2 md:mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
              Curated Journeys
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground font-light max-w-md">
              Discover sailing experiences tailored to your sense of wonder.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 px-5 md:px-0 pb-8 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 lg:grid-cols-3">
            
            <div className="w-[82vw] sm:w-[320px] md:w-auto shrink-0 snap-center group relative h-[320px] md:h-[450px] rounded-2xl overflow-hidden shadow-sm border border-border/30">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-105" style={{ backgroundImage: "url('https://i.pinimg.com/1200x/fd/4e/14/fd4e14e2ff8b3f60fc0f741333375a0c.jpg')" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end">
                <div className="mb-2 md:mb-3 text-[8px] md:text-[9px] tracking-[0.2em] uppercase text-white/80 font-medium">3 Days / 2 Nights</div>
                <h3 className="text-xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Komodo Signature</h3>
                <p className="text-white/70 font-light text-[10px] md:text-xs mb-4 md:mb-6 line-clamp-2 leading-relaxed">Our classic sailing experience through the heart of the national park.</p>
                <Link href="/journeys/komodo-signature">
                  <Button className="w-full rounded-full bg-transparent text-white border border-white/40 hover:bg-white hover:text-primary transition-all duration-500 text-[9px] py-2.5 md:py-3 h-auto tracking-[0.2em] uppercase font-medium">Explore Journey</Button>
                </Link>
              </div>
            </div>

            <div className="w-[82vw] sm:w-[320px] md:w-auto shrink-0 snap-center group relative h-[320px] md:h-[450px] rounded-2xl overflow-hidden shadow-sm border border-border/30">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-105" style={{ backgroundImage: "url('https://i.pinimg.com/736x/49/af/a4/49afa4486034609f3ed12ee75130965b.jpg')" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end">
                <div className="mb-2 md:mb-3 text-[8px] md:text-[9px] tracking-[0.2em] uppercase text-white/80 font-medium">3 Days / 2 Nights</div>
                <h3 className="text-xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Lombok to Bajo</h3>
                <p className="text-white/70 font-light text-[10px] md:text-xs mb-4 md:mb-6 line-clamp-2 leading-relaxed">A grand one-way voyage crossing the majestic Wallace Line.</p>
                <Link href="/journeys/lombok-to-labuan-bajo">
                  <Button className="w-full rounded-full bg-transparent text-white border border-white/40 hover:bg-white hover:text-primary transition-all duration-500 text-[9px] py-2.5 md:py-3 h-auto tracking-[0.2em] uppercase font-medium">Explore Journey</Button>
                </Link>
              </div>
            </div>

            <div className="w-[82vw] sm:w-[320px] md:w-auto shrink-0 snap-center group relative h-[320px] md:h-[450px] rounded-2xl overflow-hidden shadow-sm border border-border/30 md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-105" style={{ backgroundImage: "url('https://i.pinimg.com/736x/f8/d1/7f/f8d17fd77c9f047e9082ac3c368cc1ed.jpg')" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end">
                <div className="mb-2 md:mb-3 text-[8px] md:text-[9px] tracking-[0.2em] uppercase text-white/80 font-medium">2 Days / 1 Night</div>
                <h3 className="text-xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Wae Rebo Trek</h3>
                <p className="text-white/70 font-light text-[10px] md:text-xs mb-4 md:mb-6 line-clamp-2 leading-relaxed">Venture inland to the mystical village hidden above the clouds.</p>
                <Link href="/journeys/wae-rebo">
                  <Button className="w-full rounded-full bg-transparent text-white border border-white/40 hover:bg-white hover:text-primary transition-all duration-500 text-[9px] py-2.5 md:py-3 h-auto tracking-[0.2em] uppercase font-medium">Explore Journey</Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. MEET THE FLEET */}
      <section className="py-16 md:py-32 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center px-5 mb-8 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2 md:mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>The Fleet</h2>
            <p className="text-xs md:text-sm text-muted-foreground font-light max-w-md mx-auto">Three majestic vessels, each with its own soul.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 px-5 md:px-0 pb-8 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 lg:grid-cols-3">
            
            <div className="w-[82vw] sm:w-[320px] md:w-auto shrink-0 snap-center bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border/40 flex flex-col group">
              <div className="h-[180px] md:h-[240px] relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-105" style={{ backgroundImage: "url('https://i.pinimg.com/1200x/75/16/8f/75168f800a3fcd5e1fa516b4edc98f77.jpg')" }} />
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <div className="text-secondary text-[8px] md:text-[9px] tracking-[0.2em] uppercase mb-1.5 font-medium">The Guidance</div>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Kora Tala</h3>
                <p className="text-muted-foreground text-[10px] md:text-xs font-light mb-4 md:mb-5 flex-1 leading-[1.7]">Representing the guiding star, Tala offers unparalleled elegance and calm navigation.</p>
                <div className="flex items-center gap-4 mb-4 md:mb-5 text-[9px] text-primary/80 border-t border-border/40 pt-4 uppercase tracking-widest">
                  <div className="flex items-center gap-1.5"><Users className="w-3 h-3 text-secondary/70" /> 14 Guests</div>
                  <div className="flex items-center gap-1.5"><Anchor className="w-3 h-3 text-secondary/70" /> 7 Cabins</div>
                </div>
                <Link href="/fleet/kora-tala" className="w-full mt-auto">
                  <Button className="w-full text-[9px] py-2.5 h-auto rounded-full tracking-[0.2em] uppercase border-border/60 hover:border-primary hover:bg-primary hover:text-white transition-all font-medium" variant="outline">View Details</Button>
                </Link>
              </div>
            </div>

            <div className="w-[82vw] sm:w-[320px] md:w-auto shrink-0 snap-center bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border/40 flex flex-col group">
              <div className="h-[180px] md:h-[240px] relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-105" style={{ backgroundImage: "url('https://i.pinimg.com/1200x/ad/d0/71/add0716b26994b7924e874e6a4fd3df2.jpg')" }} />
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <div className="text-secondary text-[8px] md:text-[9px] tracking-[0.2em] uppercase mb-1.5 font-medium">The Warmth</div>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Kora Nera</h3>
                <p className="text-muted-foreground text-[10px] md:text-xs font-light mb-4 md:mb-5 flex-1 leading-[1.7]">Inspired by the lantern&apos;s glow, Nera radiates warmth and cozy intimacy.</p>
                <div className="flex items-center gap-4 mb-4 md:mb-5 text-[9px] text-primary/80 border-t border-border/40 pt-4 uppercase tracking-widest">
                  <div className="flex items-center gap-1.5"><Users className="w-3 h-3 text-secondary/70" /> 10 Guests</div>
                  <div className="flex items-center gap-1.5"><Anchor className="w-3 h-3 text-secondary/70" /> 5 Cabins</div>
                </div>
                <Link href="/fleet/kora-nera" className="w-full mt-auto">
                  <Button className="w-full text-[9px] py-2.5 h-auto rounded-full tracking-[0.2em] uppercase border-border/60 hover:border-primary hover:bg-primary hover:text-white transition-all font-medium" variant="outline">View Details</Button>
                </Link>
              </div>
            </div>

            <div className="w-[82vw] sm:w-[320px] md:w-auto shrink-0 snap-center bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border/40 flex flex-col group md:col-span-2 lg:col-span-1">
              <div className="h-[180px] md:h-[240px] relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-105" style={{ backgroundImage: "url('https://i.pinimg.com/1200x/a0/bf/9b/a0bf9b4a281f1ad0a39c517fe284b56f.jpg')" }} />
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <div className="text-secondary text-[8px] md:text-[9px] tracking-[0.2em] uppercase mb-1.5 font-medium">The Serenity</div>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Kora Samawa</h3>
                <p className="text-muted-foreground text-[10px] md:text-xs font-light mb-4 md:mb-5 flex-1 leading-[1.7]">Embodying harmony and peaceful waters for a grounded natural retreat.</p>
                <div className="flex items-center gap-4 mb-4 md:mb-5 text-[9px] text-primary/80 border-t border-border/40 pt-4 uppercase tracking-widest">
                  <div className="flex items-center gap-1.5"><Users className="w-3 h-3 text-secondary/70" /> 12 Guests</div>
                  <div className="flex items-center gap-1.5"><Anchor className="w-3 h-3 text-secondary/70" /> 6 Cabins</div>
                </div>
                <Link href="/fleet/kora-samawa" className="w-full mt-auto">
                  <Button className="w-full text-[9px] py-2.5 h-auto rounded-full tracking-[0.2em] uppercase border-border/60 hover:border-primary hover:bg-primary hover:text-white transition-all font-medium" variant="outline">View Details</Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PRACTICAL INFO / AMENITIES */}
      <section className="py-12 md:py-24 bg-[#F9F8F6] border-y border-border/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center px-5 mb-8 md:mb-12">
            <h2 className="text-xl md:text-3xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
              The KORA Standard
            </h2>
            <p className="text-muted-foreground font-light text-xs">Uncompromising quality for a seamless voyage.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 md:gap-6 px-5 md:px-0 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-4">
            
            <div className="w-[65vw] sm:w-[220px] md:w-auto shrink-0 snap-center flex flex-col items-center text-center group bg-white p-5 rounded-2xl shadow-sm border border-border/10">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-secondary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-secondary group-hover:text-white transition-colors duration-300 text-secondary">
                <ShieldCheck className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <h4 className="text-[10px] md:text-xs font-semibold text-primary uppercase tracking-widest mb-1">Safety First</h4>
              <p className="text-muted-foreground font-light text-[10px] md:text-[11px] leading-relaxed">Modern navigation & certified crews.</p>
            </div>

            <div className="w-[65vw] sm:w-[220px] md:w-auto shrink-0 snap-center flex flex-col items-center text-center group bg-white p-5 rounded-2xl shadow-sm border border-border/10">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-secondary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-secondary group-hover:text-white transition-colors duration-300 text-secondary">
                <Utensils className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <h4 className="text-[10px] md:text-xs font-semibold text-primary uppercase tracking-widest mb-1">Curated Dining</h4>
              <p className="text-muted-foreground font-light text-[10px] md:text-[11px] leading-relaxed">Gourmet meals blending local & classic flavors.</p>
            </div>

            <div className="w-[65vw] sm:w-[220px] md:w-auto shrink-0 snap-center flex flex-col items-center text-center group bg-white p-5 rounded-2xl shadow-sm border border-border/10">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-secondary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-secondary group-hover:text-white transition-colors duration-300 text-secondary">
                <Waves className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <h4 className="text-[10px] md:text-xs font-semibold text-primary uppercase tracking-widest mb-1">Water Activities</h4>
              <p className="text-muted-foreground font-light text-[10px] md:text-[11px] leading-relaxed">Premium snorkeling gear & paddleboards.</p>
            </div>

            <div className="w-[65vw] sm:w-[220px] md:w-auto shrink-0 snap-center flex flex-col items-center text-center group bg-white p-5 rounded-2xl shadow-sm border border-border/10">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-secondary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-secondary group-hover:text-white transition-colors duration-300 text-secondary">
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <h4 className="text-[10px] md:text-xs font-semibold text-primary uppercase tracking-widest mb-1">Easy Transfers</h4>
              <p className="text-muted-foreground font-light text-[10px] md:text-[11px] leading-relaxed">VIP pickup & drop-off anywhere in Labuan Bajo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GUEST TESTIMONIALS */}
      <section className="py-16 md:py-28 bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16 px-5 md:px-0">
            <div className="w-full md:w-1/3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <div className="w-4 h-[1px] bg-secondary/80" />
                <span className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase text-secondary/90 font-medium">Guest Stories</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                Voices of the Ocean
              </h2>
            </div>
            
            <div className="w-full md:w-2/3">
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                
                <div className="w-[80vw] sm:w-[300px] shrink-0 snap-center bg-background p-6 rounded-2xl border border-border/30 shadow-[0_2px_15px_rgb(0,0,0,0.02)] flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-secondary/80 text-secondary/80" />)}
                  </div>
                  <Quote className="w-4 h-4 text-secondary/20 mb-3" />
                  <p className="text-muted-foreground font-light text-[11px] md:text-xs leading-[1.8] italic mb-5 flex-1">"Sebuah perjalanan yang mengubah cara pandang saya tentang laut. Perhatian kru Kora Tala sangat luar biasa."</p>
                  <div className="border-t border-border/40 pt-3">
                    <p className="font-semibold text-primary text-[9px] tracking-[0.1em] uppercase mb-0.5">Alexander Vance</p>
                    <p className="text-[8px] text-muted-foreground uppercase tracking-widest">Sailed on <span className="text-secondary/90 font-medium">Kora Tala</span></p>
                  </div>
                </div>

                <div className="w-[80vw] sm:w-[300px] shrink-0 snap-center bg-background p-6 rounded-2xl border border-border/30 shadow-[0_2px_15px_rgb(0,0,0,0.02)] flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-secondary/80 text-secondary/80" />)}
                  </div>
                  <Quote className="w-4 h-4 text-secondary/20 mb-3" />
                  <p className="text-muted-foreground font-light text-[11px] md:text-xs leading-[1.8] italic mb-5 flex-1">"Dari desain interior kayu jati yang menenangkan hingga makanan bintang lima. Pengalaman tak terlupakan di Komodo."</p>
                  <div className="border-t border-border/40 pt-3">
                    <p className="font-semibold text-primary text-[9px] tracking-[0.1em] uppercase mb-0.5">Sarah Mitchell</p>
                    <p className="text-[8px] text-muted-foreground uppercase tracking-widest">Sailed on <span className="text-secondary/90 font-medium">Kora Nera</span></p>
                  </div>
                </div>

                <div className="w-[80vw] sm:w-[300px] shrink-0 snap-center bg-background p-6 rounded-2xl border border-border/30 shadow-[0_2px_15px_rgb(0,0,0,0.02)] flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-secondary/80 text-secondary/80" />)}
                  </div>
                  <Quote className="w-4 h-4 text-secondary/20 mb-3" />
                  <p className="text-muted-foreground font-light text-[11px] md:text-xs leading-[1.8] italic mb-5 flex-1">"Dari desain interior kayu jati yang menenangkan hingga makanan bintang lima. Pengalaman tak terlupakan di Komodo."</p>
                  <div className="border-t border-border/40 pt-3">
                    <p className="font-semibold text-primary text-[9px] tracking-[0.1em] uppercase mb-0.5">Sarah Mitchell</p>
                    <p className="text-[8px] text-muted-foreground uppercase tracking-widest">Sailed on <span className="text-secondary/90 font-medium">Kora Nera</span></p>
                  </div>
                </div>

                <div className="w-[80vw] sm:w-[300px] shrink-0 snap-center bg-background p-6 rounded-2xl border border-border/30 shadow-[0_2px_15px_rgb(0,0,0,0.02)] flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-secondary/80 text-secondary/80" />)}
                  </div>
                  <Quote className="w-4 h-4 text-secondary/20 mb-3" />
                  <p className="text-muted-foreground font-light text-[11px] md:text-xs leading-[1.8] italic mb-5 flex-1">"Dari desain interior kayu jati yang menenangkan hingga makanan bintang lima. Pengalaman tak terlupakan di Komodo."</p>
                  <div className="border-t border-border/40 pt-3">
                    <p className="font-semibold text-primary text-[9px] tracking-[0.1em] uppercase mb-0.5">Sarah Mitchell</p>
                    <p className="text-[8px] text-muted-foreground uppercase tracking-widest">Sailed on <span className="text-secondary/90 font-medium">Kora Nera</span></p>
                  </div>
                </div>

                <div className="w-[80vw] sm:w-[300px] shrink-0 snap-center bg-background p-6 rounded-2xl border border-border/30 shadow-[0_2px_15px_rgb(0,0,0,0.02)] flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-secondary/80 text-secondary/80" />)}
                  </div>
                  <Quote className="w-4 h-4 text-secondary/20 mb-3" />
                  <p className="text-muted-foreground font-light text-[11px] md:text-xs leading-[1.8] italic mb-5 flex-1">"Dari desain interior kayu jati yang menenangkan hingga makanan bintang lima. Pengalaman tak terlupakan di Komodo."</p>
                  <div className="border-t border-border/40 pt-3">
                    <p className="font-semibold text-primary text-[9px] tracking-[0.1em] uppercase mb-0.5">Sarah Mitchell</p>
                    <p className="text-[8px] text-muted-foreground uppercase tracking-widest">Sailed on <span className="text-secondary/90 font-medium">Kora Nera</span></p>
                  </div>
                </div>

                <div className="w-[80vw] sm:w-[300px] shrink-0 snap-center bg-background p-6 rounded-2xl border border-border/30 shadow-[0_2px_15px_rgb(0,0,0,0.02)] flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-secondary/80 text-secondary/80" />)}
                  </div>
                  <Quote className="w-4 h-4 text-secondary/20 mb-3" />
                  <p className="text-muted-foreground font-light text-[11px] md:text-xs leading-[1.8] italic mb-5 flex-1">"Dari desain interior kayu jati yang menenangkan hingga makanan bintang lima. Pengalaman tak terlupakan di Komodo."</p>
                  <div className="border-t border-border/40 pt-3">
                    <p className="font-semibold text-primary text-[9px] tracking-[0.1em] uppercase mb-0.5">Sarah Mitchell</p>
                    <p className="text-[8px] text-muted-foreground uppercase tracking-widest">Sailed on <span className="text-secondary/90 font-medium">Kora Nera</span></p>
                  </div>
                </div>

                <div className="w-[80vw] sm:w-[300px] shrink-0 snap-center bg-background p-6 rounded-2xl border border-border/30 shadow-[0_2px_15px_rgb(0,0,0,0.02)] flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-secondary/80 text-secondary/80" />)}
                  </div>
                  <Quote className="w-4 h-4 text-secondary/20 mb-3" />
                  <p className="text-muted-foreground font-light text-[11px] md:text-xs leading-[1.8] italic mb-5 flex-1">"Dari desain interior kayu jati yang menenangkan hingga makanan bintang lima. Pengalaman tak terlupakan di Komodo."</p>
                  <div className="border-t border-border/40 pt-3">
                    <p className="font-semibold text-primary text-[9px] tracking-[0.1em] uppercase mb-0.5">Sarah Mitchell</p>
                    <p className="text-[8px] text-muted-foreground uppercase tracking-widest">Sailed on <span className="text-secondary/90 font-medium">Kora Nera</span></p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-16 md:py-32 relative overflow-hidden flex items-center justify-center border-t border-border/30">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop')" }} />
        <div className="absolute inset-0 bg-[#172136]/85" />
        
        <div className="relative z-10 container mx-auto px-5 text-center max-w-xl flex flex-col items-center">
          <div className="w-6 h-[1px] bg-secondary/80 mb-4" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 drop-shadow-md tracking-wide" style={{ fontFamily: 'var(--font-playfair)' }}>
            READY TO SAIL?
          </h2>
          <p className="text-[10px] md:text-xs text-white/70 font-light mb-6 md:mb-8 leading-relaxed max-w-sm mx-auto">
            Our booking engine is currently undergoing a premium upgrade. Discover our curated journeys while we prepare for your arrival.
          </p>
          
          <Link href="/journeys" className="group">
            <Button variant="outline" className="px-6 py-2.5 h-auto rounded-full bg-transparent border-white/30 text-white hover:bg-white hover:text-black text-[9px] tracking-[0.2em] uppercase transition-all duration-500 flex items-center justify-center gap-2 shadow-none font-medium">
              Explore Journeys <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
      
    </main>
  );
}