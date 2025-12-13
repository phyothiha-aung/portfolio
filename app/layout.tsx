import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Phyo Thiha Aung | Frontend Developer",
    template: "%s | Phyo Thiha Aung",
  },
  description:
    "Phyo Thiha Aung is a Frontend developer with 3+ years experience in React, Next.js, React Native, and modern UI development.",
  verification: {
    google: "200xp3Mw8naByKFhXJ5bvqozTHHipljwTYkM6JYkRp0",
  },
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
