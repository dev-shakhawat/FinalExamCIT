import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FooterLinksSection = () => {
  const contactInfo = [
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/background-2.svg",
      title: "Head Office:",
      content: [
        "Momtaz Plaza (4th Floor)",
        "House # 07 , Road # 04",
        "Dhanmondi, Dhaka- 1205",
      ],
    },
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/background.svg",
      title: "",
      content: [
        "+880 1777308777",
        "+880 1624666000",
        "+880 1624888444",
        "+880 1966177177",
        "+880 1625555444",
        "+880 1990779900",
      ],
    },
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/background-1.svg",
      title: "",
      content: ["info@creativeitinstitute.com"],
    },
  ];

  const quickLinks = [
    "Free Seminar Schedule",
    "Mentors",
    "Success Story",
    "Our Gallery",
    "FAQ",
    "Blog",
    "Privacy Policy",
  ];

  const popularCourses = [
    "Web Development",
    "Professional Graphic Design",
    "Digital Marketing",
    "Mern Stack Development",
    "Motion Graphics",
    "Professional 3D Animation",
    "Content Writing",
  ];

  const otherLinks = [
    "About Us",
    "Our Facility",
    "Our Achievement",
    "Career Placement",
    "Freelancing",
    "Students Feedback",
    "Contact",
  ];

  const paymentMerchants = [
    {
      logo: "https://c.animaapp.com/mflxuw34KVFwR9/img/bkash.png",
      numbers: ["01990779766", "01309014614"],
    },
    {
      logo: "https://c.animaapp.com/mflxuw34KVFwR9/img/nagad.png",
      numbers: ["01309014614"],
    },
    {
      logo: "https://c.animaapp.com/mflxuw34KVFwR9/img/rocket.png",
      numbers: ["013090146143"],
    },
    {
      logo: "https://c.animaapp.com/mflxuw34KVFwR9/img/sslcommerz.png",
      numbers: ["SSLCOMMERZ"],
      isSSL: true,
    },
  ];

  return (
    <footer className="flex flex-col items-center pt-[83px] pb-0 px-0 relative w-full bg-[#403532]">
      <div className="relative w-full max-w-[1400px] mx-auto">
        {/* Hero Section */}
        <section className="flex flex-col max-w-[1400px] w-full items-start px-[323px] py-0 mb-20 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <div className="flex flex-col max-w-[674px] items-center pt-0 pb-24 px-0 relative w-full">
            <header className="items-center self-stretch flex flex-col relative w-full">
              <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-white text-[40px] text-center tracking-[0] leading-[54px]">
                Admission Is Going on
              </h1>
            </header>

            <div className="flex flex-col w-[554px] items-center pt-[5px] pb-[39px] px-0 relative">
              <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#bab5ad] text-[19px] text-center tracking-[0] leading-[26px]">
                Enroll to any online or offline course now, take one step
                <br />
                ahead towards a competent career
              </p>
            </div>

            <div className="flex items-start gap-5 px-[150px] py-0 relative self-stretch w-full">
              <Button
                variant="outline"
                className="flex w-[177px] items-start justify-center p-px relative rounded-md border border-solid border-white bg-transparent text-white hover:bg-white hover:text-[#403532] transition-colors h-auto"
              >
                <span className="text-[17px] text-center tracking-[0] leading-[54px] relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal whitespace-nowrap">
                  Join Free Seminar
                </span>
              </Button>

              <Button
                variant="outline"
                className="flex w-[177px] items-start justify-center p-px relative rounded-md border border-solid border-white bg-transparent text-white hover:bg-white hover:text-[#403532] transition-colors h-auto"
              >
                <span className="text-[17px] leading-[54px] relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-center tracking-[0] whitespace-nowrap">
                  Browse Course
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Links Grid */}
        <div className="grid grid-cols-4 gap-0 w-full mb-[50px]">
          {/* Contact Column */}
          <div className="flex flex-col max-w-[440px] w-full items-start px-3 py-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="flex flex-col items-start gap-[22px] relative self-stretch w-full">
              <header className="items-start flex flex-col relative self-stretch w-full">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-white text-[21px] tracking-[0] leading-[33px]">
                  Contact
                </h2>
              </header>

              <div className="flex flex-col items-start gap-[26px] relative self-stretch w-full">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-start relative self-stretch w-full"
                  >
                    <img
                      className="relative min-w-[31px] flex-[0_0_auto] h-[31px]"
                      alt="Contact icon"
                      src={contact.icon}
                    />

                    <div className="inline-flex flex-col items-start justify-center pl-3 pr-0 py-0 relative self-stretch flex-[0_0_auto]">
                      <div className="inline-flex flex-col items-start relative opacity-70">
                        <div id="Contact" className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                          {contact.title && (
                            <>
                              {contact.title}
                              <br />
                            </>
                          )}
                          {contact.content.map((line, lineIndex) => (
                            <React.Fragment key={lineIndex}>
                              {line}
                              {lineIndex < contact.content.length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col max-w-[330px] w-full items-start px-3 py-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <div className="flex flex-col items-start gap-[22px] relative self-stretch w-full">
              <header className="items-start flex flex-col relative self-stretch w-full">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-white text-[21px] tracking-[0] leading-[33px]">
                  Quick Links
                </h2>
              </header>

              <nav className="flex flex-col items-start gap-[17px] relative self-stretch w-full">
                {quickLinks.map((link, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start pt-0 pb-0.5 px-0 self-stretch w-full relative"
                  >
                    <div className="inline-flex items-start relative opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                        {link}
                      </div>
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Popular Courses Column */}
          <div className="flex flex-col max-w-[330px] w-full items-start px-3 py-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <div className="flex flex-col items-start gap-[22px] relative self-stretch w-full">
              <header className="items-start flex flex-col relative self-stretch w-full">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-white text-[21px] tracking-[0] leading-[33px]">
                  Popular Courses
                </h2>
              </header>

              <nav className="flex flex-col items-start gap-[17px] relative self-stretch w-full">
                {popularCourses.map((course, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start pt-0 pb-0.5 px-0 self-stretch w-full relative"
                  >
                    <div className="inline-flex items-start relative opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                        {course}
                      </div>
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Others Column */}
          <div className="flex flex-col max-w-[220px] w-full items-start px-3 py-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            <div className="flex flex-col items-start gap-[22px] relative self-stretch w-full">
              <header className="items-start flex flex-col relative self-stretch w-full">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-white text-[21px] tracking-[0] leading-[33px]">
                  Others
                </h2>
              </header>

              <nav className="flex flex-col items-start gap-[17px] relative self-stretch w-full">
                {otherLinks.map((link, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start pt-0 pb-0.5 px-0 self-stretch w-full relative"
                  >
                    <div className="inline-flex items-start relative opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                        {link}
                      </div>
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Merchants Section */}
      <section className="flex flex-col items-start px-[300px] py-0 relative self-stretch w-full bg-[#fffdfd] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <div className="flex flex-col max-w-[1400px] items-start relative w-full mx-auto">
          <div className="flex flex-col items-center justify-center gap-[1.24e-12px] pt-[90px] pb-[45px] px-0 relative self-stretch w-full">
            <header className="flex flex-col max-w-[1400px] h-[66.39px] items-start px-3 py-0 relative w-full">
              <div className="items-center flex flex-col relative self-stretch w-full">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#2d2d2d] text-[22px] text-center tracking-[0] leading-[26.4px]">
                  Our Payment Merchant
                </h2>
              </div>
            </header>

            <div className="flex flex-col max-w-[1400px] items-start relative w-full">
              <div className="flex flex-wrap items-start gap-0 relative self-stretch w-full mb-[-0.01px]">
                {paymentMerchants.map((merchant, index) => (
                  <div
                    key={index}
                    className="flex flex-col max-w-[1400px] items-start pl-[16.8px] pr-[16.79px] pt-[4.79px] pb-[4.8px] relative flex-1 grow self-stretch"
                  >
                    <Card className="flex flex-col items-center gap-[7px] p-[20.8px] relative self-stretch w-full bg-[#ffffff01] shadow-[0px_4px_16px_#0000000f] border-0">
                      <CardContent className="flex flex-col items-center gap-[7px] p-0 w-full">
                        <div className="flex flex-col max-w-[140px] w-[140px] items-center relative">
                          <div
                            className={`relative max-w-[140px] w-[140px] bg-cover bg-[50%_50%] ${
                              merchant.isSSL
                                ? "h-[27.27px] py-4"
                                : "h-[65.92px]"
                            }`}
                            style={{ backgroundImage: `url(${merchant.logo})` }}
                          />
                        </div>

                        <div className="flex flex-col items-center relative self-stretch w-full">
                          <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#212529] text-2xl text-center tracking-[0] leading-9">
                            {merchant.numbers.map((number, numberIndex) => (
                              <React.Fragment key={numberIndex}>
                                {number}
                                {numberIndex < merchant.numbers.length - 1 && (
                                  <br />
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-wrap items-center justify-between gap-0 pt-[31px] pb-[30px] px-0 self-stretch w-full border-t border-solid border-[#2d2d2d1a] relative">
            <div className="flex flex-col max-w-[1400px] w-[330px] items-start px-3 py-0 relative">
              <div className="flex flex-col items-start relative self-stretch w-full">
                <div className="relative w-[173px] h-[52px] bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/creative-it-institute-1.png)] bg-cover bg-[50%_50%]" />
              </div>
            </div>

            <div className="flex flex-col max-w-[1400px] w-[660px] items-start px-3 py-0 relative">
              <div className="flex flex-col items-start relative self-stretch w-full">
                <div className="flex items-start justify-center gap-[5.68e-14px] relative self-stretch w-full">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#2d2d2d] text-sm text-center tracking-[0] leading-[26px] whitespace-nowrap">
                    Copyright © 2025 Creative IT Institute. All right reserved |
                  </div>

                  <div className="inline-flex items-start justify-center relative">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#ff1e1e] text-sm text-center tracking-[0] leading-[26px] whitespace-nowrap cursor-pointer hover:underline">
                      Sitemap
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center relative self-stretch w-full">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#2d2d2d] text-sm text-center tracking-[0] leading-[26px]">
                    <span className="font-bold">e-TIN:</span>
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#2d2d2d] text-sm tracking-[0] leading-[26px]">
                      {" "}
                      570007703094,{" "}
                    </span>
                    <span className="font-bold">TL:</span>
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#2d2d2d] text-sm tracking-[0] leading-[26px]">
                      {" "}
                      TRAD/DSCC/228155/2019
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <img
              className="relative max-w-[1400px] w-[330px]"
              alt="Social media icons"
              src="https://c.animaapp.com/mflxuw34KVFwR9/img/container-1.svg"
            />
          </div>
        </div>
      </section>

      {/* Decorative Images */}
      <div className="absolute w-[105px] h-[102px] top-[57px] left-20 bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/cit.png)] bg-cover bg-[50%_50%]" />
      <div className="absolute w-[105px] h-[102px] top-[57px] right-20 bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/creative-it.png)] bg-cover bg-[50%_50%]" />
    </footer>
  );
};
