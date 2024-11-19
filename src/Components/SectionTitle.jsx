import React from "react";

const SectionTitle = ({ sectionTitle }) => {
  return (
    <div>
      <h2
        data-aos="fade-right"
        data-aos-offset="100"
        className="text-center font-bold text-2xl md:text-3xl lg:text-5xl mb-4 md:mb-6"
      >
        {sectionTitle}
      </h2>
    </div>
  );
};

export default SectionTitle;
