import i1 from "../../assets/images/tools/ic1 (1).png"
import i11 from "../../assets/images/tools/ic1 (11).png"
import i14 from "../../assets/images/tools/ic1 (14).png"
import i15 from "../../assets/images/tools/ic1 (15).png"
import i16 from "../../assets/images/tools/ic1 (16).png"
import i17 from "../../assets/images/tools/ic1 (17).png"
import i18 from "../../assets/images/tools/ic1 (18).png"
import i19 from "../../assets/images/tools/ic1 (19).png"
import i22 from "../../assets/images/tools/ic1 (22).png"
import i23 from "../../assets/images/tools/ic1 (23).png"
import i24 from "../../assets/images/tools/ic1 (24).png"
import i25 from "../../assets/images/tools/ic1 (25).png"
import i26 from "../../assets/images/tools/ic1 (26).png"
import i27 from "../../assets/images/tools/ic1 (27).png"
import i28 from "../../assets/images/tools/ic1 (28).png"
import i29 from "../../assets/images/tools/ic1 (29).png"
import i3 from "../../assets/images/tools/ic1 (3).png"
import i31 from "../../assets/images/tools/ic1 (31).png"
import i32 from "../../assets/images/tools/ic1 (32).png"
import i34 from "../../assets/images/tools/ic1 (34).png"
import i35 from "../../assets/images/tools/ic1 (35).png"
import i5 from "../../assets/images/tools/ic1 (5).png"
import i6 from "../../assets/images/tools/ic1 (6).png"
import i8 from "../../assets/images/tools/ic1 (8).png"
import i9 from "../../assets/images/tools/ic1 (9).png"

const expertiseGroups = [
  {
    title: "Frontend",
    description: "Modern UI frameworks and web technologies for seamless user experiences.",
    icon: i26,
    tools: ["React.js", "HTML", "CSS", "JavaScript", "TailwindCSS", "Vercel"]
  },
  {
    title: "Backend",
    description: "Robust server-side logic, APIs, and authentication.",
    icon: i25,
    tools: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "JWT", "OAuth", "Firebase"]
  },
  {
    title: "Cloud & DevOps",
    description: "Deploy, scale, and secure apps with modern cloud platforms.",
    icon: i17,
    tools: ["AWS", "Azure", "Google Cloud", "Cloudflare", "Render"]
  },
  {
    title: "Data & AI",
    description: "Data science, analytics, and machine learning for smart solutions.",
    icon: i34,
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "scikit-learn", "Tensorflow", "Keras", "PowerBI"]
  }
];

const toolIcons = {
  "React.js": i26, "HTML": i28, "CSS": i29, "JavaScript": i1, "TailwindCSS": i14, "Vercel": i14,
  "Node.js": i23, "Express.js": i25, "MongoDB": i24, "PostgreSQL": i6, "JWT": i11, "OAuth": i15, "Firebase": i3,
  "AWS": i17, "Azure": i18, "Google Cloud": i22, "Cloudflare": i19, "Render": i9,
  "Python": i8, "Pandas": i34, "NumPy": i5, "Matplotlib": i16, "scikit-learn": i32, "Tensorflow": i35, "Keras": i27, "PowerBI": i31
};

const Expertise = () => {
  return (
    <section className="w-full h-auto rounded-4xl px-2 md:px-10 2xl:px-32">
      <h2 className="text-white text-4xl md:text-6xl font-gm mb-12 tracking-tight">
        My <span className="text-[#2FA4FF]">Expertise</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {expertiseGroups.map((group, idx) => (
          <div
            key={group.title}
            className={`rounded-3xl p-8 bg-[#111] border border-[#222] flex flex-col justify-between shadow-xl hover:scale-[1.03] transition-transform duration-300 group`}
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img src={group.icon} alt={group.title} className="w-12 h-12 object-contain" />
                <h3 className="text-2xl font-gb text-white">{group.title}</h3>
              </div>
              <p className="text-[#b0b0b0] text-base mb-6">{group.description}</p>
              <div className="flex flex-wrap gap-3">
                {group.tools.map(tool => (
                  <div key={tool} className="flex items-center gap-2 bg-[#181818] px-3 py-1 rounded-full text-white text-xs font-gr border border-[#222]">
                    {toolIcons[tool] && (
                      <img src={toolIcons[tool]} alt={tool} className="w-5 h-5 object-contain" />
                    )}
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-col md:flex-row items-center gap-4">
        <span className="text-xs text-[#9D9D9D] font-gr">*Currently studying & experimenting</span>
        <a
          href="https://www.linkedin.com/in/khushi3704/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-0 md:ml-6 text-xs text-[#2FA4FF] font-gr underline hover:text-white transition"
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Expertise;