"use client";
import Image from "next/image";
import contact from "../Assets/contactus.jpg";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div
      className="min-h-screen max-w-full flex flex-wrap justify-center items-center bg-[#f4f1ec] pt-12"
      id="targetDiv"
    >
      <div className="lg:w-[30%] md:w-[50%] w-full">
        <Image
          src={contact}
          alt="sef"
          width={400}
          height={225}
          className="object-contain w-full h-full md:h-auto"
        />
      </div>
      <div className="lg:w-3/5 md:w-full relative lg:ml-12 pb-12 md:pt-8 lg:pt-0 px-4">
        <motion.div
          className="mb-8 md:mb-16 lg:mb-36"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="heading text-4xl text-black font-bold pt-10 ">
            Let&apos;s Start A Conversation
          </h1>
          <p className="para text-xl text-gray-900 font-medium pt-4 md:pt-6  break-words">
            Ready to transform your workforce strategy? Contact us today to
            discuss your unique staffing needs. Our team is eager to help you
            shape the future of your organization.
          </p>
        </motion.div>
        <motion.div
          className="contacts grid grid-cols-1 md:grid-cols-2 gap-4 text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <div className="m-2 md:m-4 para font-semibold ">
            Phone <br />
            <span className="heading font-medium tracking-wide">
              +919319915107
            </span>
          </div>
          <div className="m-2 md:m-4 para font-semibold">
            Email <br />
            <span className="heading font-medium tracking-wide">
              victor_999333@rediffmail.com
            </span>
          </div>
          <div className="m-2 md:m-4 para font-semibold">
            Address <br />
            <span className="heading font-medium tracking-wide">
              C-31A, 1st Floor, Dayal Bagh, Faridabad, Haryana-121009
            </span>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
