"use client";
import React from "react";
import { Send, MessageCircle } from "lucide-react";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaYoutube, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-white pt-24">
      <footer className="relative bg-gradient-to-br from-white via-[#fafafa] to-[#fff5f5] pt-20 pb-10 rounded-t-[60px] md:rounded-t-[100px] border-t border-red-200 font-sans">

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10 items-start">
            
            {/* BRAND */}
            <div className="col-span-2 lg:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="1.png" 
                  alt="MST logo"
                  className="w-20 h-20 object-contain"
                />
              </div>

              <h3 className="text-black font-bold text-lg mb-3" style={{ fontFamily: 'Montserrat', fontWeight: 800 }}>
                MST Protocol
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed max-w-[260px]" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>
                STRUCTURAL PURITY IN DECENTRALIZED ARCHITECTURE. BUILT FOR THE HIGH-PERFORMANCE INTERNET.
              </p>
            </div>

            {/* ECOSYSTEM */}
            <div className="col-span-1 lg:col-span-3">
              <h4 className="text-black font-bold mb-6" style={{ fontFamily: 'Montserrat', fontWeight: 800 }}>Ecosystem</h4>
              <ul className="space-y-4 text-black font-bold text-sm">
                <li className="hover:text-red-500 cursor-pointer transition" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>Build</li>
                <li className="hover:text-red-500 cursor-pointer transition" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>Validators</li>
                <li className="hover:text-red-500 cursor-pointer transition" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>Governance</li>
                <li className="hover:text-red-500 cursor-pointer transition" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>Grants</li>
                <li className="hover:text-red-500 cursor-pointer transition" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>Events</li>
                <li className="hover:text-red-500 cursor-pointer transition" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>Openings</li>
              </ul>
            </div>

            {/* USE CASES */}
            <div className="col-span-1 lg:col-span-3">
              <h4 className="text-black font-bold mb-6" style={{ fontFamily: 'Montserrat', fontWeight: 800 }}>Use Cases</h4>
              <ul className="space-y-4 text-black text-sm">
                <li className="hover:text-red-500 cursor-pointer transition" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>Supply Chain</li>
                <li className="hover:text-red-500 cursor-pointer transition" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>Real Estate Tokenization</li>
                <li className="hover:text-red-500 cursor-pointer transition" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>DeFi Liquidity</li>
                <li className="hover:text-red-500 cursor-pointer transition" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>Secure Healthcare</li>
                <li className="hover:text-red-500 cursor-pointer transition" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>Digital Identity</li>
                <li className="hover:text-red-500 cursor-pointer transition" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>Lending Pools</li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="col-span-2 lg:col-span-3">
              <h4 className="text-black font-bold mb-6" style={{ fontFamily: 'Montserrat', fontWeight: 800 }}>Resources</h4>
              <ul className="space-y-4 text-black text-sm">
                <li className="hover:text-red-500 cursor-pointer transition" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>Whitepaper</li>
                <li className="hover:text-red-500 cursor-pointer transition" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>Docs</li>
                <li className="hover:text-red-500 cursor-pointer transition" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>GitHub</li>
                <li className="hover:text-red-500 cursor-pointer transition" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>Support</li>
                <li className="hover:text-red-500 cursor-pointer transition" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>Careers</li>
                <li className="hover:text-red-500 cursor-pointer transition" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>Sitemap</li>
              </ul>
            </div>

            {/* NEWSLETTER + CONTACT */}
            <div className="col-span-2 lg:col-span-12">
              <h4 className="text-black font-bold mb-4" style={{ fontFamily: 'Montserrat', fontWeight: 800 }}>Newsletter</h4>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start lg:items-center w-full">
                {/* LEFT SIDE (INPUT GROUP) */}
                <div className="lg:col-span-6 xl:col-span-5">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-xl">
                  <input
                    type="email"
                    placeholder="YOUR EMAIL"
                    className="rounded-full px-5 py-3 border border-red-300 bg-white w-full text-black outline-none placeholder:text-gray-400 focus:border-red-500 transition"
                    style={{ fontFamily: 'Poppins', fontWeight: 400 }}
                  />

                  <button
                    type="button"
                    className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition whitespace-nowrap"
                  >
                    SUBMIT 
                  </button>
                </div>
                </div>

                {/* RIGHT SIDE (CONTACT + ICONS) */}
                <div className="lg:col-span-6 xl:col-span-7 lg:justify-self-end">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <a
                    href="mailto:support@mstblockchain.in"
                    className="text-gray-600 text-sm break-all sm:break-normal"
                    style={{ fontFamily: 'Poppins', fontWeight: 400 }}
                  >
                    support@mstblockchain.in
                  </a>

                    <div className="flex items-center flex-wrap gap-3">
                    <a
                      href="https://x.com/MSTBlockchain"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="w-10 h-10 rounded-full border border-red-300 flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white transition"
                    >
                      <FaTwitter size={16} className="text-current" />
                    </a>
                    <a
                      href="https://www.facebook.com/MSTBlockchainOfficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-10 h-10 rounded-full border border-red-300 flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white transition"
                    >
                      <FaFacebook size={16} className="text-current" />
                    </a>
                    <a
                      href="https://www.instagram.com/mstblockchain/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-10 h-10 rounded-full border border-red-300 flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white transition"
                    >
                      <FaInstagram size={16} className="text-current" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/mstblockchain/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-10 h-10 rounded-full border border-red-300 flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white transition"
                    >
                      <FaLinkedin size={16} className="text-current" />
                    </a>
                    <a
                      href="https://www.youtube.com/@MST_Blockchain"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="w-10 h-10 rounded-full border border-red-300 flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white transition"
                    >
                      <FaYoutube size={16} className="text-current" />
                    </a>
                    <a
                      href="https://t.me/mstblockchainchat"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Telegram"
                      className="w-10 h-10 rounded-full border border-red-300 flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white transition"
                    >
                      <FaTelegram size={16} className="text-current" />
                    </a>
                  </div>
                </div>
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM */}
          <div className="mt-12 pt-8 border-t border-red-200 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-500 text-xs text-center md:text-left" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>
              © 2024 MST PROTOCOL. ALL RIGHTS RESERVED. STRUCTURAL PURITY IS THE STANDARD.
            </p>

            <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-2 text-xs text-gray-500" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>
              <span className="hover:text-red-500 cursor-pointer transition">Privacy Policy</span>
              <span className="hover:text-red-500 cursor-pointer transition">Terms of Service</span>
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
}