"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin, GraduationCap, Briefcase,
  Gift, FileText, Handshake, Globe, Rocket, Users, ArrowRight
} from "lucide-react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

/* ================= DATA ================= */

const ambassadorTracks = [
  {
    icon: MapPin,
    title: "City Ambassador",
    desc: "Lead blockchain adoption in your city by organizing meetups, workshops, and local Web3 communities. Build grassroots Web3 presence.",
    perks: ["Host local meetups", "Organize workshops", "Community building", "Event sponsorship"],
  },
  {
    icon: GraduationCap,
    title: "Campus Ambassador",
    desc: "Bring MST to your university through student clubs, hackathons, and Web3 learning sessions. Inspire the next generation.",
    perks: ["University hackathons", "Student workshops", "Club partnerships", "Academic resources"],
  },
  {
    icon: Briefcase,
    title: "Industry Ambassador",
    desc: "Promote MST adoption within your industry and professional network for real-world blockchain use cases.",
    perks: ["Industry partnerships", "Professional networking", "Enterprise outreach", "Technical consulting"],
  },
];

const rewards = [
  { icon: Gift, text: "Earn up to ₹10,000 + $MSTC tokens" },
  { icon: FileText, text: "Official MST Ambassador Certificate" },
  { icon: Handshake, text: "Mentorship with Web3 experts" },
  { icon: Globe, text: "Global developer networking" },
  { icon: Rocket, text: "Early access to MST ecosystem" },
  { icon: Users, text: "Exclusive community events" },
];

/* ================= COMPONENTS ================= */

const Heading = ({ children, className = "" }) => (
  <h2 className={`bungee-regular text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-black font-extrabold uppercase ${className}`}>
    {children}
  </h2>
);

