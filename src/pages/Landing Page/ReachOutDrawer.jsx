import emailjs from 'emailjs-com';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";

const ReachOutDrawer = ({ open, onClose, onDrawerChange }) => {
    const [selected, setSelected] = useState(null);
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const stepVariants = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
        transition: { duration: 0.6, ease: 'easeInOut' }
    };

    const options = [
        "I have a role with your name on it!",
        "I want to team up and innovate!"
    ];

    useEffect(() => {
        if (open) {
            document.body.classList.add('overflow-hidden');
            if (window.locomotive) window.locomotive.stop();
        } else {
            document.body.classList.remove('overflow-hidden');
            if (window.locomotive) window.locomotive.start();
        }
        onDrawerChange?.(open);
        return () => {
            document.body.classList.remove('overflow-hidden');
            if (window.locomotive) window.locomotive.start();
        };
    }, [open, onDrawerChange]);

    useEffect(() => {
        if (!open) {
            setStep(1);
            setSelected(null);
            setName('');
            setEmail('');
            setMessage('');
            setErrorMessage('');
        }
    }, [open]);

    const handleNextStep = (currentStep) => {
        setErrorMessage('');
        if (currentStep === 1 && selected === null) {
            setErrorMessage('⚠️ Please select an option to proceed.');
            return;
        }
        if (currentStep === 2 && (!name || !email)) {
            setErrorMessage('⚠️ Name and email are required.');
            return;
        }
        setStep(currentStep + 1);
    };

    const handleSubmit = async () => {
        setErrorMessage('');
        if (!message) {
            setErrorMessage('⚠️ Message cannot be empty.');
            return;
        }
        setLoading(true);
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            reason: selected !== null ? options[selected] : '',
        };
        try {
            await emailjs.send(
                'service_2b2voll',
                'template_pk3hflt',
                templateParams,
                '_SJS-yuCkliL6l-3r'
            );
            setStep(4);
        } catch (error) {
            setErrorMessage('❌ Failed to send. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // Progress bar width by step
    const progress = [0, 33, 66, 100][step - 1] || 0;

    return (
        <div
            className={`fixed z-[10000] inset-0 bg-black/70 flex justify-end transition-all duration-500 ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
            style={{ pointerEvents: open ? 'auto' : 'none' }}
        >
            <div
                className={`bg-[#0A0A0A] border-l-4 border-white w-full sm:w-[80%] md:w-[60%] lg:w-[40%] max-h-screen overflow-y-auto p-0 relative transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Close Button */}
                <button
                    className="absolute bg-white top-6 right-6 text-2xl flex justify-center items-center text-black w-10 h-10 rounded-full shadow-lg z-20"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <IoCloseOutline size={24}/>
                </button>
                {/* Progress Bar */}
                <div className="w-full absolute top-0 h-2 bg-[#181818] rounded-t-2xl">
                    <div className="h-2 bg-[#2FA4FF] rounded-t-2xl transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>
                {/* Drawer Content */}
                <div className="p-8 md:p-14 flex flex-col min-h-screen justify-center">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                variants={stepVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={stepVariants.transition}
                            >
                                <h2 className="text-4xl md:text-5xl font-gm text-white mb-8 leading-tight">
                                    Let's make something<br />unapologetically awesome together
                                </h2>
                                <p className="text-[#9D9D9D] font-gr mb-2">First things first—what brings you here?</p>
                                <div className="space-y-4 mt-8">
                                    {options.map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelected(index)}
                                            className={`w-full rounded-4xl py-8 text-xl font-gb border transition
                                            ${selected === index ? 'bg-white text-black border-white' : 'bg-[#181818] text-white border-[#222] hover:bg-[#222]'}`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                                {errorMessage && (
                                    <p className="text-red-800 bg-zinc-50 w-full p-4 rounded-4xl text-sm font-gb mt-4">{errorMessage}</p>
                                )}
                                <button
                                    className="mt-8 bg-white text-black rounded-full px-8 py-3 font-gb float-right"
                                    onClick={() => handleNextStep(1)}
                                >
                                    Next
                                </button>
                            </motion.div>
                        )}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                variants={stepVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={stepVariants.transition}
                            >
                                <h2 className="text-4xl md:text-5xl font-gm text-white mb-8 leading-tight">
                                    Tell me about you
                                </h2>
                                <input
                                    type="text"
                                    placeholder="What's your name?"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    className="w-full bg-transparent border-b border-[#222] text-white text-2xl font-gb py-4 mb-8 outline-none placeholder:text-[#444]"
                                />
                                <input
                                    type="email"
                                    placeholder="youremail@email.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="w-full bg-transparent border-b border-[#222] text-white text-2xl font-gb py-4 mb-8 outline-none placeholder:text-[#444]"
                                />
                                {errorMessage && (
                                    <p className="text-red-800 bg-zinc-50 w-full p-4 rounded-4xl text-sm font-gb mt-4">{errorMessage}</p>
                                )}
                                <div className="flex justify-between mt-8">
                                    <button
                                        className="bg-[#222] text-white rounded-full px-6 py-2 font-gb"
                                        onClick={() => setStep(1)}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        className="bg-white text-black rounded-full px-6 py-2 font-gb"
                                        onClick={() => handleNextStep(2)}
                                    >
                                        Next
                                    </button>
                                </div>
                            </motion.div>
                        )}
                        {step === 3 && (
                            <motion.div
                                key="step3"
                                variants={stepVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={stepVariants.transition}
                            >
                                <h2 className="text-4xl md:text-5xl font-gm text-white mb-8 leading-tight">
                                    Your message
                                </h2>
                                <textarea
                                    placeholder="What's on your mind?"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    className="w-full p-4 bg-transparent border border-[#222] text-white text-2xl font-gb py-4 mb-8 outline-none placeholder:text-[#444] rounded-2xl min-h-[160px]"
                                />
                                {errorMessage && (
                                    <p className="text-red-800 bg-zinc-50 w-full p-4 rounded-4xl text-sm font-gb mt-4">{errorMessage}</p>
                                )}
                                <div className="flex justify-between mt-8">
                                    <button
                                        className="bg-[#222] text-white rounded-full px-6 py-2 font-gb"
                                        onClick={() => setStep(2)}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={handleSubmit}
                                        className="bg-white text-black rounded-full px-6 py-2 font-gb flex items-center justify-center min-w-[100px]"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin h-5 w-5 text-black" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            "Submit"
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        )}
                        {step === 4 && (
                            <motion.div
                                className='h-full w-full flex items-center justify-center'
                                key="step4"
                                variants={stepVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={stepVariants.transition}
                            >
                                <div className="flex flex-col items-center justify-center h-full w-full">
                                    <h2 className="text-5xl font-gb text-white mb-4 text-center">Thanks for reaching out!</h2>
                                    <p className="text-[#9D9D9D] mb-8 text-center">I'll get back to you as soon as I can :)</p>
                                    <button
                                        className="border border-[#444] text-white rounded-full px-8 py-3 font-gb"
                                        onClick={onClose}
                                    >
                                        Back to home
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default ReachOutDrawer;