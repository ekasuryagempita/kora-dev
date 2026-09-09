import { Button } from "@/components/ui/button";
import { Users, Anchor } from "lucide-react"; // Tambahkan baris ini

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

      {/* 
        THE KORA STORY 
        Rule 37: Koral + Ora. Menjelaskan identitas brand. Harus pendek. 
      */}
      <section className="py-24 md:py-32 bg-background flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          
          <h2 
            className="text-3xl md:text-5xl font-bold text-primary mb-10 tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Koral <span className="text-secondary font-light mx-2 italic">&</span> Ora
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            <p>
              KORA represents the harmony of two worlds. 
              <span className="text-primary font-medium block mt-2">
                The vibrant life beneath the surface, and the rugged majesty of Komodo&apos;s land.
              </span>
            </p>
            <p className="max-w-2xl mx-auto text-base md:text-lg">
              From the gentle rhythm of the ocean to the spirit of wild adventure, we curate journeys that embrace both the serenity of the sea and the grandeur of the islands.
            </p>
          </div>

        </div>
      </section>
      {/* 
        JOURNEYS SECTION 
        Rule 38: Choose Your Journey. Card menampilkan title, short description, duration, starting price, dan CTA[cite: 1].
        Rule 126: Authenticity (Gambar lebih relevan)[cite: 1].
      */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Header Section tanpa tombol "View All" yang redundan */}
          <div className="max-w-2xl mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold text-primary mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Choose Your Journey
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Discover curated sailing experiences tailored to your sense of wonder.
            </p>
          </div>

          {/* Grid Layout untuk Immersive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Komodo / Labuan Bajo */}
            <div className="group relative h-[500px] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500">
              {/* Gambar: Pulau Padar / Komodo */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://akcdn.detik.net.id/community/media/visual/2023/05/21/labuan-bajo.png?w=700&q=90')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-2 flex items-center justify-between text-white/90 text-sm tracking-widest uppercase">
                  <span>3D2N</span>
                  <span className="font-medium text-secondary">From Rp 6.500.000</span>
                </div>
                <h3 
                  className="text-3xl font-bold text-white mb-3"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Komodo Signature
                </h3>
                <p className="text-white/80 font-light mb-6 line-clamp-2">
                  Our classic sailing experience through the heart of Komodo National Park. Encounter dragons, pink beaches, and manta rays.
                </p>
                <Button className="w-full bg-white/20 backdrop-blur-sm text-white border border-white/20 hover:bg-white hover:text-primary transition-all duration-300">
                  Explore Journey
                </Button>
              </div>
            </div>

            {/* Card 2: Lombok to Labuan Bajo */}
            <div className="group relative h-[500px] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500">
              {/* Gambar: Kapal layar / Lautan lepas */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/33/26/3d/on-the-westernmost-tip.jpg?w=1400&h=800&s=1')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-2 flex items-center justify-between text-white/90 text-sm tracking-widest uppercase">
                  <span>3D2N</span>
                  <span className="font-medium text-secondary">From Rp 7.000.000</span>
                </div>
                <h3 
                  className="text-3xl font-bold text-white mb-3"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Lombok to Labuan Bajo
                </h3>
                <p className="text-white/80 font-light mb-6 line-clamp-2">
                  A grand one-way voyage crossing the majestic Wallace Line. Witness changing landscapes from volcanic craters to savannahs.
                </p>
                <Button className="w-full bg-white/20 backdrop-blur-sm text-white border border-white/20 hover:bg-white hover:text-primary transition-all duration-300">
                  Explore Journey
                </Button>
              </div>
            </div>

            {/* Card 3: Wae Rebo */}
            <div className="group relative h-[500px] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 md:col-span-2 lg:col-span-1">
              {/* Gambar: Pegunungan Hijau / Manggarai Highland */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://labuanbajotour.com/wp-content/uploads/2018/08/Desa-Wae-Rebo-sumber-ig-carnaby.indonesia.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-2 flex items-center justify-between text-white/90 text-sm tracking-widest uppercase">
                  <span>2D1N</span>
                  <span className="font-medium text-secondary">From Rp 2.500.000</span>
                </div>
                <h3 
                  className="text-3xl font-bold text-white mb-3"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Wae Rebo Expedition
                </h3>
                <p className="text-white/80 font-light mb-6 line-clamp-2">
                  Venture inland to the mystical village above the clouds. A cultural immersion in the highlands of Flores.
                </p>
                <Button className="w-full bg-white/20 backdrop-blur-sm text-white border border-white/20 hover:bg-white hover:text-primary transition-all duration-300">
                  Explore Journey
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        FLEET SECTION 
        Rule 39: Meet the Fleet. Kora Tala, Kora Nera, Kora Samawa.
        Menampilkan hero image, character, capacity, cabin count, dan CTA[cite: 1].
      */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold text-primary mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Meet the Fleet
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Three vessels, each with its own soul. Designed to offer unparalleled comfort while navigating the wild beauty of the archipelago.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* KORA TALA */}
            <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border flex flex-col group">
              <div className="h-64 relative overflow-hidden">
                {/* Vibe: Clear day, calm ocean, elegant */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://phinisitrip.com/wp-content/uploads/2026/04/lombok-harbor-phinisi-departure.webp')" }} 
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="text-secondary text-sm tracking-widest uppercase mb-2 font-medium">The Guidance</div>
                <h3 className="text-2xl font-bold text-primary mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Kora Tala
                </h3>
                <p className="text-muted-foreground font-light mb-6 flex-1">
                  Representing the guiding star, Tala offers elegance and calm navigation. Perfect for those seeking a serene and composed journey across the sea.
                </p>
                
                {/* Specs */}
                <div className="flex items-center gap-6 mb-8 text-sm text-primary/80 border-t border-border pt-5">
                  <div className="flex items-center gap-2"><Users className="w-4 h-4 text-secondary" /> 14 Guests</div>
                  <div className="flex items-center gap-2"><Anchor className="w-4 h-4 text-secondary" /> 7 Cabins</div>
                </div>
                
                <Button className="w-full" variant="outline">Explore Kora Tala</Button>
              </div>
            </div>

            {/* KORA NERA */}
            <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border flex flex-col group">
              <div className="h-64 relative overflow-hidden">
                {/* Vibe: Sunset, warm light, intimate */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://093007acd4aeb68adf71.b-cdn.net/wp-content/uploads/2019/12/prana-blog1.jpg')" }} 
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="text-secondary text-sm tracking-widest uppercase mb-2 font-medium">The Warmth</div>
                <h3 className="text-2xl font-bold text-primary mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Kora Nera
                </h3>
                <p className="text-muted-foreground font-light mb-6 flex-1">
                  Inspired by the lantern&apos;s glow, Nera radiates warmth and intimacy. An inviting space crafted for close connections and golden sunsets.
                </p>
                
                {/* Specs */}
                <div className="flex items-center gap-6 mb-8 text-sm text-primary/80 border-t border-border pt-5">
                  <div className="flex items-center gap-2"><Users className="w-4 h-4 text-secondary" /> 10 Guests</div>
                  <div className="flex items-center gap-2"><Anchor className="w-4 h-4 text-secondary" /> 5 Cabins</div>
                </div>
                
                <Button className="w-full" variant="outline">Explore Kora Nera</Button>
              </div>
            </div>

            {/* KORA SAMAWA */}
            <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border flex flex-col group">
              <div className="h-64 relative overflow-hidden">
                {/* Vibe: Serene, soft horizon, calm bay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://093007acd4aeb68adf71.b-cdn.net/wp-content/uploads/2023/08/luxuryyachtpranabyatzaro.png')" }} 
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="text-secondary text-sm tracking-widest uppercase mb-2 font-medium">The Serenity</div>
                <h3 className="text-2xl font-bold text-primary mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Kora Samawa
                </h3>
                <p className="text-muted-foreground font-light mb-6 flex-1">
                  Embodying harmony and peaceful waters. Samawa provides a grounded, natural retreat for those who wish to deeply align with the ocean.
                </p>
                
                {/* Specs */}
                <div className="flex items-center gap-6 mb-8 text-sm text-primary/80 border-t border-border pt-5">
                  <div className="flex items-center gap-2"><Users className="w-4 h-4 text-secondary" /> 12 Guests</div>
                  <div className="flex items-center gap-2"><Anchor className="w-4 h-4 text-secondary" /> 6 Cabins</div>
                </div>
                
                <Button className="w-full" variant="outline">Explore Kora Samawa</Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}