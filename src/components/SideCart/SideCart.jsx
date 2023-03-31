import React, { Children } from 'react';

const SideCart = (props) => {
    // console.log(props.blogs);
    const{cart} = props;
    console.log(cart);
    return (
        <div>
         <h2 className='font-bold font-xl'>Boomarked Blogs: {cart.length}</h2>
            

            {
              cart.map(c=>(
                <div className=" bg-white mx-3 p-2 mt-5">
                <h2 className="font-semibold text-2xl ">{c.title}</h2>
              </div>
              )) 
            }
        </div>
    );
};

export default SideCart;