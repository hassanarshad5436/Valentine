import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'
import useStore from '../store/useStore'

function WelcomeSection({ isActive }) {
    const goToSection = useStore((state) => state.goToSection)
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
    const isTablet = typeof window !== 'undefined' && window.innerWidth >= 640 && window.innerWidth < 1024

    return (
        <motion.div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: isMobile ? '1rem' : isTablet ? '1.5rem' : '2rem',
                opacity: isActive ? 1 : 0,
                pointerEvents: isActive ? 'auto' : 'none'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.2,
                    filter: 'blur(4px)'
                }}
            >
                <source src="/first/1.mp4" type="video/mp4" />
            </video>

            <motion.div
                style={{
                    position: 'absolute',
                    top: isMobile ? '1rem' : '2.5rem',
                    left: isMobile ? '1rem' : '2.5rem',
                    fontSize: isMobile ? '2.5rem' : '4rem'
                }}
                animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                🌹
            </motion.div>
            <motion.div
                style={{
                    position: 'absolute',
                    top: isMobile ? '2rem' : '5rem',
                    right: isMobile ? '1rem' : '5rem',
                    fontSize: isMobile ? '2rem' : '3rem'
                }}
                animate={{ y: [0, -15, 0], rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
                🌹
            </motion.div>
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: isMobile ? '2rem' : '5rem',
                    left: isMobile ? '1rem' : '5rem',
                    fontSize: isMobile ? '2rem' : '3rem'
                }}
                animate={{ y: [0, -10, 0], rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                🌹
            </motion.div>

            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '90%' }}>
                <motion.div
                    style={{ marginBottom: '1rem' }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Heart style={{ color: '#e11d48' }} size={isMobile ? 48 : 64} fill="currentColor" />
                </motion.div>

                <motion.h1
                    style={{
                        fontFamily: 'Dancing Script, cursive',
                        fontSize: isMobile ? '2rem' : isTablet ? '3rem' : '5rem',
                        color: '#e11d48',
                        marginBottom: '1.5rem',
                        textAlign: 'center',
                        filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
                    }}
                    initial={{ y: -30, opacity: 0 }}
                    animate={isActive ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    For My One and Onlyyy MITHOWW ❤️
                </motion.h1>

                <motion.div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                        >
                            <Sparkles style={{ color: '#eab308' }} size={isMobile ? 18 : 24} fill="currentColor" />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    style={{
                        fontSize: isMobile ? '1rem' : isTablet ? '1.25rem' : '1.5rem',
                        color: '#374151',
                        textAlign: 'center',
                        maxWidth: '90%',
                        marginBottom: '2.5rem',
                        lineHeight: '1.6',
                        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
                        fontWeight: 600
                    }}
                    initial={{ y: 10, opacity: 0 }}
                    animate={isActive ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                >
                    Meri Feelings Jan-nay kay liye neechay start karain🫣🙈😁😝...
                </motion.p>

                <motion.button
                    style={{
                        padding: isMobile ? '0.75rem 2rem' : '1rem 3rem',
                        fontSize: isMobile ? '1rem' : '1.125rem',
                        fontWeight: 'bold',
                        color: 'white',
                        background: 'linear-gradient(to bottom right, #ec4899, #f43f5e, #dc2626)',
                        borderRadius: '9999px',
                        boxShadow: '0 10px 30px rgba(236, 72, 153, 0.6), 0 0 20px rgba(244, 114, 182, 0.4)',
                        border: 'none',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                    onClick={() => goToSection(2)}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span style={{ position: 'relative', zIndex: 10 }}>Begin Our Story</span>
                </motion.button>
            </div>
        </motion.div>
    )
}

export default WelcomeSection
