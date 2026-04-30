<<<<<<< Updated upstream
"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { motion, useScroll, useTransform, AnimatePresence, useMotionTemplate } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
=======
'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const FRAME_COUNT = 168;
>>>>>>> Stashed changes

export default function RoadmapPage() {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
<<<<<<< Updated upstream
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
=======
    const [images, setImages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Preload images
    useEffect(() => {
        const preloadImages = async () => {
            const loadedImages = [];
            let loadedCount = 0;

            for (let i = 1; i <= FRAME_COUNT; i++) {
                const img = new Image();
                img.src = `/assets/frams/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === FRAME_COUNT) {
                        setIsLoaded(true);
                    }
                };
                loadedImages.push(img);
            }
            setImages(loadedImages);
        };

        preloadImages();
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth scroll progress for buttery frame transitions
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 1000,
        damping: 100,
        mass: 1
    });

    // Map scroll progress to frame index
    const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // Render loop for the canvas
    useEffect(() => {
        if (!isLoaded || images.length === 0) return;

        const render = (index) => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const context = canvas.getContext('2d');
            const img = images[Math.floor(index)];

            if (img && context) {
                // Aspect ratio logic: cover
                const canvasAspect = canvas.width / canvas.height;
                const imgAspect = img.width / img.height;
                let drawWidth, drawHeight, offsetX, offsetY;

                if (canvasAspect > imgAspect) {
                    drawWidth = canvas.width;
                    drawHeight = canvas.width / imgAspect;
                    offsetX = 0;
                    offsetY = (canvas.height - drawHeight) / 2;
                } else {
                    drawWidth = canvas.height * imgAspect;
                    drawHeight = canvas.height;
                    offsetX = (canvas.width - drawWidth) / 2;
                    offsetY = 0;
                }

                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }
        };

        // Subscription to the frameIndex motion value
        const unsubscribe = frameIndex.on('change', (latest) => {
            render(latest);
        });

        // Initial render
        render(0);
        
        // Handle window resize
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                render(frameIndex.get());
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            unsubscribe();
            window.removeEventListener('resize', handleResize);
        };
    }, [isLoaded, images, frameIndex]);

    return (
        <div ref={containerRef} className="relative bg-black text-white selection:bg-red-600">
            {/* Canvas Background Layer */}
            <div className="fixed inset-0 w-full h-screen z-0">
                <canvas 
                    ref={canvasRef} 
                    className="w-full h-full block object-cover"
                />
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
                            <p className="bungee-regular text-sm tracking-widest text-red-600">INITIALIZING JOURNEY...</p>
                        </div>
                    </div>
                )}
                {/* Vignette Overlay for premium look */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
            </div>

            {/* Scrollytelling Content Layer */}
            <div className="relative z-10">
                {/* Hero / Start */}
                <section className="h-[200vh] flex flex-col items-center justify-center relative overflow-hidden">
                    <motion.div 
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                        className="text-center px-10"
                    >
                        <h1 className="bungee-regular text-7xl md:text-9xl mb-6 text-red-600 drop-shadow-[0_0_30px_rgba(255,0,0,0.4)]">
                            ROADMAP
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-light tracking-wide uppercase">
                            The Evolution of Decentralized Intelligence
                        </p>
                    </motion.div>
                </section>

                {/* Milestone 1: Genesis */}
                <section className="h-[200vh] flex items-center justify-start px-10 md:px-24">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl bg-black/40 backdrop-blur-xl p-10 border-l-8 border-red-600 rounded-r-2xl"
                    >
                        <span className="text-red-500 bungee-regular text-sm tracking-[0.3em] mb-4 block">PHASE 01</span>
                        <h2 className="bungee-regular text-5xl mb-6">GENESIS BLOCK</h2>
                        <p className="text-zinc-300 text-lg leading-relaxed">
                            Establishing the core POSA consensus mechanism. Initial MST node deployment and validator onboarding program initialization.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <div className="h-1 w-12 bg-red-600" />
                            <div className="h-1 w-12 bg-zinc-800" />
                            <div className="h-1 w-12 bg-zinc-800" />
                        </div>
                    </motion.div>
                </section>

                {/* Milestone 2: Expansion */}
                <section className="h-[200vh] flex items-center justify-end px-10 md:px-24 text-right">
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl bg-black/40 backdrop-blur-xl p-10 border-r-8 border-red-600 rounded-l-2xl"
                    >
                        <span className="text-red-500 bungee-regular text-sm tracking-[0.3em] mb-4 block">PHASE 02</span>
                        <h2 className="bungee-regular text-5xl mb-6">GLOBAL NODE EXPANSION</h2>
                        <p className="text-zinc-300 text-lg leading-relaxed">
                            Scaling the network to 9+ active high-performance nodes across multiple geographical regions. Launching the MST Academy for developer enablement.
                        </p>
                        <div className="mt-8 flex gap-4 justify-end">
                            <div className="h-1 w-12 bg-red-600" />
                            <div className="h-1 w-12 bg-red-600" />
                            <div className="h-1 w-12 bg-zinc-800" />
                        </div>
                    </motion.div>
                </section>

                {/* Milestone 3: Future */}
                <section className="h-[200vh] flex items-center justify-center px-10 md:px-24">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="max-w-2xl bg-black/60 backdrop-blur-2xl p-12 border border-red-600/30 rounded-3xl text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
                        <span className="text-red-500 bungee-regular text-sm tracking-[0.3em] mb-4 block uppercase">PHASE 03 & BEYOND</span>
                        <h2 className="bungee-regular text-6xl mb-8 text-white">THE ECOSYSTEM SINGULARITY</h2>
                        <p className="text-zinc-300 text-xl leading-relaxed">
                            Enterprise workflow automation integration. Cross-chain liquidity bridging and the launch of the MST Grant program for innovative decentralized applications.
                        </p>
                        <button className="mt-10 px-10 py-4 bg-red-600 hover:bg-red-700 text-white bungee-regular tracking-widest transition-all hover:scale-105 active:scale-95 rounded-full">
                            EXPLORE WHITE PAPER
                        </button>
                    </motion.div>
                </section>

                {/* Final Scroll Space */}
                <section className="h-[100vh]" />
            </div>

            {/* Custom Progress Bar */}
            <motion.div 
                style={{ scaleX: scrollYProgress }}
                className="fixed bottom-0 left-0 h-2 bg-red-600 z-50 origin-left"
            />
        </div>
>>>>>>> Stashed changes
    );
}
