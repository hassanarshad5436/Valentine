import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Sparkles, Star, X, Play } from 'lucide-react'
import useStore from '../store/useStore'

function MemoriesSection({ isActive }) {
    const goToSection = useStore((state) => state.goToSection)
    const [selectedMemory, setSelectedMemory] = useState(null)

    const memories = [
        {
            title: "First Video Call 💕",
            text: "The day our eyes first met and my heart knew you were special.",
            image: "/first video call.jpeg",
            video: "/first/1.mp4"
        },
        {
            title: "Smile Made For Me 🌹",
            text: "The Day I Saw you Smiling like this. I fell Completely in Love with you",
            image: "/Smile 1.jpeg",
            video: "/first/2.mp4"
        },
        {
            title: "Favourite Picture 😊",
            text: "When I first saw this picture of you, I decided this will be the Pic I Will Show to Your Saasu Maaaa.",
            image: "/mine.jpeg",
            video: "/first/3.mp4"
        },
        {
            title: "Us in Ghibli Art💖",
            text: "We will Create Pictures like this but the only difference is that my left hand will be on your waist",
            image: "/Ghibli art.jpeg",
            video: "/first/4.mp4"
        },
        {
            title: "I Adore You💖",
            text: "When I saw you like this My Heart Skipped a Beat. You are so Cute",
            image: "/Sleepy.jpeg",
            video: "/first/5.mp4"
        },
        {
            title: "Beautiful You 🌸",
            text: "Every moment with you is a memory I cherish forever",
            image: "/mine.jpeg",
            video: "/first/6.mp4"
        }
    ]

    return (
        <motion.div
            className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-4 md:p-8 ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            {/* Background video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm"
            >
                <source src="/first/11.mp4" type="video/mp4" />
            </video>

            <div className="relative z-10 w-full max-w-7xl">
                <motion.div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
                    <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                        <Sparkles className="text-yellow-500" size={32} fill="currentColor" />
                    </motion.div>
                    <motion.h2
                        className="font-dancing text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-rose-600 text-center drop-shadow-[0_3px_8px_rgba(0,0,0,0.3)]"
                        initial={{ opacity: 0, y: -20 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        Our Beautiful Memories
                    </motion.h2>
                    <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Heart className="text-rose-600" size={32} fill="currentColor" />
                    </motion.div>
                </motion.div>

                {/* Masonry grid of memories */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8 max-h-[70vh] overflow-y-auto pr-2">
                    {memories.map((memory, index) => (
                        <motion.div
                            key={index}
                            className="relative group cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, zIndex: 10 }}
                            onClick={() => setSelectedMemory(memory)}
                        >
                            {/* Card */}
                            <div className={`relative ${index % 3 === 0 ? 'row-span-2' : ''} aspect-square overflow-hidden rounded-2xl md:rounded-3xl shadow-[0_10px_40px_rgba(236,72,153,0.3)] border-4 border-rose-300/50`}>
                                <img
                                    src={memory.image}
                                    alt={memory.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                                        <h3 className="font-dancing text-lg md:text-2xl text-white drop-shadow-lg mb-1">{memory.title}</h3>
                                        <p className="text-xs md:text-sm text-white/90 line-clamp-2">{memory.text}</p>
                                    </div>
                                </div>

                                {/* Play button overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-14 h-14 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl">
                                        <Play className="text-rose-600 ml-1" size={28} fill="currentColor" />
                                    </div>
                                </div>

                                {/* Floating star */}
                                <motion.div
                                    className="absolute top-2 right-2"
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                                >
                                    <Star className="text-yellow-400" size={20} fill="currentColor" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.button
                    className="px-10 md:px-12 py-3 md:py-4 text-base md:text-lg font-bold text-white bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 rounded-full shadow-[0_10px_30px_rgba(236,72,153,0.6),0_0_20px_rgba(244,114,182,0.4)] hover:shadow-[0_15px_45px_rgba(236,72,153,0.8),0_0_35px_rgba(244,114,182,0.6)] transition-all duration-200 relative overflow-hidden group mx-auto block"
                    onClick={() => goToSection(4)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="relative z-10">Next</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                </motion.button>
            </div>

            {/* Fullscreen modal */}
            <AnimatePresence>
                {selectedMemory && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMemory(null)}
                    >
                        <motion.div
                            className="relative w-full max-w-4xl"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                className="absolute -top-4 -right-4 w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center shadow-lg hover:bg-rose-700 transition-colors z-10"
                                onClick={() => setSelectedMemory(null)}
                            >
                                <X className="text-white" size={24} />
                            </button>

                            {/* Video player */}
                            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-rose-500">
                                <video
                                    autoPlay
                                    loop
                                    controls
                                    className="w-full h-full object-cover"
                                >
                                    <source src={selectedMemory.video} type="video/mp4" />
                                </video>
                            </div>

                            {/* Info card */}
                            <motion.div
                                className="mt-6 bg-gradient-to-br from-white to-pink-50 p-6 rounded-2xl shadow-xl border-2 border-rose-300"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="font-dancing text-3xl text-rose-600 mb-3">{selectedMemory.title}</h3>
                                <p className="text-gray-700 text-lg leading-relaxed">{selectedMemory.text}</p>
                                <div className="flex gap-2 mt-4 justify-center">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                        >
                                            <Heart className="text-rose-500" size={20} fill="currentColor" />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default MemoriesSection
