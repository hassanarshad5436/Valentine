import { useEffect } from 'react'

function FloatingParticles() {
    useEffect(() => {
        const createParticle = () => {
            const particle = document.createElement('div')
            const types = ['✨', '💫', '⭐', '💖', '🎀']
            particle.innerHTML = types[Math.floor(Math.random() * types.length)]
            particle.className = 'fixed pointer-events-none z-[2] animate-float'
            particle.style.left = Math.random() * window.innerWidth + 'px'
            particle.style.top = Math.random() * window.innerHeight + 'px'
            particle.style.fontSize = Math.random() * 1 + 0.5 + 'rem'
            particle.style.opacity = Math.random() * 0.6 + 0.2
            particle.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`
            document.body.appendChild(particle)

            setTimeout(() => particle.remove(), 8000)
        }

        const interval = setInterval(createParticle, 500)
        return () => clearInterval(interval)
    }, [])

    return null
}

export default FloatingParticles
