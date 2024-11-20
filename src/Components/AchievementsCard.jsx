import React from "react";

const AchievementsCard = ({ singleAchievementData }) => {
  const { imageUrl, year, description, issuedBy, title, id } =
    singleAchievementData;
  return (
    <div className="flex flex-col md:flex-row shadow-xl rounded-lg gap-6  md:gap-8 md:w-[80%] lg:w-[80%] mx-auto">
      <figure className=" md:w-[45%] rounded-lg flex items-center justify-center">
        <img
          className="rounded-r-lg rounded-l-lg md:rounded-r-none w-full h-full object-cover"
          src={imageUrl}
          alt="Movie"
        />
      </figure>
      <div className="md:w-[50%] flex flex-col text-center md:text-left p-2 justify-center">
        <h2 className="font-bold text-lg md:text-2xl mb-2 md:mb-3 px-2 md:px-0">
          {title}
        </h2>
        <p className="text-base md:text-xl mb-1 px-2 md:px-0">
          <span className="font-semibold">Issued By:</span>{" "}
          <span>{issuedBy}</span>
        </p>
        <p className="text-base md:text-xl px-2 md:px-0">
          <span className="font-semibold">Recieving Year:</span>{" "}
          <span>{year}</span>
        </p>
        <p className="text-base md:text-xl px-2 md:px-0 pb-6 md:pb-0">
          <span className="font-semibold">Description:</span>{" "}
          <span>{description}</span>
        </p>
      </div>
    </div>
  );
};

export default AchievementsCard;
