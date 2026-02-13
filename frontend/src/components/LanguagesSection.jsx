import { motion } from 'framer-motion'
import { Heart, Globe, Sparkles } from 'lucide-react'
import useStore from '../store/useStore'

function LanguagesSection({ isActive }) {
    const goToSection = useStore((state) => state.goToSection)

    const languages = [
        { language: "English", text: "I Love You", flag: "🇬🇧" },
        { language: "Spanish", text: "Te Amo", flag: "🇪🇸" },
        { language: "French", text: "Je t'aime", flag: "🇫🇷" },
        { language: "German", text: "Ich liebe dich", flag: "🇩🇪" },
        { language: "Italian", text: "Ti amo", flag: "🇮🇹" },
        { language: "Portuguese", text: "Eu te amo", flag: "🇵🇹" },
        { language: "Russian", text: "Я тебя люблю", flag: "🇷🇺" },
        { language: "Japanese", text: "愛してる", flag: "🇯🇵" },
        { language: "Chinese", text: "我爱你", flag: "🇨🇳" },
        { language: "Korean", text: "사랑해", flag: "🇰🇷" },
        { language: "Arabic", text: "أحبك", flag: "🇸🇦" },
        { language: "Hindi", text: "मैं तुमसे प्यार करता हूँ", flag: "🇮🇳" },
        { language: "Urdu", text: "میں تم سے پیار کرتا ہوں", flag: "🇵🇰" },
        { language: "Turkish", text: "Seni seviyorum", flag: "🇹🇷" },
        { language: "Greek", text: "Σ'αγαπώ", flag: "🇬🇷" },
        { language: "Dutch", text: "Ik hou van jou", flag: "🇳🇱" },
        { language: "Swedish", text: "Jag älskar dig", flag: "🇸🇪" },
        { language: "Norwegian", text: "Jeg elsker deg", flag: "🇳🇴" },
        { language: "Danish", text: "Jeg elsker dig", flag: "🇩🇰" },
        { language: "Finnish", text: "Rakastan sinua", flag: "🇫🇮" },
        { language: "Polish", text: "Kocham cię", flag: "🇵🇱" },
        { language: "Czech", text: "Miluji tě", flag: "🇨🇿" },
        { language: "Romanian", text: "Te iubesc", flag: "🇷🇴" },
        { language: "Hungarian", text: "Szeretlek", flag: "🇭🇺" },
        { language: "Thai", text: "ฉันรักคุณ", flag: "🇹🇭" },
        { language: "Vietnamese", text: "Anh yêu em", flag: "🇻🇳" },
        { language: "Indonesian", text: "Aku cinta kamu", flag: "🇮🇩" },
        { language: "Malay", text: "Saya cinta awak", flag: "🇲🇾" },
        { language: "Filipino", text: "Mahal kita", flag: "🇵🇭" },
        { language: "Bengali", text: "আমি তোমাকে ভালোবাসি", flag: "🇧🇩" },
        { language: "Tamil", text: "நான் உன்னை காதலிக்கிறேன்", flag: "🇮🇳" },
        { language: "Telugu", text: "నేను నిన్ను ప్రేమిస్తున్నాను", flag: "🇮🇳" },
        { language: "Punjabi", text: "ਮੈਂ ਤੁਹਾਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ", flag: "🇮🇳" },
        { language: "Hebrew", text: "אני אוהב אותך", flag: "🇮🇱" },
        { language: "Persian", text: "دوستت دارم", flag: "🇮🇷" },
        { language: "Swahili", text: "Nakupenda", flag: "🇰🇪" },
        { language: "Zulu", text: "Ngiyakuthanda", flag: "🇿🇦" },
        { language: "Afrikaans", text: "Ek het jou lief", flag: "🇿🇦" },
        { language: "Icelandic", text: "Ég elska þig", flag: "🇮🇸" },
        { language: "Irish", text: "Tá grá agam duit", flag: "🇮🇪" },
        { language: "Welsh", text: "Rwy'n dy garu di", flag: "🏴" },
        { language: "Scottish", text: "Tha gaol agam ort", flag: "🏴" },
        { language: "Croatian", text: "Volim te", flag: "🇭🇷" },
        { language: "Serbian", text: "Волим те", flag: "🇷🇸" },
        { language: "Bulgarian", text: "Обичам те", flag: "🇧🇬" },
        { language: "Ukrainian", text: "Я тебе кохаю", flag: "🇺🇦" },
        { language: "Slovak", text: "Ľúbim ťa", flag: "🇸🇰" },
        { language: "Slovenian", text: "Ljubim te", flag: "🇸🇮" },
        { language: "Lithuanian", text: "Aš tave myliu", flag: "🇱🇹" },
        { language: "Latvian", text: "Es tevi mīlu", flag: "🇱🇻" },
        { language: "Estonian", text: "Ma armastan sind", flag: "🇪🇪" },
        { language: "Albanian", text: "Te dua", flag: "🇦🇱" },
        { language: "Macedonian", text: "Те сакам", flag: "🇲🇰" },
        { language: "Bosnian", text: "Volim te", flag: "🇧🇦" },
        { language: "Catalan", text: "T'estimo", flag: "🇪🇸" },
        { language: "Basque", text: "Maite zaitut", flag: "🇪🇸" },
        { language: "Galician", text: "Ámote", flag: "🇪🇸" },
        { language: "Maltese", text: "Inħobbok", flag: "🇲🇹" },
        { language: "Mongolian", text: "Би чамд хайртай", flag: "🇲🇳" },
        { language: "Nepali", text: "म तिमीलाई माया गर्छु", flag: "🇳🇵" },
        { language: "Sinhala", text: "මම ඔයාට ආදරෙයි", flag: "🇱🇰" },
        { language: "Burmese", text: "ချစ်တယ်", flag: "🇲🇲" },
        { language: "Khmer", text: "ខ្ញុំស្រឡាញ់អ្នក", flag: "🇰🇭" },
        { language: "Lao", text: "ຂ້ອຍຮັກເຈົ້າ", flag: "🇱🇦" },
        { language: "Georgian", text: "მე შენ მიყვარხარ", flag: "🇬🇪" },
        { language: "Armenian", text: "Ես քեզ սիրում եմ", flag: "🇦🇲" },
        { language: "Kazakh", text: "Мен сені жақсы көремін", flag: "🇰🇿" },
        { language: "Uzbek", text: "Men seni sevaman", flag: "🇺🇿" },
        { language: "Azerbaijani", text: "Mən səni sevirəm", flag: "🇦🇿" },
        { language: "Amharic", text: "እወድሃለሁ", flag: "🇪🇹" },
        { language: "Somali", text: "Waan ku jeclahay", flag: "🇸🇴" },
        { language: "Hausa", text: "Ina son ku", flag: "🇳🇬" },
        { language: "Yoruba", text: "Mo nifẹ rẹ", flag: "🇳🇬" },
        { language: "Igbo", text: "A hụrụ m gị n'anya", flag: "🇳🇬" },
        { language: "Malagasy", text: "Tiako ianao", flag: "🇲🇬" },
        { language: "Esperanto", text: "Mi amas vin", flag: "🌍" },
        { language: "Latin", text: "Te amo", flag: "🏛️" },
        { language: "Hawaiian", text: "Aloha wau iā 'oe", flag: "🇺🇸" },
        { language: "Maori", text: "Aroha ahau ki a koe", flag: "🇳🇿" },
        { language: "Samoan", text: "Ou te alofa ia te oe", flag: "🇼🇸" },
        { language: "Tongan", text: "ʻOku ou ʻofa kiate koe", flag: "🇹🇴" },
        { language: "Fijian", text: "Au domoni iko", flag: "🇫🇯" },
        { language: "Luxembourgish", text: "Ech hunn dech gär", flag: "🇱🇺" },
        { language: "Frisian", text: "Ik hâld fan dy", flag: "🇳🇱" },
        { language: "Corsican", text: "Ti tengu caru", flag: "🇫🇷" },
        { language: "Sardinian", text: "Ti amo", flag: "🇮🇹" },
        { language: "Sicilian", text: "T'amu", flag: "🇮🇹" },
        { language: "Yiddish", text: "איך האָב דיך ליב", flag: "🕎" },
        { language: "Pashto", text: "زه تا سره مینه لرم", flag: "🇦🇫" },
        { language: "Kurdish", text: "Ez te hezdikhem", flag: "🇮🇶" },
        { language: "Sindhi", text: "مان توکي پيار ڪريان ٿو", flag: "🇵🇰" },
        { language: "Gujarati", text: "હું તને પ્રેમ કરું છું", flag: "🇮🇳" },
        { language: "Marathi", text: "मी तुझ्यावर प्रेम करतो", flag: "🇮🇳" },
        { language: "Kannada", text: "ನಾನು ನಿನ್ನನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ", flag: "🇮🇳" },
        { language: "Malayalam", text: "ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു", flag: "🇮🇳" },
        { language: "Odia", text: "ମୁଁ ତୁମକୁ ଭଲପାଏ", flag: "🇮🇳" },
        { language: "Assamese", text: "মই তোমাক ভাল পাওঁ", flag: "🇮🇳" },
        { language: "Cebuano", text: "Gihigugma ko ikaw", flag: "🇵🇭" },
        { language: "Javanese", text: "Aku tresna marang kowe", flag: "🇮🇩" }
    ]

    return (
        <motion.div
            className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-3 md:px-6 lg:px-8 ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-100 to-red-100"></div>

            <div className="relative z-10 w-full max-w-6xl h-full flex flex-col py-3 md:py-4 lg:py-6">
                <motion.div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4 lg:mb-6 flex-shrink-0 flex-wrap px-2">
                    <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                        <Globe className="text-blue-600" size={24} />
                    </motion.div>
                    <motion.h2
                        className="font-dancing text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-rose-600 text-center drop-shadow-[0_3px_8px_rgba(0,0,0,0.3)]"
                        initial={{ opacity: 0, y: -20 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        I Love You in 100 Languages
                    </motion.h2>
                    <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Heart className="text-rose-600" size={24} fill="currentColor" />
                    </motion.div>
                </motion.div>

                <motion.p
                    className="text-center text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg mb-3 md:mb-4 lg:mb-6 flex-shrink-0 px-2 md:px-4"
                    initial={{ opacity: 0 }}
                    animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    No matter the language, my love for you remains the same 💕
                </motion.p>

                {/* Scrollable grid with custom scrollbar */}
                <div className="flex-1 overflow-y-auto pr-1 md:pr-2 custom-scrollbar">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 pb-3 md:pb-4">
                        {languages.map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 shadow-lg border-2 border-rose-200 hover:border-rose-400 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.3, delay: Math.min(index * 0.02, 1) }}
                                whileHover={{ scale: 1.03, y: -5 }}
                            >
                                {/* Background gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-10">
                                    {/* Flag and number */}
                                    <div className="flex items-center justify-between mb-1 sm:mb-2 md:mb-3">
                                        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{item.flag}</span>
                                        <motion.div
                                            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-rose-500 rounded-full flex items-center justify-center"
                                            animate={{ rotate: [0, 360] }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: index * 0.1 }}
                                        >
                                            <span className="text-white text-[10px] sm:text-xs font-bold">{index + 1}</span>
                                        </motion.div>
                                    </div>

                                    {/* Language name */}
                                    <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-600 mb-1 md:mb-2">
                                        {item.language}
                                    </h3>

                                    {/* Translation */}
                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-dancing text-rose-600 mb-1 md:mb-2 break-words leading-tight">
                                        {item.text}
                                    </p>

                                    {/* Decorative hearts */}
                                    <div className="flex gap-1 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {[...Array(3)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{
                                                    y: [0, -5, 0],
                                                    scale: [1, 1.1, 1]
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    delay: i * 0.2
                                                }}
                                            >
                                                <Heart className="text-rose-400" size={10} fill="currentColor" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Sparkle effect */}
                                <motion.div
                                    className="absolute top-1 right-1 sm:top-2 sm:right-2 opacity-0 group-hover:opacity-100"
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                >
                                    <Sparkles className="text-yellow-500" size={12} fill="currentColor" />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.button
                    className="mt-3 md:mt-4 lg:mt-6 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 rounded-full shadow-[0_10px_30px_rgba(236,72,153,0.6),0_0_20px_rgba(244,114,182,0.4)] hover:shadow-[0_15px_45px_rgba(236,72,153,0.8),0_0_35px_rgba(244,114,182,0.6)] transition-all duration-200 relative overflow-hidden group mx-auto flex-shrink-0"
                    onClick={() => goToSection(5)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="relative z-10">Next</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                </motion.button>
            </div>

            {/* Custom scrollbar styles */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 182, 193, 0.3);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: linear-gradient(to bottom, #ec4899, #f43f5e, #dc2626);
                    border-radius: 10px;
                    border: 2px solid rgba(255, 255, 255, 0.5);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(to bottom, #db2777, #e11d48, #b91c1c);
                    box-shadow: 0 0 10px rgba(236, 72, 153, 0.5);
                }
                /* Firefox */
                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: #ec4899 rgba(255, 182, 193, 0.3);
                }
            `}</style>
        </motion.div>
    )
}

export default LanguagesSection
