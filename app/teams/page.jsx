'use client';

import dynamic from 'next/dynamic';

const Lanyard = dynamic(() => import('../components/Lanyard/Lanyard'), { ssr: false });

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

const team = [
    { id: 1, title: 'Rutuja', year: '2024', type: 'CORE', role: 'Sr.HR Head', name: 'Rutuja ', img: '/assets/teams/Rutujaanimated.jpg', hoverImg: '/assets/teams/Rutuja.jpg' },
    { id: 2, title: 'rushabh', year: '2024', type: 'CORE', role: 'Digital Marketing Manager', name: 'Rushabh ', img: '/assets/teams/rushabhanimated.jpg', hoverImg: '/assets/teams/rushabh.jpg' },
    { id: 3, title: 'Prakhar', year: '2024', type: 'CORE', role: 'Sr.Blockchain Developer', name: 'Prakhar ', img: '/assets/teams/Prakharanimated.jpg', hoverImg: '/assets/teams/prakhar.jpg' },
    { id: 4, title: 'Ritik', year: '2024', type: 'CORE', role: 'Head Business Manager', name: 'Ritik ', img: '/assets/teams/Ritikanimated.jpg', hoverImg: '/assets/teams/Ritik.jpg' },
    { id: 5, title: 'Mrinalini', year: '2024', type: 'CORE', role: 'Domestic and International BD', name: 'Mrinalini ', img: '/assets/teams/mrinaliniAnimated.jpg', hoverImg: '/assets/teams/mrinalini.jpg' },
    { id: 6, title: 'sarthak', year: '2024', type: 'CORE', role: 'DevRel', name: 'Sarthak ', img: '/assets/teams/sarthakanimated.jpg', hoverImg: '/assets/teams/sarthak.png' },
    { id: 7, title: 'datta', year: '2024', type: 'CORE', role: 'Sr.Video Designer', name: 'datta ', img: '/assets/teams/dattaanimated.png', hoverImg: '/assets/teams/datta.jpeg' },
    { id: 8, title: 'Vikrant', year: '2024', type: 'CORE', role: 'Graphic Designer', name: 'Vikrant ', img: '/assets/teams/Vikrantanimated.jpg', hoverImg: '/assets/teams/Vikrant.jpg' },
    { id: 9, title: 'Tanmay', year: '2024', type: 'CORE', role: 'Video Editor', name: 'Tanmay ', img: '/assets/teams/Tanmayanimated.jpg', hoverImg: '/assets/teams/Tanmay.jpg' },
    { id: 10, title: 'apurva', year: '2024', type: 'CORE', role: 'Blockchain Developer', name: 'Apurva ', img: '/assets/teams/Apoorvaanimated.jpg', hoverImg: '/assets/teams/apps.jpeg' },
    { id: 11, title: 'anuja', year: '2024', type: 'CORE', role: 'Software Developer', name: 'Anuja ', img: '/assets/teams/Anujaanimated.jpg', hoverImg: '/assets/teams/anuja.jpg' },
    { id: 12, title: 'smita', year: '2024', type: 'CORE', role: 'It Intern', name: 'smita ', img: '/assets/teams/smitaAnimated.png', hoverImg: '/assets/teams/smita.jpeg' },
    { id: 13, title: 'OM', year: '2024', type: 'CORE', role: 'Web Developer', name: 'OM ', img: '/assets/teams/omAni2.png', hoverImg: '/assets/teams/om.jpeg' },
    { id: 14, title: 'ajay', year: '2024', type: 'CORE', role: 'Web Developer', name: 'AJAY ', img: '/assets/teams/ajayAnimated.png', hoverImg: '/assets/teams/ajay.jpeg' },
    { id: 15, title: 'Radha', year: '2024', type: 'CORE', role: 'Tech Support', name: 'Radha ', img: '/assets/teams/Radhaanimated.jpg', hoverImg: '/assets/teams/radha.jpg' },
    { id: 16, title: 'Preetam', year: '2024', type: 'CORE', role: 'Tech Support', name: 'Preetam ', img: '/assets/teams/PreetamAnimated.jpg', hoverImg: '/assets/teams/preetam.jpg' },
    { id: 17, title: 'Rishita', year: '2024', type: 'CORE', role: 'Functional Consultant', name: 'Rishita ', img: '/assets/teams/Rishitaanimated.jpg', hoverImg: '/assets/teams/Rishita.jpg' },
    { id: 18, title: 'Tanay', year: '2024', type: 'CORE', role: 'Business Analyst intern', name: 'Tanay ', img: '/assets/teams/Tanayanimated.jpg', hoverImg: '/assets/teams/Tanay.jpg' },
];

