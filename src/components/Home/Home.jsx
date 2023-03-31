import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import SideCart from '../SideCart/SideCart';

const Home = () => {
    const [blogs, setBlogs ] =useState([]);
    const [cart, setCart] =useState([]);
   
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

    const addedTOBookmarked= () => {
        console.log('add bookmarked');      
    }

    const responsible =  {
    
    }

    // console.log(blogs);
    return (
        <div>
           <div className="knowledge-container"  style={{ display:'grid', gridTemplateColumns:'3fr 2fr',gridColumnGap:'30px'}}>
             <div className="blogs-continer products-container grid grid-cols-1 gap-10 mt-10">
                {
             blogs.map(blog => <Blogs blog ={blog} key ={blog.id} addToReadTime={addToReadTime}></Blogs>)
                }
             </div>
             <div className="sidecart-conatiner mt-10  bg-slate-200 border rounded-lg">
             <h2>Spent time on read: {0}</h2>
             <SideCart cart={cart}></SideCart>
             <div>
             </div>
             </div>
           </div>
        </div>
    );
};

export default Home;