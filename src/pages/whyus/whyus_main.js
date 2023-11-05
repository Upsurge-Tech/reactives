import React from "react";
import art_1 from "../../assets/art_1.png";
import art_2 from "../../assets/art_2.png";
import art_3 from "../../assets/art_3.png";
import art_4 from "../../assets/art_4.png";
import arrow from "../../assets/right-arrow.png";
import arrow2 from "../../assets/next.png";

const BlueSection = () => {
  return (
    <main className="flex flex-col min-w-screen h-screen">
      <div className=" min-w-screen min-h-2/3  bg-[#11112B]">
        <div className="text-white flex flex-col gap-14  items-center justify-center p-10">
          <h2 className=" font-bold text-6xl ">Why Us?</h2>
          <div
            className="grid grid-cols-1 md:grid-cols-4 "
            style={{ width: "65em" }}
          >
            <div className=" p-2 ">
              <div className="flex flex-col">
                <div className=" p-2 ">
                  <img
                    className="pb-5"
                    src={art_1}
                    alt="art 1"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="font-semibold p-2 ">expertise</div>
                <div className=" text-sm p-2 ">
                  Our team of experienced experts have the knowledge and
                  expertise to deliver innovative IT solutions that meet your
                  unique needs.
                </div>
              </div>
            </div>

            <div className=" p-2">
              <div className="flex flex-col">
                <div className="p-2 ">
                  <img
                    className="pb-5"
                    src={art_2}
                    alt="art 2"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="font-semibold p-2 ">technology</div>
                <div className=" text-sm p-2 ">
                  We stay up to date with the latest trends and technologies in
                  the IT industry, so you can get the most advanced solutions
                  available.
                </div>
              </div>
            </div>

            <div className=" p-2 ">
              <div className="flex flex-col">
                <div className=" p-2 ">
                  <img
                    className="pb-5"
                    src={art_3}
                    alt="art 3"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="font-semibold p-2 ">solutions</div>
                <div className="text-sm p-2 ">
                  We take a personalized approach to every project, working
                  closely with you to understand your business and create
                  solutions.
                </div>
              </div>
            </div>

            <div className=" p-2 ">
              <div className="flex flex-col">
                <div className=" p-2 ">
                  <img
                    className="pb-5"
                    src={art_4}
                    alt="art 4"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="font-semibold p-2 ">results</div>
                <div className=" text-sm p-2 ">
                  Our track record speaks for itself we've helped businesses of
                  all sizes and industries achieve their goals with our IT
                  solutions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default BlueSection;
