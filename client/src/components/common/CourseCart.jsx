import axios from "axios";
import React from "react";
import EditCourse from "./EditCourse";

export default function CourseCart({course , fetchCourses , editingCourse , setEditingCourse}) {

const handleDeleteCourse = async (id) => {
    if (!confirm("Are you sure?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/courses/delete/${id}`, { withCredentials: true }); 
      fetchCourses();
    } catch (err) {
      console.log(err);
    }
  };


const handleEditCourse = (course) => {
    console.log(course);
    
    setEditingCourse(course);
  };


  
  return (
    <div   className="w-full border rounded-md     ">

        {/* edit course */}
      {editingCourse?._id === course?._id && (
        <EditCourse
          editingCourse={editingCourse}
          setEditingCourse={setEditingCourse}
          fetchCourses={fetchCourses}
        />
      )}


      {/* image */}
      <img src={course.thumbnailImage} alt="" className="w-full h-40   " />

      {/* description */}
      <div className="bg-gray-200 p-2  ">
        {/* title */}
        <h2 className=" font-semibold text-xl line-clamp-1   ">
          {course.title}
        </h2>

        {/* description */}
        <p className="text-sm line-clamp-2   ">{course.description}</p>

        {/* price */}
        <p className="font-semibold text-base text-red-400  ">
          BDT: {course.price}
        </p>

        {/* buttons */}
        <div className="flex gap-1 mt-3">
          <button
            onClick={() => handleEditCourse(course)}
            className="px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 flex-1 "
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteCourse(course._id)}
            className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 flex-1 "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
