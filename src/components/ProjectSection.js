import React from "react";

const ProjectSection = ({ number, name, paragraph, date }) => {
  return (
    <div className="py-10">
      <div className="md:flex md:justify-between">
        <div className="md:flex md:flex-col md:items-center gap-y-4 w-[200px]">
          <div className="w-10 h-10 rounded-full bg-blue flex justify-center items-center text-[10px]">
            {number}
          </div>
          <div className="py-2 md:py-0">
            <p className="text-white font-bold text-[20px]">{name}</p>
          </div>
        </div>
        <div className="md:flex md:flex-col gap-y-4 w-[200px]">
          <h3 className="text-white text-[10px]">{date}</h3>
          <p className="text-white text-[9px] font-poppins py-2 md:py-0">
            {paragraph}
          </p>
        </div>
        <div className="bg-light-blue rounded-[10px] w-[250px] md:w-[300px] h-[100px] mt-4 md:mt-0"></div>
      </div>
    </div>
  );
};

export default ProjectSection;
