"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Mendeteksi scroll untuk mengubah style Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-background/95 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6" // Transparan dan lebih lega saat di atas
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Kiri: Mobile Hamburger Menu */}
        <div className="flex items-center md:hidden w-1/3">
          <Button 
            variant="ghost" 
            size="icon" 
            className={cn(isScrolled ? "text-foreground" : "text-white hover:text-white/80 hover:bg-white/20")}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Tengah/Kiri: Brand Logo */}
        <div className="flex flex-1 items-center justify-center md:justify-start w-1/3 md:w-auto">
          <Link href="/" className="flex items-center gap-2">
            <span
              className={cn(
                "text-2xl md:text-3xl font-bold tracking-widest transition-colors duration-500",
                isScrolled ? "text-primary" : "text-white"
              )}
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <Image 
              src="/logo-3.png" /* Ubah menjadi /logo.svg jika file kamu berformat SVG */
              alt="KORA" 
              width={120} 
              height={40}
              className={cn(
                "object-contain transition-all duration-500",
                isScrolled ? "brightness-100" : "brightness-0 invert" 
              )}
            />
            </span>
          </Link>
        </div>

        {/* Tengah: Desktop Navigation */}
        <nav
          className={cn(
            "hidden md:flex flex-1 items-center justify-center gap-10 text-sm font-medium tracking-wide transition-colors duration-500",
            isScrolled ? "text-muted-foreground" : "text-white/90"
          )}
        >
          <Link href="/journeys" className="hover:text-secondary transition-colors">
            JOURNEYS
          </Link>
          <Link href="/fleet" className="hover:text-secondary transition-colors">
            FLEET
          </Link>
          <Link href="/about" className="hover:text-secondary transition-colors">
            ABOUT
          </Link>
        </nav>

        {/* Kanan: CTA Button */}
        <div className="flex items-center justify-end md:flex-1 w-1/3 md:w-auto">
          <Button
            variant="secondary"
            className="hidden sm:inline-flex px-8 py-5 text-sm tracking-wide shadow-lg"
          >
            Plan Your Journey
          </Button>
          <Button variant="secondary" size="sm" className="sm:hidden px-4 text-xs shadow-lg">
            Plan
          </Button>
        </div>
      </div>
    </header>
  );
}