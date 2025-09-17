import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

export default function OurCourses() {
  const [activeTab, setActiveTab] = useState("all");
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/courses/${
          activeTab === "all" ? "all" : `category/${activeTab}`
        }`,
        { withCredentials: true }
      );
      setCourses(res.data.data);
    })();
  }, [activeTab]);

  const tabs = ["all", "Programming", "Design", "Marketing", "Business"];

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-10">
      {/* Header */}
      <div className="  bg-[#faf9fd] rounded-3xl p-5 text-center mb-10">
        <h2 className="font-bold text-3xl sm:text-4xl text-[#1f1e1e] mb-4">Our Courses</h2>
        <p className="text-[#605f62] text-sm sm:text-base max-w-3xl mx-auto leading-6 sm:leading-7">
          We have designed our courses with the most demanding professional skills. The knowledge,
          experience, and expertise gained through the program will ensure your desired job in the
          global market. From the list below you can enroll to any online or offline courses at any time.
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="  mx-auto w-full">
        <TabsList className="flex flex-wrap justify-between border-b border-[#0000001a] mb-8">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              onClick={() => setActiveTab(tab)}
              className="px-2 py-2 border-b-2 border-transparent data-[state=active]:border-[#cf0000] data-[state=active]:text-[#cf0000] bg-transparent"
            >
              {tab === "all" ? "All Course" : tab}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[700px] overflow-y-auto">
          {courses.map((course, idx) => (
            <Card
              onClick={() => navigate(`/course/${course._id}`)}
              key={idx}
              className="bg-white rounded-2xl border border-[#0000001a] overflow-hidden animate-fade-in"
              style={{ "--animation-delay": `${400 + idx * 100}ms` }}
            >
              <div
                className="w-full h-52 bg-cover bg-center"
                style={{ backgroundImage: `url(${course.thumbnailImage})` }}
              />
              <CardContent className="p-3">
                <Badge variant="secondary" className="bg-transparent text-[#df6812] mb-2">
                  {course.category}
                </Badge>
                <h3 className="font-bold text-[#1f1e1e] text-xl mb-2">{course.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#434242] text-base">BDT {course.price}</span>
                  <Button className="text-[#8c0000] text-sm border-[#ff7e31] rounded-lg px-2 py-1 h-8" variant="outline">
                    Click for discount
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Tabs>
    </section>
  );
}
