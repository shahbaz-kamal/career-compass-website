import React from "react";
import ReactStars from "react-rating-stars-component";
import { FaPeopleGroup } from "react-icons/fa6";

const EventCard = ({ singleEventData }) => {
  const {
    rating,
    organizer,
    time,
    date,
    pricing,
    description,
    category,
    title,
    image,
    total_attended,
  } = singleEventData;

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-offset="100"
        className="card bg-base-200  shadow-xl "
      >
        <figure className="px-5 md:px-8 lg:px-10 pt-5 md:pt-8 lg:pt-10 h-[400px] w-full">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-full
          h-full
          object-cover"
          />
        </figure>
        <div className="px-5 md:px-8 lg:px-10 pb-5 md:pb-8 lg:pb-10 mt-5">
          <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
          <div className="flex justify-between items-center">
            <p className="text-base md:text-xl ">
              <span className="font-semibold">Organizer:</span>{" "}
              <span className="">{organizer}</span>
            </p>
            {/* <p className="bg-color-secondary rounded-lg py-1 px-3 text-base md:text-xl font-semibold">
              $ {pricing}
            </p> */}
          </div>
          <hr className="my-2 border-t-1 border-t-color-primary opacity-60" />
          <div className="flex justify-between items-center">
            <p className="text-base md:text-xl ">
              <span className="font-semibold">Category:</span>{" "}
              <span className="">{category}</span>
            </p>
            <p className="text-base md:text-xl flex items-center gap-2">
              <span className="font-semibold">
                <FaPeopleGroup color=""></FaPeopleGroup>
              </span>{" "}
              <span className="">{total_attended}</span>
            </p>
            <p className="bg-color-secondary rounded-lg py-1 px-3 text-base md:text-xl font-semibold">
              $ {pricing}
            </p>
          </div>
          <hr className="my-2 border-t-1 border-t-color-primary opacity-60" />
          <p className="text-base md:text-xl">
            <span className="font-semibold">Overview: </span>
            <span>{description}</span>
          </p>
          <hr className="my-3 border-t-1 border-t-color-primary opacity-60" />
          <div className="flex justify-between items-center">
            <p className="text-base md:text-xl ">
              <span className="font-semibold">Date:</span>{" "}
              <span className="">{date}</span>
            </p>
            <p className="text-base md:text-xl ">
              <span className="font-semibold">Time:</span>{" "}
              <span className="">{time}</span>
            </p>
          </div>
          <hr className="my-3 border-t-1 border-t-color-primary opacity-60" />
          <p className="text-base md:text-xl flex justify-between">
            <span className="font-semibold">Rating by Attendes : </span>
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
    </div>
  );
};

export default EventCard;
