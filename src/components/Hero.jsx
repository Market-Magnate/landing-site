import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image } from 'antd';
import heroBg from '../assets/images/heroBg.png';
import marketMagnetLogo from '../assets/images/marketMagnetLogo.png';
import frameOne from '../assets/images/frameOne.png';
import appleAni from '../assets/images/appleAni.png';
import cornAni from '../assets/images/cornAni.png';
import cokeAni from '../assets/images/cokeAni.png';
import cashAni from '../assets/images/cashAni.png';
import playBtn from '../assets/images/playBtn.png';
import salesman from '../assets/images/salesman.png';

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative pt-4 px-2 py-8 md:pt-8 md:px-12 md:py-20" id='hero'
            style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        >

            <div>
                <div className="flex justify-center md:justify-start">
                    <img src={marketMagnetLogo} className="relative h-12 md:h-20"/>
                </div>

                <div className="flex flex-col items-center justify-center mt-16">

                    <motion.div className="relative px-3">
                        <Image preview={false} src={frameOne} className="relative z-10" />

                        <motion.img
                            src={appleAni}
                            className="absolute left-[-65px] top-5 w-0 md:w-48 opacity-0"
                            animate={isHovered ? { x: -30, opacity: 1 } : { x: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.img
                            src={cornAni}
                            className="absolute left-[-60px] bottom-12 w-0 md:w-60 opacity-0"
                            animate={isHovered ? { x: -30, opacity: 1 } : { x: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.img
                            src={cokeAni}
                            className="absolute right-[-65px] top-5 w-0 md:w-48 opacity-0"
                            animate={isHovered ? { x: 30, opacity: 1 } : { x: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.img
                            src={cashAni}
                            className="absolute right-[-50px] bottom-12 w-0 md:w-48 opacity-0"
                            animate={isHovered ? { x: 30, opacity: 1 } : { x: 0, opacity: 0 }}
                            transition={{ duration: 0.1 }}
                        />

                        <div className="absolute top-0 left-0 px-8 md:px-12 w-full h-full flex flex-col items-center text-center z-10">
                            <div className="">
                                <img src={salesman} className="relative h-28 md:h-72 -mt-10 md:-mt-20"/>
                            </div>
                            <div className="text-white text-lg md:text-7xl leading-[20px] md:leading-[70px] font-primary px-0 md:px-20">
                                Become the Ultimate Market Magnate!
                            </div>
                            <div className="text-white text-xs md:text-xl font-secondary px-0 md:px-32 mt-2 md:mt-6">
                                From a small corner store to a bustling supermarket chain – your journey to retail domination starts here!
                            </div>

                            {/* Animated Button */}
                            <div className="relative inline-block  mt-3 md:mt-6">
                                {/* Button */}
                                <div
                                    className="relative cursor-pointer mt-3 md:mt-0"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <img src={playBtn} className="relative h-8 md:h-16"/>
                                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-white font-primary text-sm md:text-4xl">
                                        <div className="">Play</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
            
        </div>
    );
};


export default Hero;
