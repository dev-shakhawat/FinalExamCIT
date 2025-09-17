import React from 'react'
import { Button } from '../ui/button'
import { useState } from 'react';
import fetchStory from '../../helpers/fetchStory';
import { useNavigate } from 'react-router';

export default function Success() {
 
  const [stories , setStories] = useState([]);
  const navigate = useNavigate();

  useState(() => {
    (async () => {
      await fetchStory(setStories);
    })()
  }, []);

  return (
    <section className=" px-4 py-10" id="successStories">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-14 translate-y-[-1rem]  ">
          <h2 className="font-bold text-[#1f1e1e] text-3xl sm:text-4xl leading-tight mb-4">
            Success Stories
          </h2>
          <p className="max-w-xl mx-auto text-[#605f62] text-sm sm:text-base leading-6">
            The presence of our students in the ever expanding IT industry motivates us, drives us to guide more people towards a sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {stories.length > 0 ? stories.map((src, idx) => (
            <div key={idx} className='border border-gray-200 rounded-md p-2    ' >
              <img
                
                className="w-full h-[300px] object-cover   " 
                src={src.image}
                alt={`Success story ${idx + 1}`}
              />

              <p className="font-bold text-[#1f1e1e] text-xl sm:text-2xl leading-tight mt-4">
                {src.studentName}
              </p>

              <p className="text-[#605f62] text-sm sm:text-base leading-6">
                {src.courseName}
              </p>

            </div>
          )): "No stories yet."}
        </div>

        <div className="text-center">
          <Button onClick={() => navigate("/success-story")} className="h-auto   px-0 py-2.5 bg-gradient-to-r from-[#ff8079] to-[#ff1e1e] text-white text-sm rounded-md border-0">
            See More
          </Button>
        </div>
      </div>
    </section>
  )
}
