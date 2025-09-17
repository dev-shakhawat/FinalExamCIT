import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Banner from "../components/common/Banner";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

export default function Categories() {
  const params = useParams();

  const [courses, setCourses] = useState([]);

  console.log(params);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/courses/category/${
          params.category
        }`,
        { withCredentials: true }
      );
      setCourses(res.data.data);
    })();
  }, []);

  return (
    <div className="py-[100px]    ">
      <Banner />

      <h2 className="text-4xl font-bold text-center py-10">
        {params.category}
      </h2>

      <div className="max-w-[1400px] mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {courses.length > 0 
          ? courses.map((course, index) => (
              <Card
                key={index}
                className="   bg-white rounded-[25px] border border-[#0000001a] overflow-hidden translate-y-[-1rem]  "
                style={{ "--animation-delay": `${400 + index * 200}ms` }}
              >
                <div
                  className="w-full h-[214.88px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${course?.thumbnailImage})` }}
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
                  <div className="flex justify-between items-end mt-3  ">
                    <span className="[font-family:'Inter',Helvetica] font-bold text-[#434242] text-base leading-[30px]">
                      BDT {course?.price}
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
            ))
          : "No course found"}
        </div>
      </div>
    </div>
  );
}
