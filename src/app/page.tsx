import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 
        className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center" 
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        Welcome to KORA
      </h1>
      <p className="text-lg text-muted-foreground text-center max-w-md mb-8">
        Where the ocean meets the wild. Premium sailing experiences in Labuan Bajo & Komodo.
      </p>
      
      {/* Menggunakan komponen Button dari shadcn dengan varian secondary (Coral) */}
      <Button variant="secondary" size="lg" className="text-base px-8 py-6">
        Plan Your Journey
      </Button>
    </main>
  );
}