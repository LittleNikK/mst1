'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const FRAME_COUNT = 168;

export default function RoadmapPage() {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
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
    );
}
