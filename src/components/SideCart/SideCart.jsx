import React, { Children } from 'react';

const SideCart = (props) => {
    // console.log(props.blogs);
    const{cart, time} = props;
    console.log(cart);

    let times =0;
    for(const b of time){
        console.log(b.read_time);
        b.read_time ? 0 : b.read_time
        times += parseInt(b.read_time);
        console.log(times);


    }
    console.log(times);
    return (
        <div>

        <div className="bg-sky-100  border border-info p-3 m-5">
        <h2 className='text-indigo-600 text-xl'>Spent time on read: {times}</h2>
        </div>

         <h2  className='font-bold text-2xl mt-5'>Boomarked Blogs: {cart.length}</h2>
            

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