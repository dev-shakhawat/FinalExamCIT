import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/common/Layout";
import Auth from "../../client/src/pages/Auth";

import store from "./redux/store";
import Account from "../../client/src/pages/Account";
import Categories from "../../client/src/pages/Categories";
import Home from "../../client/src/pages/Home";
import Story from "./pages/Story";
import CourseDetails from "./pages/CourseDetails";
import Notify from "./components/common/Notify";
import { useSelector } from "react-redux";

export default function App() {

  const notification = useSelector((state) => state.notify.notification);
 
  
  return (
      <BrowserRouter>
        {notification.show && <Notify notification={notification}/>}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/account" element={<Account />} />
            <Route path="/success-story" element={<Story />} />
            <Route path="/category/:category" element={<Categories />} />
            <Route path="/course/:id" element={<CourseDetails />} />
          </Route>
        </Routes>
      </BrowserRouter> 
  );
}
