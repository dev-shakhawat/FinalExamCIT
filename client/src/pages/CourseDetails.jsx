import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import handleDeleteCourse from '../helpers/deleteCourse';

export default function CourseDetails() {

  const params = useParams();
  const navigate = useNavigate();
 
  

  const [course , setCourse] = useState(null);

  useEffect(() => {
    
    window.scrollTo(0, 0);

    (async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/courses/single/${params.id}`);
      setCourse(res.data.course);
      
    })();
  }, []);
  
  

  return (
    <div className='pt-35 pb-10 '>
      <div className="max-w-[1400px] mx-auto gap-20 flex ">
         
         {/* description */}
         <div className="flex-1">
           <h3 className="text-4xl font-bold line-clamp-2  ">{course?.title}</h3>
           <p className="text-gray-500 mt-2 ">{course?.description}</p>
           <p className="text-[#FF1E1E] font-semibold mt-2   ">BDT {course?.price}</p>
           
           
           {course?.creator.role === "admin" && 
           <div className="flex mt-5  ">
             <button type="button" className='text-white bg-[#FF1E1E] hover:bg-[#FF1E1E]/90 focus:ring-4 focus:ring-[#FF1E1E]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2'>Edit</button>
             <button onClick={() => handleDeleteCourse(course?._id ,  navigate(-1) )} type="button" className='text-white bg-[#FF1E1E] hover:bg-[#FF1E1E]/90 focus:ring-4 focus:ring-[#FF1E1E]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2'>Delete</button>
           </div>}
         </div>

         {/* image */}
         <div className="flex-1 ">
           <img src={course?.thumbnailImage} alt="" className='w-full h-[400px] object-cover rounded-lg   ' />
         </div>


      </div>
         
      
    </div>
  )
}
