import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import Rightbar from "./components/Rightbar";

const App = () => {
  return (
    <>
      <Navbar />
      
      <div class="container">
      
      <div class="side_bar">
        <Sidebar />
      </div>

      <div class="post_section">
        <Post />
        <Post />
      </div>

      <div class="right_bar">
        <Rightbar />
      </div>

      </div>
    </>
  );
};

export default App;
