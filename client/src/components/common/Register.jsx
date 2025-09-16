import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux"; 
import { userSet } from "../../redux/slices/userSlice";

export default function Register({setIsLogin}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "student" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/register`, form , { withCredentials: true });
      
      if(res.status === 200){  
        dispatch(userSet(res.data.user));
        navigate("/account"); // login successful 
      }
      
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-[100px] pb-10 ">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        {error && (
          <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>
        <p>Already have an account? <button className="text-indigo-600" onClick={() => setIsLogin(true)}>Login</button></p>
      </div>
    </div>
  );
}
