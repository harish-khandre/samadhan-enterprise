"use client";

import React from "react";
import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <div>
      <section className="text-gray-950 bg-[#f4f1ec] para  ">
        <div className="container px-5 py-12 mx-auto">
          <div className="text-center mb-20">
            <motion.h1
              className="sm:text-3xl lg:text-4xl font-bold text-center heading text-gray-900 mb-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Why Choose Samadhan Enterprise?
            </motion.h1>
            <motion.p
              className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto para font-medium"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{  duration: 1 }}
            >
              At Samadhan Enterprise, we go beyond traditional staffing
              agencies. Here&apos;s why we should be your partner of choice:
            </motion.p>
          </div>
          <div className="flex flex-wrap -m-4 text-center justify-evenly ">
            <motion.div
              className="p-4 lg:w-1/3 sm:w-1/2 w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="font-semibold heading tracking-widest text-gray-900 mb-4 text-2xl text-center sm:text-left">
                Benefits To Organisations
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-3 text-xl  p-2 ">
                <a>
                  <span className="bg-white text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center  ">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Complete HR management of Associates
                </a>
                <a>
                  <span className="bg-white text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Statutory Compliance & Audit management : 100%
                </a>
                <a>
                  <span className="bg-white text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  On time Payroll & pay slips
                </a>
                <a>
                  <span className="bg-white text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  On time recruiting
                </a>
                <a>
                  <span className="bg-white text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Associate MIS on a monthly basis.
                </a>
                <a>
                  <span className="bg-white text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Transparency in operations.
                </a>
              </nav>
            </motion.div>
            <motion.div
              className="p-4 lg:w-1/4 sm:w-1/2 w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-semibold heading tracking-widest text-gray-900 mb-4 text-2xl text-center sm:text-left">
                Benefits To Associates
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-3 text-xl  p-2 ">
                <a>
                  <span className="bg-white text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Structured Induction
                </a>
                <a>
                  <span className="bg-white text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Rewards & Recognition Program in conjunction with Organization
                </a>
                <a>
                  <span className="bg-white text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  ID cards
                </a>
                <a>
                  <span className="bg-white text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>{" "}
                  Zero balance salary accounts
                </a>
                <a>
                  <span className="bg-white text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Interaction with associates on a regular basis.
                </a>
              </nav>
            </motion.div>
            <motion.div
              className="p-4 lg:w-1/4 sm:w-1/2 w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-semibold heading tracking-widest text-gray-900 mb-4 text-2xl text-center sm:text-left">
                Benefits To Associates
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-3 text-xl  p-2  ">
                <a>
                  <span className="bg-white text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Loans & Advances – Emergencies
                </a>
                <a>
                  <span className="bg-white text-black w-4 h-4 mr-2  rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>{" "}
                  Query resolution within 24 hrs
                </a>
                <a>
                  <span className="bg-white text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Statutory compliances – PF/ ESI/ PT/ Insurance
                </a>
                <a>
                  <span className="bg-white text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Cashless Insurance Cards
                </a>
              </nav>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
