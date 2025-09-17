import axios from "axios";
import React from "react";

import fetchStory from "../../helpers/fetchStory";

export default function Storycart({story , setStories}) { 


  const handleDeleteStory = async (storyId) => {
    try {
      const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/success-stories/delete/${storyId}` , { withCredentials: true });
      if(res.data){ 
        await fetchStory(setStories);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full border rounded-md     ">

      {/* image */}
      <img src={story.image} alt="" className="w-full h-40   " />

      {/* description */}
      <div className="bg-gray-200 p-2  ">
        {/* title */}
        <h2 className=" font-semibold text-xl line-clamp-1   ">
          {story.studentName}
        </h2>

        {/* description */}
        <p className="text-sm line-clamp-2 h-10    ">{story.storyText}</p>

 

        {/* buttons */}
        <div className="flex gap-1 mt-3">
          <button 
            className="px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 flex-1 "
          >
            Edit
          </button>
          <button 
            onClick={() => handleDeleteStory(story._id)}
            className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 flex-1 "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
