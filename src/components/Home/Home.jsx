import React, { Children, useEffect, useState } from "react";
import Blogs from "../Blogs/Blogs";
import SideCart from "../SideCart/SideCart";
import "./Home.css";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

import Swal from "sweetalert2";

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

  const notify = () => toast("Wow so easy!");

  const addedTOBookmarked = (blog) => {
    const notify = () => toast("Wow so easy!");
    const id = blog.id;
    const newBlog = [...cart, blog];
    setCart(newBlog);

    if ((cart === blog) === true) {
      toast("added");
    }

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });


    cart.map((c) =>
      (c !== blog) === false
        ? Toast.fire({
            icon: "success",
            title: "Already  Bookmarked",
          })
        : ""
    );
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
