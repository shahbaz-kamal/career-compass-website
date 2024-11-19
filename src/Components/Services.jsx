import React from "react";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

const Services = ({ servicesData }) => {
  console.log(servicesData);
  return (
    <div>
      <header data-aos="fade-up" data-aos-offset="100" className="">
        <SectionTitle sectionTitle={"Our Services"}></SectionTitle>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
        {servicesData.slice(0, 6).map((singleServiceData) => (
          <ServiceCard
            key={singleServiceData.id}
            singleServiceData={singleServiceData}
          ></ServiceCard>
        ))}
      </section>

      <section className="text-center mt-4 md:mt-6">
        <Link to={"/all-services"}>
          <button
            data-aos="fade-up-right"
            className="text-lg md:text-xl bg-color-primary py-2 px-3 rounded-lg hover:scale-110 transition duration-200"
          >
            View ALL
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Services;
