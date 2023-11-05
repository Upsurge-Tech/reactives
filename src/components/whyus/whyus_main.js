import React from "react";
import art_1 from "../../assets/art_1.png";
import art_2 from "../../assets/art_2.png";
import art_3 from "../../assets/art_3.png";
import art_4 from "../../assets/art_4.png";

const WhyUs = () => {
  return (
    <main className="flex flex-col min-w-screen">
      <div className=" min-w-screen min-h-2/3  bg-[#11112B]">
        <div className="text-white flex flex-col gap-14  items-center justify-center p-10">
          <h2 className=" font-bold text-6xl ">Why Us?</h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            style={{ width: "65em" }}
          >
            <div className=" p-2 ">
              <div className="flex flex-col  ">
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
    </main>

    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    //   <div className="p-4">
    //     <div className="flex flex-col items-center text-center">
    //       <img src={art_1} alt="art 1" width={70} height={70} className="pb-2" />
    //       <div className="font-semibold">Expertise</div>
    //       <div className="text-sm">
    //         Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.
    //       </div>
    //     </div>
    //   </div>

    //   <div className="p-4">
    //     <div className="flex flex-col items-center text-center">
    //       <img src={art_2} alt="art 2" width={70} height={70} className="pb-2" />
    //       <div className="font-semibold">Technology</div>
    //       <div className="text-sm">
    //         We stay up to date with the latest trends and technologies in the IT industry, so you can get the most advanced solutions available.
    //       </div>
    //     </div>
    //   </div>

    //   <div className="p-4">
    //     <div className="flex flex-col items-center text-center">
    //       <img src={art_3} alt="art 3" width={70} height={70} className="pb-2" />
    //       <div className="font-semibold">Solutions</div>
    //       <div className="text-sm">
    //         We take a personalized approach to every project, working closely with you to understand your business and create solutions.
    //       </div>
    //     </div>
    //   </div>

    //   <div className="p-4">
    //     <div className="flex flex-col items-center text-center">
    //       <img src={art_4} alt="art 4" width={70} height={70} className="pb-2" />
    //       <div className="font-semibold">Results</div>
    //       <div className="text-sm">
    //         Our track record speaks for itself. We've helped businesses of all sizes and industries achieve their goals with our IT solutions.
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default WhyUs;
