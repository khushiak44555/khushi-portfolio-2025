const Mission = () => (
    <section className="w-full px-2 md:px-10 2xl:px-32" id="mission">
        <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Left: Headline */}
            <div className="md:w-1/3 flex-shrink-0 mb-8 md:mb-0 flex flex-col items-start">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-white text-4xl md:text-6xl font-gm tracking-tight mb-6">
                        My Mission &<br /><span className="text-[#2FA4FF]">Goals</span><br />
                    </h2>        </div>
            </div>
            {/* Divider */}
            <div className="hidden md:block w-px bg-[#222] h-40 mt-2"></div>
            {/* Right: Description */}
            <div className="md:w-2/3 flex flex-col gap-6">
                <p className="font-gm text-[#b0b0b0] text-base md:text-lg leading-relaxed">
                    I strive to craft user-first experiences that are not only fast and functional, but also emotionally resonant.
                </p>
                <p className="font-gm text-[#b0b0b0] text-base md:text-lg leading-relaxed">
                    My mission is to solve real-world problems through clean, scalable, and thoughtful digital design. I believe in the power of technology to create positive change and meaningful connections.
                </p>
                <p className="font-gm text-[#b0b0b0] text-base md:text-lg leading-relaxed">
                    Every project is an opportunity to blend creativity with logic, empathy with engineering, and vision with execution.
                </p>
            </div>
        </div>
    </section>
);

export default Mission;