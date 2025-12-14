import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, Playfair } from "next/font/google";
import "./globals.css";
import { platform } from "os";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: "variable",
  subsets: ["latin"],
});

const playFair = Playfair({
  variable: "--font-playfair",
  weight: "variable",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "niko clicker game!",
  description: "pat the niko :3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
