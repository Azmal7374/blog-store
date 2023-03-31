import React, { Children, useEffect, useState } from "react";
import Blogs from "../Blogs/Blogs";
import SideCart from "../SideCart/SideCart";
import "./Home.css";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';


const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [cart, setCart] = useState([]);
  const [time, setTime] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  useEffect(() => {}, [blogs]);


  const addedTOBookmarked = (blog) => {
    const id = blog.id;
    let newBlog =[...cart, blog]
    const exists = cart.find(b => b.id === id);
    if(exists) {
        toast("Already BookMarked!")
        return newBlog;
    }
    setCart(newBlog);
  };

  const addToReadTime = (min) => {
    const newAdd = [...time, min];
    setTime(newAdd);
    console.log("add bookmarked");
  };

  return (
    <div>
      <div className="knowledge-container" style={{}}>
        <div className="blogs-continer products-container grid grid-cols-1 gap-10 mt-10">
          {blogs.map((blog) => (
            <Blogs
              blog={blog}
              key={blog.id}
              addToReadTime={addToReadTime}
              addedTOBookmarked={addedTOBookmarked}
            ></Blogs>
          ))}
        </div>
        <div className="sidecart-conatiner mt-10  bg-slate-200 border rounded-lg">
          <SideCart cart={cart} time={time}></SideCart>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
