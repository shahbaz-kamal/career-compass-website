import React from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import SwiperSlider from "../Components/SwiperSlider";
import { useActionData, useLoaderData } from "react-router-dom";
import Services from "../Components/Services";

const Home = () => {
  const { sliderData, servicesData } = useLoaderData();
  console.log(sliderData);
  return (
    <div>
      {/* swipper section */}
      <section className="mb-8 md:mb-14">
        <SwiperSlider sliderData={sliderData}></SwiperSlider>
      </section>
      <section className="mb-8 md:mb-14">
        <Services servicesData={servicesData}></Services>
      </section>
    </div>
  );
};

export default Home;
