import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import useStore from '../store/useStore'

function ProposalSection({ isActive }) {
    const goToSection = useStore((state) => state.goToSection)
    const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
    const [videoIndex, setVideoIndex] = useState(0)

    // All videos from both folders
    const videos = useMemo(() => [
        "/first/1.mp4", "/first/2.mp4", "/first/3.mp4", "/first/4.mp4", "/first/5.mp4",
        "/first/6.mp4", "/first/7.mp4", "/first/8.mp4", "/first/9.mp4", "/first/10.mp4",
        "/second/11.mp4", "/second/12.mp4", "/second/13.mp4", "/second/14.mp4", "/second/15.mp4",
        "/second/16.mp4", "/second/17.mp4", "/second/18.mp4", "/second/19.mp4", "/second/20.mp4"
    ], [])

    useEffect(() => {
        if (!isActive) return
        const interval = setInterval(() => {
            setVideoIndex((prev) => (prev + 1) % videos.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [isActive, videos.length])

    const dodgeNo = () => {
        const maxX = window.innerWidth / 2
        const maxY = window.innerHeight / 2
        const randomX = (Math.random() - 0.5) * maxX
        const randomY = (Math.random() - 0.5) * maxY
        setNoPosition({ x: randomX, y: randomY })
    }

    const createConfetti = () => {
        const colors = ['#ec4899', '#f472b6', '#fbbf24', '#f87171', '#fb923c']
        for (let i = 0; i < 150; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div')
                confetti.style.cssText = `position:fixed;width:12px;height:12px;border-radius:50%;box-shadow:0 4px 6px rgba(0,0,0,0.1);z-index:9999;left:${Math.random() * window.innerWidth}px;background:${colors[Math.floor(Math.random() * colors.length)]};top:-10%;animation:confetti-fall 2.5s linear forwards`
                document.body.appendChild(confetti)
                setTimeout(() => confetti.remove(), 2500)
            }, i * 8)
        }
    }

    const handleYes = () => {
        createConfetti()
        setTimeout(() => goToSection(8), 1500)
    }

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
                padding: '1.5rem',
                opacity: isActive ? 1 : 0,
                pointerEvents: isActive ? 'auto' : 'none'
            }}
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            {/* Multiple background videos */}
            <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '2px' }}>
                {videos.slice(0, 4).map((video, idx) => (
                    <video
                        key={idx}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: 0.3,
                            filter: 'blur(2px)'
                        }}
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                ))}
            </div>

            {/* Overlay gradient */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))',
                zIndex: 1
            }} />

            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.h2
                    style={{
                        fontFamily: 'Dancing Script, cursive',
                        fontSize: window.innerWidth < 640 ? '2rem' : window.innerWidth < 768 ? '2.5rem' : '4rem',
                        color: '#f43f5e',
                        marginBottom: '2rem',
                        textAlign: 'center',
                        filter: 'drop-shadow(0 3px 8px rgba(0,0,0,0.3))',
                        textShadow: '0 0 20px rgba(244, 63, 94, 0.5)'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                >
                    My Dearest MITHOWW...
                </motion.h2>

                <motion.p
                    style={{
                        fontSize: window.innerWidth < 640 ? '1.5rem' : window.innerWidth < 768 ? '2rem' : '3rem',
                        color: '#f43f5e',
                        fontWeight: 600,
                        textAlign: 'center',
                        marginBottom: '3rem',
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                        textShadow: '0 0 15px rgba(244, 63, 94, 0.4)'
                    }}
                    animate={isActive ? { scale: [1, 1.03, 1] } : { scale: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    Will you be my Valentine? ❤️
                </motion.p>

                <div style={{ display: 'flex', flexDirection: window.innerWidth < 640 ? 'column' : 'row', gap: '2rem' }}>
                    <motion.button
                        style={{
                            padding: window.innerWidth < 640 ? '0.75rem 2rem' : '1rem 2.5rem',
                            fontSize: window.innerWidth < 640 ? '1rem' : '1.125rem',
                            fontWeight: 600,
                            color: 'white',
                            background: 'linear-gradient(to bottom right, #4b5563, #6b7280)',
                            borderRadius: '9999px',
                            boxShadow: '0 8px 20px rgba(100,100,100,0.5)',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={dodgeNo}
                        onTouchStart={dodgeNo}
                        animate={{ x: noPosition.x, y: noPosition.y }}
                        transition={{ type: "spring", stiffness: 500, damping: 20 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        No
                    </motion.button>

                    <motion.button
                        style={{
                            padding: window.innerWidth < 640 ? '1rem 3rem' : '1.25rem 3.5rem',
                            fontSize: window.innerWidth < 640 ? '1.125rem' : '1.25rem',
                            fontWeight: 'bold',
                            color: 'white',
                            background: 'linear-gradient(to bottom right, #ec4899, #f43f5e, #dc2626)',
                            borderRadius: '9999px',
                            boxShadow: '0 12px 40px rgba(236, 72, 153, 0.7), 0 0 30px rgba(244, 114, 182, 0.5)',
                            border: 'none',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        onClick={handleYes}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span style={{ position: 'relative', zIndex: 10 }}>Yes!</span>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    )
}

export default ProposalSection
