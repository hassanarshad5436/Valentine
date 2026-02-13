import useStore from '../store/useStore'

function NavigationDots() {
    const currentSection = useStore((state) => state.currentSection)
    const goToSection = useStore((state) => state.goToSection)

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-[1000] bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.3)] border-2 border-rose-500/30">
            {[1, 2, 3, 4, 5, 6].map(num => (
                <div
                    key={num}
                    onClick={() => goToSection(num)}
                    className={`w-4 h-4 rounded-full transition-all duration-200 cursor-pointer ${currentSection === num
                            ? 'bg-gradient-to-r from-rose-600 to-pink-600 scale-150 shadow-[0_0_20px_rgba(236,72,153,0.8)]'
                            : 'bg-rose-400 hover:bg-rose-500 hover:scale-125'
                        }`}
                ></div>
            ))}
        </div>
    )
}

export default NavigationDots
