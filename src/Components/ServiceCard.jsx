import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ singleServiceData }) => {
  const {
    id,
    rating,
    counselor,
    duration,
    pricing,
    description,
    category,
    service_name,
    image,
  } = singleServiceData;
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="100"
      className="card bg-base-100  shadow-xl "
    >
      <figure className="h-[300px] w-full">
        <img className="w-full h-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="p-8">
        <h2 className="card-title text-lg md:text-2xl lg:text-3xl ">
          {service_name}
        </h2>
        <p className="text-xl md:text-2xl mb-2 md:mb-3">
          Counselor :<span className=""> {counselor}</span>
        </p>
        <hr className="mb-2" />
        <div className="flex justify-between items-center">
          <p className="font-semibold text-base md:text-xl opacity-80">
            {category}
          </p>
          <div className="group">
            <p className="text-base md:text-xl  bg-color-secondary inline-block rounded-lg w-auto py-1 px-2 transition-transform duration-300 transform group-hover:scale-110 group-hover:shadow-xl">
              $<span className="font-semibold ">{pricing}</span>
            </p>
          </div>
        </div>
        <hr className="mt-2 mb-2 md:mb-3" />
        <p className="text-base md:text-xl mb-2 md:mb-3">
          {description.slice(0, 200)}...
        </p>
        <div className="card-actions justify-center">
          <Link to={`/details/${id}`}>
            <button className="bg-color-secondary rounded-lg py-2 px-4 text-base md:text-xl font-bold hover:scale-110 transition duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
