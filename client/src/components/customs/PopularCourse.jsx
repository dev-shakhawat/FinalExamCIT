import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

export default function PopularCourse() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/courses/popular/list`
      );
      setCourses(res.data.data);
    })();
  }, []);

  return (
    <section className="container mx-auto px-4 py-15">
      <div className="max-w-[1400px] mx-auto bg-[#faf9fd] rounded-3xl p-5">
        {/* Header */}
        <div className="text-center mb-10  translate-y-[-1rem] ">
          <h2 className="font-bold text-3xl sm:text-4xl text-[#1f1e1e] mb-4 mt-5">
            Popular Courses
          </h2>
          <p className="max-w-3xl mx-auto text-[#605f62] text-sm sm:text-base leading-6 sm:leading-7">
            We have designed our courses with the most demanding professional skills. The knowledge,
            experience, and expertise gained through the program will ensure your desired job in the
            global market. From the list below you can enroll to any online or offline courses at any time.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[700px] overflow-y-auto">
          {courses.length > 0 ? (
            courses.map((course, idx) => (
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
                    <Button className="h-8 px-2 py-1 text-[#8c0000] text-sm border-[#ff7e31] rounded-lg" variant="outline">
                      Click for discount
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="col-span-full text-center font-bold text-[#cf0000]">
              No popular course found
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
