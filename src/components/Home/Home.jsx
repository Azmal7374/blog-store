import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    const [blogs, setBlogs ] =useState([]);
   
   
    useEffect(() => {
        fetch('data.json')
        .then(res =>res.json())
        .then(data => setBlogs(data))
    },[])

    console.log(blogs);
    return (
        <div>
           <div className="knowledge-container"  style={{ display:'grid', gridTemplateColumns:'3fr 1fr'}}>
             <div className="blogs-continer products-container grid md:grid-cols-2 gap-10 mt-10">
                {
             blogs.map(blog => <Blogs blog ={blog}></Blogs>)
                }
             </div>
             <div className="sidecart-conatiner  bg-orange-200">
                 <h3>helllloo</h3>
             </div>
           </div>
        </div>
    );
};

export default Home;