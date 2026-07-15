import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingDots = () => {
    const { scrollYProgress } = useScroll();
    
    // As we scroll down, scale goes from 1 to 0
    const scale1 = useTransform(scrollYProgress, [0, 0.5], [1, 0.1]);
    const scale2 = useTransform(scrollYProgress, [0, 0.5], [0.8, 0.1]);
    const scale3 = useTransform(scrollYProgress, [0, 0.5], [0.6, 0.1]);

    return (
        <div className="absolute inset-0 pointer-events-none flex justify-end items-end p-10 md:p-20 overflow-hidden">
            <motion.div 
                style={{ scale: scale1, opacity: scale1 }}
                className="absolute md:right-32 md:bottom-80 right-10 bottom-40"
            >
                <motion.div
                    className="w-10 h-10 md:w-16 md:h-16 bg-black/80 rounded-full"
                    whileHover={{ scale: 1.2 }}
                />
            </motion.div>
            
            <motion.div 
                style={{ scale: scale2, opacity: scale2 }}
                className="absolute md:right-24 md:bottom-56 right-6 bottom-28"
            >
                <motion.div
                    className="w-8 h-8 md:w-12 md:h-12 bg-black/60 rounded-full"
                    whileHover={{ scale: 1.2 }}
                />
            </motion.div>
            
            <motion.div 
                style={{ scale: scale3, opacity: scale3 }}
                className="absolute md:right-16 md:bottom-32 right-2 bottom-16"
            >
                <motion.div
                    className="w-6 h-6 md:w-8 md:h-8 bg-red-600/60 rounded-full"
                    whileHover={{ scale: 1.2 }}
                />
            </motion.div>
        </div>
    );
};

export default FloatingDots;
