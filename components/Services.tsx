import Image from "next/image";

type ServiceProps = {
  title: string;
  description: string;
  img?: any;
  reverse?: boolean;
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
    <section className="bg-white py-16">
      <div
        className={`container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}>
        <div className="max-w-sm xl:max-w-2xl">
          <h2 className="text-4xl font-bold lg:text-justify md:md:text-center text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg lg:text-justify md:text-center md:max-w-[424px] md:mx-auto text-gray-600">
            {description}
          </p>
        </div>

        <div className="relative w-full max-w-4xl">
          <div className="absolute w-full h-full bg-gradient-to-tr from-green-200 to-blue-100 rounded-3xl -z-10" />

          <div className="flex justify-center items-end">
            <div className="w-full h-[420px] sm:w-[100%] relative">
              <Image
                layout="fill"
                src={img}
                alt="Service"
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
