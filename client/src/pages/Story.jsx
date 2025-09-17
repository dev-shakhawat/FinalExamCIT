import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Story() {

  const [stories, setStories] = useState([]);

  useEffect(() => { 

    (async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/success-stories/all`);
      console.log(res);
      
 
      if(res.data.story){
        setStories(res.data.story);
      } 

    })();
  }, []);

 

  return (
    <div className='pt-35 pb-10  '>
      
      <h2 className=" font-bold text-2xl sm:text-3xl text-[#1f1e1e] text-center  ">Success Story of Students</h2>

      {/* all story */}
      <div className=" max-w-[1400px] mx-auto mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6    ">
      {stories.length > 0 ? stories.map((story, idx) => (
        <div key={story._id} className='p-5 rounded-lg shadow-lg border border-gray-200    '>
          <img src={story.image} alt={story.name} className='w-full h-[350px] rounded-lg object-cover' />

          <h3 className="font-bold text-xl text-[#1f1e1e] mt-4 ">{story.studentName}</h3>
          <p className="text-[#605f62] text-sm sm:text-base leading-6 sm:leading-7">{story.storyText}</p>
          <p className="text-[#e45633] text-sm sm:text-base leading-6 sm:leading-7">{story.courseName}</p>

        </div>
      )) : "No Story Found"}
      </div>


    </div>
  )
}
