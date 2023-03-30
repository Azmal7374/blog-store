import React from 'react';

const Nav = () => {
    return (
        <div>
        <div className="navbar w-100% h-30 md:p-8" style={{backgroundColor: '#1C2B35'}}>
        <div className="flex-1">
        <h2 className="md:text-4xl text-white md:px-5 font-bold">Knowledge Cafe</h2>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal md:px-10 text-white font-semibold md:text-2xl">
            <li><a>Blogs</a></li>
            <li><a>Contact</a></li>
            <li><a>Login</a></li>
          </ul>
        </div>
      </div>
        </div>
    );
};

export default Nav;