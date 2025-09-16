import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

export const CourseHighlightsSection = () => {

  const [isVideo , setIsvideo] = useState(false)

  // Course categories data
  const courseCategories = [
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/3d-animation---visualization.png",
      title: "3D Animation & Visualization",
    },
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/film---media.png",
      title: "Film & Media",
    },
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/english-language.png",
      title: "English Language",
    },
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/1-year-diploma-programs.png",
      title: "1 Year Diploma Programs",
    },
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/cloud-computing.png",
      title: "Cloud Computing",
    },
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/networking---cybersecurity.png",
      title: "Networking & Cybersecurity",
    },
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/graphic---multimedia.png",
      title: "Graphic & Multimedia",
    },
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/web---software.png",
      title: "Web & Software",
    },
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/digital-marketing.png",
      title: "Digital Marketing",
    },
  ];

  // Popular courses data
  const popularCourses = [
    {
      image:
        "https://c.animaapp.com/mflxuw34KVFwR9/img/professional-graphic-design.png",
      category: "All Course",
      title: "Professional Graphic Design",
      rating: 4,
      reviews: "14,400 Review",
      students: "18,000 Student",
      fee: "Course Fee 50,000 BDT",
    },
    {
      image: "https://c.animaapp.com/mflxuw34KVFwR9/img/motion-graphics.png",
      category: "All Course",
      title: "Motion Graphics",
      rating: 4,
      reviews: "4,160 Review",
      students: "5,200 Student",
      fee: "Course Fee 50,000 BDT",
    },
    {
      image: "https://c.animaapp.com/mflxuw34KVFwR9/img/ux-ui-design.png",
      category: "All Course",
      title: "UX/UI Design",
      rating: 4,
      reviews: "2,800 Review",
      students: "3,500 Student",
      fee: "Course Fee 50,000 BDT",
    },
  ];

  // Statistics data
  const statistics = [
    {
      number: "20000+",
      title: "Students Choose Creative IT",
      description:
        "Creative IT has become a trusted training institute for not only Bangladeshi residents but also those living abroad. More than 20,000 passionate learners are working in different markets after completing courses from our institute.",
      bgColor:
        "bg-[linear-gradient(229deg,rgba(247,252,231,1)_3%,rgba(247,252,231,0.3)_96%)]",
      numberColor: "text-[#66902b]",
    },
    {
      number: "42000+",
      title: "Got Career Placement.",
      description:
        "Our job placement department has helped more than 42,000 skilled students find jobs in competitive global markets. Promising a better future, we have successfully raised the job placement rate to 67% by providing continuous career support to the learners.",
      bgColor:
        "bg-[linear-gradient(232deg,rgba(255,247,235,1)_0%,rgba(255,247,235,0.3)_100%)]",
      numberColor: "text-[#212529]",
    },
    {
      number: "89%",
      title: "Success Ratio",
      description:
        "Excelling at work needs hands-on experience. The practical approach towards problems puts our students ahead of any other competitors in global job markets. All the courses are structured considering the job prospects to make you well prepared for a bright career.",
      bgColor:
        "bg-[linear-gradient(231deg,rgba(233,249,252,1)_0%,rgba(233,249,252,0.3)_100%)]",
      numberColor: "text-[#11a7ca]",
    },
  ];

  // Features data
  const features = [
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/lifetime-support.png",
      title: "Lifetime Support",
      description:
        "The bond between Creative IT and its students is lifelong. We strengthen our bond with you by providing lifelong support that helps you overcome any problem in your career path even after completing their course. The personalized feedback that you receive from us, helps you grow, every day.",
    },
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/career-placement-support.png",
      title: "Career Placement Support",
      description:
        "Our career placement department is ready to help you find a lucrative job. We ensure your resume gets into the hands of the right hiring manager. So far this department has helped more than 42000 students to find jobs in competitive global platforms. Promising a better future, we have successfully raised the job placement rate to 46% in 2024.",
    },
    {
      icon: "https://c.animaapp.com/mflxuw34KVFwR9/img/class-videos.png",
      title: "Class Videos",
      description:
        "No need to worry if you miss a topic in the class. We record most of our classes so that students who miss a session can still get the information they need. They can watch the videos again and again until they understand the topic thoroughly. Our motto is to provide you a flexible learning experience to gradually improve your competence.",
    },
  ];

  // Course sections data
  const courseSections = [
    {
      title: "Graphic & Multimedia",
      courses: [
        {
          image:
            "https://c.animaapp.com/mflxuw34KVFwR9/img/professional-graphic-design-1.png",
          category: "All Course",
          title: "Professional Graphic Design",
          rating: 4,
          reviews: "14,400 Review",
          students: "18,000 Student",
          fee: "Course Fee 50,000 BDT",
        },
        {
          image:
            "https://c.animaapp.com/mflxuw34KVFwR9/img/motion-graphics-1.png",
          category: "All Course",
          title: "Motion Graphics",
          rating: 4,
          reviews: "4,160 Review",
          students: "5,200 Student",
          fee: "Course Fee 50,000 BDT",
        },
        {
          image: "https://c.animaapp.com/mflxuw34KVFwR9/img/ux-ui-design-1.png",
          category: "All Course",
          title: "UX/UI Design",
          rating: 4,
          reviews: "2,800 Review",
          students: "3,500 Student",
          fee: "Course Fee 50,000 BDT",
        },
      ],
    },
    {
      title: "Web & Software",
      courses: [
        {
          image:
            "https://c.animaapp.com/mflxuw34KVFwR9/img/mern-stack-development.png",
          category: "All Course",
          title: "MERN Stack Development",
          rating: 4,
          reviews: "680 Review",
          students: "850 Student",
          fee: "Course Fee 95,000 BDT",
        },
        {
          image:
            "https://c.animaapp.com/mflxuw34KVFwR9/img/app-development-with-kotlin.png",
          category: "All Course",
          title: "App Development With Kotlin",
          rating: 4,
          reviews: "1,220 Review",
          students: "2,400 Student",
          fee: "Course Fee 50,000 BDT",
        },
        {
          image: "https://c.animaapp.com/mflxuw34KVFwR9/img/python-django.png",
          category: "All Course",
          title: "Python Django",
          rating: 4,
          reviews: "256 Review",
          students: "320 Student",
          fee: "Course Fee 50,000 BDT",
        },
      ],
    },
    {
      title: "Digital Marketing",
      courses: [
        {
          image:
            "https://c.animaapp.com/mflxuw34KVFwR9/img/digital-marketing-course.png",
          category: "All Course",
          title: "Digital Marketing Course",
          rating: 4,
          reviews: "6,800 Review",
          students: "8,500 Student",
          fee: "Course Fee 50,000 BDT",
        },
        {
          image:
            "https://c.animaapp.com/mflxuw34KVFwR9/img/affiliate-marketing.png",
          category: "All Course",
          title: "Affiliate Marketing",
          rating: 4,
          reviews: "168 Review",
          students: "210 Student",
          fee: "Course Fee 25,000 BDT",
        },
        {
          image: "https://c.animaapp.com/mflxuw34KVFwR9/img/google-adsense.png",
          category: "All Course",
          title: "Google AdSense",
          rating: 4,
          reviews: "176 Review",
          students: "220 Student",
          fee: "Course Fee 20,000 BDT",
        },
      ],
    },
  ];

  // Achievement stats data
  const achievementStats = [
    { number: "90000+", title: "Successful Students" },
    { number: "34000+", title: "Expert Freelancers" },
    { number: "42000+", title: "Skilled Job Holders" },
    { number: "600+", title: "Industry Expert" },
    { number: "89%", title: "Success Ratio" },
    { number: "3000+", title: "Companies" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[888px] bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/section.png)] bg-cover bg-center">
        <div className="container mx-auto px-4 pt-[142px] pb-[203px]">
          <div className="flex flex-wrap items-center gap-0">
            <div className="w-full lg:w-1/2 px-3">
              <div className="max-w-[469px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
                <div className="absolute w-[105px] h-[102px] -top-[81px] -left-[254px] bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/victor-dot.png)] bg-cover bg-center" />

                <div className="flex items-center gap-[10px] mb-[25px]">
                  <div className="w-5 h-[25px] bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/icon-2.png)] bg-cover bg-center" />
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#212529] text-[17px] leading-[20.4px]">
                    Unleash Your Potential
                  </h3>
                </div>

                <div className="mb-[22px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                  <h1 className="[font-family:'Inter',Helvetica] font-bold text-[#212529] text-[43px] leading-[51.6px] mb-[17px]">
                    Become an IT Pro & Rule the <span className="text-[rgba(255,30,30,1)]">Digital World</span>
                  </h1>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#212529] text-base leading-[26px]">
                    With a vision to turn manpower into assets, Creative IT
                    Institute is ready to enhance your learning experience with
                    skilled mentors and an updated curriculum. Pick your desired
                    course from more than 45 trendy options.
                  </p>
                </div>

                <div className="flex gap-[9px] mb-[88px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                  <Button className="h-auto px-[22px] py-[13px] bg-[linear-gradient(190deg,rgba(255,128,121,1)_0%,rgba(255,30,30,1)_59%)] text-white rounded-[10px] border-0">
                    <div className="w-[22px] h-[18px] bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/icon-3.png)] bg-cover bg-center mr-[9px]" />
                    Browse Course
                  </Button>
                  <Button className="h-auto px-[22px] py-[13px] bg-[linear-gradient(189deg,rgba(255,128,121,1)_0%,rgba(255,30,30,1)_59%)] text-white rounded-[10px] border-0">
                    <div className="w-[22px] h-[18px] bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/icon-4.png)] bg-cover bg-center mr-[9px]" />
                    Join free seminar
                  </Button>
                </div>

                <div className="flex items-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                  <div className="w-12 h-12 bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/logo.png)] bg-cover bg-center mr-[10px]" />
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#342b27] text-base leading-[26px] w-[62%] ">
                    One of the best ISO certified IT Training Institutes in
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">

            {isVideo ? 
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

                <button  type="button"  className="absolute top-[80px] right-4 text-white bg-[rgba(255,30,30,1)] px-4 py-1 rounded "  onClick={() => setIsvideo(false) }> Close</button>
              </div>
              :
              <img
                onClick={() => setIsvideo(true)}
                className="w-full max-w-[770px] cursor-pointer"
                alt="Container"
                src="https://c.animaapp.com/mflxuw34KVFwR9/img/container.svg"
              />
            }

            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="container mx-auto px-4 py-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <div className="max-w-[1296px] mx-auto">
          <div className="w-full h-[237.59px] bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/one-20to-20one-20banner-home-20page-pc-jpg.png)] bg-cover bg-center rounded-lg" />
        </div>
      </section>

      {/* Course Categories Carousel */}
      <section className="container mx-auto px-4 py-8">
        <div className="relative max-w-[1296px] mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 px-3 py-[25px] animate-marquee"
              style={{ "--duration": "30s", "--gap": "24px" }}
            >
              {[...courseCategories, ...courseCategories].map(
                (category, index) => (
                  <Card
                    key={index}
                    className="flex-shrink-0 w-48 h-[157px] p-[15px] bg-white rounded-[20px] shadow-[5px_5px_20px_#0000000f]"
                  >
                    <CardContent className="flex flex-col items-center justify-center h-full p-0">
                      <div
                        className="w-8 h-8 bg-cover bg-center mb-4"
                        style={{ backgroundImage: `url(${category.icon})` }}
                      />
                      {category.title && (
                        <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#1f1e1e] text-lg text-center leading-[23px]">
                          {category.title}
                        </h3>
                      )}
                    </CardContent>
                  </Card>
                ),
              )}
            </div>
          </div>

          <img
            className="absolute w-[39px] h-[39px] top-[84px] -left-8"
            alt="Background border"
            src="https://c.animaapp.com/mflxuw34KVFwR9/img/background-border-1.svg"
          />
          <img
            className="absolute w-[39px] h-[39px] top-[84px] right-[-32px]"
            alt="Background border"
            src="https://c.animaapp.com/mflxuw34KVFwR9/img/background-border.svg"
          />
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-[1320px] mx-auto bg-[#faf9fd] rounded-[35px] p-[18px]">
          <div className="text-center mb-[85px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#1f1e1e] text-[44px] leading-[54px] mb-[15px] mt-[46px]">
              Popular Courses
            </h2>
            <p className="max-w-[789px] mx-auto [font-family:'Inter',Helvetica] font-normal text-[#605f62] text-base text-center leading-[26px]">
              We have designed our courses with the most demanding professional
              skills. The knowledge, experience, and expertise gained through
              the program will ensure your desired job in the global market.
              From the list below you can enroll to any online or offline
              courses at any time.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full  justify-between border-b border-[#0000001a] bg-transparent h-auto p-0 mb-8">
              <TabsTrigger
                value="all"
                className="px-0 py-[14px] border-b-[3px] border-transparent data-[state=active]:border-[#cf0000] data-[state=active]:text-[#cf0000] bg-transparent"
              >
                All Course
              </TabsTrigger>
              <TabsTrigger
                value="graphic"
                className="px-0 py-[14px] border-b-[3px] border-transparent data-[state=active]:border-[#cf0000] data-[state=active]:text-[#cf0000] bg-transparent"
              >
                Graphic & Multimedia
              </TabsTrigger>
              <TabsTrigger
                value="web"
                className="px-0 py-[14px] border-b-[3px] border-transparent data-[state=active]:border-[#cf0000] data-[state=active]:text-[#cf0000] bg-transparent"
              >
                Web & Software
              </TabsTrigger>
              <TabsTrigger
                value="marketing"
                className="px-0 py-[14px] border-b-[3px] border-transparent data-[state=active]:border-[#cf0000] data-[state=active]:text-[#cf0000] bg-transparent"
              >
                Digital Marketing
              </TabsTrigger>
              <TabsTrigger
                value="animation"
                className="px-0 py-[14px] border-b-[3px] border-transparent data-[state=active]:border-[#cf0000] data-[state=active]:text-[#cf0000] bg-transparent"
              >
                3D Animation & Visualization
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="overflow-hidden">
                <div className="flex gap-8 px-10 pb-8">
                  {popularCourses.map((course, index) => (
                    <Card
                      key={index}
                      className="flex-shrink-0 w-[400px] bg-white rounded-[25px] border border-[#0000001a] overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0"
                      style={{ "--animation-delay": `${400 + index * 200}ms` }}
                    >
                      <div
                        className="w-full h-[214.88px] bg-cover bg-center"
                        style={{ backgroundImage: `url(${course.image})` }}
                      />
                      <CardContent className="p-[17px_14px_28px_17px]">
                        <Badge
                          variant="secondary"
                          className="bg-transparent text-[#df6812] p-0 mb-2"
                        >
                          {course.category}
                        </Badge>
                        <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#1f1e1e] text-xl leading-8 mb-[3px]">
                          {course.title}
                        </h3>
                        <div className="flex justify-between items-center mb-[22.5px]">
                          <div className="flex items-center gap-[3.9px]">
                            {[...Array(4)].map((_, i) => (
                              <img
                                key={i}
                                className="w-[15.75px] h-3.5"
                                alt="Star"
                                src="https://c.animaapp.com/mflxuw34KVFwR9/img/img-1.svg"
                              />
                            ))}
                            <img
                              className="w-[15.75px] h-3.5"
                              alt="Star"
                              src="https://c.animaapp.com/mflxuw34KVFwR9/img/img.svg"
                            />
                            <span className="[font-family:'Inter',Helvetica] font-normal text-[#787a82] text-sm leading-[17px] ml-1">
                              {course.reviews}
                            </span>
                          </div>
                          <span className="[font-family:'Inter',Helvetica] font-normal text-[#787a82] text-sm leading-[17px]">
                            {course.students}
                          </span>
                        </div>
                        <div className="flex justify-between items-end">
                          <span className="[font-family:'Inter',Helvetica] font-bold text-[#434242] text-base leading-[30px]">
                            {course.fee}
                          </span>
                          <Button
                            variant="outline"
                            className="h-[33px] px-2 py-2 text-[#8c0000] text-sm border-[#ff7e31] rounded-lg"
                          >
                            Click for discount
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <img
                className="absolute w-[39px] h-[39px] top-[183px] left-0"
                alt="Background border"
                src="https://c.animaapp.com/mflxuw34KVFwR9/img/background-border-shadow-1.svg"
              />
              <img
                className="absolute w-[39px] h-[39px] top-[183px] right-[39px]"
                alt="Background border"
                src="https://c.animaapp.com/mflxuw34KVFwR9/img/background-border-shadow-2.svg"
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-[1320px] mx-auto">
          <div className="overflow-hidden">
            <div className="flex gap-9 px-[30px]">
              {statistics.map((stat, index) => (
                <Card
                  key={index}
                  className={`flex-shrink-0 w-[396px] h-[390px] p-[35px] rounded-[35px] ${stat.bgColor} translate-y-[-1rem] animate-fade-in opacity-0`}
                  style={{ "--animation-delay": `${200 + index * 200}ms` }}
                >
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="pt-5 pb-0">
                      <h3
                        className={`[font-family:'Inter',Helvetica] font-bold text-[40px] leading-[48px] ${stat.numberColor}`}
                      >
                        {stat.number}
                      </h3>
                    </div>
                    <div className="pt-4 pb-3">
                      <h4 className="[font-family:'Inter',Helvetica] font-bold text-[#1f1e1e] text-xl leading-[26px]">
                        {stat.title}
                      </h4>
                    </div>
                    <div className="pt-1 pb-2 flex-1">
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#605f62] text-base leading-[26px]">
                        {stat.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <img
            className="absolute w-[39px] h-[39px] top-44 -left-[30px]"
            alt="Background border"
            src="https://c.animaapp.com/mflxuw34KVFwR9/img/background-border-shadow-3.svg"
          />
          <img
            className="absolute w-[39px] h-[39px] top-44 right-0"
            alt="Background border"
            src="https://c.animaapp.com/mflxuw34KVFwR9/img/background-border-shadow.svg"
          />
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="container mx-auto px-4 py-10" id="successStories">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center mb-[58px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#1f1e1e] text-[44px] leading-[54px] mb-[15px] mt-[46px]">
              Success Stories
            </h2>
            <p className="max-w-[789px] mx-auto [font-family:'Inter',Helvetica] font-normal text-[#605f62] text-base text-center leading-[26px]">
              The presence of our students in the ever expanding IT industry
              motivates us, drives us to guide more people towards a sustainable
              future.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-0 mb-[82px]">
            <img
              className="w-full h-[382px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]"
              alt="Success story"
              src="https://c.animaapp.com/mflxuw34KVFwR9/img/margin-2.svg"
            />
            <img
              className="w-full h-[382px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
              alt="Success story"
              src="https://c.animaapp.com/mflxuw34KVFwR9/img/margin-3.svg"
            />
            <img
              className="w-full h-[382px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]"
              alt="Success story"
              src="https://c.animaapp.com/mflxuw34KVFwR9/img/margin.svg"
            />
            <img
              className="w-full h-[382px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]"
              alt="Success story"
              src="https://c.animaapp.com/mflxuw34KVFwR9/img/margin-1.svg"
            />
          </div>

          <div className="text-center">
            <Button className="h-auto w-[145px] px-0 py-2.5 bg-[linear-gradient(192deg,rgba(255,128,121,1)_0%,rgba(255,30,30,1)_59%)] text-white text-sm rounded-[5px] border-0">
              See More
            </Button>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="container mx-auto px-4 py-6">
        <div
          className="max-w-[1296px] mx-auto bg-[#ffffff01] rounded-
[35px] shadow-[0px_0px_35px_#00000026] p-6"
        >
          <div className="flex flex-wrap items-center gap-0">
            <div className="w-full lg:w-[530px] px-3">
              <div className="pl-16 pt-[28.9px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                <div className="min-w-[442px]">
                  <h2 className="[font-family:'Inter',Helvetica] font-medium text-[#212529] text-[42px] leading-[52.8px] mb-[18px]">
                    Download the
                    <br />
                    Creative IT App
                    <br />– Learn Anytime,
                    <br />
                    Anywhere!
                  </h2>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#605f62] text-lg leading-[28.8px] mb-[33.11px]">
                    Get instant access to courses, resources, and
                    <br />
                    updates. Start your journey today!
                  </p>
                  <div className="w-[170px] h-[54.08px] bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/image.png)] bg-cover bg-center" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[742px] flex justify-center pl-[106px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <div className="w-full h-[430.77px] bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/image-1.png)] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Solutions Section */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center mb-[58px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#1f1e1e] text-[44px] leading-[54px] mb-[15px] mt-[46px]">
              Exclusive Solutions that Set Us Apart
            </h2>
            <p className="max-w-[789px] mx-auto [font-family:'Inter',Helvetica] font-normal text-[#605f62] text-base text-center leading-[26px]">
              Our aim is to make your learning experience the best possible by
              providing you with additional facilities that will help you to
              grow without bounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-[82px]">
            {features.map((feature, index) => (
              <div key={index} className="w-[440px] h-[520px] px-3">
                <Card
                  className={`h-full px-[35px] py-[65px] rounded-[33px] bg-[linear-gradient(231deg,rgba(247,252,231,1)_3%,rgba(247,252,231,0.3)_96%),linear-gradient(0deg,rgba(253,243,253,1)_0%,rgba(253,243,253,1)_100%)] translate-y-[-1rem] animate-fade-in opacity-0`}
                  style={{ "--animation-delay": `${400 + index * 200}ms` }}
                >
                  <CardContent className="p-0 h-full flex flex-col">
                    <div
                      className="w-[50px] h-[50px] bg-cover bg-center mb-4"
                      style={{ backgroundImage: `url(${feature.icon})` }}
                    />
                    <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#1f1e1e] text-[22px] leading-[33px] mb-3 pt-4">
                      {feature.title}
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#605f62] text-base leading-6 pt-1 pb-2">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="h-auto w-[145px] px-0 py-2.5 bg-[linear-gradient(192deg,rgba(255,128,121,1)_0%,rgba(255,30,30,1)_59%)] text-white text-sm rounded-[5px] border-0">
              Our Facility
            </Button>
          </div>
        </div>
      </section>

      {/* Course Sections */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-[1320px] mx-auto">
          {courseSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-[60px]">
              <h2
                className="[font-family:'Inter',Helvetica] font-bold text-[#1f1e1e] text-[32px] leading-[38px] mb-[26px] translate-y-[-1rem] animate-fade-in opacity-0"
                style={{ "--animation-delay": `${200 + sectionIndex * 100}ms` }}
              >
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mx-3">
                {section.courses.map((course, courseIndex) => (
                  <div key={courseIndex} className="px-3 pb-[60px]">
                    <Card
                      className={`bg-white rounded-[25px] border border-[#0000001a] overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0`}
                      style={{
                        "--animation-delay": `${400 + sectionIndex * 100 + courseIndex * 200}ms`,
                      }}
                    >
                      <div
                        className="w-full h-[232.88px] bg-cover bg-center"
                        style={{ backgroundImage: `url(${course.image})` }}
                      />
                      <CardContent className="p-[17px_14px_28px_17px]">
                        <Badge
                          variant="secondary"
                          className="bg-transparent text-[#df6812] p-0 mb-2"
                        >
                          {course.category}
                        </Badge>
                        <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#1f1e1e] text-xl leading-8 mb-[3px]">
                          {course.title}
                        </h3>
                        <div className="flex justify-between items-center mb-[25px]">
                          <div className="flex items-center gap-[3.9px]">
                            {[...Array(4)].map((_, i) => (
                              <img
                                key={i}
                                className="w-[15.75px] h-3.5"
                                alt="Star"
                                src="https://c.animaapp.com/mflxuw34KVFwR9/img/img-1.svg"
                              />
                            ))}
                            <img
                              className="w-[15.75px] h-3.5"
                              alt="Star"
                              src="https://c.animaapp.com/mflxuw34KVFwR9/img/img.svg"
                            />
                            <span className="[font-family:'Inter',Helvetica] font-normal text-[#787a82] text-sm leading-[17px] ml-1">
                              {course.reviews}
                            </span>
                          </div>
                          <span className="[font-family:'Inter',Helvetica] font-normal text-[#787a82] text-sm leading-[17px]">
                            {course.students}
                          </span>
                        </div>
                        <div className="flex justify-between items-start">
                          <span className="[font-family:'Inter',Helvetica] font-bold text-[#434242] text-base leading-[30px]">
                            {course.fee}
                          </span>
                          <Button
                            variant="outline"
                            className="h-[35px] px-2 py-2 text-[#8c0000] text-sm border-[#ff7e31] rounded-lg -mt-[5px]"
                          >
                            Click for discount
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center">
            <Button className="h-auto w-[145px] px-0 py-2.5 bg-[linear-gradient(5deg,rgba(255,30,30,1)_35%,rgba(255,128,121,1)_100%)] text-white text-sm rounded-[5px] border-0">
              All Course
            </Button>
          </div>
        </div>
      </section>

      {/* Free Seminars Section */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-[1320px] mx-auto bg-[#fdf2f280] rounded-[35px] px-9 py-[68px]">
          <div className="flex flex-wrap items-center gap-0">
            <div className="w-full lg:w-1/2 px-3">
              <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#1f1e1e] text-[45px] leading-[54px] mb-[18px]">
                  Join Our Free Seminars
                </h2>
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#605f62] text-base leading-[26px] mb-[18px]">
                  Need guidelines to choose a suitable course? Join our free
                  seminars to consult with our experts, they will guide you to
                  pick the course that matches your interest and discuss the
                  career prospects.
                </p>

                <div className="flex items-center gap-0 rounded-[21px] bg-[linear-gradient(90deg,rgba(255,236,224,1)_40%,rgba(255,255,255,1)_60%)] mb-[31px]">
                  <div className="w-[107.11px] flex flex-col items-center">
                    <div className="[font-family:'Roboto',Helvetica] font-bold text-black text-[27.2px] text-center leading-8">
                      16
                    </div>
                    <div className="[font-family:'Roboto',Helvetica] font-normal text-[#ff7e31] text-xl text-center leading-8">
                      Sep , 25
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-between px-[15px] py-[18px] bg-white rounded-[21px] border border-[#ecdcdc]">
                    <div>
                      <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#1f1e1e] text-lg leading-8">
                        Networking Technology
                      </h3>
                      <p className="[font-family:'Inter',Helvetica] font-bold text-[#605f62] text-sm leading-[29px]">
                        Online , Time: Online 08 : 00 PM
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="w-20 h-auto p-px bg-white text-[#cf0000] text-sm border-[#cf0000] rounded-[10px]"
                    >
                      Join
                    </Button>
                  </div>
                </div>

                <Button className="h-auto px-[18px] py-2.5 bg-[linear-gradient(189deg,rgba(255,128,121,1)_0%,rgba(255,30,30,1)_59%)] text-white text-sm rounded-[10px] border-0">
                  Free Seminar Schedule
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-3">
              <div className="relative rounded-3xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                <div className="absolute top-[448px] left-[507px] w-[105px] h-[102px] rounded-3xl bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/victor-dots.png)] bg-cover bg-center" />
                <div className="w-full h-[476.81px] rounded-3xl bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/creative-it-institute.png)] bg-cover bg-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project-Based Classes Section */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-[1320px] mx-auto bg-[#f6f5fb] rounded-[35px] px-7 py-[43px]">
          <div className="flex flex-wrap items-center gap-0">
            <div className="w-full lg:w-[526.66px] px-3 relative z-10">
              <div className="relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                <div className="absolute -top-[43px] left-[438px] w-[105px] h-[102px] bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/victor-dots-1.png)] bg-cover bg-center" />
                <div className="w-full h-[548.34px] bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/providing-project-based-classes-is-our-specialty.png)] bg-cover bg-center" />
              </div>
            </div>
            <div className="w-full lg:w-[737.33px] pl-[117.33px] pr-[103px] relative z-0">
              <div className="max-w-[517px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#1f1e1e] text-[32px] leading-[38px] mb-4">
                  Providing project-based classes
                  <br />
                  is our specialty
                </h2>
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#605f62] text-base leading-[26px]">
                  We believe in skills gained through practical projects. A
                  great
                  <br />
                  number of people struggle to start their career in the tech
                  field for
                  <br />
                  only having conceptual knowledge. Creative IT makes sure to
                  <br />
                  provide hands-on training to prepare you for job markets. Our
                  <br />
                  course module contains projects that are designed to track
                  your
                  <br />
                  progress. During the course, you will be able to make a
                  portfolio
                  <br />
                  yourself to showcase your practical skills to the potential
                  employers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap items-start gap-0">
          <div className="w-full lg:w-1/2 px-3">
            <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <p className="[font-family:'Inter',Helvetica] font-bold text-[#fb312e] text-lg leading-8 mb-[3px]">
                16 Years of Excellence
              </p>
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#1f1e1e] text-[45px] leading-[54px] mb-5">
                Shaping World-Class IT
                <br />
                Experts
              </h2>
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#605f62] text-base leading-[26px] mb-[30px]">
                Creative IT has been working with a vision to create IT experts
                for the past 16 years.
                <br />
                In a fast pacing world, where every sector relies on technology,
                you need to
                <br />
                develop IT skills to secure a better future. With the utmost
                dedication, we have been
                <br />
                able to make more than 90,000 IT experts who are currently
                working in different
                <br />
                sectors.
              </p>
              <div className="flex gap-3.5">
                <Button className="h-auto px-16 py-3.5 bg-[linear-gradient(188deg,rgba(255,128,121,1)_0%,rgba(255,30,30,1)_59%)] text-white text-lg rounded-[10px] border-0">
                  Browse Course
                </Button>
                <Button className="h-auto px-16 py-3.5 bg-[linear-gradient(189deg,rgba(255,128,121,1)_0%,rgba(255,30,30,1)_59%)] text-white text-lg rounded-[10px] border-0">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3">
            <div className="pt-[41px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <div className="w-[636px] h-[381.59px] rounded-3xl bg-[url(https://c.animaapp.com/mflxuw34KVFwR9/img/computer-lab.png)] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Statistics */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-0">
          {achievementStats.map((stat, index) => (
            <div key={index} className="px-3">
              <Card
                className={`px-[15px] py-[30px] bg-[#faf9fd] rounded-[15px] translate-y-[-1rem] animate-fade-in opacity-0`}
                style={{ "--animation-delay": `${200 + index * 100}ms` }}
              >
                <CardContent className="p-0 text-center">
                  <div className="[font-family:'Inter',Helvetica] font-bold text-[#cf0000] text-3xl leading-[45px] mb-0">
                    {stat.number}
                  </div>
                  <div className="[font-family:'Inter',Helvetica] font-bold text-[#1f1e1e] text-base text-center leading-[26px]">
                    {stat.title}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Companies Section */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center mb-[42px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#1f1e1e] text-[45px] leading-[54px] px-[376px]">
              3000+ Companies Are
              <br />
              Connected to Us
            </h2>
          </div>

          <Tabs defaultValue="working" className="w-full">
            <TabsList className="w-full justify-between border-b border-[#0000001a] bg-transparent h-auto p-0 mb-[42px]">
              <TabsTrigger
                value="working"
                className="flex-1 px-[76.39px] py-2.5 border-b-[3px] border-transparent data-[state=active]:border-[#cf0000] data-[state=active]:text-[#cf0000] bg-transparent rounded-[4px_4px_0px_0px]"
              >
                <div className="relative">
                  Working with
                  <div className="absolute w-[472px] h-[3px] top-[50px] left-[-118px] bg-[#cf0000] data-[state=active]:block hidden" />
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="members"
                className="flex-1 px-[76.39px] py-2.5 border-b-[3px] border-transparent data-[state=active]:border-[#cf0000] data-[state=active]:text-[#cf0000] bg-transparent rounded-[4px_4px_0px_0px]"
              >
                Members of
              </TabsTrigger>
              <TabsTrigger
                value="concerns"
                className="flex-1 px-[76.39px] py-2.5 border-b-[3px] border-transparent data-[state=active]:border-[#cf0000] data-[state=active]:text-[#cf0000] bg-transparent rounded-[4px_4px_0px_0px]"
              >
                Our Concerns
              </TabsTrigger>
            </TabsList>

            <TabsContent value="working" className="mt-0">
              <img
                className="w-full h-[1740px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]"
                alt="Companies list"
                src="https://c.animaapp.com/mflxuw34KVFwR9/img/tabpanel---list.svg"
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};
