import React from "react";
import wave from "../../assets/wave_footer.png";
import logo from "../../assets/CTA Button.png";
import face from "../../assets/Facebook Icon.png";
import insta from "../../assets/Instagram Icon.png";
import twit from "../../assets/Twitter Icon.png";
import arrow from "../../assets/next.png";

const Footer = () => {
  return (
    <div className="relative">
      <img
        src={wave}
        className=" min-w-full min-h-full md:h-96 absolute top-0 "
        // style={{ height: "30em" }}
        alt="wave-back"
      />
      <div className="flex flex-col md:flex-row p-24 justify-around">
        <div className="flex flex-col gap-14">
          <a href="/#" className="flex items-center">
            <p className="self-center text-5xl font-bold whitespace-nowrap font-space">
              {" "}
              WAVE
            </p>
            <span className="self-center text-5xl whitespace-nowrap font-light">
              NET
            </span>
          </a>
          <img src={logo} alt="cta_logo" width="90em" height="90em" />
        </div>
        <div className="flex flex-col gap-14">
          <p className="text-xl font-bold">Newsletter</p>
          <div className="flex flex-row gap-10 border-b-2 border-solid border-slate-500 pb-3">
            <p>Email Address</p>
            <img
              className="text-sm "
              alt="arrow"
              src={arrow}
              width={25}
              height={25}
            />{" "}
          </div>
          <div className="flex flex-row gap-10">
            <a href="/#">
              <img alt="insta" src={insta} width="25em" height="25em" />
            </a>
            <a href="/#">
              <img alt="facbook" src={face} width="25em" height="25em" />
            </a>
            <a href="/#">
              <img alt="twitter" src={twit} width="25em" height="25em" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold pb-10">Explore</p>
          <p>About us</p>
          <p>Services</p>
          <p>Pricing</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="flex flex-col gap-4">
          {" "}
          <p className="text-xl font-bold pb-10">Contact</p>
          <p>Email</p>
          <p>Phone</p>
          <p>Address</p>
          <p>Socila Media</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
