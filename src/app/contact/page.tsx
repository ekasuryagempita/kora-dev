"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Anchor,
  Mail,
  MapPin,
  Phone,
  Send,
  ChevronRight,
  Info,
  Users,
  Calendar,
  Ship,
  BedDouble,
  Minus,
  Plus,
  Clock,
  MessageCircle,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";

interface Passenger {
  name: string;
  nationality: string;
  idNumber: string;
  dob: string;
  gender: string;
  dietary: string;
  finSize: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitMethod, setSubmitMethod] = useState<"wa" | "email" | null>(null);

  // State Data Tamu untuk Template
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    pickup: "",
    message: "",
  });

  // State Logika Smart Form
  const [journey, setJourney] = useState("");
  const [vessel, setVessel] = useState("");
  const [cabin, setCabin] = useState("");
  const [guestCount, setGuestCount] = useState<number>(2);
  const [passengers, setPassengers] = useState<Passenger[]>([
    {
      name: "",
      nationality: "WNI",
      idNumber: "",
      dob: "",
      gender: "Male",
      dietary: "",
      finSize: "",
    },
    {
      name: "",
      nationality: "WNI",
      idNumber: "",
      dob: "",
      gender: "Male",
      dietary: "",
      finSize: "",
    },
  ]);
  const [showManifest, setShowManifest] = useState(false);

  const getJourneyName = (id: string) => {
    if (id === "komodo") return "Komodo Signature (3D2N)";
    if (id === "lombok-bajo") return "Lombok to Bajo (3D2N)";
    if (id === "wae-rebo") return "Wae Rebo Expedition (2D1N)";
    return "-";
  };

  const getVesselName = (id: string) => {
    if (id === "tala") return "Kora Tala";
    if (id === "nera") return "Kora Nera";
    if (id === "samawa") return "Kora Samawa";
    return "Terrestrial (No Vessel)";
  };

  const getCabinName = (id: string) => {
    const allCabins: { [key: string]: string } = {
      "tala-master": "Master Suite (Panoramic View)",
      "tala-grand": "Grand Suite (Ocean View)",
      "tala-deluxe": "Deluxe Cabin (Twin/Double)",
      "nera-master": "Master Suite (Private Balcony)",
      "nera-signature": "Signature Cabin (Ocean View)",
      "samawa-ocean": "Ocean Suite (Upper Deck)",
      "samawa-deluxe": "Deluxe Cabin (Lower Deck)",
    };
    return allCabins[id] || "Any Available Cabin";
  };

  const availableVessels = () => {
    if (journey === "lombok-bajo")
      return [{ id: "tala", name: "Kora Tala (Max 14 Guests)" }];
    if (journey === "komodo")
      return [
        { id: "nera", name: "Kora Nera (Max 10 Guests)" },
        { id: "samawa", name: "Kora Samawa (Max 12 Guests)" },
      ];
    return [];
  };

  const availableCabins = () => {
    if (vessel === "tala")
      return [
        { id: "tala-master", name: "Master Suite (Panoramic View)" },
        { id: "tala-grand", name: "Grand Suite (Ocean View)" },
        { id: "tala-deluxe", name: "Deluxe Cabin (Twin/Double)" },
      ];
    if (vessel === "nera")
      return [
        { id: "nera-master", name: "Master Suite (Private Balcony)" },
        { id: "nera-signature", name: "Signature Cabin (Ocean View)" },
      ];
    if (vessel === "samawa")
      return [
        { id: "samawa-ocean", name: "Ocean Suite (Upper Deck)" },
        { id: "samawa-deluxe", name: "Deluxe Cabin (Lower Deck)" },
      ];
    return [];
  };

  const maxGuests = () => {
    if (vessel === "tala") return 14;
    if (vessel === "nera") return 10;
    if (vessel === "samawa") return 12;
    if (journey === "wae-rebo") return 15;
    return 14;
  };

  useEffect(() => {
    setVessel("");
    setCabin("");
  }, [journey]);

  useEffect(() => {
    setCabin("");
  }, [vessel]);

  useEffect(() => {
    const currentCount = passengers.length;
    if (guestCount > currentCount) {
      const newPassengers = Array.from(
        { length: guestCount - currentCount },
        () => ({
          name: "",
          nationality: "WNI",
          idNumber: "",
          dob: "",
          gender: "Male",
          dietary: "",
          finSize: "",
        }),
      );
      setPassengers([...passengers, ...newPassengers]);
    } else if (guestCount < currentCount) {
      setPassengers(passengers.slice(0, guestCount));
    }
  }, [guestCount]);

  const handleDecrement = () => setGuestCount((prev) => Math.max(1, prev - 1));
  const handleIncrement = () =>
    setGuestCount((prev) => Math.min(maxGuests(), prev + 1));

  const updatePassenger = (
    index: number,
    field: keyof Passenger,
    value: string,
  ) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);
  };

  // ---------------------------------------------------------
  // LOGIKA BUILDER TEMPLATE (CLEAN TEXT - NO EMOJI)
  // ---------------------------------------------------------
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const isWA = submitMethod === "wa";
    let text = "";

    if (isWA) {
      // FORMAT WHATSAPP
      text += `*KORA LUXURY CONCIERGE INQUIRY*\n\n`;
      text += `Warm greetings, KORA Concierge Team.\n`;
      text += `I would like to inquire about a voyage reservation with the following details:\n\n`;

      text += `*I. PRIMARY CONTACT*\n`;
      text += `- Name  : ${formData.name}\n`;
      text += `- Email : ${formData.email}\n`;
      text += `- Phone : ${formData.phone}\n\n`;

      text += `*II. VOYAGE PREFERENCES*\n`;
      text += `- Destination : ${getJourneyName(journey)}\n`;
      if (journey !== "wae-rebo") {
        text += `- Vessel      : ${getVesselName(vessel)}\n`;
        text += `- Cabin       : ${getCabinName(cabin)}\n`;
      }
      text += `- Date        : ${formData.dates}\n`;
      text += `- Guests      : ${guestCount} Pax\n`;
      if (formData.pickup) text += `- Pickup Loc  : ${formData.pickup}\n`;

      if (formData.message) {
        text += `\n*III. SPECIAL REQUESTS*\n${formData.message}\n`;
      }

      if (showManifest && passengers[0].name !== "") {
        text += `\n*IV. GUEST MANIFEST*\n`;
        passengers.forEach((p, i) => {
          if (p.name) {
            text += `*${i + 1}. ${p.name}*\n`;
            text += `   • Nat/ID : ${p.nationality} / ${p.idNumber || "-"}\n`;
            text += `   • Gender : ${p.gender} | DOB: ${p.dob || "-"}\n`;
            text += `   • Diet   : ${p.dietary || "None"} | Fin: ${p.finSize || "-"}\n`;
          }
        });
      }

      text += `\nThank you. I look forward to your assistance.`;
    } else {
      // FORMAT EMAIL
      text += `Warm greetings, KORA Concierge Team.\n\n`;
      text += `I am writing to inquire about a voyage reservation. Please find the details of my request below:\n\n`;

      text += `--------------------------------------------------\n`;
      text += `I. PRIMARY CONTACT\n`;
      text += `--------------------------------------------------\n`;
      text += `Name            : ${formData.name}\n`;
      text += `Email           : ${formData.email}\n`;
      text += `WhatsApp/Phone  : ${formData.phone}\n\n`;

      text += `--------------------------------------------------\n`;
      text += `II. VOYAGE PREFERENCES\n`;
      text += `--------------------------------------------------\n`;
      text += `Destination     : ${getJourneyName(journey)}\n`;
      if (journey !== "wae-rebo") {
        text += `Vessel          : ${getVesselName(vessel)}\n`;
        text += `Cabin Preference: ${getCabinName(cabin)}\n`;
      }
      text += `Departure Date  : ${formData.dates}\n`;
      text += `Total Guests    : ${guestCount} Pax\n`;
      if (formData.pickup) {
        text += `Pickup Location : ${formData.pickup}\n`;
      }
      text += `\n`;

      if (formData.message) {
        text += `--------------------------------------------------\n`;
        text += `III. SPECIAL REQUESTS\n`;
        text += `--------------------------------------------------\n`;
        text += `${formData.message}\n\n`;
      }

      if (showManifest && passengers[0].name !== "") {
        text += `--------------------------------------------------\n`;
        text += `IV. GUEST MANIFEST\n`;
        text += `--------------------------------------------------\n`;
        passengers.forEach((p, i) => {
          if (p.name) {
            text += `${i + 1}. ${p.name.toUpperCase()}\n`;
            text += `    - Nationality : ${p.nationality}\n`;
            text += `    - ID/Passport : ${p.idNumber || "Not Provided"}\n`;
            text += `    - Gender/DOB  : ${p.gender} / ${p.dob || "Not Provided"}\n`;
            text += `    - Diet/Allergy: ${p.dietary || "None"}\n`;
            text += `    - Fin Size    : ${p.finSize || "Not Provided"}\n\n`;
          }
        });
      }

      text += `Thank you for your time and assistance. I look forward to hearing from you regarding availability and the next steps.\n\n`;
      text += `Best regards,\n`;
      text += `${formData.name}`;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const encodedText = encodeURIComponent(text);

      if (isWA) {
        const waNumber = "6285393271357";
        window.open(`https://wa.me/${waNumber}?text=${encodedText}`, "_blank");
      } else {
        const emailAddress = "hello@kora.com";
        const subject = encodeURIComponent(
          `Voyage Inquiry: ${getJourneyName(journey)} - ${formData.name}`,
        );
        window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${encodedText}`;
      }
    }, 1000);
  };

  return (
    <main className="flex min-h-screen flex-col bg-background overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative flex h-[40svh] md:h-[60svh] w-full items-end justify-start overflow-hidden pb-10 md:pb-16 border-b border-border/30">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-out hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 max-w-6xl flex flex-col items-center text-center">
          <FadeIn delay={0.2} direction="up">
            <div className="flex items-center gap-3 mb-3 md:mb-5">
              <div className="w-6 h-px bg-white/60" />
              <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/90 font-medium">
                The Concierge
              </span>
              <div className="w-6 h-px bg-white/60" />
            </div>
          </FadeIn>
          <FadeIn delay={0.4} direction="up">
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-[1.2] drop-shadow-lg"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Curate Your Voyage
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* INQUIRY FORM SECTION */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* KIRI: Informasi & Rules */}
            <div className="w-full lg:w-[35%] flex flex-col order-2 lg:order-1">
              <div className="sticky top-28">
                <h2
                  className="text-2xl md:text-3xl font-bold text-primary mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  At Your Service
                </h2>
                <p className="text-[11px] md:text-sm text-muted-foreground font-light leading-[1.8] mb-8">
                  Submit your preferences below. Your request will be
                  meticulously formatted and sent directly to our Concierge via
                  WhatsApp or Email.
                </p>

                {/* SCHEDULE BOARD */}
                <div className="bg-[#172136] border border-[#172136]/20 p-6 md:p-8 rounded-2xl mb-8 shadow-xl text-white">
                  <div className="flex items-center gap-3 mb-5">
                    <Calendar className="w-4 h-4 text-secondary" />
                    <h3 className="text-[10px] md:text-xs font-semibold tracking-widest uppercase">
                      Upcoming Departures
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="border-b border-white/10 pb-4">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-xs md:text-sm font-semibold tracking-wide">
                          Oct 12 - 14
                        </span>
                        <span className="text-[9px] uppercase tracking-widest bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
                          Available
                        </span>
                      </div>
                      <p className="text-[10px] md:text-[11px] text-white/60 font-light">
                        <span className="text-white/90">Kora Nera</span> •
                        Komodo Signature
                      </p>
                    </div>

                    <div className="border-b border-white/10 pb-4">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-xs md:text-sm font-semibold tracking-wide">
                          Oct 18 - 20
                        </span>
                        <span className="text-[9px] uppercase tracking-widest bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full border border-orange-500/30">
                          2 Cabins Left
                        </span>
                      </div>
                      <p className="text-[10px] md:text-[11px] text-white/60 font-light">
                        <span className="text-white/90">Kora Tala</span> •
                        Lombok to Bajo
                      </p>
                    </div>

                    <div className="pb-2">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-xs md:text-sm font-semibold tracking-wide text-white/50">
                          Oct 25 - 27
                        </span>
                        <span className="text-[9px] uppercase tracking-widest bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full border border-red-500/30">
                          Waitlist Only
                        </span>
                      </div>
                      <p className="text-[10px] md:text-[11px] text-white/40 font-light">
                        <span className="text-white/60">Kora Samawa</span> •
                        Komodo Signature
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/schedule"
                    className="w-full mt-4 flex items-center justify-center text-[9px] uppercase tracking-[0.2em] text-white/60 hover:text-white border border-white/20 hover:bg-white/10 transition-colors rounded-full py-2.5"
                  >
                    View Full Calendar
                  </Link>
                </div>

                {/* FLEET RULES */}
                <div className="bg-muted/10 border border-border/40 p-6 md:p-8 rounded-2xl mb-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <Ship className="w-4 h-4 text-secondary" />
                    <h3 className="text-[10px] md:text-xs font-semibold tracking-widest uppercase">
                      Fleet Operations
                    </h3>
                  </div>
                  <ul className="text-[10px] text-muted-foreground font-light leading-[1.8] space-y-3">
                    <li className="flex gap-2">
                      <span className="text-secondary mt-0.5">•</span>
                      <span>
                        <strong className="text-primary font-medium">
                          Lombok ⇄ Bajo:
                        </strong>{" "}
                        Exclusively navigated by <strong>Kora Tala</strong>.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary mt-0.5">•</span>
                      <span>
                        <strong className="text-primary font-medium">
                          Komodo Signature:
                        </strong>{" "}
                        Handled intimately by <strong>Kora Nera</strong> and{" "}
                        <strong>Kora Samawa</strong>.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* KANAN: Smart Concierge Form */}
            <div className="w-full lg:w-[65%] order-1 lg:order-2">
              <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-[0_4px_30px_rgb(0,0,0,0.03)] border border-border/20 relative">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-16 px-4 animate-in fade-in duration-700">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${submitMethod === "wa" ? "bg-[#25D366]/10" : "bg-primary/10"}`}
                    >
                      {submitMethod === "wa" ? (
                        <MessageCircle className="w-6 h-6 text-[#25D366]" />
                      ) : (
                        <Mail className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <h4
                      className="text-2xl font-bold text-primary mb-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {submitMethod === "wa"
                        ? "Redirecting to WhatsApp..."
                        : "Opening Email Client..."}
                    </h4>
                    <p className="text-muted-foreground font-light text-xs md:text-sm leading-relaxed max-w-sm mx-auto">
                      Your highly detailed inquiry has been formatted securely.
                      If your application does not open automatically, please
                      ensure it is installed.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="mt-8 rounded-full text-[9px] uppercase tracking-widest"
                    >
                      Return to Form
                    </Button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-10 md:space-y-12"
                  >
                    {/* BAGIAN 1: Primary Contact */}
                    <div>
                      <div className="flex items-center gap-3 mb-6 border-b border-border/30 pb-3">
                        <Users className="w-4 h-4 text-secondary" />
                        <h3 className="text-xs tracking-[0.2em] uppercase font-bold text-primary">
                          1. Primary Contact
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                        <div className="relative group">
                          <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full bg-transparent border-b border-border/60 py-2.5 text-[11px] md:text-sm font-light text-primary placeholder:text-transparent focus:outline-none focus:border-secondary peer transition-colors"
                            placeholder="Name"
                          />
                          <label
                            htmlFor="name"
                            className="absolute left-0 top-2.5 text-[11px] md:text-xs text-muted-foreground font-light transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-secondary peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[9px] peer-not-placeholder-shown:text-secondary peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest"
                          >
                            Full Name *
                          </label>
                        </div>
                        <div className="relative group">
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className="w-full bg-transparent border-b border-border/60 py-2.5 text-[11px] md:text-sm font-light text-primary placeholder:text-transparent focus:outline-none focus:border-secondary peer transition-colors"
                            placeholder="Email"
                          />
                          <label
                            htmlFor="email"
                            className="absolute left-0 top-2.5 text-[11px] md:text-xs text-muted-foreground font-light transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-secondary peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[9px] peer-not-placeholder-shown:text-secondary peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest"
                          >
                            Email Address *
                          </label>
                        </div>
                        <div className="relative group md:col-span-2">
                          <input
                            type="tel"
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            className="w-full bg-transparent border-b border-border/60 py-2.5 text-[11px] md:text-sm font-light text-primary placeholder:text-transparent focus:outline-none focus:border-secondary peer transition-colors"
                            placeholder="WhatsApp Number"
                          />
                          <label
                            htmlFor="phone"
                            className="absolute left-0 top-2.5 text-[11px] md:text-xs text-muted-foreground font-light transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-secondary peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[9px] peer-not-placeholder-shown:text-secondary peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest"
                          >
                            WhatsApp Number *
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* BAGIAN 2: The Voyage */}
                    <div>
                      <div className="flex items-center gap-3 mb-6 border-b border-border/30 pb-3">
                        <Anchor className="w-4 h-4 text-secondary" />
                        <h3 className="text-xs tracking-[0.2em] uppercase font-bold text-primary">
                          2. Curate Your Voyage
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                        <div className="relative group">
                          <select
                            id="journey"
                            value={journey}
                            onChange={(e) => setJourney(e.target.value)}
                            required
                            className="w-full bg-transparent border-b border-border/60 py-2.5 text-[11px] md:text-sm font-light text-primary focus:outline-none focus:border-secondary appearance-none cursor-pointer"
                          >
                            <option value="" disabled>
                              Select a Route...
                            </option>
                            <option value="komodo">
                              Komodo Signature (3D2N)
                            </option>
                            <option value="lombok-bajo">
                              Lombok to Bajo (3D2N)
                            </option>
                            <option value="wae-rebo">
                              Wae Rebo Expedition (2D1N)
                            </option>
                          </select>
                          <label
                            htmlFor="journey"
                            className="absolute left-0 -top-4 text-[9px] text-secondary uppercase tracking-widest font-bold"
                          >
                            1. Select Destination *
                          </label>
                        </div>

                        {journey !== "wae-rebo" ? (
                          <div className="relative group">
                            <select
                              id="vessel"
                              value={vessel}
                              onChange={(e) => setVessel(e.target.value)}
                              required
                              disabled={!journey}
                              className="w-full bg-transparent border-b border-border/60 py-2.5 text-[11px] md:text-sm font-light text-primary focus:outline-none focus:border-secondary appearance-none cursor-pointer disabled:opacity-50"
                            >
                              <option value="" disabled>
                                {journey
                                  ? "Select Vessel..."
                                  : "Select Journey First"}
                              </option>
                              {availableVessels().map((v) => (
                                <option key={v.id} value={v.id}>
                                  {v.name}
                                </option>
                              ))}
                            </select>
                            <label
                              htmlFor="vessel"
                              className="absolute left-0 -top-4 text-[9px] text-secondary uppercase tracking-widest font-bold"
                            >
                              2. Select Vessel *
                            </label>
                          </div>
                        ) : (
                          <div className="relative group flex items-end pb-2.5">
                            <span className="text-[11px] md:text-sm font-light text-primary/60 italic border-b border-border/60 w-full pb-2.5">
                              Overland Expedition (No Vessel)
                            </span>
                          </div>
                        )}

                        {journey !== "wae-rebo" && (
                          <div className="relative group md:col-span-2">
                            <select
                              id="cabin"
                              value={cabin}
                              onChange={(e) => setCabin(e.target.value)}
                              required
                              disabled={!vessel}
                              className="w-full bg-transparent border-b border-border/60 py-2.5 text-[11px] md:text-sm font-light text-primary focus:outline-none focus:border-secondary appearance-none cursor-pointer disabled:opacity-50"
                            >
                              <option value="" disabled>
                                {vessel
                                  ? "Select Preferred Cabin..."
                                  : "Select Vessel First"}
                              </option>
                              {availableCabins().map((c) => (
                                <option key={c.id} value={c.id}>
                                  {c.name}
                                </option>
                              ))}
                            </select>
                            <label
                              htmlFor="cabin"
                              className="absolute left-0 -top-4 text-[9px] text-secondary uppercase tracking-widest font-bold"
                            >
                              3. Preferred Cabin Type *
                            </label>
                          </div>
                        )}

                        <div className="relative group">
                          <input
                            type="text"
                            id="dates"
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => {
                              if (!e.target.value) e.target.type = "text";
                            }}
                            required
                            value={formData.dates}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                dates: e.target.value,
                              })
                            }
                            className="w-full bg-transparent border-b border-border/60 py-2.5 text-[11px] md:text-sm font-light text-primary placeholder:text-transparent focus:outline-none focus:border-secondary peer transition-colors"
                            placeholder="Date"
                          />
                          <label
                            htmlFor="dates"
                            className="absolute left-0 top-2.5 text-[11px] md:text-xs text-muted-foreground font-light transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-secondary peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[9px] peer-not-placeholder-shown:text-secondary peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest"
                          >
                            Departure Date *
                          </label>
                        </div>
                        <div className="relative group">
                          <input
                            type="text"
                            id="pickup"
                            value={formData.pickup}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                pickup: e.target.value,
                              })
                            }
                            className="w-full bg-transparent border-b border-border/60 py-2.5 text-[11px] md:text-sm font-light text-primary placeholder:text-transparent focus:outline-none focus:border-secondary peer transition-colors"
                            placeholder="Pickup Location"
                          />
                          <label
                            htmlFor="pickup"
                            className="absolute left-0 top-2.5 text-[11px] md:text-xs text-muted-foreground font-light transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-secondary peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[9px] peer-not-placeholder-shown:text-secondary peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest"
                          >
                            Hotel / Airport Pickup Location
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* BAGIAN 3: Guest Manifest Option */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 border-b border-border/30 pb-3">
                        <div className="flex items-center gap-3">
                          <BedDouble className="w-4 h-4 text-secondary" />
                          <h3 className="text-xs tracking-[0.2em] uppercase font-bold text-primary">
                            3. Guest Details
                          </h3>
                        </div>

                        <div className="flex items-center gap-4">
                          <label className="text-[10px] tracking-widest uppercase text-muted-foreground font-medium">
                            Total Guests:
                          </label>
                          <div className="flex items-center bg-muted/10 border border-border/50 rounded-full overflow-hidden shadow-sm">
                            <button
                              type="button"
                              onClick={handleDecrement}
                              className="w-8 h-8 flex items-center justify-center hover:bg-muted/30 transition-colors text-primary active:bg-secondary/20"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-6 text-center text-xs font-semibold text-primary">
                              {guestCount}
                            </span>
                            <button
                              type="button"
                              onClick={handleIncrement}
                              className="w-8 h-8 flex items-center justify-center hover:bg-muted/30 transition-colors text-primary active:bg-secondary/20"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="bg-muted/10 p-4 rounded-xl border border-border/40 mb-4 flex items-start gap-3">
                        <Info className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <p className="text-[10px] md:text-xs font-light text-muted-foreground leading-relaxed">
                          National Park ticketing and marine insurance require
                          passenger manifests. Provide them now to be sent
                          directly, or skip and provide them later.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setShowManifest(!showManifest)}
                        className="text-[10px] md:text-xs text-secondary font-semibold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2"
                      >
                        {showManifest
                          ? "- Hide Manifest Forms"
                          : "+ Fill Manifest Now (Optional)"}
                      </button>

                      {showManifest && (
                        <div className="mt-6 space-y-8 animate-in fade-in duration-500">
                          {passengers.map((p, i) => (
                            <div
                              key={i}
                              className="bg-background border border-border/50 p-5 md:p-6 rounded-2xl relative shadow-sm"
                            >
                              <div className="absolute -top-3 left-4 bg-white px-2 text-[9px] font-bold tracking-widest uppercase text-secondary">
                                Passenger {i + 1}
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-2">
                                <input
                                  type="text"
                                  value={p.name}
                                  onChange={(e) =>
                                    updatePassenger(i, "name", e.target.value)
                                  }
                                  placeholder="Full Name (as per ID)"
                                  className="w-full bg-transparent border-b border-border/60 py-2 text-[11px] font-light text-primary focus:outline-none focus:border-secondary"
                                />
                                <div className="flex gap-4">
                                  <select
                                    value={p.nationality}
                                    onChange={(e) =>
                                      updatePassenger(
                                        i,
                                        "nationality",
                                        e.target.value,
                                      )
                                    }
                                    className="w-1/3 bg-transparent border-b border-border/60 py-2 text-[11px] font-light text-primary focus:outline-none focus:border-secondary appearance-none cursor-pointer"
                                  >
                                    <option value="WNI">WNI</option>
                                    <option value="WNA">WNA</option>
                                  </select>
                                  <input
                                    type="text"
                                    value={p.idNumber}
                                    onChange={(e) =>
                                      updatePassenger(
                                        i,
                                        "idNumber",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="ID / Passport Number"
                                    className="w-2/3 bg-transparent border-b border-border/60 py-2 text-[11px] font-light text-primary focus:outline-none focus:border-secondary"
                                  />
                                </div>
                                <div className="flex gap-4">
                                  <select
                                    value={p.gender}
                                    onChange={(e) =>
                                      updatePassenger(
                                        i,
                                        "gender",
                                        e.target.value,
                                      )
                                    }
                                    className="w-1/3 bg-transparent border-b border-border/60 py-2 text-[11px] font-light text-primary focus:outline-none focus:border-secondary appearance-none cursor-pointer"
                                  >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                  </select>
                                  <input
                                    type="text"
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => {
                                      if (!e.target.value)
                                        e.target.type = "text";
                                    }}
                                    value={p.dob}
                                    onChange={(e) =>
                                      updatePassenger(i, "dob", e.target.value)
                                    }
                                    placeholder="Date of Birth"
                                    className="w-2/3 bg-transparent border-b border-border/60 py-2 text-[11px] font-light text-primary focus:outline-none focus:border-secondary"
                                  />
                                </div>
                                <div className="flex gap-4">
                                  <input
                                    type="text"
                                    value={p.dietary}
                                    onChange={(e) =>
                                      updatePassenger(
                                        i,
                                        "dietary",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="Dietary/Allergies"
                                    className="w-2/3 bg-transparent border-b border-border/60 py-2 text-[11px] font-light text-primary focus:outline-none focus:border-secondary"
                                  />
                                  <input
                                    type="text"
                                    value={p.finSize}
                                    onChange={(e) =>
                                      updatePassenger(
                                        i,
                                        "finSize",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="Fin/Shoe Size"
                                    className="w-1/3 bg-transparent border-b border-border/60 py-2 text-[11px] font-light text-primary focus:outline-none focus:border-secondary"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Message & MULTI-CHANNEL SUBMIT BUTTONS */}
                    <div className="pt-4 border-t border-border/30">
                      <div className="relative group mb-8 mt-6">
                        <textarea
                          id="message"
                          rows={3}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          className="w-full bg-transparent border-b border-border/60 py-2 text-[11px] md:text-sm font-light text-primary placeholder:text-transparent focus:outline-none focus:border-secondary peer transition-colors resize-none"
                          placeholder="Message"
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="absolute left-0 -top-2 text-[11px] md:text-xs text-muted-foreground font-light transition-all peer-focus:-top-6 peer-focus:text-[9px] peer-focus:text-secondary peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[9px] peer-not-placeholder-shown:text-secondary peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest"
                        >
                          Any special requests? (Optional)
                        </label>
                      </div>

                      {/* TWO BUTTONS SIDE-BY-SIDE ON ALL SCREENS */}
                      <div className="flex flex-row items-center gap-3 md:gap-4">
                        <Button
                          type="submit"
                          onClick={() => setSubmitMethod("wa")}
                          disabled={isSubmitting}
                          className="w-1/2 px-2 md:px-6 py-4 md:py-6 h-auto rounded-full bg-[#25D366] text-white border-transparent hover:bg-[#128C7E] transition-all duration-500 text-[8px] md:text-[10px] tracking-widest md:tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-1.5 md:gap-3 disabled:opacity-70 shadow-md hover:shadow-xl hover:-translate-y-1"
                        >
                          {isSubmitting && submitMethod === "wa" ? (
                            "Wait..."
                          ) : (
                            <>
                              <span className="hidden sm:inline">
                                Send via{" "}
                              </span>
                              WhatsApp
                            </>
                          )}
                          {!isSubmitting && (
                            <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
                          )}
                        </Button>

                        <Button
                          type="submit"
                          onClick={() => setSubmitMethod("email")}
                          disabled={isSubmitting}
                          className="w-1/2 px-2 md:px-6 py-4 md:py-6 h-auto rounded-full bg-primary text-white border-transparent hover:bg-primary/90 transition-all duration-500 text-[8px] md:text-[10px] tracking-widest md:tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-1.5 md:gap-3 disabled:opacity-70 shadow-md hover:shadow-xl hover:-translate-y-1"
                        >
                          {isSubmitting && submitMethod === "email" ? (
                            "Wait..."
                          ) : (
                            <>
                              <span className="hidden sm:inline">
                                Send via{" "}
                              </span>
                              Email
                            </>
                          )}
                          {!isSubmitting && (
                            <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
                          )}
                        </Button>
                      </div>

                      <p className="text-center text-[8px] md:text-[9px] text-muted-foreground mt-5 leading-relaxed">
                        * Choose your preferred method. Both channels are
                        handled directly by our Concierge Team.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
