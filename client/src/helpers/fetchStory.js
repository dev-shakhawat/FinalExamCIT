import axios from "axios";


async function fetchStory(setStories) {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/success-stories/get` , { withCredentials: true });
        setStories(res.data.story);  
    } catch (err) {
        console.log(err);
    }
}

export default fetchStory