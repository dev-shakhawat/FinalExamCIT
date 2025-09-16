 
import { ElementLight } from "./screens/ElementLight/ElementLight";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/common/Layout"; 
import Auth from "./pages/Auth";
import { Provider } from 'react-redux'
import store from "./redux/store";
import Account from "./pages/Account";

export default function App() {
  return (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route  index element={<ElementLight />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  );
}