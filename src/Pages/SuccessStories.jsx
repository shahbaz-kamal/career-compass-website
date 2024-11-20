import React from "react";
import SectionTitle from "../Components/SectionTitle";
import { useLoaderData } from "react-router-dom";
import SuccessCard from "../Components/SuccessCard";

const SuccessStories = () => {
  const successData = useLoaderData();
  console.log(successData);
  return (
    <div>
      <header>
        <SectionTitle sectionTitle={"Success Stories"}></SectionTitle>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mb-6 md:mb-14">
        {successData.map((singleSuccessData) => (
          <SuccessCard
            key={singleSuccessData.id}
            singleSuccessData={singleSuccessData}
          ></SuccessCard>
        ))}
      </section>
    </div>
  );
};

export default SuccessStories;
