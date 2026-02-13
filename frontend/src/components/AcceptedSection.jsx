import { motion } from 'framer-motion'
import { Heart, PartyPopper, Sparkles } from 'lucide-react'
import useStore from '../store/useStore'

function AcceptedSection({ isActive }) {
    const goToSection = useStore((state) => state.goToSection)

    return (
        <motion.div
            className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-6 md:px-8 ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 250 }}
        >
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm"
            >
                <source src="/first/10.mp4" type="video/mp4" />
            </video>

            {/* Floating celebration emojis */}
            <motion.div
                className="absolute top-10 left-1/4 text-6xl"
                animate={{
                    y: [0, -30, 0],
                    rotate: [0, 360]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                🎉
            </motion.div>
            <motion.div
                className="absolute top-20 right-1/4 text-6xl"
                animate={{
                    y: [0, -25, 0],
                    rotate: [0, -360]
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                }}
            >
                🎊
            </motion.div>
            <motion.div
                className="absolute bottom-20 left-1/3 text-5xl"
                animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                💝
            </motion.div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Celebration icons */}
                <motion.div className="flex gap-4 mb-6">
                    <motion.div
                        animate={{ rotate: [0, 20, -20, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >
                        <PartyPopper className="text-yellow-500" size={48} />
                    </motion.div>
                    <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >
                        <Heart className="text-rose-600" size={56} fill="currentColor" />
                    </motion.div>
                    <motion.div
                        animate={{ rotate: [0, -20, 20, 0] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                    >
                        <Sparkles className="text-pink-500" size={48} fill="currentColor" />
                    </motion.div>
                </motion.div>

                <motion.h1
                    className="font-dancing text-6xl md:text-9xl text-rose-600 mb-8 text-center drop-shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
                    initial={{ opacity: 0, y: -30 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    Mujhay pata thaaa! 💖
                </motion.h1>

                <motion.p
                    className="text-2xl md:text-5xl text-rose-600 font-semibold text-center mb-6 drop-shadow-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                >
                    Mere ilawaaa Koi bhi Naeeeeeeee, MITHOWW! ❤️
                </motion.p>

                <motion.div className="flex gap-2 mb-6">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.1
                            }}
                        >
                            <span className="text-2xl">💕</span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    className="text-lg md:text-2xl text-gray-700 text-center max-w-2xl mb-12 drop-shadow-sm font-semibold"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                >
                    Thank you meri Jholiiii main tapkanay kay liyeeeee🫣🙈😁😝
                </motion.p>

                <motion.button
                    className="px-12 py-4 text-lg font-bold text-white bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 rounded-full shadow-[0_10px_30px_rgba(236,72,153,0.6),0_0_20px_rgba(244,114,182,0.4)] hover:shadow-[0_15px_45px_rgba(236,72,153,0.8),0_0_35px_rgba(244,114,182,0.6)] transition-all duration-200 relative overflow-hidden group"
                    onClick={() => goToSection(1)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="relative z-10">Start Over</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                </motion.button>
            </div>
        </motion.div>
    )
}

export default AcceptedSection
