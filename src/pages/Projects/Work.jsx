import { motion } from 'framer-motion';
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Landing Page/Footer';
import Navbar from '../Landing Page/Navbar';
import ReachOutDrawer from '../Landing Page/ReachOutDrawer';

const webProjects = [
    {
        id: 1,
        title: "Corvaya",
        description: "A CLI-based personal finance manager developed in C with search and backup features.",
        year: "2022",
        image: "/corvaya.png",
        link: "/work/corvaya",
        tags: ["C Language", "CLI", "File Handling"]
    },
    {
        id: 2,
        title: "Local Hunagama",
        description: "A local marketplace CLI simulation tool built in C for managing buyers and sellers.",
        year: "2022",
        image: "/localhumagama.png",
        link: "/work/local-hunagama",
        tags: ["C Language", "Console App", "Market Simulation"]
    },
    {
        id: 3,
        title: "Contact Book System",
        description: "A terminal-based address book system allowing CRUD operations for contact data.",
        year: "2022",
        image: "/Contact book.png",
        link: "/work/contact-book",
        tags: ["C Language", "Console App", "CRUD"]
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "A personal developer portfolio showcasing skills, projects, and animations.",
        year: "2023",
        image: "/portfolio.png",
        link: "/work/portfolio",
        tags: ["React", "Framer Motion", "GSAP", "Responsive"]
    },
    {
        id: 5,
        title: "micumplemagico",
        description: "An event-themed website designed for magical birthday celebration experiences.",
        year: "2023",
        image: "/magic_cumple.png",
        link: "/work/micumplemagico",
        tags: ["React", "Design", "Event Website"]
    },
    {
        id: 9,
        title: "Exclusive (E-Commerce)",
        description: "An interactive and responsive e-commerce website for showcasing products.",
        year: "2024",
        image: "/Ecom.png",
        link: "/work/exclusive",
        tags: ["Tailwind CSS", "Frontend", "E-commerce"]
    }
];


const mlProjects = [
    {
        id: 1,
        title: "Facial Recognition Attendance System",
        description: "An interactive and responsive attendance system using python.",
        year: "2025",
        image: "/Ecom.png",
        link: "/work/exclusive",
        tags: ["Tailwind CSS", "Frontend", "Python", "Machine Learning"]
    },
    {
        id: 2,
        title: "Longitude and Latitude Detection & Shop Locator",
        description: "A creative platform for students to put in latitude and longitude and find nearby shops.",
        year: "2024",
        image: "/Ecom.png",
        link: "/work/exclusive",
        tags: ["Tailwind CSS", "Frontend", "Python", "Django"]
    },
    {
        id: 3,
        title: "Cancer Detection (EpiScan)",
        description: "Machine learning model for early cancer detection using data modeling techniques.",
        year: "2024",
        image: "/Skio Sio.png",
        link: "/work/episcan",
        tags: ["Machine Learning", "Data Modeling", "Python", "AI"]
    },
    {
        id: 4,
        title: "Medical Record System",
        description: "A Java-based system for secure patient record management and access.",
        year: "2023",
        image: "/java.jpg",
        link: "/work/medical-record",
        tags: ["Java", "OOP", "File Handling"]
    }
];

