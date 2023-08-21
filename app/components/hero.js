"use client";

import { motion } from "framer-motion";
import bg from "../Assets/WorkingPeople.jpg";
import Image from "next/image";

const Hero = () => {
  const handleClick = () => {
    const targetDiv = document.getElementById("targetDiv");
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <section className="relative lg:h-screen md:h-auto">
        <Image
          src={bg}
          alt="Human resource"
          layout="responsive"
          width={1920}
          height={600}
          // Specify a srcSet array for different screen sizes

          className="h-fit w-full bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply"
          loading="lazy"
          quality={100}
        />
        <div className="container mx-auto flex md:flex-row flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 lg:px-16 lg:pt-24">
          <div className="lg:flex-grow md:w-1/2 lg:pr-8 md:pr-4 flex flex-col md:items-start md:text-left  items-center text-center">
            <motion.h1
              className="sm:text-3xl lg:text-5xl mx-4 sm:mx-8 font-medium text-white heading tracking-wider"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Unlocking Human Capital Excellence
            </motion.h1>
            <motion.h1
              className="mt-4 sm:text-3xl lg:text-4xl mx-4 sm:mx-8 font-extrabold heading text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <span className="font-medium sm:text-3xl lg:text-3xl text-white heading">
                with
              </span>{" "}
              Samadhan Enterprise
            </motion.h1>

            <div className="flex justify-center mt-8" onClick={handleClick}>
              <button className="inline-flex text-white bg-transparent border-2 rounded border-white py-2 lg:px-8 md:px-6 focus:outline-none hover:bg-white text-lg md:text-xl hover:text-gray-900 font-semibold transition duration-500 para mx-10">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
