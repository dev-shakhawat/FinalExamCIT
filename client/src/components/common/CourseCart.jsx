import axios from "axios";
import React from "react";
import EditCourse from "./EditCourse";
import { useNavigate } from "react-router";
import handleDeleteCourse from "../../helpers/deleteCourse";

export default function CourseCart({course , fetchCourses , editingCourse , setEditingCourse , onClick}) {

 




const handleEditCourse = (e , course) => { 
    setEditingCourse(course);
  };


  

  
  return (
    <div    className="w-full border rounded-md     ">

        {/* edit course */}
      {editingCourse?._id === course?._id && (
        <EditCourse
          editingCourse={editingCourse}
          setEditingCourse={setEditingCourse}
          fetchCourses={fetchCourses}
        />
      )}


      {/* image */}
      <img onClick={onClick} src={course.thumbnailImage} alt="" className="w-full h-55 cursor-pointer  " />

      {/* description */}
      <div onClick={onClick} className="bg-gray-200 p-2 cursor-pointer   ">
        {/* title */}
        <h2 className=" font-semibold text-xl line-clamp-1   ">
          {course.title}
        </h2>

        {/* description */}
        <p className="text-sm line-clamp-2 h-10    ">{course.description}</p>

        {/* price */}
        <p className="font-semibold text-base text-red-400  ">
          BDT: {course.price}
        </p>

      </div>
        {/* buttons */}
        <div className="flex gap-1   bg-gray-200 p-2">
          <button
            onClick={(e) => handleEditCourse(e ,course)}
            className="px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 flex-1 "
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteCourse(course._id ,  fetchCourses)}
            className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 flex-1 "
          >
            Delete
          </button>
        </div>
    </div>
  );
}
