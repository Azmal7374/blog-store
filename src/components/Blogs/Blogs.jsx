import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, faChessKing } from '@fortawesome/free-solid-svg-icons'

const Blogs = (props) => {
    // console.log(props.blog);
    const{id, author, title, author_img, poster_image, read_time, publishedAt} = props.blog;
       

    const addToReadTime =  props.addToReadTime;
    const addedTOBookmarked = props.addedTOBookmarked;
    // console.log(addToReadTime);
    // console.log(addedTOBookmarked);
         
  return (
    <div>
      <div className="card w-4/3 h-4/3 glass" >
        <figure>
          <img className="w-4/3  rounded-lg"
            src={poster_image}
            alt="car!"
          />
        </figure>
          <div className="flex justify-between mt-4 ml-14">
             <div className="flex">
             <img className="w-12 h-12 rounded-full " src={author_img} alt="" />
            <div className="mx-3">
            <p className="font-bold">{author}</p>
            <p className="">{publishedAt}</p>
            </div>
             </div>

             <div className="mt-4 mr-4">
             <p className="">{read_time} min read
             <FontAwesomeIcon onClick={()=>addedTOBookmarked(props.blog)}  className="md:mx-2" icon={faBookBookmark} />
             </p>
             </div>
        </div>
        <div className="mt-4">
        <p className="font-bold text-2xl ml-12">{title}</p>
            <div className="flex mt-2 ml-12">
            <p>#beginners</p>
            <p className="mx-8">#programming</p>
            </div>
            </div>
            <a onClick={()=>addToReadTime(props.blog)}  className="text-start underline text-info cursor-pointer ml-12 mt-3">Mark as read</a>
        </div>
    </div>
  );
};
export default Blogs;