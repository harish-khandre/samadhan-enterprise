"use client"
import { motion } from "framer-motion";

const Benefits = () => {
  const benefitItems = [
    {
      title: "Complete HR management of Associates",
    },
    {
      title: "Statutory Compliance & Audit management: 100%",
    },
    {
      title: "On time Payroll & pay slips",
    },
    {
      title: "On time recruiting",
    },
    {
      title: "Associate MIS on a monthly basis",
    },
    {
      title: "Transparency in operations",
    },
  ];

  const associateBenefitItems = [
    {
      title: "Structured Induction",
    },
    {
      title: "Rewards & Recognition Program in conjunction with Organization",
    },
    {
      title: "ID cards",
    },
    {
      title: "Zero balance salary accounts",
    },
    {
      title: "Interaction with associates on a regular basis",
    },
  ];

  const emergencyBenefitItems = [
    {
      title: "Loans & Advances – Emergencies",
    },
    {
      title: "Query resolution within 24 hrs",
    },
    {
      title: "Statutory compliances – PF/ ESI/ PT/ Insurance",
    },
    {
      title: "Cashless Insurance Cards",
    },
  ];

  const fadeInUpVariant = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <div>
      <section className="text-gray-950 bg-[#f4f1ec] para  ">
        <div className="container px-5 py-12 mx-auto">
          <div className="text-center mb-20">
            <motion.h1
              className="text-4xl font-bold text-center heading text-gray-900 mb-4"
              {...fadeInUpVariant}
            >
              Why Choose Samadhan Enterprise?
            </motion.h1>
            <motion.p
              className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto para font-medium"
              {...fadeInUpVariant}
              transition={{ duration: 1 }}
            >
              At Samadhan Enterprise, we go beyond traditional staffing agencies. Here&apos;s why we should be your partner of choice:
            </motion.p>
          </div>
          <div className="flex flex-wrap -m-4 text-center justify-evenly ">
            <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
              <h2 className="font-semibold heading tracking-widest text-gray-900 mb-4 text-2xl text-center sm:text-left">
                Benefits To Organisations
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-3 text-xl p-2 ">
                {benefitItems.map((item, index) => (
                  <a key={index}>
                    <span className="bg-white text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-semibold heading tracking-widest text-gray-900 mb-4 text-2xl text-center sm:text-left">
                Benefits To Associates
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-3 text-xl p-2 ">
                {associateBenefitItems.map((item, index) => (
                  <a key={index}>
                    <span className="bg-white text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-semibold heading tracking-widest text-gray-900 mb-4 text-2xl text-center sm:text-left">
                Benefits To Associates
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-3 text-xl p-2  ">
                {emergencyBenefitItems.map((item, index) => (
                  <a key={index}>
                    <span className="bg-white text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
