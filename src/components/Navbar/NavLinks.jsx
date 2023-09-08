import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ path, name }) => {
  return (
    <li className='cursor-pointer text-white md:text-black text-xl md:text-base hover:text-blue font-medium'>
      <NavLink to={path}>{name}</NavLink>
    </li>
  );
};

export default NavLinks;
