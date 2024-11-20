import React from "react";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../Components/SectionTitle";
import EventCard from "../Components/EventCard";

const Events = () => {
  const eventData = useLoaderData();
  console.log(eventData);
  return (
    <div>
      <header>
        <SectionTitle sectionTitle={"Our Events & Workshops"}></SectionTitle>
      </header>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5  lg:gap-8 mb-6 md:mb-14">
        {eventData.map((singleEventData) => (
          <EventCard
            key={singleEventData.id}
            singleEventData={singleEventData}
          ></EventCard>
        ))}
      </section>
    </div>
  );
};

export default Events;