const Work = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const heroTitleRef = useRef(null);
    const heroSubtitleRef = useRef(null);
    const projectsRef = useRef(null);
    const scrollRef = useRef(null);

    const [activeTab, setActiveTab] = useState('web'); // 'web' or 'ml'

    const handleMouseEnter = () => {
        document.body.classList.add('cursor-hover');
    };

    const handleMouseLeave = () => {
        document.body.classList.remove('cursor-hover');
    };

    useEffect(() => {
        // Locomotive Scroll initialization
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.08,
            multiplier: 1,
            class: 'is-reveal'
        });

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    useEffect(() => {
        // Initial animations
        gsap.fromTo(
            heroTitleRef.current,
            { opacity: 0, y: 80, filter: "blur(16px)", scale: 0.95 },
            { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 1.2, ease: "power3.out" }
        );
        gsap.fromTo(
            heroSubtitleRef.current,
            { opacity: 0, y: 80, filter: "blur(16px)", scale: 0.95 },
            { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 1.2, delay: 0.2, ease: "power3.out" }
        );
        gsap.fromTo(
            projectsRef.current.children,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.5
            }
        );
    }, []);

    return (
        <div>
            <Navbar onReachOutClick={() => setDrawerOpen(true)} isSticky={true} />
            <ReachOutDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
            <div ref={scrollRef}
                data-scroll-container
                className="w-full bg-[#0A0A0A] min-h-screen text-white relative">
                {/* Background Video */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-[90vh] object-cover z-0"
                >
                    <source src="/400.mp4" type="video/mp4" />
                </video>

                {/* Overlay for better text readability */}
                <div className="absolute top-0 left-0 w-full h-screen bg-[#0A0A0A]/60 z-0"></div>
                <div className="relative z-10 flex flex-col items-center pt-[120px] pb-20">
                    {/* Hero Section */}
                    <div className="w-full max-w-5xl mx-auto flex flex-col gap-6 items-center">
                        <h3
                            ref={heroTitleRef}
                            className="font-gb text-base md:text-lg text-[#2FA4FF] tracking-widest uppercase opacity-0"
                        >
                            Selected Work
                            <span className="text-[#9D9D9D] text-xs font-gr pl-5">
                                2023 — Present
                            </span>
                        </h3>
                        <h2
                            ref={heroSubtitleRef}
                            className="text-3xl md:text-5xl xl:text-6xl leading-tight font-gm opacity-0 max-w-3xl text-center"
                        >
                            A curated showcase of my latest projects and collaborations
                        </h2>
                        <div className="flex gap-4 mt-6">
                            <button
                                onClick={() => setActiveTab('web')}
                                className={`px-6 py-2 rounded-full font-gb text-sm transition-all duration-300 ${activeTab === 'web'
                                    ? 'bg-[#2FA4FF] text-black shadow-lg'
                                    : 'bg-transparent border border-[#333] text-[#9D9D9D] hover:border-[#2FA4FF] hover:text-[#2FA4FF]'
                                    }`}
                            >
                                Web Development
                            </button>
                            <button
                                onClick={() => setActiveTab('ml')}
                                className={`px-6 py-2 rounded-full font-gb text-sm transition-all duration-300 ${activeTab === 'ml'
                                    ? 'bg-[#2FA4FF] text-black shadow-lg'
                                    : 'bg-transparent border border-[#333] text-[#9D9D9D] hover:border-[#2FA4FF] hover:text-[#2FA4FF]'
                                    }`}
                            >
                                Machine Learning
                            </button>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div
                        ref={projectsRef}
                        className={`w-full max-w-[90%] md:max-w-[80%] grid gap-10 mt-16
        grid-cols-1 
        ${((activeTab === 'ml' ? mlProjects : webProjects).length < 3)
                                ? 'md:grid-cols-2 justify-center'
                                : 'md:grid-cols-2'}
    `}
                    >
                        {(activeTab === 'web' ? webProjects : mlProjects).map((project) => (
                            <Link
                                key={project.id}
                                to={project.link}
                                className="group relative overflow-hidden rounded-2xl bg-[#181818] hover:bg-[#222] border border-[#222] shadow-xl transition-all duration-500 flex flex-col"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <motion.div
                                    className="p-6 flex flex-col h-full"
                                    whileHover={{ y: -6 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="aspect-video rounded-lg overflow-hidden mb-4 border border-[#222]">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex flex-col flex-grow">
                                        <h4 className="text-2xl md:text-3xl font-gm mb-2 text-white">{project.title}</h4>
                                        <p className="text-[#b0b0b0] text-sm mb-4">{project.description}</p>
                                        <div className="flex gap-2 flex-wrap mb-2">
                                            {project.tags.map((tag, index) => (
                                                <span key={index} className="text-xs px-3 py-1 rounded-full border border-[#333] text-[#9D9D9D] bg-[#181818]">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <span className="text-xs text-[#888] mt-auto">{project.year}</span>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="px-4 md:px-25">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Work;