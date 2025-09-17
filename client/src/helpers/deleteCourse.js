import axios from "axios";


const handleDeleteCourse = async (id , fn) => {
    if (!confirm("Are you sure?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/courses/delete/${id}`, { withCredentials: true }); 
      if(fn) fn(); 
    } catch (err) {
      console.log(err);
    }
  };


  export default handleDeleteCourse