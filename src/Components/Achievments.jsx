import React from "react";
import SectionTitle from "./SectionTitle";
import AchievementsCard from "./AchievementsCard";

const Achievments = ({ achievmentsData }) => {
  return (
    <div>
      <header>
        <SectionTitle sectionTitle={"Our Achievments"}></SectionTitle>
      </header>
      <section className="flex flex-col gap-5 md:gap-8">
        {achievmentsData.map((singleAchievementData) => (
          <AchievementsCard
            key={singleAchievementData.id}
            singleAchievementData={singleAchievementData}
          ></AchievementsCard>
        ))}
      </section>
    </div>
  );
};

export default Achievments;
