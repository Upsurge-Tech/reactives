import React, { useState } from "react";

const Question = () => {
  const [active, setActive] = useState(-1);
  const question = [
    {
      number: "01",
      question: "What services does WaveNet offer?",
      answer:
        "Our pricing varies based on the specific services and needs of your business. We offer flexible pricing options to suit your budget and requirements. We strive to provide clear and concise answers so that our clients have a seamless experience.",
    },
    {
      number: "02",
      question: "Which IT solution is for my business?",
      answer:
        "Our pricing varies based on the specific services and needs of your business. We offer flexible pricing options to suit your budget and requirements. We strive to provide clear and concise answers so that our clients have a seamless experience.",
    },
    {
      number: "03",
      question: "How much do the servies pay?",
      answer:
        "Our pricing varies based on the specific services and needs of your business. We offer flexible pricing options to suit your budget and requirements. We strive to provide clear and concise answers so that our clients have a seamless experience.",
    },
    {
      number: "04",
      question: "How do I get started with the IT solutions?",
      answer:
        "Our pricing varies based on the specific services and needs of your business. We offer flexible pricing options to suit your budget and requirements. We strive to provide clear and concise answers so that our clients have a seamless experience.",
    },
  ];

  const activated = (index) => {
    if (active === index) {
      setActive(-1);
    } else {
      setActive(index);
    }
  };
  return (
    <main className="flex flex-col min-w-full h-full bg-[#11112B] p-10">
      <div className="text-white p-5 flex flex-col items-center justify-center gap-10 ">
        <div className="text-5xl">Question</div>
        <p className="text-sm">
          Visit our FAQ section to learn more about what we do and how we can
          help your business succeed.
        </p>
      </div>
      {question?.map((questions, index) => (
        <div key={index} className="flex flex-col text-white pl-10 pb-5 pr-10 ">
          <div
            className="flex flex-row p-7 justify-between  border-b-2 border-slate-700 border-solid  "
            onClick={() => activated(index)}
            style={{
              backgroundColor: active === index ? "#D5D9E5" : "",
              color: active === index ? "black" : "",
            }}
          >
            <div className="flex flex-row gap-5 md:gap-20 ">
              <p className="text-xl font-bold">{questions.number}</p>
              <div className="flex flex-col gap-4">
                <p className="text-xl font-bold">{questions.question}</p>
                <p
                  className="text-sm pr-20 "
                  style={{
                    visibility: active === index ? "visible" : "Hidden",
                    height: active === index ? "2em" : "0",
                  }}
                >
                  {questions.answer}
                </p>
              </div>
            </div>
            {active === index ? (
              <div className="text-xl">-</div>
            ) : (
              <div className="text-xl">+</div>
            )}
          </div>
        </div>
      ))}
    </main>
  );
};

export default Question;
