import React from "react";
import ProjectSection from "../components/ProjectSection";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";

const Projects = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="font-spaceGrotesk">
      <div className="bg-primary w-full">
        <div className="w-5/6 mx-auto py-[50px]">
          <div className="flex justify-between md:mb-4">
            <h1 className="text-white text-[30px] font-bold">Projects</h1>
            {isAboveSmallScreens ? (
              <div className="flex justify-center items-center">
                <Link
                  className="md:px-6 md:py-2 border-[1px] border-white text-white text-[8px] rounded-[7px]"
                  to="/"
                >
                  READ MORE PROJECTS
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
          <ProjectSection
            number="01"
            data="2022"
            name="Uwang Corp."
            paragraph="Uwang Corporation, a leading provider of financial services, was struggling to keep up with the demands of its growing business."
          />
          <hr className="full text-white" />
          <ProjectSection
            number="02"
            data="2022"
            name="Mika Medika"
            paragraph="Mika Medika Healthcare, a large hospital network, was concerned about the security of their patient data. We help them with their cyber security."
          />
          <hr className="full text-white" />
          <ProjectSection
            number="03"
            data="2022"
            name="DEF Manufacture"
            paragraph="DEF Manufacturing needed a custom software solution to improve their production efficiency. We deliver a satisfying software development."
          />
          {isAboveSmallScreens ? (
            ""
          ) : (
            <div className="flex justify-center items-center">
              <Link
                className="px-6 py-2 border-[1px] border-white text-white text-[8px] rounded-[7px]"
                to="/"
              >
                READ MORE PROJECTS
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
