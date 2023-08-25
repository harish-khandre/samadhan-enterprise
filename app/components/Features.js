"use client";

import Image from "next/image";
import React from "react";
import hiring from "../Assets/hiring.jpg";
import onboard from "../Assets/oboarding.jpg";
import payroll from "../Assets/payroll.jpg";
import compilance from "../Assets/compilance.jpg";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div>
      <section className="text-gray-950 body-font bg-[#f4f1ec]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <motion.h1
                className=" text-4xl font-medium heading mb-3 text-gray-900"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Our Comprehensive Services
              </motion.h1>
              <div className="h-1 w-20 bg-black rounded"></div>
            </div>
          
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <motion.div
                className="bg-[#DED9D5] rounded-lg h-[26rem] overflow-scroll hover:overscroll-contain box"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={hiring}
                  width={500}
                  height={500}
                  alt="content"
                />

                <h2 className="text-2xl text-black font-semibold tracking-wide heading mb-1 px-6">
                  Talent Acquisition & Selection
                </h2>
                <p className="leading-relaxed text-lg para px-6">
                  <span className="font-semibold text-gray-800">
                    Hiring Excellence:
                  </span>{" "}
                  We source and meticulously shortlist job descriptions.
                  <br />
                  <span className="font-semibold text-gray-800">
                    Interview Coordination:
                  </span>{" "}
                  Expertly schedule interviews to find the perfect fit. <br />
                  <span className="font-semibold text-gray-800">
                    Candidate Selection:
                  </span>{" "}
                  Identify the ideal candidates to fulfill your
                  organization&apos;s unique needs.
                </p>
              </motion.div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <motion.div
                className="bg-[#DED9D5] rounded-lg h-[26rem] overflow-scroll hover:overscroll-contain box"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={onboard}
                  width={500}
                  height={500}
                  alt="content"
                />

                <h2 className="text-2xl text-black font-semibold tracking-wide heading mb-1 px-6">
                  Seamless Onboarding
                </h2>
                <p className="leading-relaxed text-lg para px-6">
                  <span className="text-gray-800 font-semibold">
                    Induction Experience:
                  </span>{" "}
                  Smooth onboarding with tailored induction processes. Company
                  Profile Integration: Assimilate candidates with vital company
                  information. <br />
                  <span className=" font-semibold text-gray-800">
                    Seamless Transition:
                  </span>{" "}
                  Simplify migration and onboarding processes for a hassle-free
                  experience.
                </p>
              </motion.div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <motion.div
                className="bg-[#DED9D5] rounded-lg h-[26rem] overflow-scroll hover:overscroll-contain box"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={payroll}
                  width={500}
                  height={500}
                  alt="content"
                />

                <h2 className="text-2xl text-black font-semibold tracking-wide heading mb-1 px-6">
                  Efficient Payrolling
                </h2>
                <p className="leading-relaxed text-lg para px-6">
                  <span className="text-gray-800 font-semibold">
                    Data Collection Simplified:
                  </span>{" "}
                  Gather payroll data through convenient email templates and
                  online forms.
                </p>
              </motion.div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <motion.div
                className="bg-[#DED9D5] rounded-lg h-[26rem] overflow-scroll hover:overscroll-contain box"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Image
                  className="h-40  rounded w-full object-cover object-center mb-6"
                  src={compilance}
                  width={750}
                  height={750}
                  alt="content"
                />

                <h2 className="text-2xl text-black font-semibold tracking-wide heading mb-1 px-6">
                  Compliance & Statutory Management
                </h2>
                <p className="leading-relaxed text-lg para px-6">
                  <span className="text-gray-800 font-semibold">
                    {" "}
                    Proactive Compliance:
                  </span>{" "}
                  Handle Provident Fund, Employee State Insurance, Professional
                  Tax, Labour Welfare Fund, and Income Tax compliance with
                  precision.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Features;
