import { useEffect, useRef, useState } from 'react';
import { CiPlay1, CiStop1 } from "react-icons/ci";
import v3 from "../../assets/videos/shark.mp4";
import v1 from "../../assets/videos/binary.jpg";
import v2 from "../../assets/videos/sih.jpg";

const awards = [
    {
        title: "Binary Brains",
        description: "Founded & hosted many techincal events under the club",
        date: "2022",
        video: v1
    },
    {
        title: "SIH 2023",
        description: "Got Selected for SIH State Level Hackathon",
        date: "2023",
        video: v2
    },
    {
        title: "Shark Tank",
        description: "Developed Website funded and appreciated on Shark Tank India",
        date: "2024",
        video: v3
    },
];

const Awards = () => {
    const videoRefs = useRef([]);
    const [playingIdx, setPlayingIdx] = useState(null);

    const handleMouseEnterv = (index) => {
        if (window.innerWidth < 768) return;
        document.body.classList.add('cursor-hoverv');
        const video = videoRefs.current[index];
        if (video) {
            video.currentTime = 0;
            video.play();
        }
    };

    const handleMouseLeavev = (index) => {
        if (window.innerWidth < 768) return;
        document.body.classList.remove('cursor-hoverv');
        const video = videoRefs.current[index];
        if (video) {
            video.pause();
        }
    };

    const handleStopMobile = (idx) => {
        setPlayingIdx(null);
        videoRefs.current.forEach((video, i) => {
            if (video) video.pause();
        });
    };
    const handlePlayMobile = (idx) => {
        setPlayingIdx(idx);
        videoRefs.current.forEach((video, i) => {
            if (video) {
                if (i === idx) {
                    video.currentTime = 0;
                    video.play();
                } else {
                    video.pause();
                }
            }
        });
    };

    // Pause all videos when unmounting or leaving section
    useEffect(() => {
        return () => {
            videoRefs.current.forEach(video => video && video.pause());
        };
    }, []);

    // Pause other videos if playingIdx changes
    useEffect(() => {
        if (playingIdx === null) {
            videoRefs.current.forEach(video => video && video.pause());
        }
    }, [playingIdx]);

    return (
        <section className="w-full px-2 md:px-10 2xl:px-32">
            <div className="flex flex-col md:flex-row md:items-start gap-12">
                {/* Left Heading */}
                <div className="md:w-1/4 mb-8 md:mb-0 flex-shrink-0">
                    <h2 className="text-white text-4xl md:text-6xl font-gm tracking-tight mb-4">
                        Accolades & <span className='text-[#2FA4FF]'>Awards</span>
                    </h2>
                    <p className="text-[#9D9D9D] text-base font-gr mt-4">
                        Recognized for excellence in design, development, and innovation.
                    </p>
                </div>
                {/* Awards Cards */}
                <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {awards.map((award, idx) => {
                        const isImage = award.video.endsWith('.jpg') || award.video.endsWith('.png') || award.video.endsWith('.jpeg') || award.video.endsWith('.webp');
                        return (
                            <div
                                key={idx}
                                onMouseEnter={() => handleMouseEnterv(idx)}
                                onMouseLeave={() => handleMouseLeavev(idx)}
                                className="relative bg-[#111] border border-[#222] rounded-3xl p-0 flex flex-col items-start shadow-xl hover:scale-[1.03] transition-transform duration-300 group min-h-[320px] overflow-hidden"
                            >
                                {/* Media */}
                                {isImage ? (
                                    <img
                                        src={award.video}
                                        alt={award.title}
                                        className={`absolute w-full h-full object-cover transition-opacity duration-700 z-0
            ${window.innerWidth < 768
                                                ? (playingIdx === idx ? 'opacity-100' : 'opacity-0')
                                                : 'opacity-0 group-hover:opacity-100'}
        `}
                                    />
                                ) : (
                                    <video
                                        ref={el => (videoRefs.current[idx] = el)}
                                        src={award.video}
                                        className={`absolute w-full h-full object-cover transition-opacity duration-700 z-0
            ${window.innerWidth < 768
                                                ? (playingIdx === idx ? 'opacity-100' : 'opacity-0')
                                                : 'opacity-0 group-hover:opacity-100'}
        `}
                                        muted
                                        loop
                                        playsInline
                                    />
                                )}
                                {/* Play/Stop for mobile */}
                                {!isImage && window.innerWidth < 768 && (
                                    playingIdx !== idx ? (
                                        <button
                                            className="absolute top-3 right-3 z-20 bg-black/60 text-white rounded-full p-2 flex items-center justify-center"
                                            onClick={() => handlePlayMobile(idx)}
                                            style={{ border: 'none' }}
                                        >
                                            <CiPlay1 />
                                        </button>
                                    ) : (
                                        <button
                                            className="absolute top-3 right-3 z-20 bg-black/60 text-white rounded-full p-2 flex items-center justify-center"
                                            onClick={() => handleStopMobile(idx)}
                                            style={{ border: 'none' }}
                                        >
                                            <CiStop1 />
                                        </button>
                                    )
                                )}
                                {/* Content */}
                                <div className="relative z-10 flex flex-col justify-end h-full w-full p-8">
                                    <h3 className="font-gb text-xl md:text-2xl text-white mb-2">{award.title}</h3>
                                    <p className="text-[#b0b0b0] text-sm md:text-base font-gr mb-4">{award.description}</p>
                                    <span className="text-xs text-[#2FA4FF] font-gr">{award.date}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Awards