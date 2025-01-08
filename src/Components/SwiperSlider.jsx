import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperSlider = ({ sliderData }) => {
  const slide1 = sliderData[0];
  const slide2 = sliderData[1];
  const slide3 = sliderData[2];
  const slide4 = sliderData[3];
  const slide5 = sliderData[4];

  return (
    <Swiper className="h-[70vh] rounded-xl"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className="h-[70vh]">
        <div className="w-full h-[70vh] rounded-xl relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={slide1.image}
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-color-primary font-bold text-xl md:text-3xl lg:text-6xl text-center">
              {slide1.title}
            </h1>
            <p className="text-center text-color-primary text-lg md:text-xl lg:text-2xl ">
              {slide1.description}
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="h-[70vh]">
        <div className="w-full h-[70vh] rounded-xl relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={slide2.image}
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-color-primary font-bold text-xl md:text-3xl lg:text-6xl text-center">
              {slide2.title}
            </h1>
            <p className="text-center text-color-primary text-lg md:text-xl lg:text-2xl ">
              {slide2.description}
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[70vh] rounded-xl relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={slide3.image}
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-color-primary font-bold text-xl md:text-3xl lg:text-6xl text-center">
              {slide3.title}
            </h1>
            <p className="text-center text-color-primary text-lg md:text-xl lg:text-2xl ">
              {slide3.description}
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[70vh] rounded-xl relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={slide4.image}
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-color-primary font-bold text-xl md:text-3xl lg:text-6xl text-center">
              {slide4.title}
            </h1>
            <p className="text-center text-color-primary text-lg md:text-xl lg:text-2xl ">
              {slide4.description}
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[70vh] rounded-xl relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={slide5.image}
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-color-primary font-bold text-xl md:text-3xl lg:text-6xl text-center">
              {slide5.title}
            </h1>
            <p className="text-center text-color-primary text-lg md:text-xl lg:text-2xl ">
              {slide5.description}
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
