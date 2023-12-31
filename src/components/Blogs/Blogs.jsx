import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, faChessKing } from '@fortawesome/free-solid-svg-icons'

const Blogs = (props) => {
    const{id, author, title, author_img, poster_image, read_time, publishedAt} = props.blog;
       

    const addToReadTime =  props.addToReadTime;
    const addedTOBookmarked = props.addedTOBookmarked;
    
    
         
  return (
    <div>
      <div className="card w-4/3 h-4/3 glass" >
        <figure>
          <img className="w-4/3  rounded-lg"
            src={poster_image}
            alt="car!"
          />
        </figure>
          <div className="flex justify-between mt-4 lg:ml-12">
             <div className="flex">
             <img className="w-12 h-12 rounded-full " src={author_img} alt="" />
            <div className="md:mx-3">
            <p className="font-bold">{author}</p>
            <p className="">{publishedAt}</p>
            </div>
             </div>

             <div className="mt-4  md:mr-4">
             <p className="">{read_time} min read
             <FontAwesomeIcon onClick={()=>addedTOBookmarked(props.blog)}  className="md:mx-2" icon={faBookBookmark} />
             </p>
             </div>
        </div>
        <div className="mt-4">
        <p className="font-bold text-2xl lg:ml-10">{title}</p>
            <div className="flex mt-2 lg:ml-12">
            <p>#beginners</p>
            <p className=" mx-4 md:mx-8">#programming</p>
            </div>
            </div>
            <a onClick={()=>addToReadTime(props.blog)}  className="text-start underline text-info cursor-pointer lg:ml-12 mt-3">Mark as read</a>
        </div>
    </div>
  );
};
export default Blogs;