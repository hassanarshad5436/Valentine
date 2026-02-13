import { create } from 'zustand'

const useStore = create((set) => ({
    currentSection: 1,
    goToSection: (sectionNumber) => {
        if (sectionNumber < 1 || sectionNumber > 8) return
        set({ currentSection: sectionNumber })
    },
}))

export default useStore
