import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '../ui/card'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { BsCodeSlash } from "react-icons/bs";
import { FcBusiness } from "react-icons/fc";
import { FcPositiveDynamic } from "react-icons/fc";
import { SiCssdesignawards } from "react-icons/si";

export default function AllCategories() {

  const [courseCategories, setCourseCategories] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/categories/getAll`, { withCredentials: true });
      setCourseCategories(res.data.allCategory);
    })();
  }, []);

  const handleNavigateToCategory = (category) => {
    navigate(`/category/${category}`);
  };

  if(courseCategories.length === 0){
    return (
      <p className='text-center font-bold w-full py-2 bg-[linear-gradient(190deg,rgba(255,128,121,1)_0%,rgba(255,30,30,1)_59%)] text-white text-lg rounded-md'>
        No categories found, Please add categories by publishing a course from admin panel
      </p>
    )
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 px-2 py-10   ">
      {courseCategories.map((category, index) => (
        <Card
          onClick={() => handleNavigateToCategory(category)}
          key={index}
          className="flex-shrink-0 w-full sm:w-40 md:w-48 h-[157px] p-4 bg-white rounded-2xl shadow-md cursor-pointer hover:scale-105 transition-transform"
        >
          <CardContent className="flex flex-col items-center justify-center h-full p-0">
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              {category === "Programming" && <BsCodeSlash className='text-[#cf5555] w-full h-full' />}
              {category === "Business" && <FcBusiness className='w-full h-full' />}
              {category === "Marketing" && <FcPositiveDynamic className='w-full h-full' />}
              {category === "Design" && <SiCssdesignawards className='text-[#cf5555] w-full h-full' />}
            </div>
            <h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-lg text-center leading-6">
              {category}
            </h3>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
