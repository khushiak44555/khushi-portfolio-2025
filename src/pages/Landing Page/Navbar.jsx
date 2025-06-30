import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onReachOutClick, isSticky }) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => document.body.classList.remove('overflow-hidden');
    }, [isMenuOpen]);

    const menuVariants = {
        closed: { opacity: 0, y: "-100%", transition: { duration: 0.5 } },
        open: { opacity: 1, y: "0%", transition: { duration: 0.5 } }
    };

    return (
        <>
            <header className={`w-full z-[100] flex justify-center items-center border-b border-[#222] ${isSticky ? 'fixed top-0 left-0 bg-black/60 backdrop-blur-xl shadow-md' : 'bg-transparent'}`}>
                <nav className="flex items-center justify-between md:w-[75%] w-[90%] py-5">
                    {/* Logo/Brand */}
                    <div
                        className="text-2xl md:text-3xl font-gb leading-4 md:leading-5 text-white cursor-pointer tracking-tight"
                        onClick={() => navigate('/')}
                    >
                        Khushi<span className="text-[#2FA4FF] "><br />Kumar</span>
                    </div>
                    {/* Desktop Nav */}
                    <div className="hidden md:flex gap-3">
                        <button
                            onClick={() => navigate('/work')}
                            className="px-6 py-2 rounded-3xl font-gb border border-white text-white bg-transparent hover:bg-[#2FA4FF] hover:text-black transition"
                        >
                            Work
                        </button>
                        <button
                            onClick={() => navigate('/')}
                            className="px-6 py-2 rounded-3xl font-gb bg-white text-black border border-white hover:bg-[#2FA4FF] hover:text-black transition"
                        >
                            Background
                        </button>
                        <button
                            onClick={onReachOutClick}
                            className="px-6 py-2 rounded-3xl font-gb border border-white text-white bg-transparent hover:bg-[#2FA4FF] hover:text-black transition"
                        >
                            Reach Out
                        </button>
                    </div>
                    {/* Hamburger/Cross */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block absolute h-0.5 w-7 bg-white rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-5' : 'top-3'}`}></span>
                        <span className={`block absolute h-0.5 w-7 bg-white rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'top-5'}`}></span>
                        <span className={`block absolute h-0.5 w-7 bg-white rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-5' : 'top-7'}`}></span>
                    </button>
                </nav>
            </header>
            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-[#0A0A0A] z-[99] md:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-screen gap-0">
                            <button
                                onClick={() => { navigate('/work'); setIsMenuOpen(false); }}
                                className="w-[220px] border-y py-4 text-lg font-gb border-white text-white bg-transparent hover:bg-[#2FA4FF] hover:text-black transition"
                            >
                                Work
                            </button>
                            <button
                                onClick={() => { navigate('/'); setIsMenuOpen(false); }}
                                className="w-[220px] text-lg font-gb py-5 text-white border-white hover:bg-[#2FA4FF] hover:text-black transition"
                            >
                                Background
                            </button>
                            <button
                                onClick={() => { onReachOutClick(); setIsMenuOpen(false); }}
                                className="w-[220px] py-4 text-lg font-gb border-y border-white text-white bg-transparent hover:bg-[#2FA4FF] hover:text-black transition"
                            >
                                Reach Out
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar