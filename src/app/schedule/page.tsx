"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ship, BedDouble, ChevronRight, CheckCircle2, AlertCircle, Clock3 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

// DATA SUPER LENGKAP TAPI RINGKAS
const scheduleData = [
  {
    month: "October 2026",
    trips: [
      {
        id: 1,
        dates: "12 - 14",
        route: "Komodo Signature",
        vessel: "Kora Nera",
        price: "Rp 6.500.000",
        status: "available", // available, limited, waitlist
        cabins: [
          { name: "Master Suite", status: "Available" },
          { name: "Signature Cabin", status: "Available" }
        ]
      },
      {
        id: 2,
        dates: "18 - 20",
        route: "Lombok to Bajo",
        vessel: "Kora Tala",
        price: "Rp 7.000.000",
        status: "available",
        cabins: [
          { name: "Master Suite", status: "Available" },
          { name: "Grand Suite", status: "Available" },
          { name: "Deluxe Cabin", status: "Available" }
        ]
      },
      {
        id: 3,
        dates: "25 - 27",
        route: "Komodo Signature",
        vessel: "Kora Samawa",
        price: "Rp 6.000.000",
        status: "available",
        cabins: [
          { name: "Ocean Suite", status: "Available" },
          { name: "Deluxe Cabin", status: "Available" }
        ]
      }
    ]
  },
  {
    month: "November 2026",
    trips: [
      {
        id: 4,
        dates: "02 - 04",
        route: "Komodo Signature",
        vessel: "Kora Nera",
        price: "Rp 6.500.000",
        status: "available",
        cabins: [
          { name: "Master Suite", status: "Available" },
          { name: "Signature Cabin", status: "Available" }
        ]
      },
      {
        id: 5,
        dates: "10 - 11",
        route: "Wae Rebo Expedition",
        vessel: "Terrestrial (No Vessel)",
        price: "Rp 2.500.000",
        status: "available",
        cabins: [
          { name: "Mbaru Niang (Traditional)", status: "Available" }
        ]
      }
    ]
  },
  {
    month: "December 2026",
    trips: [
      {
        id: 6,
        dates: "20 - 22",
        route: "Lombok to Bajo",
        vessel: "Kora Tala",
        price: "Rp 8.000.000", // Harga High Season
        status: "available",
        cabins: [
          { name: "Master Suite", status: "Available" },
          { name: "Grand Suite", status: "Available" },
          { name: "Deluxe Cabin", status: "Available" }
        ]
      },
    ]
  }
];

// Helper untuk Badge Status Utama
const getStatusBadge = (status: string) => {
  switch (status) {
    case "available":
      return (
        <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50/50 px-2.5 py-1 rounded border border-emerald-200/50 text-[9px] uppercase tracking-widest font-bold w-max">
          <CheckCircle2 className="w-3 h-3" /> Available
        </span>
      );
    case "limited":
      return (
        <span className="flex items-center gap-1.5 text-orange-600 bg-orange-50/50 px-2.5 py-1 rounded border border-orange-200/50 text-[9px] uppercase tracking-widest font-bold w-max">
          <AlertCircle className="w-3 h-3" /> Limited
        </span>
      );
    case "waitlist":
      return (
        <span className="flex items-center gap-1.5 text-red-600 bg-red-50/50 px-2.5 py-1 rounded border border-red-200/50 text-[9px] uppercase tracking-widest font-bold w-max">
          <Clock3 className="w-3 h-3" /> Waitlist
        </span>
      );
    default:
      return null;
  }
};

// Helper untuk Status per Kabin
const getCabinStatusColor = (status: string) => {
  if (status.toLowerCase().includes("available")) return "text-emerald-500";
  if (status.toLowerCase().includes("left")) return "text-orange-500 font-medium";
  return "text-muted-foreground/50";
};

export default function SchedulePage() {
  // State untuk Tab Bulan Aktif (Default: Bulan pertama di data)
  const [activeTab, setActiveTab] = useState(scheduleData[0].month);

  // Filter data berdasarkan bulan aktif
  const activeData = scheduleData.find(data => data.month === activeTab);

  return (
    <main className="flex min-h-screen flex-col bg-[#F9F8F6]">
      
      {/* 1. HERO SECTION (Lebih pendek agar cepat masuk ke konten) */}
      <section className="relative flex h-[40svh] w-full items-center justify-center overflow-hidden border-b border-border/20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-out hover:scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop')" }} 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F9F8F6] via-transparent to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6 max-w-4xl flex flex-col items-center text-center pt-10">
          <FadeIn delay={0.2} direction="up">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-3 leading-[1.1] drop-shadow-md text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
              Availability
            </h1>
            <p className="text-[11px] md:text-xs text-white/80 font-light tracking-widest uppercase">
              Live Voyage Schedule
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. SCHEDULE LIST & TABS */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-5 max-w-6xl">
          
          {/* TAB NAVIGATION (Bulan) - Mencegah scroll super panjang */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-2 md:gap-4 mb-10 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border-b border-border/40">
            {scheduleData.map((data) => (
              <button
                key={data.month}
                onClick={() => setActiveTab(data.month)}
                className={`shrink-0 snap-start px-5 md:px-8 py-3 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 border-b-2 rounded-t-lg ${
                  activeTab === data.month 
                    ? "border-primary text-primary bg-muted/10" 
                    : "border-transparent text-muted-foreground hover:text-primary hover:bg-muted/5"
                }`}
              >
                {data.month}
              </button>
            ))}
          </div>

          {/* LIST JADWAL AKTIF */}
          <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {activeData?.trips.map((trip) => (
              
              // KARTU JADWAL (Horizontal Baris, Compact & Detail)
              <div key={trip.id} className="bg-white p-5 md:p-6 rounded-2xl border border-border/20 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-5 md:gap-8 items-start md:items-center">
                
                {/* A. Info Dasar (Tanggal, Rute, Kapal) */}
                <div className="w-full md:w-[35%] border-b md:border-b-0 md:border-r border-border/30 pb-4 md:pb-0 pr-0 md:pr-6 flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start">
                  <div>
                    <span className="text-[10px] md:text-[11px] text-secondary font-bold tracking-[0.2em] uppercase mb-1 block">
                      {trip.dates} {activeTab.split(" ")[0]}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {trip.route}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[10px] md:text-xs text-muted-foreground">
                      <Ship className="w-3.5 h-3.5 text-secondary" />
                      <span className="font-medium text-primary/80">{trip.vessel}</span>
                    </div>
                  </div>
                  {/* Status untuk layar mobile */}
                  <div className="md:hidden">
                    {getStatusBadge(trip.status)}
                  </div>
                </div>

                {/* B. Detail Kabin & Harga (Sangat Rapi) */}
                <div className="w-full md:w-[45%] flex flex-col gap-3">
                  {/* Harga Mulai */}
                  <div className="text-[10px] md:text-xs text-muted-foreground font-light mb-1 border-b border-border/20 pb-2 inline-block w-max">
                    Starting from <span className="font-bold text-primary tracking-wide text-[11px] md:text-sm ml-1">{trip.price}</span> / pax
                  </div>
                  
                  {/* Daftar Kabin Tersedia */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 mb-2">
                      <BedDouble className="w-3 h-3 text-secondary" />
                      <span className="text-[9px] uppercase tracking-[0.1em] font-bold text-primary">Cabin Availability:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                      {trip.cabins.map((cabin, i) => (
                        <div key={i} className="flex justify-between items-center text-[10px] md:text-[11px] border-b border-border/10 pb-1 last:border-0">
                          <span className="text-muted-foreground font-light">{cabin.name}</span>
                          <span className={`tracking-wide ${getCabinStatusColor(cabin.status)}`}>{cabin.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* C. Tombol Aksi */}
                <div className="w-full md:w-[20%] flex flex-col items-end md:items-center justify-center gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-border/20">
                  <div className="hidden md:block w-full text-right md:text-center">
                    {getStatusBadge(trip.status)}
                  </div>
                  <Link href="/contact" className="w-full">
                    <Button 
                      variant={trip.status === "waitlist" ? "outline" : "default"}
                      className={`w-full rounded-full text-[9px] py-4 h-auto tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-2 shadow-none transition-all duration-300 ${
                        trip.status === "waitlist" 
                          ? "border-border/60 hover:border-primary text-primary" 
                          : "bg-primary text-white hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5"
                      }`}
                    >
                      {trip.status === "waitlist" ? "Waitlist" : "Inquire"} 
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>

              </div>

            ))}
          </div>

        </div>
      </section>

    </main>
  );
}