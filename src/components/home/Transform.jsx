import React from "react";

const Transform = () => {
  return (
    <div className="relative">
      <img
        src="images/home/wave2.png"
        className="absolute top-0"
        alt="a wave line"
      />
      <div className="ml-8 md:ml-24 mr-8 md:mr-24 text-primary pt-10 mt-4 sm:mt-14">
        <p className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-[1000] font-space line-clamp-1 tracking-wide md:pb-8">
          Transform
        </p>

        <p className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl tracking-wide">
          <span className="font-[1000] font-space">Your </span>{" "}
          <span className="font-light italic font-sans">Business</span>{" "}
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 pt-4 md:pt-12">
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">
            <p>
              Our team of experts has years of experience in the IT industry and
              a passion for innovative technology solutions. We're dedicated to
              delivering solutions that are tailored to your unique needs and
              budget, and that exceed your expectations. Click explore now for
              more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transform;
