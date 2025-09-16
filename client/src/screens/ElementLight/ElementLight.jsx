import React from "react";
import { Button } from "../../components/ui/button";

import { CourseHighlightsSection } from "./sections/CourseHighlightsSection/CourseHighlightsSection";
import { FooterLinksSection } from "./sections/FooterLinksSection/FooterLinksSection";

export const ElementLight = () => {



  return (
    <div
      className="flex flex-col w-full max-w-[1920px] items-start relative bg-white"
      data-model-id="1:2"
    >


      {/* Main Content Sections */}
      <main className="w-full">
        <section className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] w-full">
          <CourseHighlightsSection />
        </section>
        <section className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] w-full">
          <FooterLinksSection />
        </section>
      </main>

      {/* Fixed Sidebar Elements */}
      <aside className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] flex flex-col w-[300px] items-start fixed top-[480px] right-[165px] -rotate-90 z-20">
        <img
          className="absolute w-[300px] h-[189px] top-[45px] left-[-83px] rotate-90"
          alt="Join Free Seminar"
          src="https://c.animaapp.com/mflxuw34KVFwR9/img/image-2.png"
        />
        <Button className="h-auto inline-flex items-start relative flex-[0_0_auto] bg-transparent border-0 p-0 hover:opacity-80 transition-opacity">
          <div className="text-base tracking-[-0.20px] leading-[27px] relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white whitespace-nowrap">
            Join Free Seminar
          </div>
        </Button>
      </aside>

      <aside className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] fixed w-[300px] h-[27px] top-[480px] left-[-135px] -rotate-90 z-20">
        <img
          className="absolute w-[300px] h-[189px] top-[-207px] left-[-111px] rotate-90"
          alt="Get Discount"
          src="https://c.animaapp.com/mflxuw34KVFwR9/img/image-3.png"
        />
        <div className="absolute w-[115px] h-[27px] top-0 left-[-18px]">
          <div className="absolute w-2.5 h-6 top-0.5 left-[18px] [font-family:'Roboto',Helvetica] font-normal text-[#212529] text-base tracking-[0] leading-6 whitespace-nowrap">
            -
          </div>
          <Button className="h-auto inline-flex items-start absolute top-0 left-0 bg-transparent border-0 p-0 hover:opacity-80 transition-opacity">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-white text-[15px] tracking-[0] leading-[27px] whitespace-nowrap">
              GET DISCOUNT
            </div>
          </Button>
        </div>
      </aside>
    </div>
  );
};
