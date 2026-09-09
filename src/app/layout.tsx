import type { Metadata } from "next";
import { Noto_Sans, Playfair_Display } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer"; // Tambahkan baris ini

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | KORA Sailing",
    default: "KORA | Luxury Komodo Sailing & Phinisi Charter", // Judul default di Homepage
  },
  description: "Experience cinematic luxury sailing across the Indonesian archipelago. Explore Komodo National Park, Lombok, and Flores aboard our premium handcrafted Phinisi fleet.",
  keywords: ["Komodo Sailing", "Liveaboard Labuan Bajo", "Luxury Phinisi", "Komodo Boat Charter", "KORA Sailing", "Flores Expedition"],
  authors: [{ name: "KORA Sailing" }],
  openGraph: {
    title: "KORA | Luxury Komodo Sailing",
    description: "Experience cinematic luxury sailing across the Indonesian archipelago.",
    url: "https://kora-sailing.com", // Ganti dengan domain aslimu nanti
    siteName: "KORA Sailing",
    images: [
      {
        url: "https://i.pinimg.com/1200x/fd/4e/14/fd4e14e2ff8b3f60fc0f741333375a0c.jpg", // Mengambil gambar dari folder public/ yang baru saja kamu masukkan
        width: 1200,
        height: 630,
        alt: "KORA Luxury Phinisi in Komodo National Park",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KORA | Luxury Komodo Sailing",
    description: "Experience cinematic luxury sailing across the Indonesian archipelago.",
    images: ["https://i.pinimg.com/1200x/fd/4e/14/fd4e14e2ff8b3f60fc0f741333375a0c.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground flex min-h-screen flex-col`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}