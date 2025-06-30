import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const WorkShowcase = () => {
    const navigate = useNavigate();
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
            id: 6,
            title: "Collage Diaries",
            description: "A creative platform for students to build interactive diaries and journals.",
            year: "2024",
            image: "/Collage Diaries.png",
            link: "/work/collage-diaries",
            tags: ["HTML", "CSS", "JavaScript", "Frontend"]
        },
        {
            id: 7,
            title: "Beyond Water",
            description: "A sustainability awareness site focused on clean water initiatives.",
            year: "2024",
            image: "/Beyond.png",
            link: "/work/beyond-water",
            tags: ["React.js", "Frontend", "Awareness"]
        },
        {
            id: 8,
            title: "KhataBook",
            description: "A MERN stack-based ledger app enabling small businesses to manage finances digitally.",
            year: "2024",
            image: "/Khatabook.png",
            link: "/work/khatabook",
            tags: ["MongoDB", "Express", "React", "Node.js", "File Upload"]
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

    return (
        <section className="relative w-full flex flex-col items-center justify-center">
            {/* Section Header */}
            <div className="w-[90%] flex justify-between items-center mb-12">
                <h2 className="text-white text-4xl md:text-6xl font-gm tracking-tight">
                    My <span className="text-[#2FA4FF]">Work</span>
                </h2>
                <div className="text-center">
                    <button
                        onClick={() => navigate('/work')}
                        className="group flex items-center gap-4 px-8 py-3 rounded-full bg-white text-black font-gb hover:bg-[#2FA4FF] transition-all duration-300"
                    >
                        <span>All Projects</span>
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Swiper */}
            <div className="w-[90%]">
                <Swiper
                    modules={[EffectFade, Autoplay, Navigation]}
                    effect="fade"
                    speed={1000}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    navigation
                    loop={true}
                    className="h-[80vh] work-showcase-slider rounded-3xl overflow-hidden"
                >
                    {webProjects.map((project) => (
                        <SwiperSlide key={project.id} className="relative w-full h-full">
                            {/* Background Image with Gradient */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                            </div>

                            {/* Project Content */}
                            <div className="relative z-10 flex items-end h-full">
                                <div className="px-8 md:px-12 pb-12 md:pb-20 max-w-3xl">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-[#181818] px-4 py-1.5 rounded-full text-white text-xs font-gr border border-[#222]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title & Description */}
                                    <h2 className="text-4xl md:text-5xl font-gm text-white mb-4">
                                        {project.title}
                                    </h2>
                                    <p className="text-[#b0b0b0] text-base hidden md:block md:text-lg mb-6">
                                        {project.description}
                                    </p>

                                    {/* Year & CTA */}
                                    <div className="flex items-center gap-6">
                                        <span className="text-[#9D9D9D] font-gr">{project.year}</span>
                                        <a
                                            href={project.link}
                                            className="px-6 py-2 rounded-full bg-[#181818] text-white text-sm font-gb border border-[#222] hover:bg-[#2FA4FF] hover:text-black transition-all duration-300"
                                        >
                                            View Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* See All Projects Button */}

        </section>
    );
};

export default WorkShowcase;