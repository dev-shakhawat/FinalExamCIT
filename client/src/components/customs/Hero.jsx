import React, { useState } from "react";
import { Button } from "../ui/button";

export default function Hero() {
  const [isVideo, setIsVideo] = useState(false);

  return (
    <section className="relative w-full min-h-[888px] bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/section.png)] bg-cover bg-center">
      <div className="max-w-[1400px] mx-auto px-4 pt-[142px] pb-[203px]">
        <div className="flex flex-wrap items-center gap-0">
          <div className="w-full lg:w-1/2 px-3">
            <div className="max-w-[469px] relative">
              <div className="absolute w-[105px] h-[102px] -top-[81px] -left-[254px] bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/victor-dot.png)] bg-cover bg-center" />

              <div className="flex items-center gap-[10px] mb-[25px]">
                <div className="w-5 h-[25px] bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/icon-2.png)] bg-cover bg-center" />
                <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#212529] text-[17px] leading-[20.4px]">
                  Unleash Your Potential
                </h3>
              </div>

              <div className="mb-[22px]">
                <h1 className="[font-family:'Inter',Helvetica] font-bold text-[#212529] text-[43px] leading-[51.6px] mb-[17px]">
                  Become an IT Pro & Rule the{" "}
                  <span className="text-[rgba(255,30,30,1)]">Digital World</span>
                </h1>
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#212529] text-base leading-[26px]">
                  With a vision to turn manpower into assets, Creative IT Institute is ready to enhance your learning experience with skilled mentors and an updated curriculum. Pick your desired course from more than 45 trendy options.
                </p>
              </div>

              <div className="flex gap-[9px] mb-[88px]">
                <Button className="h-auto px-[22px] py-[13px] bg-[linear-gradient(190deg,rgba(255,128,121,1)_0%,rgba(255,30,30,1)_59%)] text-white rounded-[10px] border-0">
                  <div className="w-[22px] h-[18px] bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/icon-3.png)] bg-cover bg-center mr-[9px]" />
                  Browse Course
                </Button>
                <Button className="h-auto px-[22px] py-[13px] bg-[linear-gradient(189deg,rgba(255,128,121,1)_0%,rgba(255,30,30,1)_59%)] text-white rounded-[10px] border-0">
                  <div className="w-[22px] h-[18px] bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/icon-4.png)] bg-cover bg-center mr-[9px]" />
                  Join free seminar
                </Button>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/logo.png)] bg-cover bg-center mr-[10px]" />
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#342b27] text-base leading-[26px] w-[62%]">
                  One of the best ISO certified IT Training Institutes in Bangladesh
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            {isVideo ? (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <iframe
                  className="w-[770px] h-[430px] rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/TD_N2VR3P1s?si=oiig9xMrTYkQppkE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>

                <button
                  type="button"
                  className="absolute top-[80px] right-4 text-white bg-[rgba(255,30,30,1)] px-4 py-1 rounded"
                  onClick={() => setIsVideo(false)}
                >
                  Close
                </button>
              </div>
            ) : (
              <img
                onClick={() => setIsVideo(true)}
                className="w-full max-w-[770px] cursor-pointer"
                alt="Container"
                src="https://c.animaapp.com/mflxuw34KVFwR9/img/container.svg"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
