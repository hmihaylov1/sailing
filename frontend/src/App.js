import React from "react";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Home from "./Home";
import ChangePassword from "./ChangePassword";
import ProfilePage from "./ProfilePage";
import TomPage from "./Tom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/changepassword" element={<ChangePassword />}></Route>
        <Route path="/profilepage" element={<ProfilePage />}></Route>
        <Route path="/tom" element={<TomPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
