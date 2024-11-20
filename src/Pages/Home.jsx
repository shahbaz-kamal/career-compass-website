import React from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import SwiperSlider from "../Components/SwiperSlider";
import { useActionData, useLoaderData } from "react-router-dom";
import Services from "../Components/Services";
import Achievments from "../Components/Achievments";

const Home = () => {
  const { sliderData, servicesData, achievmentsData } = useLoaderData();

  return (
    <div>
      {/* swipper section */}
      <section className="mb-8 md:mb-14">
        <SwiperSlider sliderData={sliderData}></SwiperSlider>
      </section>
      <section className="mb-8 md:mb-14">
        <Services servicesData={servicesData}></Services>
      </section>
      <section className="mb-8 md:mb-14">
        <Achievments achievmentsData={achievmentsData}></Achievments>
      </section>
    </div>
  );
};

export default Home;
