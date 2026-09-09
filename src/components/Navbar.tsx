import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Kiri: Mobile Hamburger Menu */}
        <div className="flex items-center md:hidden w-1/3">
          <Button variant="ghost" size="icon" aria-label="Toggle Menu">
            <Menu className="h-6 w-6 text-foreground" />
          </Button>
        </div>

        {/* Tengah/Kiri: Brand Logo */}
        <div className="flex flex-1 items-center justify-center md:justify-start w-1/3 md:w-auto">
          <Link href="/" className="flex items-center gap-2">
            <span 
              className="text-2xl font-bold tracking-wider text-primary" 
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              KORA
            </span>
          </Link>
        </div>

        {/* Tengah: Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-8 text-sm font-medium">
          <Link href="/journeys" className="text-muted-foreground hover:text-foreground transition-colors">
            Journeys
          </Link>
          <Link href="/fleet" className="text-muted-foreground hover:text-foreground transition-colors">
            Fleet
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
        </nav>

        {/* Kanan: CTA Button */}
        <div className="flex items-center justify-end md:flex-1 w-1/3 md:w-auto">
          {/* Tampil penuh di desktop/tablet */}
          <Button variant="secondary" className="hidden sm:inline-flex rounded-full px-6">
            Plan Your Journey
          </Button>
          {/* Tampil lebih ringkas di mobile agar tidak merusak layout */}
          <Button variant="secondary" size="sm" className="sm:hidden rounded-full px-4 text-xs">
            Plan
          </Button>
        </div>

      </div>
    </header>
  );
}