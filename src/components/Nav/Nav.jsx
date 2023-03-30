import React from 'react';

const Nav = () => {
    return (
        <div>
        <div className="navbar w-100% h-30" style={{backgroundColor: '#1C2B35'}}>
        <div className="flex-1">
          
        <img className='' src="" alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-3 text-white font-semibold">
            <li><a>Shop</a></li>
            <li><a>Order</a></li>
             <li><a>Inventory</a></li>
            <li><a>Login</a></li>
          </ul>
        </div>
      </div>
        </div>
    );
};

export default Nav;