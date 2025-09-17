import React from "react";
import { Card, CardContent } from "../ui/card";

export default function Static() {
  const statistics = [
    {
      number: "20000+",
      title: "Students Choose Creative IT",
      description:
        "Creative IT has become a trusted training institute for not only Bangladeshi residents but also those living abroad. More than 20,000 passionate learners are working in different markets after completing courses from our institute.",
      bgColor: "bg-[linear-gradient(229deg,rgba(247,252,231,1)_3%,rgba(247,252,231,0.3)_96%)]",
      numberColor: "text-[#66902b]",
    },
    {
      number: "42000+",
      title: "Got Career Placement.",
      description:
        "Our job placement department has helped more than 42,000 skilled students find jobs in competitive global markets. Promising a better future, we have successfully raised the job placement rate to 67% by providing continuous career support to the learners.",
      bgColor: "bg-[linear-gradient(232deg,rgba(255,247,235,1)_0%,rgba(255,247,235,0.3)_100%)]",
      numberColor: "text-[#212529]",
    },
    {
      number: "89%",
      title: "Success Ratio",
      description:
        "Excelling at work needs hands-on experience. The practical approach towards problems puts our students ahead of any other competitors in global job markets. All the courses are structured considering the job prospects to make you well prepared for a bright career.",
      bgColor: "bg-[linear-gradient(231deg,rgba(233,249,252,1)_0%,rgba(233,249,252,0.3)_100%)]",
      numberColor: "text-[#11a7ca]",
    },
  ];

  return (
<section className="   px-4 py-10 relative">
  <div className="max-w-[1400px] mx-auto  ">
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-0 justify-center">
      {statistics.map((stat, idx) => (
        <Card
          key={idx}
          className={`w-full  p-8 rounded-2xl ${stat.bgColor} translate-y-[-1rem]  `} 
        >
          <CardContent className="p-0 h-full flex flex-col">
            <h3 className={`font-bold text-3xl sm:text-4xl leading-[48px] ${stat.numberColor}`}>
              {stat.number}
            </h3>
            <h4 className="font-bold text-[#1f1e1e] text-lg sm:text-xl leading-6 mt-4">
              {stat.title}
            </h4>
            <p className="flex-1 text-[#605f62] text-sm sm:text-base leading-6 mt-2">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>

 
</section>

  );
}
