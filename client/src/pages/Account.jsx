// src/pages/Account.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "../components/common/Input";
import { useSelector } from "react-redux";
import CourseCart from "../components/common/CourseCart";

export default function Account() {
  const user = useSelector((state) => state.user.userInfo);
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    price: "",
    instructor: "",
    category: "",
    thumbnailImage: null, // now a file
  });
  const [editingCourse, setEditingCourse] = useState(null);

    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/courses/getAll`, { withCredentials: true });
        setCourses(res.data.data);
      } catch (err) {
        setCourses(err.response.data.data);
      }
    };
  
  

  const handleLogout = async () => {
    await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/logout`, {}, { withCredentials: true });
    setUser(null);
    window.location.reload();
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", newCourse.title);
      formData.append("description", newCourse.description);
      formData.append("price", newCourse.price);
      formData.append("instructor", newCourse.instructor);
      formData.append("category", newCourse.category);
      if (newCourse.thumbnailImage) {
        formData.append("thumbnailImage", newCourse.thumbnailImage);
      }

      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/courses/create`, formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      setNewCourse({ title: "", description: "", price: "", instructor: "" , category: "", thumbnailImage: null });
      fetchCourses();
    } catch (err) {
      console.log(err);
    }
  };


  
  
  const handleUpdateCourse = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", editingCourse.title);
      formData.append("description", editingCourse.description);
      formData.append("price", editingCourse.price);
      formData.append("instructor", editingCourse.instructor);
      if (editingCourse.thumbnailImage instanceof File) {
        formData.append("thumbnailImage", editingCourse.thumbnailImage);
      }

      const res = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/courses/${editingCourse._id}`, formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      setCourses(courses.map(c => c._id === res.data._id ? res.data : c));
      setEditingCourse(null);
    } catch (err) {
      console.log(err);
    }
  };
  
  
  useEffect(() => { 
    fetchCourses();
  }, []);
  
  
  
  

  return (
    <div className="min-h-screen bg-gray-100 pt-[150px] pb-10 ">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Account Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        {user?.role !== "admin" && (
          <div className="text-center text-lg text-gray-700">
            Welcome, {user?.name}! You have no admin privileges.
          </div>
        )}

        {user?.role === "admin" && (
          <div className="space-y-8">
            {/* Add New Course */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Add New Course</h2>
              <form className="space-y-4" onSubmit={handleAddCourse}>
                <Input
                  placeholder="Title"
                  type="text"
                  value={newCourse.title}
                  onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                />
                <Input
                  placeholder="Description"
                  type="text"
                  value={newCourse.description}
                  onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                />
                <Input
                  placeholder="Price"
                  type="number"
                  value={newCourse.price}
                  onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })}
                />
                <Input
                  placeholder="Instructor"
                  type="text"
                  value={newCourse.instructor}
                  onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })}
                />
                <Input
                  placeholder="Category"
                  type="text"
                  value={newCourse.category}
                  onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })}
                />
                <div>
                  <label className="block mb-1 text-sm font-medium">Thumbnail Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setNewCourse({ ...newCourse, thumbnailImage: e.target.files[0] })}
                  />
                </div>

                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                  Add Course
                </button>
              </form>
            </div>

            {/* Courses List */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Courses</h2>
              <div className=" grid grid-cols-4 gap-2">
                {courses.map(course =>  <CourseCart course={course} fetchCourses={fetchCourses} editingCourse={editingCourse} setEditingCourse={setEditingCourse}  /> )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
