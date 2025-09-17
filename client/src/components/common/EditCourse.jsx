import axios from 'axios';
import React from 'react'
import Input from './Input';
import CategorySelect from './CategorySelect';

export default function EditCourse({editingCourse , setEditingCourse , fetchCourses}) {

const handleUpdateCourse = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append("title", editingCourse.title);
    formData.append("description", editingCourse.description);
    formData.append("price", editingCourse.price);
    formData.append("instructor", editingCourse.instructor);
    formData.append("category", editingCourse.category);

    // যদি নতুন image থাকে
    if (editingCourse.thumbnailImage instanceof File) {
      formData.append("thumbnailImage", editingCourse.thumbnailImage);
    }

    const res = await axios.put(
      `${import.meta.env.VITE_BASE_URL}/api/courses/update/${editingCourse._id}`,
      formData,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    // update state
    fetchCourses();
    setEditingCourse(null);

  } catch (err) {
    console.log(err);
  }
};


    console.log(editingCourse);
    


  return ( 
 
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded shadow w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Edit Course</h2>
      <form
        className="space-y-4" 
      >
        <Input value={editingCourse?.title} type={"text"} placeholder="Title" onChange={(e) => setEditingCourse({ ...editingCourse, title: e.target.value })}  />

        <Input value={editingCourse?.description} type={"text"} placeholder="Description" onChange={(e) => setEditingCourse({ ...editingCourse, description: e.target.value })}  />
 
        <Input value={editingCourse?.price} type={"text"} placeholder="Price" onChange={(e) => setEditingCourse({ ...editingCourse, price: e.target.value })}  />
 
        <Input value={editingCourse?.instructor} type={"text"} placeholder="Instructor"  onChange={(e) => setEditingCourse({ ...editingCourse, instructor: e.target.value })}  />
        
        <CategorySelect value={editingCourse?.category} onChange={(e) => setEditingCourse({ ...editingCourse, category: e.target.value })}  />
 
        <Input type={"file"} placeholder="File"  onChange={(e) => setEditingCourse({ ...editingCourse, thumbnailImage: e.target.files[0] })} />
 

 

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => setEditingCourse(null)}
            className="px-3 py-1 bg-gray-400 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdateCourse}
            type="button"
            className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  </div> 

  )
}
