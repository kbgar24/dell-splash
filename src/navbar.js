import React from 'react';

const Navbar = () => (
  
  <div className='navbar'>
    <span>Home<i className="chevron"></i></span>
    <span>Pages<i className="chevron"></i></span>
    <span>Services</span>
    <span>
      Blog
     <i className="chevron"></i>
    </span>
    <span>Contacts</span>
    <span><i className="fa fa-search" aria-hidden="true"></i></span>
    <div style={{ clear: 'both'}}></div>
  </div>
);

export default Navbar;
