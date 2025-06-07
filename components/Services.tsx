"use client";

import Image from "next/image";
import {motion} from "framer-motion";

type ServiceProps = {
  title: string;
  description: string;
  img?: any;
  reverse?: boolean;
};

const textVariants = {
  hidden: {opacity: 0, x: -100},
  visible: {opacity: 1, x: 0},
};

const imageVariants = {
  hidden: {opacity: 0, x: 100},
  visible: {opacity: 1, x: 0},
};

function Services() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6  md:px-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 lg:text-5xl mb-2">
          Our Services
        </h2>
        <div className="w-[100px] h-[4px] bg-orange-400 mx-auto mb-10"></div>

        <ServiceComponent
          title="Direct Recruiting"
          description=" We handle the candidate sourcing and screening process, ensuring
          that Carriers receive exclusively interested and pre-qualified
          drivers."
          img={"/img/serviceImage1.svg"}
          reverse={false}
        />
        <ServiceComponent
          title="Job Board"
          description="Advertise your company and your job offers on our platform.
          Increase your visibility among the thousands of truck drivers."
          img={"/img/serviceImage2.svg"}
          reverse={true}
        />
        <ServiceComponent
          title="Driver Job Placement"
          description="Are you a driver seeking employment? We guarantee to place you in
          the best-suited company in the shortest time possible."
          img={"/img/serviceImage3.png"}
          reverse={false}
        />
        <ServiceComponent
          title="Recruiting ATS Platform"
          description="A modern platform to streamline your recruitment process, designed
          for efficiency and scalability."
          img={"/img/serviceImage4.svg"}
          reverse={true}
        />

        <ServiceComponent
          title="Referral Program"
          description="Earn rewards for recommending qualified drivers. Help connect
          talent with opportunity."
          img={"/img/serviceImage6.svg"}
          reverse={false}
        />
      </div>
    </div>
  );
}

const ServiceComponent = ({
  title,
  description,
  img,
  reverse = false,
}: ServiceProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
      className="bg-white lg:py-16 md:py-16 py-10">
      <div
        className={`container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}>
        <motion.div
          variants={textVariants}
          transition={{duration: 0.6, ease: "easeOut"}}
          className="xl:text-justify text-center xl:max-w-2xl md:max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold lg:text-justify text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">{description}</p>
        </motion.div>

        <motion.div
          variants={imageVariants}
          transition={{duration: 0.6, ease: "easeOut"}}
          className="relative w-full max-w-4xl">
          <div className="absolute w-full h-full bg-gradient-to-tr from-green-200 to-blue-100 rounded-3xl -z-10" />
          <div className="flex justify-center items-end">
            <div className="w-full lg:h-[420px] h-[300px] sm:h-[420px] relative">
              <Image
                layout="fill"
                src={img}
                alt="Service"
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
