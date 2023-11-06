import React, { useState } from "react";
import { cards } from "./Cards";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const currentCard = cards[currentIndex];
  return (
    <div className="flex justify-between w-full mt-16 md:mt-0">
      <button className="" onClick={handlePrevious}>
        <AiOutlineArrowLeft size={30} />
      </button>
      <div className="">
        <div className="flex justify-center items-center mx-auto">
          <img
            src={currentCard.image}
            alt="Person"
            className="rounded-full w-12 h-12"
          />
        </div>
        <div className="text-center md:mt-4">
          <p className="font-bold text-[10px]">{currentCard.name}</p>
          <p className="text-[10px]">{currentCard.role}</p>
        </div>
      </div>
      <button className="" onClick={handleNext}>
        <AiOutlineArrowRight size={30} />
      </button>
    </div>
  );
};

export default CardCarousel;
