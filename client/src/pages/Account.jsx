
import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "../components/common/Input";
import { useSelector } from "react-redux";
import CourseCart from "../components/common/CourseCart";
import CategorySelect from "../components/common/CategorySelect";
import SuccessForm from "../components/customs/SuccessForm";
import fetchStory from "../helpers/fetchStory";
import Storycart from "../components/common/Storycart";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux"; 
import { notiSet } from "../redux/slices/notifySlice";

export default function Account() {
  const user = useSelector((state) => state.user.userInfo);
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    price: "",
    instructor: "",
    category: "",
    thumbnailImage: null, 
    isPopular: false, // ✅ নতুন field
  });
  const [editingCourse, setEditingCourse] = useState(null);
  const [stories , setStories] = useState([]); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await fetchStory(setStories);
    })()
  },[])

  const fetchCourses = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/courses/getAll`, { withCredentials: true });
      setCourses(res.data.data);
    } catch (err) {
      setCourses(err.response?.data?.data || []);
    }
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
      formData.append("isPopular", newCourse.isPopular);  
      if (newCourse.thumbnailImage) {
        formData.append("thumbnailImage", newCourse.thumbnailImage);
      }

      await axios.post(`${import.meta.env.VITE_BASE_URL}/api/courses/create`, formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      setNewCourse({ 
        title: "", 
        description: "", 
        price: "", 
        instructor: "", 
        category: "", 
        thumbnailImage: null,
        isPopular: false,
      });
      dispatch(notiSet({show: true , success: true , message: "Course added successfully"}));
      setTimeout(() => {
        dispatch(notiSet({show: false , success: false , message: ""}));
      }, 1500)
      fetchCourses();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => { 
    fetchCourses();
  }, []);


  const handleLogout = async ()=>{
    try {
      await axios.get(`${import.meta.env.VITE_BASE_URL}/api/auth/logout`, { withCredentials: true });
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 100);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-[150px] pb-10 ">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Account Dashboard</h1>
          <button
             onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer "
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
                <CategorySelect onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })} value={newCourse.category} />

                {/* Is Popular checkbox */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="isPopular"
                    checked={newCourse.isPopular}
                    onChange={(e) => setNewCourse({ ...newCourse, isPopular: e.target.checked })}
                  />
                  <label htmlFor="isPopular" className="text-sm font-medium">Mark as Popular</label>
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium">Thumbnail Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setNewCourse({ ...newCourse, thumbnailImage: e.target.files[0] })}
                    required
                  />
                </div>

                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                  Add Course
                </button>
              </form>
            </div>


            {/* success story form */}
            <SuccessForm setStories={setStories} />

            {/* Courses List */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Stories</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {stories.length > 0 ? stories.map(story => (
                  <Storycart 

                    key={story._id} 
                    story={story} 
                    setStories={setStories}  
                  /> 
                )): "No stories found"}
              </div>
            </div>


            {/* Courses List */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Courses</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {courses.length > 0 ?  courses.map(course => (
                  <CourseCart 
                    onClick={() => navigate(`/course/${course?._id}`)}
                    key={course._id} 
                    course={course} 
                    fetchCourses={fetchCourses} 
                    editingCourse={editingCourse} 
                    setEditingCourse={setEditingCourse}  
                  /> 
                )) : "No courses found"}
              </div>
            </div>




          </div>
        )}
      </div>
    </div>
  );
}
