import { useEffect, useState } from "react";


export const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Überwacht das Scrollen und zeigt den Button an, wenn gescrollt wird und blendet ihn aus, wenn oben
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100); // Button anzeigen, wenn mehr als 100px gescrollt wird
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        isVisible && (
            <button className="scroll-up-button" onClick={scrollToTop}>
                <strong>↑</strong>
            </button>
        )
    );
};