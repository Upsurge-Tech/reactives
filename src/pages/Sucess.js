import React from "react";
import { Link } from "react-router-dom";
import Background from "../assests/Background.png";
import CardCarousel from "../components/CardCarousel";

const Sucess = () => {
  return (
    <div className="font-sapceGrotesk">
      <div className="bg-light-blue md:py-16">
        <div className="w-5/6 mx-auto">
          <div className="md:flex justify-between items-center">
            <div className="relative basis-3/4 md:flex">
              <div className="rounded-[20px] w-full md:w-[550px] h-[300px] py-[20px]">
                <img
                  src={Background}
                  alt="backgroundIMG"
                  className="h-[200px] sm:h-[250px]"
                />
              </div>
              <div className="text-white md:text-[30px] absolute md:top-[30px] top-[30px] md:left-[60px] left-[20px] md:right-0 md:bottom-0">
                <div className="md:mb-6">
                  <span className="font-bold md:text-[35px] text-[25px]">
                    Ready to take <br /> your
                  </span>
                  <span className="italic md:text-[35px] text-[25px]">
                    {" "}
                    Business' IT
                    <br />
                  </span>
                  <span className="font-bold">to the next level?</span>
                </div>
                <div className="md:mt-0 mt-4">
                  <Link
                    className="bg-white py-[12px] px-[35px] text-black text-[8px] rounded-lg font-bold hover:bg-slate-400"
                    to=""
                  >
                    GET FREE CONSULTATION
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex gap-x-4 md:flex-col text-dark-blue basis-1/4 mx-auto ml-4">
              <div className="flex flex-col py-2">
                <h1 className="md:text-[37px] text-[1.5rem] font-bold">500+</h1>
                <p className="">Successful Projects</p>
              </div>
              <div className="flex flex-col py-2">
                <h1 className="md:text-[37px] text-[1.5rem] font-bold">98%</h1>
                <p className="">Satisfied Clients</p>
              </div>
              <div className="flex flex-col py-2">
                <h1 className="md:text-[37px] text-[1.5rem] font-bold">35+</h1>
                <p className="">Handled Countries</p>
              </div>
            </div>
          </div>

          <div className="md:mt-[100px] mt-[50px] font-bold text-center md:w-4/5 md:mx-auto w-full">
            <p className="font-spaceGrotesk md:text-[20px]">
              "Working with WaveNet has been a game-changer for our business.
              Their expertise in cloud computing allowed us to scale our
              operations quickly and efficiently, and their personalized
              approach ensured that we got what we need."
            </p>
          </div>
          <div className="md:flex md:justify-between items-center md:mt-[70px]">
            <CardCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sucess;
