import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Components/ServiceCard";
import SectionTitle from "../Components/SectionTitle";

const AllServices = () => {
  const servicesData = useLoaderData();
  console.log(servicesData);
  return (
    <div>
      <section>
        <SectionTitle sectionTitle={"All Services"}></SectionTitle>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-14">
        {servicesData.map((singleServiceData) => (
          <ServiceCard singleServiceData={singleServiceData}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
