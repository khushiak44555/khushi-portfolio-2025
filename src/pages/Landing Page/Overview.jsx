
const Overview = () => {
    const handleMouseEnter = () => {
        document.body.classList.add('cursor-hover')
    }

    const handleMouseLeave = () => {
        document.body.classList.remove('cursor-hover')
    }

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/khushi3704/', '_blank')
    }

    return (
        <section className="w-full px-2 md:px-10 2xl:px-32">
            <div className="flex flex-col md:flex-row items-start gap-12">
                {/* Left: Headline */}
                <div className="md:w-1/3 flex-shrink-0 mb-8 md:mb-0">
                    <h2 className="text-white text-4xl md:text-6xl font-gm tracking-tight mb-6 leading-tight">
                        Every.<br />Pixel.<br />Matters.
                    </h2>
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="flex items-center gap-2 mt-4"
                    >
                        <div className="w-2 h-2 border border-[#2FA4FF] rounded-full"></div>
                        <span
                            onClick={handleLinkedInClick}
                            className="font-gr text-[#2FA4FF] cursor-pointer hover:text-white text-xs hover:underline transition"
                        >
                            Connect on LinkedIn
                        </span>
                    </div>
                </div>
                {/* Divider */}
                <div className="hidden md:block w-px bg-[#222] h-56 mt-2"></div>
                {/* Right: Description */}
                <div className="md:w-2/3 flex flex-col gap-6">
                    <p className="font-gm text-[#b0b0b0] text-base md:text-lg leading-relaxed">
                        Design isn’t just about how things look — it’s about how they work. I craft seamless, user-focused experiences backed by insight, intention, and clean, scalable code. Every pixel I place and every line I write serves a purpose: to solve real-world problems and create meaningful digital interactions.
                    </p>
                    <p className="font-gm text-[#b0b0b0] text-base md:text-lg leading-relaxed">
                        From wireframes to deployed web apps, I approach every project with a detail-obsessed mindset and a drive to build interfaces that not only look stunning but perform flawlessly. Design is the bridge between culture and technology, and code is the vehicle that brings it to life.
                    </p>
                    <p className="font-gm text-[#b0b0b0] text-base md:text-lg leading-relaxed">
                        Whether I’m sketching user journeys, coding dynamic UIs, or optimizing backend architecture, I thrive on turning complexity into clarity — and ideas into products that connect.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Overview