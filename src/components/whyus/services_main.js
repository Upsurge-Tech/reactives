import React from "react";
import arrow from "../../assets/right-arrow.png";
import arrow2 from "../../assets/next.png";

const ServicesMain = () => {
  return (
    <main id="service">
      <div className="bg-blue-50 min-w-screen  flex justify-center items-center pt-20  ">
        <div className="flex p-12">
          <div className="">
            <div className="relative bg-slate-50 text-2xl rounded-3xl shadow mb-4 w-56 h-48 flex flex-col  p-7 space-x-4 gap-5 group hover:bg-[#11112B] hover:text-white  ">
              <img
                className="opacity-0 group-hover:opacity-100 "
                alt="arrow"
                src={arrow}
                width={25}
                height={25}
              />
              <p>
                Web <br /> Development
              </p>
            </div>
            <div className="relative bg-slate-50 text-2xl  rounded-3xl shadow mb-4 w-56 h-48 flex flex-col  p-7 space-x-4 gap-5 group hover:bg-[#11112B] hover:text-white  ">
              <img
                className="opacity-0 group-hover:opacity-100 "
                alt="arrow"
                src={arrow}
                width={25}
                height={25}
              />
              Mobile <br /> Development
            </div>
            <div className="relative bg-slate-50 text-2xl  rounded-3xl shadow w-56 h-48 flex flex-col  p-7 space-x-4 gap-5 group hover:bg-[#11112B] hover:text-white  ">
              <img
                className="opacity-0 group-hover:opacity-100 "
                alt="arrow"
                src={arrow}
                width={25}
                height={25}
              />
              Cyber <br /> Security
            </div>
          </div>
          <div className="  flex flex-col justify-center items-center pl-20">
            <div className="relative bg-slate-50 text-2xl  rounded-3xl shadow mb-4 w-56 h-48 flex flex-col  p-7 space-x-4 gap-5 group hover:bg-[#11112B] hover:text-white  ">
              <img
                className="opacity-0 group-hover:opacity-100 "
                alt="arrow"
                src={arrow}
                width={25}
                height={25}
              />
              Cloud <br />
              Computing
            </div>
            <div className="relative bg-slate-50 text-2xl rounded-3xl shadow w-56 h-48 flex flex-col  p-7 space-x-4 gap-5 group hover:bg-[#11112B] hover:text-white  ">
              <img
                className="opacity-0 group-hover:opacity-100 "
                alt="arrow"
                src={arrow}
                width={25}
                height={25}
              />
              Digital marketing
            </div>
          </div>
          <div className="flex flex-col justify-center items-center pl-20 ">
            <div className=" flex flex-col w-64 h-56 gap-5">
              <h2 className="text-6xl font-bold">Services</h2>
              <p className="text-sm pb-5">
                We provide customized solutions that meet our clients' unique
                needs and help them succeed in an increasingly digital world.
              </p>
              <div className="flex flex-row border-2 border-black border-solid p-5 rounded-xl gap-10">
                <p className="font-bold">Learn more</p>
                <img
                  className="text-sm"
                  src={arrow2}
                  alt="arrow2"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicesMain;
