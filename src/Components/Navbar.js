import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      text: 'Home Page',
      path: '/',
    },
  ];
  const listOfLinks = links.map((link) => (
    <li key={link.id} className="nav-link">
      <NavLink className="nav-link" to={link.path}>{link.text}</NavLink>
    </li>
  ));
  return (
    <header>
      <nav>
        <div>
          <a className="link-1" href="/">Countries</a>
          <div>
            <ul>
              {listOfLinks}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
