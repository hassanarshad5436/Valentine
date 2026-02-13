import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Sparkles, Eraser, Palette } from 'lucide-react'
import useStore from '../store/useStore'

function DrawingSection({ isActive }) {
    const goToSection = useStore((state) => state.goToSection)
    const canvasRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)
    const [currentColor, setCurrentColor] = useState('#ec4899')
    const [brushSize, setBrushSize] = useState(8)
    const [showSuccess, setShowSuccess] = useState(false)

    const colors = [
        '#ec4899', '#f43f5e', '#dc2626', '#f59e0b',
        '#eab308', '#8b5cf6', '#3b82f6', '#10b981',
    ]

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect()
            canvas.width = rect.width
            canvas.height = rect.height
        }

        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)
        return () => window.removeEventListener('resize', resizeCanvas)
    }, [isActive])

    const startDrawing = (e) => {
        setIsDrawing(true)
        draw(e)
    }

    const stopDrawing = () => {
        setIsDrawing(false)
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.beginPath()
    }

    const draw = (e) => {
        if (!isDrawing && e.type !== 'mousedown' && e.type !== 'touchstart') return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const rect = canvas.getBoundingClientRect()

        let x, y
        if (e.type.includes('touch')) {
            x = e.touches[0].clientX - rect.left
            y = e.touches[0].clientY - rect.top
        } else {
            x = e.clientX - rect.left
            y = e.clientY - rect.top
        }

        ctx.lineWidth = brushSize
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, brushSize)
        gradient.addColorStop(0, currentColor)
        gradient.addColorStop(1, currentColor + '80')
        ctx.strokeStyle = gradient
        ctx.shadowBlur = 15
        ctx.shadowColor = currentColor

        ctx.lineTo(x, y)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(x, y)
    }

    const clearCanvas = () => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        setShowSuccess(false)
    }

    const handleComplete = () => {
        setShowSuccess(true)
        setTimeout(() => goToSection(6), 2000)
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
                padding: '0.75rem',
                opacity: isActive ? 1 : 0,
                pointerEvents: isActive ? 'auto' : 'none'
            }}
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
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

            <div style={{
                position: 'relative',
                zIndex: 10,
                width: '100%',
                maxWidth: '80rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '0.75rem 0'
            }}>
                <motion.div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem',
                    flexShrink: 0,
                    flexWrap: 'wrap'
                }}>
                    <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                        <Sparkles style={{ color: '#eab308' }} size={window.innerWidth < 640 ? 20 : 28} fill="currentColor" />
                    </motion.div>
                    <motion.h2
                        style={{
                            fontFamily: 'Dancing Script, cursive',
                            fontSize: window.innerWidth < 640 ? '1.5rem' : window.innerWidth < 768 ? '1.875rem' : window.innerWidth < 1024 ? '2.25rem' : '3rem',
                            color: '#e11d48',
                            textAlign: 'center',
                            filter: 'drop-shadow(0 3px 8px rgba(0,0,0,0.3))'
                        }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        Show Me Your Love
                    </motion.h2>
                    <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                        <Heart style={{ color: '#e11d48' }} size={window.innerWidth < 640 ? 20 : 28} fill="currentColor" />
                    </motion.div>
                </motion.div>

                <motion.p
                    style={{
                        textAlign: 'center',
                        color: '#374151',
                        fontSize: window.innerWidth < 640 ? '0.875rem' : window.innerWidth < 768 ? '1rem' : '1.125rem',
                        marginBottom: '1rem',
                        flexShrink: 0,
                        fontWeight: 600
                    }}
                    initial={{ opacity: 0 }}
                    animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Draw "I Love You" on the canvas below 💕
                </motion.p>

                <div style={{ flex: 1, position: 'relative', marginBottom: '1rem', minHeight: '200px' }}>
                    <motion.div
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: window.innerWidth < 768 ? '1rem' : '1.5rem',
                            boxShadow: '0 20px 70px rgba(236, 72, 153, 0.4)',
                            border: '4px solid #fda4af',
                            overflow: 'hidden'
                        }}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                    >
                        <canvas
                            ref={canvasRef}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                width: '100%',
                                height: '100%',
                                cursor: 'crosshair',
                                touchAction: 'none'
                            }}
                            onMouseDown={startDrawing}
                            onMouseMove={draw}
                            onMouseUp={stopDrawing}
                            onMouseLeave={stopDrawing}
                            onTouchStart={startDrawing}
                            onTouchMove={draw}
                            onTouchEnd={stopDrawing}
                        />
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pointerEvents: 'none',
                            opacity: 0.1
                        }}>
                            <p style={{
                                fontFamily: 'Dancing Script, cursive',
                                fontSize: window.innerWidth < 640 ? '2rem' : window.innerWidth < 768 ? '3rem' : '5rem',
                                color: '#e11d48'
                            }}>
                                I Love You
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <Palette style={{ color: '#4b5563' }} size={18} />
                        {colors.map((color) => (
                            <motion.button
                                key={color}
                                style={{
                                    width: window.innerWidth < 768 ? '1.75rem' : '2.25rem',
                                    height: window.innerWidth < 768 ? '1.75rem' : '2.25rem',
                                    borderRadius: '50%',
                                    border: currentColor === color ? '2px solid #1f2937' : '2px solid white',
                                    backgroundColor: color,
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                    cursor: 'pointer',
                                    transform: currentColor === color ? 'scale(1.1)' : 'scale(1)',
                                    transition: 'all 0.2s'
                                }}
                                onClick={() => setCurrentColor(color)}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                        <span style={{ fontSize: window.innerWidth < 768 ? '0.75rem' : '0.875rem', color: '#4b5563', fontWeight: 600 }}>Size:</span>
                        <input
                            type="range"
                            min="3"
                            max="20"
                            value={brushSize}
                            onChange={(e) => setBrushSize(Number(e.target.value))}
                            style={{ width: window.innerWidth < 768 ? '6rem' : '8rem', accentColor: '#f43f5e' }}
                        />
                        <span style={{ fontSize: window.innerWidth < 768 ? '0.75rem' : '0.875rem', color: '#4b5563', fontWeight: 600, width: '1.5rem' }}>{brushSize}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <motion.button
                            style={{
                                padding: window.innerWidth < 768 ? '0.5rem 1rem' : '0.75rem 1.5rem',
                                fontSize: window.innerWidth < 768 ? '0.75rem' : '0.875rem',
                                fontWeight: 'bold',
                                color: 'white',
                                background: 'linear-gradient(to bottom right, #4b5563, #6b7280)',
                                borderRadius: '9999px',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                            onClick={clearCanvas}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Eraser size={16} />
                            Clear
                        </motion.button>

                        <motion.button
                            style={{
                                padding: window.innerWidth < 768 ? '0.5rem 1.5rem' : '0.75rem 2.5rem',
                                fontSize: window.innerWidth < 768 ? '0.875rem' : '1rem',
                                fontWeight: 'bold',
                                color: 'white',
                                background: 'linear-gradient(to bottom right, #ec4899, #f43f5e, #dc2626)',
                                borderRadius: '9999px',
                                boxShadow: '0 10px 30px rgba(236, 72, 153, 0.6)',
                                border: 'none',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onClick={handleComplete}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span style={{ position: 'relative', zIndex: 10 }}>Done! Continue</span>
                        </motion.button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(0, 0, 0, 0.5)',
                            backdropFilter: 'blur(4px)',
                            zIndex: 50
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            style={{
                                background: 'white',
                                borderRadius: '1.5rem',
                                padding: window.innerWidth < 768 ? '1.5rem' : '2.5rem',
                                boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
                                textAlign: 'center'
                            }}
                            initial={{ scale: 0.5, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0.5, rotate: 10 }}
                        >
                            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5, repeat: Infinity }}>
                                <Heart style={{ color: '#e11d48', margin: '0 auto 1rem' }} size={64} fill="currentColor" />
                            </motion.div>
                            <h3 style={{
                                fontFamily: 'Dancing Script, cursive',
                                fontSize: window.innerWidth < 768 ? '2rem' : '3rem',
                                color: '#e11d48',
                                marginBottom: '0.5rem'
                            }}>
                                Beautiful! 💖
                            </h3>
                            <p style={{
                                color: '#4b5563',
                                fontSize: window.innerWidth < 768 ? '1rem' : '1.125rem'
                            }}>
                                Your love shines through...
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default DrawingSection
