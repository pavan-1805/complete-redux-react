import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "../Posts/Posts";
import AddPost from "../AddPost/AddPost";

const Header = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/my-posts" element={<AddPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Header;
