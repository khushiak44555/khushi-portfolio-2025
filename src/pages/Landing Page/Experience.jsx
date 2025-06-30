import { MdOutlineFileDownload } from "react-icons/md"
import i1 from "../../assets/images/expertise/i1 (1).png"
import i2 from "../../assets/images/expertise/i1 (2).png"
import i3 from "../../assets/images/expertise/i1 (3).jpeg"
import i4 from "../../assets/images/expertise/i1 (4).png"
import i5 from "../../assets/images/expertise/i1 (5).png"
import i6 from "../../assets/images/expertise/i1 (6).png"
import i7 from "../../assets/images/expertise/i1 (7).png"

const experiences = [
  {
    image: i2,
    title: "Associate UI/UX Designer",
    company: "TechTech, Pune, India",
    duration: "Jan 2025 - Present"
  },
  {
    image: i5,
    title: "Co-Founder & Full stack developer",
    company: "Corvaya, Pune, India",
    duration: "Feb 2025 - Present"
  },
  {
    image: i6,
    title: "Full Stack Developer Intern",
    company: "Doggle India, Jaipur, India",
    duration: "Oct 2024 - Jan 2025"
  },
  {
    image: i3,
    title: "Software Engineer Intern",
    company: "Artiset",
    duration: "June 2024 - Sept 2024"
  },
  {
    image: i1,
    title: "Software Development Engineer Intern",
    company: "Code Inbound, New Delhi, India",
    duration: "Jan 2024 - June 2024"
  },
];

const Experience = () => {
  const handleMouseEnter = () => {
    document.body.classList.add('cursor-hover');
  };

  const handleMouseLeave = () => {
    document.body.classList.remove('cursor-hover');
  };

  return (
    <section className="w-full px-2 md:px-10 2xl:px-32">
      <div className="flex flex-col md:flex-row md:items-start gap-12">
        {/* Left Heading */}
        <div className="md:w-1/4 mb-8 md:mb-0 flex-shrink-0">
          <h2 className="text-white text-4xl md:text-6xl font-gm tracking-tight mb-4">
            Experience
          </h2>
          <a
            href="/Khushi Resume 2025 June.pdf"
            download
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-gb text-base shadow-lg hover:bg-[#2FA4FF] hover:text-black transition"
          >
            <MdOutlineFileDownload size={22} />
            <span>Download Resume</span>
          </a>
        </div>
        {/* Experience Cards */}
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#111] border border-[#222] rounded-3xl p-6 flex flex-col items-start shadow-xl hover:scale-[1.03] transition-transform duration-300 group min-h-[150px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={exp.image} alt={exp.title} className="w-12 h-12 object-contain rounded-xl bg-[#181818]" />
                <div>
                  <h3 className="text-lg font-gb text-white">{exp.title}</h3>
                  <p className="text-xs text-[#9D9D9D] font-gr">{exp.company}</p>
                </div>
              </div>
              <div className="mt-auto">
                <span className="text-xs text-[#2FA4FF] font-gr">{exp.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience