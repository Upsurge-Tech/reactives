import React from "react";

const Companies = () => {
  const imageUrls = ["samsung", "google", "amazon", "windows", "sony"];
  return (
    <div className="mr-24 ml-24 mt-24 mb-24 flex flex-row flex-wrap justify-between sm:space-y-0 space-y-8 lg:space-x-0 md:space-x-4">
      {imageUrls.map((url) => (
        <img
          src={`images/home/${url}.png`}
          className="h-1/2 object-contain"
          width={120}
          alt={`logo of ${url}`}
        />
      ))}
    </div>
  );
};

export default Companies;
