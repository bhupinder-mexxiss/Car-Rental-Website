import { useEffect, useRef, useState } from 'react';
import { car, light } from '../../assets/images';
import carSound from "../../assets/carSound.mp3";

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hideOnClick, setHideOnClick] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null); // 🎧 Audio reference

    const handleScroll = () => {
        if (window.scrollY > 1500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

        // 🔇 Stop sound if scrolled to top
        if (window.scrollY < 10 && audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    const scrollToTop = () => {
        // 🎵 Play sound
        audioRef.current = new Audio(carSound);
        audioRef.current.play();

        // 🆙 Animate
        setHideOnClick(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // ⏱ Hide button after animation
        setTimeout(() => {
            setIsVisible(false);
            setHideOnClick(false);

            // 🔇 Just in case scroll didn't trigger
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        }, 1200); // match animation duration
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible && !hideOnClick) return null;

    return (
        <div
            onClick={scrollToTop}
            className={`fixed left-4 w-16 group cursor-pointer z-50 transition-all duration-1000
            ${hideOnClick ? 'bottom-[90%] opacity-0' : 'bottom-5 opacity-100'}
        `}
        >
            <img
                src={light}
                alt=""
                className='w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
            />
            <img src={car} alt="" className='w-full' />
        </div>
    );
};

export default GoToTop;
