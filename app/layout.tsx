import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Phyo Thiha Aung's Portfolio",
  description:
    "Phyo Thiha Aung is a talented frontend developer with a passion for creating beautiful and functional web applications.",
  manifest: "/manifest.json",
};

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  fallback: ["system-ui", "sans-serif"],
  variable: "--font-open-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${openSans.className} antialiased w-full`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
