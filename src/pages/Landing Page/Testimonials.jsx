import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

const reviews = [
  {
    name: "Sanjay Verma",
    role: "Team Lead",
    quote: "Khushi brings creative energy, technical brilliance, and team-first mindset to every project.",
    date: "12 Jan, 2024",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Aarya R.",
    role: "UI/UX Designer",
    quote: "Her ability to blend UI finesse with complex logic is rare. Highly recommended!",
    date: "03 Feb, 2025",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  // Add more testimonials as needed
];

const star = (
  <svg width="16" height="16" fill="#2FA4FF" viewBox="0 0 20 20">
    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
  </svg>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);

  // Handle scroll on the vertical slider
  const handleSliderChange = (e) => {
    setCurrent(Number(e.target.value));
    // Optionally, scroll the left list into view
    const reviewerBtn = document.getElementById(`reviewer-btn-${e.target.value}`);
    if (reviewerBtn) reviewerBtn.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  return (
    <section className="w-full px-2 md:px-10 2xl:px-32 md:flex justify-between" id="testimonials">
      <div className="flex-shrink-0 md:mb-0 flex flex-col items-start">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-white text-4xl md:text-6xl font-gm tracking-tight mb-6 leading-tight">
            Testimonials
          </h2>
        </div>
      </div>
      <div className="rounded-3xl p-0 bg-[#111] border border-[#222] shadow-xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
        {/* Left: Reviewer List */}
        <div className="md:w-1/3 bg-[#181818] flex flex-col items-start py-10 px-6 gap-6 min-w-[260px]">
          <div className="flex flex-col gap-4 w-full">
            {reviews.map((review, idx) => (
              <button
                key={idx}
                id={`reviewer-btn-${idx}`}
                onClick={() => setCurrent(idx)}
                className={`flex items-center gap-3 w-full text-left rounded-xl px-2 py-2 transition 
                  ${current === idx ? "bg-[#222]" : "hover:bg-[#222]/60"}`}
              >
                <img
                  src={review.avatar}
                  alt={review.name}
                  className={`w-12 h-12 rounded-full object-cover border-2 ${current === idx ? "border-[#2FA4FF]" : "border-[#333]"}`}
                />
                <div>
                  <div className={`font-bold font-gr ${current === idx ? "text-white" : "text-[#b0b0b0]"}`}>{review.name}</div>
                  <div className="text-xs text-[#2FA4FF] flex items-center gap-1">
                    {star}
                    <span className="ml-1 font-gr">{review.rating}.0</span>
                    <span className="ml-2 text-[#888] font-gr">{review.date}</span>
                  </div>
                  <div className="text-xs font-gr text-[#888]">{review.role}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
        {/* Right: Testimonial */}
        <div className="md:w-2/3 flex flex-row items-center px-8 py-12 gap-6 relative min-h-[260px]">
          <div className="flex-grow flex flex-col justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <blockquote className="text-[#b0b0b0] text-lg md:text-2xl font-gb italic leading-relaxed mb-6">
                  <span className="text-5xl text-[#2FA4FF] font-gb mr-2 leading-0 align-top">“</span>
                  {reviews[current].quote}
                </blockquote>
                <div className="flex items-center gap-3">
                  <img
                    src={reviews[current].avatar}
                    alt={reviews[current].name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#2FA4FF]"
                  />
                  <div>
                    <div className="text-white font-gr font-bold">{reviews[current].name}</div>
                    <div className="text-xs font-gr text-[#2FA4FF]">{reviews[current].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider at the end */}
          <div className="h-full flex justify-center items-center">
            <input
              ref={sliderRef}
              type="range"
              min={0}
              max={reviews.length - 1}
              value={current}
              onChange={handleSliderChange}
              className="h-40 w-[4px] accent-[#2FA4FF] cursor-pointer"
              style={{
                writingMode: "bt-lr",
                WebkitAppearance: "slider-vertical",
                background: "transparent",
              }}
              aria-label="Scroll testimonials"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;