const TrackCard = ({ track, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative group h-full flex flex-col p-6 sm:p-8 rounded-3xl bg-white border border-black shadow-sm transition-all duration-500 hover:border-[#FF2D2D] hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1"
    >
      <div className="w-14 h-14 rounded-2xl bg-[#FAFAFA] border border-black flex items-center justify-center mb-6 text-black transition-all duration-500 group-hover:scale-110 group-hover:bg-[#FF2D2D] group-hover:text-white group-hover:border-[#FF2D2D]">
        <track.icon size={24} />
      </div>

      <h3 className="font-bold text-xl uppercase tracking-wider text-black mb-3 transition-colors group-hover:text-[#FF2D2D]">
        {track.title}
      </h3>

      <p className="text-zinc-500 text-[13px] leading-relaxed mb-8 flex-grow font-medium">
        {track.desc}
      </p>

      <div className="space-y-3 mb-8">
        {track.perks.map((perk, j) => (
          <div key={j} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF2D2D]/40 group-hover:bg-[#FF2D2D] transition-colors" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-600 group-hover:text-black transition-colors">
              {perk}
            </span>
          </div>
        ))}
      </div>

      <a 
        href="https://forms.gle/kDHDk3rJZkehBHok9"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center relative w-full py-3.5 overflow-hidden rounded-xl border border-zinc-200 bg-[#FAFAFA] text-[10px] font-bold uppercase tracking-widest text-black transition-all group-hover:bg-[#FF2D2D] group-hover:border-[#FF2D2D] group-hover:text-white"
      >
        <span>Apply as {track.title}</span>
      </a>
    </motion.div>
  );
};

const RewardCard = ({ reward, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.5 }}
    className="group p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-red-100 via-red-50 to-white border border-red-200 flex flex-row items-center gap-4 transition-all duration-300 hover:border-[#FF2D2D] hover:shadow-md hover:shadow-red-500/10 hover:-translate-y-1"
  >
    <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-white border border-red-100 flex items-center justify-center text-[#FF2D2D] shadow-sm group-hover:scale-110 group-hover:bg-[#FF2D2D] group-hover:text-white transition-all duration-300">
      <reward.icon size={20} />
    </div>
    <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider leading-relaxed text-black text-left flex-1">
      {reward.text}
    </span>
  </motion.div>
);

export default function AmbassadorPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black font-poppins selection:bg-[#FF2D2D] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Theme Background Orbits */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[5%] left-[5%] h-[320px] w-[320px] rounded-full border-[2px] border-red-300/30 pointer-events-none"
        >
          <div className="absolute bottom-[18%] right-[8%] h-[6px] w-[6px] rounded-full bg-[#FF2D2D] shadow-[0_0_10px_#ff2d2d]" />
          <motion.div
            animate={{ rotate: [-360, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute left-[15%] top-[15%] flex items-center gap-2"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF2D2D] opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF2D2D]"></span>
            </span>
            <span className="whitespace-nowrap text-[9px] font-black tracking-[0.2em] text-red-500/50 uppercase">MST BLOCKCHAIN</span>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute left-[30%] top-[25%] flex h-32 w-32 items-center justify-center rounded-full border-2 border-red-500/20 pointer-events-none"
        >
          <div className="h-20 w-20 rounded-full border-2 border-red-500/10" />
          <div className="absolute top-0 h-1.5 w-1.5 rounded-full bg-[#FF2D2D] shadow-[0_0_10px_#ff2d2d]" />
        </motion.div>

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-[5%] right-[5%] h-[400px] w-[400px] rounded-full border-[2px] border-red-300/30 pointer-events-none"
        >
          <div className="absolute top-[18%] left-[8%] h-[8px] w-[8px] rounded-full bg-[#FF2D2D] shadow-[0_0_15px_#ff2d2d]" />
        </motion.div>
      </div>

      <div className="relative z-10">
        <main className="max-w-[1400px] mx-auto px-6 md:px-12">

          {/* Hero Section */}
          <section className="min-h-[85vh] flex flex-col justify-center items-center text-center pt-32 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-black/10 bg-white/60 backdrop-blur-sm text-black text-[10px] font-bold uppercase tracking-[0.3em] mb-10 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF2D2D] animate-ping" />
                Applications Open 2024
              </div>

              <h1 className="bungee-regular text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-black font-extrabold uppercase mb-8">
                MST Blockchain <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D2D] via-red-600 to-rose-500">Ambassador</span> Program
              </h1>

              <p className="text-slate-400 text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed mb-14 uppercase tracking-tight">
                Become the voice of MST Blockchain in your community.  <span className="text-slate-900">Represent MST globally, earn rewards, and shape</span> the future of Web3.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://forms.gle/kDHDk3rJZkehBHok9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3.5 bg-black text-white rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-[#FF2D2D] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-black/10"
                >
                  Start Application
                </a>
                <button className="px-8 py-3.5 border border-black/10 bg-white/50 backdrop-blur-sm text-black rounded-full font-bold uppercase tracking-widest text-[11px] hover:border-[#FF2D2D] transition-all">
                  Program Handbook
                </button>
              </div>
            </motion.div>
          </section>

          {/* Tracks Section */}
          <section className="py-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Choose Your Role</span>
                <Heading>Ambassador  <span className="text-red-600">Tracks</span></Heading>
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 ">
              {ambassadorTracks.map((track, i) => (
                <TrackCard key={track.title} track={track} index={i} />
              ))}
            </div>
          </section>

          {/* Rewards Section */}
          <section className="py-32 border-t border-slate-100">
            <div className="text-center mb-24">
              
              <Heading>Rewards & <span className="text-red-600">Perks</span></Heading>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewards.map((reward, i) => (
                <RewardCard key={i} reward={reward} index={i} />
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden bg-black p-12 md:p-24 text-center border border-zinc-800 shadow-2xl"
            >
              {/* Subtle grid background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:24px_24px]" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="bungee-regular text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-white font-extrabold uppercase mb-8">
                  Ready to Lead the <br />
                  <span className="text-[#FF2D2D]">Future?</span>
                </h2>
                <p className="text-zinc-400 text-sm md:text-base font-medium mb-12 leading-relaxed uppercase tracking-widest max-w-xl mx-auto">
                  Join the elite network of MST ambassadors and shape the future of institutional blockchain.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                  <a 
                    href="https://forms.gle/kDHDk3rJZkehBHok9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-14 py-7 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-red-600 hover:text-white hover:scale-105 active:scale-95 transition-all duration-500 shadow-2xl shadow-white/5"
                  >
                    Become an Ambassador
                  </a>
                  <Link href="/contact" className="group/link flex items-center justify-center gap-3 px-10 py-4 border border-zinc-700 rounded-full text-[11px] font-bold uppercase tracking-widest text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors">
                    Join Community <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </section>

        </main>
      </div>

      <Footer />
    </div>
  );
}