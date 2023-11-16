import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingDots = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const calculateScale = (distanceFromBottom) => {
        // Adjust these values based on your desired scaling behavior
        const maxScale = 1.0;
        const minScale = 0.1;
        const maxDistance = 500; // Adjust as needed

        const normalizedDistance = Math.min(distanceFromBottom / maxDistance, 1);
        const scale = maxScale - normalizedDistance * (maxScale - minScale);

        return scale;
    };

    return (
        <>
            <div className={`flex absolute z-10 md:right-20 md:bottom-80`} style={{ transform: `scale(${calculateScale(scrollY + 80)})` }}>
                <motion.div
                    className="w-10 h-10 bg-black rounded-full"
                    whileHover={{ scale: 0.6 }}
                    whileTap={{ scale: 0.9 }}
                ></motion.div>
            </div>
            <div className={`flex absolute z-10 md:right-20 md:bottom-60`} style={{ transform: `scale(${calculateScale(scrollY + 60)})` }}>
                <motion.div
                    className="w-10 h-10 bg-black rounded-full"
                    whileHover={{ scale: 0.3 }}
                    whileTap={{ scale: 0.9 }}
                ></motion.div>
            </div>
            <div className={`flex absolute z-10 md:right-20 md:bottom-40`} style={{ transform: `scale(${calculateScale(scrollY + 40)})` }}>
                <motion.div
                    className="w-10 h-10 bg-black rounded-full"
                    whileHover={{ scale: 0.1 }}
                    whileTap={{ scale: 0.9 }}
                ></motion.div>
            </div>
        </>
    );
};

export default FloatingDots;
