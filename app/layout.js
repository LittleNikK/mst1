"use client";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

function Loading({ onEnd }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <video
        src="/assets/logo-video.mp4"
        autoPlay
        muted
        playsInline
        onEnded={onEnd}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {loading ? (
          <Loading onEnd={() => setLoading(false)} />
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
