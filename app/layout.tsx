import { Providers } from "@/constant/providers";
import type { Metadata } from "next";
import {
  Barlow,
  Bebas_Neue,
  Caveat,
  Fjalla_One,
  Gothic_A1,
  Oswald,
  Poppins,
  Sarabun,
} from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

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
      <body className={` antialiased `}>
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
