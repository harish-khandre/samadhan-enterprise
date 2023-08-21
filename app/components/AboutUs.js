"use client"

import Image from "next/image";
import fimg from "../Assets/tabppl.jpg";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="lg:flex justify-center items-center bg-[#f4f1ec] mx-auto min-h-screen">
      <div className="lg:w-1/2 md:w-full">
        <Image
          src={fimg}
          alt="tableimg"
          className="object-cover w-full h-full md:h-auto"
          layout="responsive"
          width={800}
          height={450}
        />
      </div>
      <div className="lg:w-1/2 md:w-full p-8 lg:pt-72">
        <motion.h1 className="text-black text-3xl lg:text-5xl font-bold mb-4 lg:mb-12 heading tracking-wider text-left" initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }} >
          Who we are
        </motion.h1>
        <p className="para text-lg lg:text-2xl font-medium tracking-wide text-left">
          At Samadhan Enterprise, we are more than just a staffing agency. We
          are a team of dedicated experts committed to reshaping the way you
          approach human capital. We understand the challenges you face in
          managing your workforce. Our mission is to provide innovative
          solutions that empower your organization to thrive.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
