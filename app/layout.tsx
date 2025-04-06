import type { Metadata } from "next";
import "./globals.css";
import { Barlow, Oswald, Caveat, Bebas_Neue } from "next/font/google";
import { Sarabun } from "next/font/google";
import { Poppins } from "next/font/google";
import { Fjalla_One } from "next/font/google";
import { Gothic_A1 } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sarabun = Sarabun({
  subsets: ["latin"],
  variable: "--font-sarabun",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const fjalla = Fjalla_One({
  subsets: ["latin"],
  variable: "--font-fjalla",
  weight: ["400"],
});

const gothic = Gothic_A1({
  subsets: ["latin"],
  variable: "--font-gothic",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "NoSpam.",
  description: "Detect spam comments on multiple platforms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${sarabun.variable} ${poppins.variable} ${fjalla.variable} ${gothic.variable} ${oswald.variable} ${caveat.variable} ${bebas.variable}`}
    >
      <body className={` antialiased `}>{children}</body>
    </html>
  );
}
