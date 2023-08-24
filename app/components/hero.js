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
      <section className="relative w-full h-screen ">
        <Image
          src={bg}
          alt="Human resource"
          width={1920}
          height={600}
          className="h-screen  bg-no-repeat bg-cover object-cover w-full "
          priority={true}
          quality={100}
        />
        <div className="container mx-auto flex md:flex-row flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 lg:px-16 lg:pt-24">
          <div className="lg:flex-grow md:w-1/2 lg:pr-8 md:pr-4 flex flex-col md:items-start md:text-left items-center text-center">
            <motion.h1
              className=" mx-4  text-white heading tracking-wider title-font sm:text-4xl text-5xl mb-4 font-medium "
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Unlocking Human Capital Excellence
            </motion.h1>
            <motion.h1
              className="mt-4 sm:text-4xl text-5xl mx-4 sm:mx-8 font-medium heading text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
            >
              {" "}
              with &nbsp;
              <span className="md:text-4xl lg:text-5xl text-white heading  title-font sm:text-4xl text-5xl mb-4 font-extrabold">
                Samadhan Enterprise
              </span>{" "}
            </motion.h1>

            <div className="flex justify-center mt-8" onClick={handleClick}>
              <button className="inline-flex text-white bg-transparent border-2 rounded border-white py-2 px-8 focus:outline-none hover:bg-white  hover:text-gray-900 font-semibold transition duration-500 para mx-10  text-base ">
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
