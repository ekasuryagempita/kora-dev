import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 
        HERO SECTION 
        Rule 35 & 36: Cinematic hero image[cite: 1].
        Rule 65: Cinematic, Elegant, Natural[cite: 1].
      */}
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        
        {/* Background Image: Vibe Pulau Komodo / Padar */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1604928148964-16a75005e042?q=80&w=2938&auto=format&fit=crop')",
          }}
        >
          {/* Overlay gradient agar teks putih tetap terbaca mewah */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-24">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-wide max-w-5xl leading-[1.1] drop-shadow-2xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            WHERE THE OCEAN <br className="hidden md:block" /> MEETS THE WILD.
          </h1>

          <p className="text-lg md:text-xl text-white/95 mb-12 max-w-2xl leading-relaxed font-light drop-shadow-md">
            Sail through the extraordinary landscapes of Komodo, from coral gardens beneath the sea to rugged islands above.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto text-base px-10 py-6 shadow-xl">
              Plan Your Journey
            </Button>
            
            {/* Secondary CTA dengan efek Glassmorphism (Kaca) */}
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base px-10 py-6 bg-black/20 text-white border-white/50 backdrop-blur-md hover:bg-white hover:text-primary transition-all duration-300"
            >
              Explore the Fleet
            </Button>
          </div>
        </div>
      </section>

      {/* Placeholder untuk bagian selanjutnya (KORA Story) agar kita bisa melihat efek scroll Navbar */}
      <section className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl text-primary font-bold mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
          The KORA Story
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl">
          Scroll ke atas dan ke bawah untuk melihat bagaimana Navbar KORA beradaptasi secara elegan. (Konten cerita KORA akan kita bangun di sini pada tahap selanjutnya).
        </p>
      </section>
    </main>
  );
}