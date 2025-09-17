import React, { useState } from 'react'
import Input from '../common/Input'
import axios from 'axios';
import fetchStory from '../../helpers/fetchStory';
import { useDispatch } from 'react-redux';
import { notiSet } from '../../redux/slices/notifySlice';

export default function SuccessForm({setStories}) {

    const [success, setSuccess] = useState({
        studentName: "",
        storyText: "",
        courseName: "",
        image: null,
    });
    const dispatch = useDispatch();



    const handleUploadStory = async ()=>{
        try{
            const formData = new FormData();
            formData.append("studentName", success.studentName);
            formData.append("storyText", success.storyText);
            formData.append("courseName", success.courseName);
            formData.append("image", success.image);

            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/success-stories/add`, formData, {
                withCredentials: true,
                headers: { "Content-Type": "multipart/form-data" },
              });

            if(res.data.story){
                setSuccess({
                    studentName: "",
                    storyText: "",
                    courseName: "",
                    image: null,
                });
                dispatch(notiSet({show: true , success: true , message: "Story added success"}));
                setTimeout(() => {
                  dispatch(notiSet({show: false , success: false , message: ""}));
                }, 1500)
                await fetchStory(setStories);
            } 

        }catch(err){
            console.log(err);
        }
    }
  return (
    <div className='p-3 bg-white rounded-md shadow-sm '>
        
        <h2 className=" font-monospace font-bold text-2xl ml-3   ">Add a success story.</h2>

        <form className='p-3 bg-white flex flex-col gap-2 '   >
            <Input type={"text"} placeholder={"Student Name"} value={success.studentName} onChange={(e) => setSuccess({ ...success, studentName: e.target.value })}  />
            <Input type={"text"} placeholder={"Story Text"} value={success.storyText} onChange={(e) => setSuccess({ ...success, storyText: e.target.value })}  />
            <Input type={"text"} placeholder={"Course Name"} value={success.courseName} onChange={(e) => setSuccess({ ...success, courseName: e.target.value })}  />
            <Input type={"file"} onChange={(e) => setSuccess({ ...success, image: e.target.files[0] })} />

            <button onClick={handleUploadStory} type="button" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 mt-2">
                Submit
            </button>
        </form>
    </div>
  )
}
