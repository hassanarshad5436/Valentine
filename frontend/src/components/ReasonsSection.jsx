import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Sparkles, ArrowRight, Lock, Key, AlertCircle } from 'lucide-react'
import useStore from '../store/useStore'

function ReasonsSection({ isActive }) {
    const goToSection = useStore((state) => state.goToSection)
    const [isUnlocked, setIsUnlocked] = useState(false)
    const [password, setPassword] = useState('')
    const [attempts, setAttempts] = useState(0)
    const [shake, setShake] = useState(false)

    const correctPassword = 'hassan'

    const hints = [
        "Hint: It's the name of someone very special to you 💕",
        "Hint: Think about who wrote this for you 🌹",
        "Hint: It starts with 'H' and ends with 'n' 😊"
    ]

    const reasons = [
        { text: "Your smile lights up my entire world", video: "/first/1.mp4" },
        { text: "The way you laugh at my silly jokes", video: "/first/2.mp4" },
        { text: "How you make every moment special", video: "/first/3.mp4" },
        { text: "Your adorable expressions that melt my heart", video: "/first/4.mp4" },
        { text: "The sweet sound of your voice", video: "/first/5.mp4" },
        { text: "Our late-night conversations", video: "/first/6.mp4" },
        { text: "How you understand me without words", video: "/first/7.mp4" },
        { text: "You make every day brighter", video: "/first/8.mp4" },
        { text: "Your caring and loving nature", video: "/first/9.mp4" },
        { text: "The way you make me feel special", video: "/first/10.mp4" },
        { text: "Your beautiful eyes that I get lost in", video: "/second/11.mp4" },
        { text: "How you always know how to cheer me up", video: "/second/12.mp4" },
        { text: "The memories we create together", video: "/second/13.mp4" },
        { text: "Your warmth and kindness", video: "/second/14.mp4" },
        { text: "How you make me a better person", video: "/second/15.mp4" },
        { text: "Your endless support and love", video: "/second/16.mp4" },
        { text: "The way you care about little things", video: "/second/17.mp4" },
        { text: "Your beautiful personality", video: "/second/18.mp4" },
        { text: "How you're always there for me", video: "/second/19.mp4" },
        { text: "Your cute habits that I adore", video: "/second/20.mp4" }
    ]

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password.toLowerCase() === correctPassword) {
            setIsUnlocked(true)
        } else {
            setAttempts(prev => prev + 1)
            setShake(true)
            setTimeout(() => setShake(false), 500)

            // Auto-unlock after 3 failed attempts
            if (attempts >= 2) {
                setTimeout(() => {
                    setIsUnlocked(true)
                }, 1500)
            }
        }
        setPassword('')
    }

    return (
        <motion.div
            className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-4 md:px-6 ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <AnimatePresence mode="wait">
                {!isUnlocked ? (
                    // Password Lock Screen
                    <motion.div
                        key="lock"
                        className="relative z-10 w-full max-w-md"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.4, type: "spring" }}
                    >
                        {/* Background blur effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-pink-500/20 to-red-500/20 backdrop-blur-xl rounded-3xl"></div>

                        <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-[0_20px_70px_rgba(236,72,153,0.4)] border-4 border-rose-300">
                            {/* Lock icon */}
                            <motion.div
                                className="flex justify-center mb-6"
                                animate={{
                                    rotate: shake ? [0, -10, 10, -10, 10, 0] : 0,
                                    scale: shake ? [1, 0.95, 1.05, 0.95, 1] : 1
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="relative">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <Lock className="text-rose-600" size={64} />
                                    </motion.div>
                                    {/* Floating sparkles */}
                                    <motion.div
                                        className="absolute -top-2 -right-2"
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    >
                                        <Sparkles className="text-yellow-500" size={24} fill="currentColor" />
                                    </motion.div>
                                </div>
                            </motion.div>

                            <h2 className="font-dancing text-3xl md:text-4xl text-rose-600 text-center mb-3">
                                Secret Section 💕
                            </h2>
                            <p className="text-gray-600 text-center mb-6">
                                Enter the password to unlock my reasons for loving you
                            </p>

                            {/* Password form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="relative">
                                    <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-400" size={20} />
                                    <input
                                        type="text"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter password..."
                                        className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-rose-300 focus:border-rose-500 focus:outline-none text-lg bg-white/80 backdrop-blur-sm transition-all"
                                        autoFocus
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="relative z-10">Unlock</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                                </motion.button>
                            </form>

                            {/* Hints */}
                            <AnimatePresence>
                                {attempts > 0 && attempts < 3 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="mt-4 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-xl"
                                    >
                                        <div className="flex items-start gap-2">
                                            <AlertCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={20} />
                                            <p className="text-yellow-800 text-sm">
                                                {hints[Math.min(attempts - 1, hints.length - 1)]}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                                {attempts >= 3 && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="mt-4 p-4 bg-rose-50 border-2 border-rose-300 rounded-xl text-center"
                                    >
                                        <p className="text-rose-600 font-semibold mb-2">
                                            Unlocking automatically... 💖
                                        </p>
                                        <p className="text-rose-500 text-sm">
                                            You tried your best! Here's your surprise 🎁
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Decorative hearts */}
                            <div className="flex justify-center gap-2 mt-6">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            y: [0, -8, 0],
                                            opacity: [0.5, 1, 0.5]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.2
                                        }}
                                    >
                                        <Heart className="text-rose-400" size={16} fill="currentColor" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    // Unlocked Content
                    <motion.div
                        key="content"
                        className="relative z-10 w-full max-w-7xl h-full flex flex-col py-4 md:py-6"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                    >
                        <motion.div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6 flex-shrink-0">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            >
                                <Sparkles className="text-yellow-500" size={28} fill="currentColor" />
                            </motion.div>
                            <motion.h2
                                className="font-dancing text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-rose-600 text-center drop-shadow-[0_3px_8px_rgba(0,0,0,0.3)]"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                Why I Love You MITHOWW
                            </motion.h2>
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <Heart className="text-rose-600" size={28} fill="currentColor" />
                            </motion.div>
                        </motion.div>

                        {/* Horizontal scrollable video cards */}
                        <div className="flex-1 overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide">
                            <div className="flex gap-4 md:gap-6 h-full">
                                {reasons.map((reason, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 h-full group"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        {/* Video card */}
                                        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_15px_50px_rgba(236,72,153,0.4)] border-4 border-rose-400/60">
                                            {/* Video background */}
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="absolute inset-0 w-full h-full object-cover"
                                            >
                                                <source src={reason.video} type="video/mp4" />
                                            </video>

                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                                            {/* Content */}
                                            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                                                {/* Reason number */}
                                                <motion.div
                                                    className="absolute top-4 right-4 w-12 h-12 md:w-14 md:h-14 bg-rose-600 rounded-full flex items-center justify-center shadow-lg"
                                                    animate={{ rotate: [0, 360] }}
                                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                >
                                                    <span className="text-white font-bold text-lg md:text-xl">{index + 1}</span>
                                                </motion.div>

                                                {/* Floating hearts */}
                                                <div className="absolute top-6 left-4 flex gap-1">
                                                    {[...Array(3)].map((_, i) => (
                                                        <motion.div
                                                            key={i}
                                                            animate={{
                                                                y: [0, -10, 0],
                                                                opacity: [0.5, 1, 0.5]
                                                            }}
                                                            transition={{
                                                                duration: 2,
                                                                repeat: Infinity,
                                                                delay: i * 0.3
                                                            }}
                                                        >
                                                            <Heart className="text-rose-400" size={16} fill="currentColor" />
                                                        </motion.div>
                                                    ))}
                                                </div>

                                                {/* Text */}
                                                <motion.p
                                                    className="text-white text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mb-2"
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: index * 0.05 + 0.2 }}
                                                >
                                                    {reason.text}
                                                </motion.p>

                                                {/* Decorative line */}
                                                <motion.div
                                                    className="h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 rounded-full"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "100%" }}
                                                    transition={{ delay: index * 0.05 + 0.4, duration: 0.6 }}
                                                ></motion.div>
                                            </div>

                                            {/* Hover glow effect */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-rose-500/20 to-transparent pointer-events-none"></div>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* End card with message */}
                                <motion.div
                                    className="relative flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 h-full"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: reasons.length * 0.05 }}
                                >
                                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_15px_50px_rgba(236,72,153,0.4)] border-4 border-rose-400/60 bg-gradient-to-br from-rose-500 via-pink-500 to-red-500 flex flex-col items-center justify-center p-6 md:p-8 text-center">
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <Heart className="text-white mb-6" size={64} fill="currentColor" />
                                        </motion.div>
                                        <h3 className="font-dancing text-3xl md:text-4xl text-white mb-4 drop-shadow-lg">
                                            And a Million More...
                                        </h3>
                                        <p className="text-white text-lg md:text-xl leading-relaxed drop-shadow-md">
                                            Every moment with you gives me a new reason to fall in love all over again 💖
                                        </p>
                                        <div className="flex gap-2 mt-6">
                                            {[...Array(5)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={{ y: [0, -10, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                                                >
                                                    <Sparkles className="text-yellow-300" size={24} fill="currentColor" />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Scroll indicator */}
                        <motion.div
                            className="flex items-center justify-center gap-2 mt-4 text-rose-600"
                            animate={{ x: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <span className="text-sm md:text-base font-semibold">Scroll to see more</span>
                            <ArrowRight size={20} />
                        </motion.div>

                        <motion.button
                            className="mt-4 px-10 md:px-12 py-3 md:py-4 text-base md:text-lg font-bold text-white bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 rounded-full shadow-[0_10px_30px_rgba(236,72,153,0.6),0_0_20px_rgba(244,114,182,0.4)] hover:shadow-[0_15px_45px_rgba(236,72,153,0.8),0_0_35px_rgba(244,114,182,0.6)] transition-all duration-200 relative overflow-hidden group mx-auto flex-shrink-0"
                            onClick={() => goToSection(7)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">Continue to Proposal</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </motion.div>
    )
}

export default ReasonsSection
