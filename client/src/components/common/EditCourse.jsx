import axios from 'axios';
import React from 'react'

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


    


  return ( 
 
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded shadow w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Edit Course</h2>
      <form
        className="space-y-4" 
      >
        <input
          type="text"
          placeholder="Title"
          value={editingCourse?.title}
          onChange={(e) =>
            setEditingCourse({ ...editingCourse, title: e.target.value })
          }
          className="w-full border rounded px-3 py-2"
          required
        />

        <input
          type="text"
          placeholder="Description"
          value={editingCourse?.description}
          onChange={(e) =>
            setEditingCourse({ ...editingCourse, description: e.target.value })
          }
          className="w-full border rounded px-3 py-2"
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={editingCourse?.price}
          onChange={(e) =>
            setEditingCourse({ ...editingCourse, price: e.target.value })
          }
          className="w-full border rounded px-3 py-2"
          required
        />

        <input
          type="text"
          placeholder="Instructor"
          value={editingCourse?.instructor}
          onChange={(e) =>
            setEditingCourse({ ...editingCourse, instructor: e.target.value })
          }
          className="w-full border rounded px-3 py-2"
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={editingCourse?.category}
          onChange={(e) =>
            setEditingCourse({ ...editingCourse, category: e.target.value })
          }
          className="w-full border rounded px-3 py-2"
          required
        />

        <div>
          <label className="block mb-1 text-sm font-medium">Thumbnail Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setEditingCourse({ ...editingCourse, thumbnailImage: e.target.files[0] })
            }
          />
        </div>

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
