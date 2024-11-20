import React from "react";
import ReactStars from "react-rating-stars-component";

const SuccessCard = ({ singleSuccessData }) => {
  const { date, rating, testimonial, description, career_goal, name, image } =
    singleSuccessData;
  const fName = name.split(" ")[0];
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="100"
      className="card bg-base-200  shadow-xl "
    >
      <figure className="px-10 pt-10 h-[300px] w-full">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl w-full
          h-full
          object-cover"
        />
      </figure>
      <div className="px-10 pb-10 mt-5">
        <h2 className="text-xl md:text-2xl font-semibold">{name}</h2>
        <p className="text-base md:text-xl ">
          <span className="font-semibold">Career Goal:</span>{" "}
          <span className="">{career_goal}</span>
        </p>
        <hr className="my-3 border-t-1 border-t-color-primary opacity-60" />
        <p className="text-base md:text-xl">
          <span className="font-semibold">Overview: </span>
          <span>{description}</span>
        </p>
        <hr className="my-3 border-t-1 border-t-color-primary opacity-60" />
        <p className="text-base md:text-xl">
          <span className="font-semibold">Voice of {fName} : </span>
          <span className="italic">❝{testimonial}❞</span>
        </p>
        <hr className="my-3 border-t-1 border-t-color-primary opacity-60" />
        <p className="text-base md:text-xl flex justify-between">
          <span className="font-semibold">Rating by {fName} : </span>
          <div className="flex gap-2 items-center">
            <span>
              <ReactStars
                count={5}
                value={rating} // Pass the dynamic rating here
                size={24}
                isHalf={true} // Enable half-star support
                activeColor="#FF8C47"
                edit={false} // Makes it read-only
              />
            </span>
            <span className="font-[500]">({rating}/5)</span>
          </div>
        </p>
      </div>
    </div>
  );
};

export default SuccessCard;
