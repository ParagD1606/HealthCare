import React from "react";
import heroImg from "../assets/doctor.jpg";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const buttonVariant = {
  hidden: { opacity: 0, y: 20 },
  show: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6 },
  }),
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { delay: 0.9, duration: 0.6 } },
};

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-5 py-12 md:py-20 flex flex-col-reverse lg:flex-row items-center gap-12">
      
      {/* Text */}
      <motion.div 
        initial="hidden" 
        animate="show" 
        className="flex-1 text-center lg:text-left"
      >
        <motion.h1
          variants={textVariant}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900"
        >
          Enabling exceptional <span className="text-green-600">telehealth</span> 
          at every touchpoint
        </motion.h1>

        <motion.p
          variants={textVariant}
          className="mt-5 text-gray-600 text-base sm:text-lg max-w-md mx-auto lg:mx-0"
        >
          Innovative telehealth solutions proven to deliver seamless virtual care.
        </motion.p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <motion.button
            variants={buttonVariant}
            custom={0.4}
            className="px-6 py-3 bg-black text-white rounded-full text-base hover:scale-105 transition"
          >
            Get Started
          </motion.button>

          <motion.button
            variants={buttonVariant}
            custom={0.6}
            className="px-6 py-3 bg-green-200 text-green-800 rounded-full text-base hover:scale-105 transition"
          >
            Book Call
          </motion.button>
        </div>

        <motion.div
          variants={buttonVariant}
          custom={0.8}
          className="mt-10 flex items-center justify-center lg:justify-start gap-3"
        >
          <img
            src="https://randomuser.me/api/portraits/women/1.jpg"
            alt=""
            className="w-10 h-10 rounded-full border shadow-sm"
          />
          <p className="text-gray-700 font-medium">1000+ happy patients</p>
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={imageVariant}
        className="flex-1 relative w-full max-w-md mx-auto"
      >
        <motion.img
          src={heroImg}
          alt="doctor"
          className="rounded-3xl shadow-xl w-full object-cover"
        />

        <motion.div
          variants={cardVariant}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 bg-white shadow-md rounded-xl px-4 py-3 flex items-center gap-3 w-[85%] sm:w-auto"
        >
          <div className="w-10 h-10 rounded-full bg-green-200"></div>
          <div>
            <p className="text-sm font-medium">24/7 Support</p>
            <p className="text-xs text-gray-500">Virtual Clinics</p>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
