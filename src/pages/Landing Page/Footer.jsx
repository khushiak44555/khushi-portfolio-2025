import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full border-t h-full border-[#222] pt-20 pb-6 px-4 md:px-16 2xl:px-32">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-4">
                {/* Name/Brand */}
                <div className="font-gb text-3xl md:text-7xl 2xl:text-9xl text-white tracking-tight text-center md:text-left">
                    Khushi<span className="text-[#2FA4FF]">Kumar</span>
                </div>
                {/* Socials and copyright */}
                <div className="flex flex-col items-center md:items-end gap-2">
                    <div className="flex gap-4 mb-2">
                        <a href="https://www.instagram.com/kaafi.hasi.khushi?igsh=MWY1aDd0a2p2aXYzaQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#181818] text-white hover:bg-[#2FA4FF] hover:text-black transition-all duration-200 shadow-md">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/khushi3704/" target="_blank" rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#181818] text-white hover:bg-[#2FA4FF] hover:text-black transition-all duration-200 shadow-md">
                            <CiLinkedin size={20} />
                        </a>
                        <a href="https://github.com/khushiak44555" target="_blank" rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#181818] text-white hover:bg-[#2FA4FF] hover:text-black transition-all duration-200 shadow-md">
                            <FaGithub size={20} />
                        </a>
                    </div>
                    <span className="text-[11px] 2xl:text-[13px] font-gr text-[#9D9D9D] text-center md:text-right">
                        © 2025 KhushiKumar All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer