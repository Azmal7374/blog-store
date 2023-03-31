import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, faChessKing } from '@fortawesome/free-solid-svg-icons'

const Blogs = (props) => {
    // console.log(props.blog);
    const{id, author, title, author_img, poster_image, read_time, publishedAt} = props.blog;
       

    const addToReadTime =  props.addToReadTime;
    // console.log(addToReadTime);
         
  return (
    <div>
      <div className="card w-4/3 h-4/3 glass" >
        <figure>
          <img className="w-4/3 "
            src={poster_image}
            alt="car!"
          />
        </figure>
          <div className="flex justify-between mt-4">
             <div className="flex">
             <img className="w-10 h-10 rounded-full" src={author_img} alt="" />
            <div className="mx-3">
            <p className="font-bold">{author}</p>
            <p>{publishedAt}</p>
            </div>
             </div>

             <div className="mt-4">
             <p>{read_time} min read
             <FontAwesomeIcon onClick={()=>addToReadTime(props.blog)}  className="mx-2" icon={faBookBookmark} />
             </p>
             </div>
        </div>
        <div className="mt-4">
        <p className="font-bold text-xl">{title}</p>
            <div className="flex mt-2">
            <p>#beginners</p>
            <p className="mx-8">#programming</p>
            </div>
            </div>
            <a  className="text-start underline text-info cursor-pointer">Mark as read</a>
        </div>
    </div>
  );
};
export default Blogs;