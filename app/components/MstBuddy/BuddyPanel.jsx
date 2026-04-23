"use client";

import { useState, useEffect } from "react";
import ChatBot from "./ChatBot";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  // detect mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      {/* BACKDROP */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 998,
          }}
        />
      )}

      {/* 3D BUTTON */}
      {!isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          style={{
            position: "fixed",

            //mobile vs desktop position
            bottom: isMobile ? "90px" : "130px",
            right: isMobile ? "10px" : "80px",

            width: isMobile ? "70px" : "100px",
            height: isMobile ? "70px" : "100px",

            cursor: "pointer",
            zIndex: 1000,
          }}
        >
          <ChatBot />
        </div>
      )}

      {/* CHAT PANEL */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed",

          // mobile spacing fix
          bottom: isMobile ? "10px" : "20px",
          right: isOpen ? (isMobile ? "10px" : "20px") : "-500px",

          // responsive width
          width: isMobile ? "300px" : "380px",
          maxWidth: "380px",

          height: isMobile ? "75vh" : "77vh",

          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 12px 30px rgba(255,0,0,0.4)",
          transition: "0.3s ease",
          zIndex: 999,
          border: "1px solid #ddd",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            padding: "10px 12px",
            background: "linear-gradient(135deg,#111,#222)",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexShrink: 0,
            zIndex: 2,
          }}
        >
          <span style={{ fontWeight: "600", fontSize: "13px" }}>
            MST Buddy
          </span>

          <button
            onClick={() => setIsOpen(false)}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              background: "linear-gradient(135deg,#ff4d4d,#ff0000)",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 10px rgba(255,0,0,0.4)",
            }}
          >
            ✕
          </button>
        </div>

        {/* IFRAME */}
        <div
          style={{
            flex: 1,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <iframe
  src="https://buddy.mstblockchain.com/chat"
  style={{
    position: "absolute",
    top: "0",
    left: "0",

    // MOBILE FIX
    transform: isMobile ? "scale(0.9)" : "scale(1)",
    transformOrigin: "top left",

    width: isMobile ? "111%" : "100%",
    height: isMobile ? "111%" : "110%",

    border: "none",
    display: "block",
  }}
  scrolling="no"
/>
        </div>
      </div>
    </>
  );
}