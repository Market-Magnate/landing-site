import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Image } from 'antd';
import featuresBg from '../assets/images/featuresBg.png';
import design from '../assets/images/design.png';
import stock from '../assets/images/stock.png';
import grow from '../assets/images/grow.png';
import challenges from '../assets/images/challenges.png';
import expand from '../assets/images/expand.png';
import cartoonicLady from '../assets/images/cartoonicLady.png';
import testimonialFrame from '../assets/images/testimonialFrame.png';
import dummyDp from '../assets/images/dummyDp.png';
import footerBg from '../assets/images/footerBg.png';
import footerLogo from '../assets/images/footerLogo.png';
import fb from '../assets/images/fb.png';
import x from '../assets/images/x.png';
import insta from '../assets/images/insta.png';
import socialPlate from '../assets/images/socialPlate.png';
import { useEffect } from 'react';

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  hiddenBottom: { opacity: 0, y: 100 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1.4 } },
};

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const whyRef = useRef(null);
  const isWhyInView = useInView(whyRef, { once: true, amount: 0.6 });

  const testimonialRef = useRef(null);
  const isTestimonialInView = useInView(testimonialRef, { once: true, amount: 0.8 });

  return (
    <>
      {/* Features Section */}
      <div
        ref={ref}
        className="relative bg-cover bg-start min-h-screen flex flex-col items-center pt-6 pb-28 md:pb-40 -mt-4 z-10"
        style={{ backgroundImage: `url(${featuresBg})` }}
      >
        <div className="relative text-center my-6 md:my-16 mx-4">
          <div className="flex items-center justify-center text-white text-3xl md:text-5xl font-semibold mb-3 font-primary">
            key features
          </div>
        </div>

        {/* Features Cards */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 px-4 md:px-8 lg:w-[80%] lg:mx-auto">
          {[
            {
              src: design,
              title: "Design & Customize",
              description:
                "Create your dream supermarket with unique layouts, decorations, and themes.",
              initial: "hiddenLeft",
            },
            {
              src: stock,
              title: "Stock & Sell",
              description:
                "Offer a wide variety of products, from fresh produce to gourmet snacks, to keep your customers coming back.",
              initial: "hiddenBottom",
            },
            {
              src: grow,
              title: "Manage & Grow",
              description:
                "Hire staff, manage finances, and expand your store to become the ultimate market magnate.",
              initial: "hiddenRight",
            },
            {
              src: challenges,
              title: "Complete Challenges",
              description:
                "Take on daily tasks and goals to earn rewards and unlock new features.",
              initial: "hiddenBottom",
            },
            {
              src: expand,
              title: "Upgrade & Expand",
              description:
                "Unlock advanced equipment, expand your store, and dominate the retail world.",
              initial: "hiddenBottom",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#191919E5] rounded-3xl border-2 border-[#E0BA72] px-1 py-4 md:p-8 bg-cover w-full max-w-[300px] flex-[0_1_48%] lg:flex-[0_1_33%]"
              initial={feature.initial}
              animate={isInView ? "visible" : feature.initial}
              variants={cardVariants}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center justify-center mb-4">
                  <img src={feature.src} className="w-[100px] md:w-[150px]" />
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="text-[#FEE5CD] text-lg md:text-4xl font-primary max-w-full md:max-w-[160px] leading-tight">
                    {feature.title}
                  </div>
                  <div className="text-white text-[10px] leading-tight max-w-[200px]">
                    {feature.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        {/* Why Choose Market Magnate? */}
        <div ref={whyRef} className='flex flex-col md:flex-row gap-10 my-16 md:my-24 items-center lg:w-[80%] lg:mx-auto px-4 md:px-8'>
          <div className='flex flex-col md:w-1/2'>
            <div className='text-[#FEE5CD] text-3xl md:text-5xl font-primary text-center md:text-left'>Why Choose Market Magnate?</div>
            <div className="flex flex-col gap-2 mt-4">
              {[
                {
                  title: 'Endless Fun',
                  description: 'A perfect blend of strategy, simulation, and creativity.',
                },
                {
                  title: 'For Everyone',
                  description: 'Easy to play, hard to put down – perfect for casual and hardcore gamers alike.',
                },
                {
                  title: 'Regular Updates',
                  description: 'New features, products, and challenges added regularly to keep the excitement alive.',
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col bg-[#FEE5CD] rounded-3xl p-4 text-[#B47353] border-[4px] border-[#B47353]"
                  initial="hiddenBottom"
                  animate={isWhyInView ? "visible" : "hiddenBottom"}
                  variants={cardVariants}
                >
                  <div className=' text-lg md:text-3xl font-primary'>{item.title}</div>
                  <div className=' text-sm md:text-lg font-[550]'>{item.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            className='md:w-1/2'
            initial="hiddenRight"
            animate={isWhyInView ? "visible" : "hiddenRight"}
            variants={cardVariants}
          >
            <img src={cartoonicLady} className='' />
          </motion.div>
        </div>


        {/* Testimonials*/}
        <div ref={testimonialRef}>
          <div className='flex flex-col items-center justify-center text-white text-3xl md:text-5xl font-semibold mb-6 md:mb-3 font-primary'>
            Testimonials
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-6 px-4 md:px-8">
            {[
              {
                text: `“Market Magnate is addictive! I love building my store and watching it grow. Highly recommend!” `,
                initial: "hiddenLeft",
                dp: dummyDp,
                name: "Sarah L.",
              },
              {
                text: `“The perfect game for anyone who loves management sims. So much to do and explore!"`,
                initial: "hiddenRight",
                dp: dummyDp,
                name: "Jake T.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="relative w-full max-w-md md:max-w-xl flex flex-col items-center bg-cover"
                initial={feature.initial}
                animate={isTestimonialInView ? "visible" : feature.initial}
                variants={cardVariants}
              >
                <Image preview={false} src={testimonialFrame} className="w-full h-auto" />
                {/* Content wrapper */}
                <div className="absolute inset-0 flex flex-col items-center justify-between px-16 py-20 md:pb-32 md:pt-24 text-[#8D3915]">
                  {/* Text Section */}
                  <div className="flex-1 flex justify-center text-center">
                    <p className="text-lg md:text-4xl font-primary leading-tight"> {feature.text} </p>
                  </div>
                  {/* User info & border */}
                  <div className="w-full flex flex-col items-center">
                    <div className="flex gap-2 items-center">
                      <Image preview={false} src={feature.dp} width={50} className="rounded-full" />
                      <div className="text-lg md:text-3xl font-primary">{feature.name}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>


      {/* Footer Section */}
      <div className="relative">
          <img preview={false} src={footerBg} width={'100%'} className="min-h-[200px]"/>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center">
            <div className="flex justify-center w-full">
              <img preview={false} src={footerLogo} className="-mt-[46px] md:-mt-28 max-h-[100px] md:max-h-[240px] z-10" />
            </div>
            <div className="flex flex-wrap md:flex-row justify-center gap-4 md:gap-6 mt-4 md:mt-6">
              {[
                { img: fb, text: "Facebook" },
                { img: x, text: "Twitter" },
                { img: insta, text: "Instagram" },
              ].map((social, idx) => (
                <div key={idx} className="relative text-center my-0 md:my-16 mx-4">
                  {/* Image as background */}
                  <img src={socialPlate} className="w-[130px] md:w-[250px]" />
                  
                  {/* Content inside the image */}
                  <div className="absolute inset-0 flex gap-3 items-center justify-center">
                    <img src={social.img} className="w-5 md:w-10" />
                    <div className="text-white text-xl md:text-4xl font-primary leading-none">{social.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </>
  );
};

export default Features;
