"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Info, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-[60] w-full transition-all duration-500 ease-in-out border-none",
          isScrolled || isMobileMenuOpen
            ? "bg-background/95 backdrop-blur-md py-3 md:py-4 shadow-[0_4px_30px_rgb(0,0,0,0.03)]"
            : "bg-transparent py-5 md:py-8",
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-5 sm:px-6 lg:px-8 max-w-7xl relative">
          {/* KIRI: Brand Logo */}
          <div className="flex items-center z-[70]">
            <Link
              href="/"
              className="flex items-center cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative w-[130px] md:w-[170px] h-[40px] md:h-[52px] transition-transform duration-500 hover:scale-105">
                <Image
                  src="/logo-3.png"
                  alt="KORA"
                  fill
                  sizes="(max-width: 768px) 130px, 170px"
                  priority
                  className={cn(
                    "object-contain transition-all duration-500",
                    isScrolled || isMobileMenuOpen
                      ? "brightness-100"
                      : "brightness-0 invert drop-shadow-md",
                  )}
                />
              </div>
            </Link>
          </div>

          {/* TENGAH: Desktop Navigation - MENU SCHEDULE DITAMBAHKAN DI SINI */}
          <nav
            className={cn(
              "hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center gap-12 text-xs font-semibold tracking-[0.15em] transition-colors duration-500",
              isScrolled ? "text-muted-foreground" : "text-white/90",
            )}
          >
            {[
              { name: "JOURNEYS", path: "/journeys" },
              { name: "THE FLEET", path: "/fleet" },
              { name: "SCHEDULE", path: "/schedule" },
              { name: "ABOUT", path: "/about" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "relative py-2 transition-colors hover:text-secondary",
                  isActive(item.path) &&
                    (isScrolled ? "text-primary" : "text-white"),
                )}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-secondary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* KANAN: CTA Desktop & Hamburger Mobile */}
          <div className="flex items-center gap-4 z-[70]">
            <Link
              href="/contact"
              className="hidden md:flex items-center group cursor-pointer"
            >
              <div
                className={cn(
                  "flex items-center gap-2 px-6 py-2.5 rounded-full border text-[10px] tracking-widest uppercase font-medium transition-all duration-300",
                  "group-hover:scale-105 transform",
                  isScrolled || isMobileMenuOpen
                    ? "border-border/50 text-muted-foreground bg-muted/20 group-hover:bg-muted/40"
                    : "border-white/20 text-white/70 bg-black/20 backdrop-blur-sm group-hover:bg-black/40",
                )}
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Now
              </div>
            </Link>

            <div className="md:hidden -mr-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "relative z-[70] transition-all duration-300 rounded-full",
                  isMobileMenuOpen ? "rotate-90" : "rotate-0",
                  isScrolled || isMobileMenuOpen
                    ? "text-primary hover:bg-muted/50"
                    : "text-white hover:text-white/80 hover:bg-white/20",
                )}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col pt-28 px-8 pb-12 transition-transform duration-700 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full justify-between max-w-sm mx-auto w-full">
          <nav className="flex flex-col gap-6 mt-8">
            {[
              { name: "HOME", path: "/" },
              { name: "JOURNEYS", path: "/journeys" },
              { name: "THE FLEET", path: "/fleet" },
              { name: "SCHEDULE", path: "/schedule" },
              { name: "ABOUT", path: "/about" },
            ].map((item, index) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-4 border-b border-border/40 pb-4 text-sm font-bold tracking-widest transition-all duration-500 transform",
                  isActive(item.path)
                    ? "text-primary border-secondary"
                    : "text-muted-foreground hover:text-primary",
                  isMobileMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-12",
                )}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {isActive(item.path) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                )}
                {item.name}
              </Link>
            ))}
          </nav>

          <div
            className={cn(
              "flex flex-col gap-2 mt-auto transition-all duration-1000 transform border-t border-border/50 pt-8",
              isMobileMenuOpen
                ? "opacity-100 translate-y-0 delay-700"
                : "opacity-0 translate-y-12",
            )}
          >
            <p className="text-[10px] tracking-[0.2em] uppercase text-secondary font-semibold mb-1">
              Get in Touch
            </p>
            <a
              href="mailto:hello@kora.com"
              className="text-sm font-medium text-primary hover:text-secondary transition-colors inline-block w-max"
            >
              hello@kora.com
            </a>
            <p className="text-xs font-light text-muted-foreground mt-1">
              Labuan Bajo, Flores, Indonesia
            </p>

            <div className="mt-6 pt-2 border-t border-border/30">
              <Link 
                href="/contact" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="flex items-center justify-center w-full py-4 rounded-full bg-primary text-white border-transparent hover:bg-primary/90 transition-all duration-300 text-[10px] tracking-[0.2em] uppercase font-medium shadow-md"
              >
                Plan Your Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}