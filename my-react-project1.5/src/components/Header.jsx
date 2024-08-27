import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1><u>My College/University</u></h1>
      <nav>
        <ul>
          <li><Link to="/" title="Click here to visit Home"><i>Home</i></Link></li>
          <li><Link to="/about" title="Click here to visit About"><i>About Us</i></Link></li>
          <li><Link to="/admissions" title="Click here to visit Admissions"><i>Admissions</i></Link></li>
          <li><Link to="/contact" title="Click here to visit Contact"><i>Contact Us</i></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
