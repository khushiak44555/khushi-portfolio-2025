import React, { useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SmoothScrollProvider from '../../SmoothScrollProvider';
import Navbar from '../Landing Page/Navbar';
import Footer from '../Landing Page/Footer';
import ReachOutDrawer from '../Landing Page/ReachOutDrawer';
import WorkShowcase from '../Landing Page/WorkShowcase';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
const projectsData = [
    // Web Projects
    {
        id: "corvaya",
        title: "Corvaya",
        description: "A CLI-based personal finance manager developed in C with search and backup features.",
        year: "2022",
        image: "/corvaya.png",
        tags: ["C Language", "CLI", "File Handling"],
        type: "web",
        content: (
            <>
                <p>
                    <b>About:</b> Corvaya is a command-line tool for managing personal finances, supporting expense tracking, data search, and backup.
                </p>
                <ul className="list-disc ml-6 mt-4 text-[#9D9D9D]">
                    <li>Written in C using file handling techniques</li>
                    <li>Simple CLI with easy-to-use commands</li>
                    <li>Backup and restore capabilities</li>
                </ul>
            </>
        )
    },
    {
        id: "local-hunagama",
        title: "Local Hunagama",
        description: "A local marketplace CLI simulation tool built in C for managing buyers and sellers.",
        year: "2022",
        image: "/localhumagama.png",
        tags: ["C Language", "Console App", "Market Simulation"],
        type: "web",
        content: (
            <>
                <p>
                    <b>About:</b> Local Hunagama simulates a basic marketplace environment using CLI, allowing buying and selling interactions between users.
                </p>
                <ul className="list-disc ml-6 mt-4 text-[#9D9D9D]">
                    <li>Console-based user experience</li>
                    <li>CRUD operations for buyers and sellers</li>
                    <li>File storage for persistent data</li>
                </ul>
            </>
        )
    },
    {
        id: "portfolio",
        title: "Portfolio Website",
        description: "A personal developer portfolio showcasing skills, projects, and animations.",
        year: "2023",
        image: "/portfolio.png",
        tags: ["React", "Framer Motion", "GSAP", "Responsive"],
        type: "web",
        content: (
            <>
                <p>
                    <b>About:</b> A sleek developer portfolio to present personal and academic projects using rich animations and responsive design.
                </p>
                <ul className="list-disc ml-6 mt-4 text-[#9D9D9D]">
                    <li>Uses Framer Motion and GSAP for animations</li>
                    <li>Responsive layout for all devices</li>
                    <li>Built with React</li>
                </ul>
            </>
        )
    },
    {
        id: "micumplemagico",
        title: "micumplemagico",
        description: "An event-themed website designed for magical birthday celebration experiences.",
        year: "2023",
        image: "/magic_cumple.png",
        tags: ["React", "Design", "Event Website"],
        type: "web",
        content: (
            <>
                <p>
                    <b>About:</b> A vibrant, fun website to promote magical birthday experiences for children and families.
                </p>
                <ul className="list-disc ml-6 mt-4 text-[#9D9D9D]">
                    <li>Whimsical and interactive design</li>
                    <li>Built with React and styled components</li>
                    <li>Optimized for event showcasing</li>
                </ul>
            </>
        )
    },

    {
        id: "exclusive-ecommerce",
        title: "Exclusive (E-Commerce)",
        description: "An interactive and responsive e-commerce website for showcasing products.",
        year: "2024",
        image: "/Ecom.png",
        tags: ["Tailwind CSS", "Frontend", "E-commerce"],
        type: "web",
        content: (
            <>
                <p>
                    <b>About:</b> A stylish e-commerce site for product browsing and shopping experience with a modern UI.
                </p>
                <ul className="list-disc ml-6 mt-4 text-[#9D9D9D]">
                    <li>Responsive layout using Tailwind CSS</li>
                    <li>Homepage, product detail, and cart features</li>
                    <li>Optimized for performance and SEO</li>
                </ul>
            </>
        )
    },

    // ML Projects
    {
        id: "facial-attendance",
        title: "Facial Recognition Attendance System",
        description: "An interactive and responsive attendance system using facial recognition.",
        year: "2025",
        image: "/Ecom.png",
        tags: ["Python", "OpenCV", "Face Recognition", "Tkinter"],
        type: "ai",
        content: (
            <>
                <p>
                    <b>About:</b> This project uses facial recognition technology to automate student attendance marking, enhancing accuracy and saving time.
                </p>
                <ul className="list-disc ml-6 mt-4 text-[#9D9D9D]">
                    <li>Implemented using Python, OpenCV, and face-recognition libraries</li>
                    <li>GUI built with Tkinter for easy user interaction</li>
                    <li>Attendance data stored in a CSV file for backend processing</li>
                </ul>
            </>
        )
    },
    {
        id: "shop-locator",
        title: "Longitude and Latitude Detection & Shop Locator",
        description: "A location-based web tool that helps users find shops near specific coordinates.",
        year: "2024",
        image: "/Ecom.png",
        tags: ["Django", "Geolocation", "HTML/CSS", "Python"],
        type: "web",
        content: (
            <>
                <p>
                    <b>About:</b> This web application allows users to input geographical coordinates to discover shops in their vicinity.
                </p>
                <ul className="list-disc ml-6 mt-4 text-[#9D9D9D]">
                    <li>Developed using Django and integrated Google Maps API</li>
                    <li>Database of registered shop locations with filtering logic</li>
                    <li>User-friendly frontend built with HTML, CSS, and basic JS</li>
                </ul>
            </>
        )
    },

    {
        id: "episcan",
        title: "Cancer Detection (EpiScan)",
        description: "Machine learning model for early cancer detection using data modeling techniques.",
        year: "2024",
        image: "/Skio Sio.png",
        tags: ["Machine Learning", "Data Modeling", "Python", "AI"],
        type: "ml",
        content: (
            <>
                <p>
                    <b>About:</b> EpiScan leverages ML to predict early-stage cancer symptoms from medical datasets with high accuracy.
                </p>
                <ul className="list-disc ml-6 mt-4 text-[#9D9D9D]">
                    <li>Built using Python and scikit-learn</li>
                    <li>Feature selection and data cleaning</li>
                    <li>Achieved 94% prediction accuracy</li>
                </ul>
            </>
        )
    },
    {
        id: "medical-record",
        title: "Medical Record System",
        description: "A Java-based system for secure patient record management and access.",
        year: "2023",
        image: "/java.jpg",
        tags: ["Java", "OOP", "File Handling"],
        type: "ml",
        content: (
            <>
                <p>
                    <b>About:</b> A secure desktop system for managing medical records, offering audit logs and encryption features.
                </p>
                <ul className="list-disc ml-6 mt-4 text-[#9D9D9D]">
                    <li>Java Swing interface</li>
                    <li>Role-based access and file protection</li>
                    <li>Efficient data handling and retrieval</li>
                </ul>
            </>
        )
    }
];

const WorkDetail = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.08,
            multiplier: 1,
            class: 'is-reveal',
        });

        setTimeout(() => {
            scroll.update();
        }, 1000); // Adjust timing if needed

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);


    // Find the project by id
    const project = projectsData.find(p => p.id === id);

    if (!project) {
        return (
            <>
                <Navbar onReachOutClick={() => setDrawerOpen(true)} />
                <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] text-white">
                    <div className="text-center">
                        <h1 className="text-3xl font-gb mb-4">Project Not Found</h1>
                        <button
                            onClick={() => navigate('/work')}
                            className="mt-4 px-6 py-2 rounded-full bg-white text-black font-gb"
                        >
                            Back to Work
                        </button>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <div className="bg-[#0A0A0A] w-full h-full">
            <ReachOutDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
            <Navbar onReachOutClick={() => setDrawerOpen(true)} isSticky={true} />
            <div ref={scrollRef}
                data-scroll-container
                className="min-h-screen h-full bg-[#0A0A0A] text-white relative">
                {/* Hero Section */}
                <section className="relative w-full h-[60vh] md:h-[80vh] flex items-end overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-b-3xl"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-10"></div>
                    {/* Hero Content */}
                    <div className="absolute inset-0 flex items-end z-20">
                        <div className="w-[90vw] md:w-[70vw] mx-auto pb-10">
                            <h1 className="text-4xl md:text-6xl font-gm mb-2">{project.title}</h1>
                            <p className="text-lg md:text-2xl text-[#9D9D9D] mb-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="text-xs px-3 py-1 rounded-full border border-[#333] text-[#9D9D9D] bg-[#181818]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <span className="text-sm text-[#9D9D9D]">{project.year}</span>
                        </div>
                    </div>
                </section>

                {/* Project Content */}
                <section className="w-[90vw] md:w-[70vw] mx-auto py-16 md:py-24">
                    <div className="prose prose-invert max-w-none text-white text-lg leading-relaxed">
                        {project.content}
                    </div>
                    <button
                        onClick={() => navigate('/work')}
                        className="mt-12 px-8 py-3 rounded-full bg-white text-black font-gb hover:bg-[#222] hover:text-white transition"
                    >
                        ← Back to Work
                    </button>
                </section>
                <section className="w-[90vw] md:w-[70vw] mx-auto pb-16 md:pb-24">
                    <div className="md:flex justify-center space-y-6 md:space-y-0 items-center gap-10 ">
                        <div className="md:w-1/2">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover rounded-3xl"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover rounded-3xl"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-[90vw] md:w-[70vw] mx-auto pb-16 md:pb-24">
                    <h3 className='text-4xl'>{project.description}</h3>
                </section>
                <section className="w-[90vw] md:w-[70vw] mx-auto pb-16 md:pb-24">
                    <div className="flex justify-center items-center gap-10 ">
                        <div className="w-full">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full rounded-3xl object-cover z-0 brightness-75"
                            >
                                <source src="/700.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </section>
                <div className="px-4 md:px-25">
                    <div className="w-full h-[1px] bg-[#9D9D9D]"></div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default WorkDetail;