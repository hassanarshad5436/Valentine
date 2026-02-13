import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function FallingRoses() {
    const containerRef = useRef(null)

    useEffect(() => {
        const createRose = () => {
            const rose = document.createElement('div')
            rose.className = 'fixed pointer-events-none z-[1]'
            rose.innerHTML = '🌹'
            rose.style.left = Math.random() * window.innerWidth + 'px'
            rose.style.fontSize = Math.random() * 1.5 + 1 + 'rem'
            rose.style.filter = `drop-shadow(0 0 8px rgba(239, 68, 68, 0.6))`
            rose.style.top = '-10%'
            rose.style.willChange = 'transform'
            document.body.appendChild(rose)

            gsap.to(rose, {
                y: window.innerHeight + 100,
                opacity: 0,
                rotation: Math.random() * 360,
                duration: Math.random() * 3 + 4,
                ease: "none",
                onComplete: () => rose.remove()
            })
        }

        const interval = setInterval(createRose, 600)
        return () => clearInterval(interval)
    }, [])

    return null
}

export default FallingRoses
