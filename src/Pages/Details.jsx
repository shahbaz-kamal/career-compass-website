import React from "react";
import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const Details = () => {
  const { filteredData } = useLoaderData();

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
  } = filteredData;
  console.log(filteredData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-5 md:mb-14">
      <div className="w-full rounded-lg">
        <img
          className="w-full h-full rounded-lg object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          <h2 className="text-lg md:text-xl lg:text-3xl font-bold">
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
          <p className="text-base md:text-lg ">
            <span className="font-semibold">Overview:</span> {description}
          </p>
          <hr className="mt-2 mb-2 md:mb-3" />
          <div className="flex justify-between opacity-80">
            <p className="text-base md:text-lg">
              <span>Date: </span>
              <span>{duration.slice(0, 11)}</span>
            </p>
            <p className="text-base md:text-lg">
              <span>Time: </span>
              <span>{duration.slice(12, 100)}</span>
            </p>
          </div>
          <hr className="mt-2 mb-2 md:mb-3" />
          <p className="font-semibold text-base md:text-lg mb-2 md:mb-3">
            Ratings:
          </p>
          <div className="flex gap-3 items-center text-base md:text-xl">
            <ReactStars
              count={5}
              value={rating} // Pass the dynamic rating here
              size={24}
              isHalf={true} // Enable half-star support
              activeColor="#FF8C47"
              edit={false} // Makes it read-only
            />
            <p className="font-semibold">{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
