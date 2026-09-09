import type { Metadata } from "next";
import { Noto_Sans, Playfair_Display } from "next/font/google";
import "../styles/globals.css"; // Sesuaikan dengan lokasi globals.css milikmu

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

// Metadata awal untuk SEO sesuai Rule 109 Blueprint
export const metadata: Metadata = {
  title: "KORA | Komodo Sailing & Phinisi Experiences",
  description: "Premium sailing company profile with interactive trip discovery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}