import React from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import SwiperSlider from "../Components/SwiperSlider";
import { useActionData, useLoaderData } from "react-router-dom";

const Home = () => {
  const { sliderData } = useLoaderData();
  console.log(sliderData);
  return (
    <div>
      {/* swipper section */}
      <section className="mb-4 md:mb-6">
        <SwiperSlider sliderData={sliderData}></SwiperSlider>
      </section>
    </div>
  );
};

export default Home;
