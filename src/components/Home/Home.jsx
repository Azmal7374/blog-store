import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import SideCart from '../SideCart/SideCart';
import './Home.css'

const Home = () => {
    const [blogs, setBlogs ] =useState([]);
    const [cart, setCart] =useState([]);
    const [time, setTime] =useState([]);
   
    useEffect(() => {
        fetch('data.json')
        .then(res =>res.json())
        .then(data => setBlogs(data))
    },[])

    useEffect(() => {
       

    },[blogs])

    const addToReadTime = (blog) => {
        const newBlog = [...cart, blog]
        setCart(newBlog)
        // console.log(blog);
    }
    console.log(cart);

    const addedTOBookmarked= (min) => {
        console.log('add bookmarked'); 
        const newAdd = [...time, min]
        setTime(newAdd)     
    }
    console.log(time);

   
    
    // console.log(blogs);
    return (
        <div>
           <div className="knowledge-container"  style={{ }}>
             <div className="blogs-continer products-container grid grid-cols-1 gap-10 mt-10">
                {
             blogs.map(blog => <Blogs blog ={blog} key ={blog.id} addToReadTime={addToReadTime} addedTOBookmarked={addedTOBookmarked}></Blogs>)
                }
             </div>
             <div className="sidecart-conatiner mt-10  bg-slate-200 border rounded-lg">
             <SideCart cart={cart} time={time}></SideCart>
             <div>
             </div>
             </div>
           </div>
        </div>
    );
};

export default Home;