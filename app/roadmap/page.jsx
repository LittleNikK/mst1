"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { motion, useScroll, useTransform, AnimatePresence, useMotionTemplate } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function RoadmapPage() {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);
    const frameCount = 151;

    // Milestone data for the roadmap - spread out over 10000px
    const milestones = [
        { title: "Genesis", description: "Inception of the MST Ecosystem and foundation laying.", progress: [0.02, 0.15] },
        { title: "Protocol V1", description: "Developing our scalable blockchain architecture and core consensus.", progress: [0.22, 0.35] },
        { title: "Ecosystem", description: "Launching major dApps and strategic global partnerships.", progress: [0.42, 0.55] },
        { title: "Ascension", description: "Global adoption, decentralized governance, and future scaling.", progress: [0.62, 0.75] },
        { title: "Metamorphosis", description: "Integration of advanced AI and cross-chain interoperability.", progress: [0.82, 0.95] },
    ];

    const currentFrame = (index) =>
        `/assets/frames/ezgif-frame-${(index + 1).toString().padStart(3, "0")}.jpg`;
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d");
        const loadedImages = [];
        let loadedCount = 0;

        // Set canvas size once
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        const render = (index) => {
            const img = loadedImages[index];
            if (!img) return;

            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio);
            const centerShift_x = (canvas.width - img.width * ratio) / 2;
            const centerShift_y = (canvas.height - img.height * ratio) / 2;

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(
                img,
                0,
                0,
                img.width,
                img.height,
                centerShift_x,
                centerShift_y,
                img.width * ratio,
                img.height * ratio
            );
        };

        // Preload frames
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            img.onload = () => {
                loadedCount++;
                setLoadProgress(Math.floor((loadedCount / frameCount) * 100));
                if (loadedCount === frameCount) {
                    setIsLoaded(true);
                    render(0);
                }
            };
            loadedImages.push(img);
        }

        // Initialize ScrollSmoother
        const smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 0.8,
            effects: true,
        });

        // GSAP ScrollTrigger for video frames scrubbing
        const sequence = { frame: 0 };
        const scrollTrigger = ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "+=5000", // Shortened distance for faster progression
            scrub: 0.5,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
                if (loadedCount === frameCount) {
                    const frameIndex = Math.min(
                        frameCount - 1,
                        Math.floor(self.progress * (frameCount - 1))
                    );
                    render(frameIndex);
                }
            },
        });

        const handleResize = () => {
            setCanvasSize();
            const currentIdx = Math.min(
                frameCount - 1,
                Math.floor(scrollTrigger.progress * (frameCount - 1))
            );
            render(currentIdx);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            smoother.kill();
            scrollTrigger.kill();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <main className="bg-black text-white font-space-grotesk">
            {/* Loading Overlay */}
            <AnimatePresence>
                {!isLoaded && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center gap-6"
                    >
                        <div className="w-24 h-24 border-2 border-red-600/20 border-t-red-600 rounded-full animate-spin" />
                        <div className="text-center">
                            <h2 className="text-xl font-bold uppercase tracking-widest text-red-600">Initializing Core</h2>
                            <p className="text-white/40 text-sm mt-2">{loadProgress}%</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
                        {/* Background Canvas */}
                        <canvas
                            ref={canvasRef}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />

                        {/* Dynamic Overlays */}
                        <div className="relative z-10 h-full w-full pointer-events-none">
                            {milestones.map((milestone, idx) => (
                                <MilestoneOverlay
                                    key={idx}
                                    milestone={milestone}
                                    containerRef={containerRef}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Spacer to allow scrolling - matched with ScrollTrigger end distance */}
                    <div className="h-[5000px] pointer-events-none" />
                </div>
            </div>

            {/* Fixed elements stay outside the smooth-content */}


            {/* Scroll Indicator */}
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-40">
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold">Quantum Navigation Active</span>
                <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 48, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.5, 1]
                        }}
                        className="absolute top-0 left-0 w-full h-1/3 bg-red-600"
                    />
                </div>
            </div>
        </main>
    );
}

function MilestoneOverlay({ milestone, containerRef }) {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const [start, end] = milestone.progress;

    // Ensure the input range is monotonically non-decreasing and within reasonable bounds [0, 1]
    const opacityRange = [
        Math.max(0, start - 0.03),
        start,
        end,
        Math.min(1, end + 0.03)
    ];

    const opacity = useTransform(scrollYProgress, opacityRange, [0, 1, 1, 0]);

    const scale = useTransform(
        scrollYProgress,
        [start, end],
        [0.95, 1.05]
    );

    const blurRange = [
        Math.max(0, start - 0.03),
        start,
        end,
        Math.min(1, end + 0.03)
    ];

    const blurValue = useTransform(scrollYProgress, blurRange, [15, 0, 0, 15]);

    const blurEffect = useMotionTemplate`blur(${blurValue}px)`;

    return (
        <motion.div
            style={{ opacity, scale, filter: blurEffect }}
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
        >
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex items-center justify-center gap-4">
                    <div className="h-[1px] w-8 bg-red-600" />
                    <span className="text-red-600 text-[10px] font-black tracking-[0.6em] uppercase">Core Phase</span>
                    <div className="h-[1px] w-8 bg-red-600" />
                </div>

                <h2 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter text-white leading-none">
                    {milestone.title}
                </h2>

                <p className="text-base md:text-xl font-light tracking-widest text-white/50 max-w-xl mx-auto leading-relaxed">
                    {milestone.description}
                </p>
            </div>
        </motion.div>
    );
}