export default function TeamsPage() {
    const [activeMemberId, setActiveMemberId] = useState(null);

    const toggleActiveMember = (id) => {
        if (window.innerWidth < 1024) {
            setActiveMemberId(activeMemberId === id ? null : id);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900 font-['Inter'] selection:bg-[#d2f000] selection:text-black overflow-x-hidden relative">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Space+Grotesk:wght@300;400;500;600;700;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </Head>

            <style jsx global>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .helmet-card {
          position: relative;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #000;
          background: #fdfdfd;
          /* Notch shape using clip-path */
          clip-path: polygon(
            0% 0%, 
            100% 0%, 
            100% calc(100% - 40px), 
            calc(100% - 140px) calc(100% - 40px), 
            calc(100% - 140px) 100%, 
            0% 100%
          );
        }
        .helmet-card::after {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          width: 140px;
          height: 40px;
          border-left: 1px solid #000;
          border-top: 1px solid #000;
          background: transparent;
          pointer-events: none;
          z-index: 20;
        }
        .helmet-card:hover {
          background: #fff;
          transform: translateY(-5px);
        }
      `}</style>

            {/* Theme Background Orbits */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <motion.div
                    animate={{ rotate: [360, 0] }}
                    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-[5%] left-[5%] h-[320px] w-[320px] rounded-full border-[2px] border-red-300 pointer-events-none"
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
                    className="absolute left-[30%] top-[25%] flex h-32 w-32 items-center justify-center rounded-full border-2 border-red-500 pointer-events-none"
                >
                    <div className="h-20 w-20 rounded-full border-2 border-red-500" />
                    <div className="absolute top-0 h-1.5 w-1.5 rounded-full bg-[#FF2D2D] shadow-[0_0_10px_#ff2d2d]" />
                </motion.div>

                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
                    className="absolute bottom-[5%] right-[5%] h-[400px] w-[400px] rounded-full border-[2px] border-red-300 pointer-events-none"
                >
                    <div className="absolute top-[18%] left-[8%] h-[8px] w-[8px] rounded-full bg-[#FF2D2D] shadow-[0_0_15px_#ff2d2d]" />
                </motion.div>
            </div>
            <main className="relative z-10 pt-32 pb-24 px-10 max-w-[1600px] mx-auto">
                {/* Section Header */}
                <div className="mb-12 border-l-4 border-red-600 pl-6">
                    <h1 className="bungee-regular text-6xl md:text-7xl font-bold text-zinc-900 uppercase leading-[1.1] tracking-[-0.04em]">Meet Our <span className="text-red-600">Team</span> </h1>
                    <p className="text-lg text-zinc-600 max-w-2xl mt-4">
                        <span className='text-red-600 bungee-regular'>Core Contributors:</span> The driving forces behind the MST Ecosystem.
                    </p>
                </div>

                {/* Hero / Filter Box */}
                <div className="w-full h-[500px] p-10 rounded-lg mb-12 flex items-center justify-center relative overflow-hidden">
                    {/* Background Image with Opacity */}
                    <div
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{
                            backgroundImage: "url('/assets/lanyard/nodes.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center-bottom',
                            backgroundRepeat: 'no-repeat',
                            // opacity: 0.5
                        }}
                    />

                    <div className="absolute inset-0 z-10 pointer-events-auto">
                        <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} transparent={true} />
                    </div>
                </div>

                {/* Helmet Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {team.map((helmet) => (
                        <motion.div
                            key={helmet.id}
                            onClick={() => toggleActiveMember(helmet.id)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (helmet.id % 5) * 0.1 }}
                            className={`helmet-card group relative aspect-[4/5] bg-zinc-100 border border-black overflow-hidden ${activeMemberId === helmet.id ? 'mobile-active' : ''}`}
                        >
                            {/* Normal Image */}
                            <img
                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out lg:group-hover:opacity-0 ${activeMemberId === helmet.id ? 'opacity-0' : 'opacity-100'}`}
                                src={helmet.img}
                                alt={helmet.title}
                            />
                            {/* Hover Image */}
                            <img
                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-110 ${activeMemberId === helmet.id ? 'opacity-100 scale-100' : ''}`}
                                src={helmet.hoverImg || helmet.img}
                                alt={helmet.title + " hover"}
                            />
                            {/* Notch Label (Visible Always) */}
                            <div className="absolute bottom-0 right-0 w-[140px] h-[40px] flex items-center justify-center px-4 z-30">
                                <p className="font-['Bungee'] text-[11px] font-bold text-zinc-900 tracking-[0.02em] whitespace-nowrap">
                                    <span className="capitalize">{helmet.title.toLowerCase()}</span> <span className="text-zinc-400 ml-1">{helmet.year}</span>
                                </p>
                            </div>

                            {/* Gradient Overlay and Member Info */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pl-1 transition-all duration-500 ease-in-out ${activeMemberId === helmet.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0'} pointer-events-none z-20`}>
                                <div className="">
                                    <p className="bungee-regular text-[15px] w-[50%] font-bold text-[#FF2D2D] tracking-[0.1em]">{helmet.role}</p>
                                    <p className="bungee-regular text-[18px] font-bold text-white tracking-[0.1em] uppercase leading-tight">{helmet.name}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
}
