import { useEffect } from 'react'
import gsap from 'gsap'

function FallingHearts() {
    useEffect(() => {
        const createFallingHeart = () => {
            const heart = document.createElement('div')
            heart.textContent = '❤️'
            heart.className = 'fixed text-valentine-pink pointer-events-none z-[1] opacity-60'
            heart.style.left = Math.random() * window.innerWidth + 'px'
            heart.style.fontSize = Math.random() * 1.2 + 0.8 + 'rem'
            heart.style.filter = `blur(${Math.random() * 1.5}px) drop-shadow(0 0 6px rgba(255, 107, 157, 0.5))`
            heart.style.top = '-10%'
            heart.style.willChange = 'transform'
            document.body.appendChild(heart)

            gsap.to(heart, {
                y: window.innerHeight + 80,
                opacity: 0,
                rotation: Math.random() * 180,
                duration: Math.random() * 2 + 3,
                ease: "none",
                onComplete: () => heart.remove()
            })
        }

        const interval = setInterval(createFallingHeart, 400)
        return () => clearInterval(interval)
    }, [])

    return null
}

export default FallingHearts
