import React from 'react';

const Nav = () => {
    return (
        <div>
        <div className="navbar  md:w-100% h-30  bg-white border rounded-md">
        <div className="flex-1">
        <h2 className="md:text-4xl text-black md:px-5 font-bold">Knowledge Cafe</h2>
        </div>
        <div className="flex-none">
          <img className="w-20 h-20 rounded-full md:mr-5" src="https://img.freepik.com/free-photo/man-using-map-downtown-park_53876-96601.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" alt="" />
        </div>
      </div>
        </div>
    );
};

export default Nav;