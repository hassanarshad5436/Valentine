import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Mail, Send, X } from 'lucide-react'
import useStore from '../store/useStore'

function LoveLetterSection({ isActive }) {
    const goToSection = useStore((state) => state.goToSection)
    const [isOpen, setIsOpen] = useState(false)

    const videos = [
        "/second/11.mp4",
        "/second/12.mp4",
        "/second/13.mp4",
        "/second/14.mp4",
        "/second/15.mp4"
    ]

    return (
        <motion.div
            className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-6 md:px-8 ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            {/* Floating decorations */}
            <motion.div
                className="absolute top-20 right-10 text-5xl"
                animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                💌
            </motion.div>
            <motion.div
                className="absolute bottom-20 left-10 text-4xl"
                animate={{ y: [0, -10, 0], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
                💕
            </motion.div>

            <AnimatePresence mode="wait">
                {!isOpen ? (
                    // Closed Envelope
                    <motion.div
                        key="envelope"
                        className="relative cursor-pointer"
                        onClick={() => setIsOpen(true)}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative w-80 h-56 md:w-96 md:h-64">
                            {/* Envelope body */}
                            <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-pink-100 to-rose-100 rounded-lg shadow-[0_20px_60px_rgba(236,72,153,0.4)] border-4 border-rose-300">
                                {/* Decorative seal */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                                    <Heart className="text-white" size={40} fill="currentColor" />
                                </div>

                                {/* Envelope flap */}
                                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-rose-200 to-pink-200 clip-triangle border-b-4 border-rose-300"></div>
                            </div>

                            {/* Floating mail icon */}
                            <motion.div
                                className="absolute -top-12 left-1/2 -translate-x-1/2"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Mail className="text-rose-600" size={48} />
                            </motion.div>
                        </div>

                        <motion.p
                            className="text-center mt-8 text-2xl font-dancing text-rose-600 drop-shadow-md"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Click to Open My Heart 💖
                        </motion.p>
                    </motion.div>
                ) : (
                    // Opened Scroll
                    <motion.div
                        key="scroll"
                        className="relative w-full max-w-5xl h-[85vh] flex flex-col px-2 md:px-4"
                        initial={{ scale: 0.5, opacity: 0, rotateX: -90 }}
                        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                        exit={{ scale: 0.5, opacity: 0, rotateX: 90 }}
                        transition={{ duration: 0.6, type: "spring" }}
                    >
                        {/* Close button */}
                        <motion.button
                            className="absolute -top-2 -right-2 md:-top-4 md:-right-4 z-20 w-10 h-10 md:w-12 md:h-12 bg-rose-600 rounded-full flex items-center justify-center shadow-lg hover:bg-rose-700 transition-colors"
                            onClick={() => setIsOpen(false)}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X className="text-white" size={20} />
                        </motion.button>

                        {/* Scroll header */}
                        <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4 flex-wrap">
                            <Mail className="text-rose-600" size={28} />
                            <h2 className="font-dancing text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-rose-600 text-center drop-shadow-md">
                                A Letter From My Heart
                            </h2>
                            <Heart className="text-rose-600 animate-pulse" size={28} fill="currentColor" />
                        </div>

                        {/* Scroll content */}
                        <div className="flex-1 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.3)] border-8 border-amber-800/30 overflow-hidden relative">
                            {/* Scroll texture */}
                            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>

                            <div className="relative h-full overflow-y-auto p-3 sm:p-4 md:p-6 lg:p-10">
                                {/* Video gallery at top */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 mb-4 md:mb-8">
                                    {videos.map((video, index) => (
                                        <motion.div
                                            key={index}
                                            className="aspect-video rounded-lg md:rounded-xl overflow-hidden shadow-lg border-2 md:border-4 border-rose-300"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ scale: 1.05, zIndex: 10 }}
                                        >
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="w-full h-full object-cover"
                                            >
                                                <source src={video} type="video/mp4" />
                                            </video>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Letter content */}
                                <div className="space-y-4 text-gray-800 font-serif">
                                    <p className="text-left text-base md:text-lg leading-relaxed">Meri Mithowww,Hassaniii ki Jawnnn😍💖😁🫠</p>
                                    <p className="text-left text-base md:text-lg leading-relaxed">First of all 😁 apko bohat shukria karna Chahta Kay ap hamari feelings Jann-na Chahtii🤭😁,Aur shukurrr hai kay Ap hooo Jiskay liye pehli baar Aesi Feelings Ayiiii🤭</p>
                                    <p className="text-left text-base md:text-lg leading-relaxed">Mithowww mithow Meri Mithoww 🫠💖, Mera Shararti Kaakaa 🌸,Meriii Kojoooo 🤭,Meraaa Bachaaa 😩 ,I LOVEEEEEE YOUUUU SHOOO MUCHHHHH🥺🌸💖🌸,
                                        There is no one who can love you more than mee 🥺🫠</p>
                                    <p className="text-left text-base md:text-lg leading-relaxed">Mithow 🫠 ap Kay Saath Sirf Saal huaaa 🤧 lekin pir bhi har rozzz main tere pyaaar main har rozzz girtaaa hunnnn 🫠</p>
                                    <p className="text-left text-base md:text-lg leading-relaxed">Mithowwwww umeed kyaaa main nay janay nae dena kahin apko han nae tohh🫠 Shaaadi karnii hai nawwww Hum dono nayyy 🤭 Larayi karoo gi Mana lungaa ,Ghussa karo gii Smooch day kar chup karwa dun gaa🤭 aur main toh soch rha tha kay har cheez kay liye ap ko manana lazmii haii 😁😁</p>
                                    <p className="text-left text-base md:text-lg leading-relaxed">Aurrr bass itni baar bataya huaa lekin pir bhi yehi Kahna thaa kayy sabbb kuchhh haiii ap hi Kay Saath hai 😩🥺,
                                        Joo bhii hai kya matlabbb ,Pyaaar hai, Muhabbat hai ,Ishq hai teri har adaaa sayyy mujhay 🫠 Aur yeh sabbb kuchhh kisi aur kay ho hi nae saktaaa (siwaye apkay 😚😚) balkay jab app ho kisi aur ka zikr hi nae ayeegaaa 🤭 ,
                                        Ummmmmmahhhhhhhhhhh Ummmahhhhhhhhh 💋😝</p>
                                    <p className="text-left text-base md:text-lg leading-relaxed">Main bataaa rhaa kayyy Badalna nae haiii han nae toooo 🥺🥺 I am telling youuu  Bohatt pyar karta toh koi change nae🥺🥺
                                        You just have to be my mithoww 🥺 and begum 🫠 and nothing else 🫠
                                        Ummmahhhhhhhhh 💋😚
                                        I I I I I I I LOVEE YOUUUUUUU Shooo Muchhhhh 🥺🥺🥺 Mera Sab kuchh 🫠🤍💖🌸</p>
                                    <p className="text-left text-base md:text-lg leading-relaxed italic mt-8">Tu Meriiii 💋😚 aur main teraaaaaa 😁,<br />Apkaaa Hassaniiiiii🌸</p>
                                </div>
                            </div>
                        </div>

                        {/* Next button */}
                        <motion.button
                            className="mt-6 px-12 py-4 text-lg font-bold text-white bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 rounded-full shadow-[0_10px_30px_rgba(236,72,153,0.6)] hover:shadow-[0_15px_45px_rgba(236,72,153,0.8)] transition-all duration-200 relative overflow-hidden group flex items-center gap-2 mx-auto"
                            onClick={() => goToSection(3)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">Next</span>
                            <Send className="relative z-10" size={20} />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default LoveLetterSection
