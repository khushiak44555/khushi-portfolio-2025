import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useEffect, useRef, useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import SectionMenu from '../../SectionMenu';
import Awards from './Awards';
import Education from './Education';
import Experience from './Experience';
import Expertise from './Expertise';
import Footer from './Footer';
import Mission from './Mission';
import Navbar from './Navbar';
import Overview from './Overview';
import ReachOutDrawer from './ReachOutDrawer';
import Testimonials from './Testimonials';
import WorkShowcase from './WorkShowcase';

const Content = () => {
    const navigate = useNavigate();
    const loaderVideoRef = useRef(null);
    const heroVideoRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [hideLoader, setHideLoader] = useState(false);
    const heroTitleRef = useRef(null);
    const heroSubtitleRef = useRef(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showStickyNavbar, setShowStickyNavbar] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // You can adjust this threshold as per your original navbar height
            const scrollY = window.scrollY || window.pageYOffset;
            const threshold = 150; // for example, after 150px scroll show sticky

            if (scrollY > threshold) {
                setShowStickyNavbar(true);
            } else {
                setShowStickyNavbar(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (loading) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [loading]);

    // Loader video logic
    useEffect(() => {
        const timeout = setTimeout(() => {
            setHideLoader(true);
            setTimeout(() => {
                setLoading(false);
            }, 800); // match fade-out duration
        }, 3500);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (loading) {
            gsap.set(".loader-char", { opacity: 0, y: 30, filter: "blur(4px)" });

            gsap.to(".loader-char", {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                stagger: {
                    each: 0.05,
                    from: "start"
                },
                ease: "power2.out",
                duration: 1.2
            });

            // Flicker effect
            gsap.to(".loader-char", {
                opacity: 0.4,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                duration: 0.02,
                delay: 1.5,
                repeatDelay: 0.1,
                stagger: {
                    each: 0.08,
                    from: "random"
                }
            });
        }
    }, [loading]);

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
        if (!loading) {
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
        }
    }, [loading]);

    return (
        <>
            <div className="">
                <AnimatePresence>
                    {loading && (
                        <motion.div
                            key="loader"
                            animate={{ opacity: hideLoader ? 0 : 1 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black w-full h-screen"
                            style={{ willChange: "transform, opacity" }}
                        >
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                ref={loaderVideoRef}
                                className="w-full h-full object-cover absolute"
                            >
                                <source src="/700.mp4" type="video/mp4" />
                            </video>

                            {/* Animated Name Logo */}
                            <div className="relative z-10 text-center">
                                <h1
                                    className="text-white text-6xl leading-10 md:leading-16 md:text-8xl font-gb tracking-tight"
                                    id="loader-name"
                                >
                                    {
                                        "Khushi".split("").map((char, i) => (
                                            <span key={i} className="inline-block loader-char text-white">{char}</span>
                                        ))
                                    }
                                    <br />
                                    {
                                        "Kumar".split("").map((char, i) => (
                                            <span key={i + 10} className="inline-block loader-char text-[#2FA4FF]">{char}</span>
                                        ))
                                    }
                                </h1>
                            </div>

                        </motion.div>

                    )}
                </AnimatePresence>
                <ReachOutDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
                <Navbar onReachOutClick={() => setDrawerOpen(true)} isSticky={true} />
                <div ref={scrollRef}
                    data-scroll-container className="">
                    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-black overflow-hidden">
                        {/* Background Video */}
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            ref={heroVideoRef}
                            className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-75"
                        >
                            <source src="/500.mp4" type="video/mp4" />
                        </video>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-10"></div>

                        {/* Hero Content */}
                        <div className="relative z-20 max-w-7xl h-full px-6 md:px-12 text-center space-y-10">
                            <h3
                                ref={heroTitleRef}
                                className="text-white text-xl md:text-3xl font-gb opacity-0"
                                style={{ filter: "blur(16px)" }}
                            >
                                Get to know me
                                <span className="text-[#9D9D9D] text-xs md:text-sm font-gr block mt-2">Resumé & biography</span>
                            </h3>

                            <h2
                                ref={heroSubtitleRef}
                                className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-gm leading-snug opacity-0"
                                style={{ filter: "blur(16px)" }}
                            >
                                Crafting <span className='text-[#2FA4FF] tracking-wide font-gb italic'>seamless</span> digital experiences<br className="hidden sm:block" />
                                with precision, passion, and purpose.
                                <br />
                                From bold interfaces to fluid <span className='text-[#2FA4FF] font-gb tracking-wide italic'>interactions</span> — <br className="hidden md:block" />
                                every project here speaks for itself.
                            </h2>

                            <div className="flex justify-center pt-6">
                                <button
                                    onClick={() => navigate('/work')}
                                    className="group flex gap-3 items-center cursor-pointer transition-colors px-8 py-3 rounded-full bg-white text-black font-gb hover:bg-[#2FA4FF] hover:text-black shadow-lg"
                                    onMouseEnter={() => document.body.classList.add('cursor-hover')}
                                    onMouseLeave={() => document.body.classList.remove('cursor-hover')}
                                >
                                    <span className="text-sm md:text-base 2xl:text-lg font-gb pl-2 transition-colors duration-300 group-hover:text-black">
                                        View My Work
                                    </span>
                                    <FaArrowRightLong
                                        size={18}
                                        className="transition-all duration-300 ease-in-out group-hover:text-black"
                                    />
                                </button>
                            </div>
                        </div>
                    </section>
                    <main className="w-full mt-20 md:mt-35 flex flex-col items-center">
                        <div className="w-[90vw] md:w-[90vw] flex flex-col space-y-20 2xl:space-y-35 mx-auto">
                            <div id="background"><Overview /></div>
                            <div className="w-full h-[1px] bg-[#222]"></div>
                            <div id="education"><Education /></div>
                            <div className="w-full h-[1px] bg-[#222]"></div>
                            <div id="experience"><Experience /></div>
                            <div className="w-full h-[1px] bg-[#222]"></div>
                            <div id="expertise"><Expertise /></div>
                            <div className="w-full h-[1px] bg-[#222]"></div>
                            <WorkShowcase />
                            <div className="w-full h-[1px] bg-[#222]"></div>
                            <div id="accolades"><Awards /></div>
                            <div className="w-full h-[1px] bg-[#222]"></div>
                            <div id="testimonials"><Testimonials /></div>
                            <div className="w-full h-[1px] bg-[#222]"></div>
                            <div id="mission"><Mission /></div>
                            <Footer />
                        </div>
                    </main>
                    <SectionMenu />
                </div>

            </div>
        </>
    );
};

export default Content;