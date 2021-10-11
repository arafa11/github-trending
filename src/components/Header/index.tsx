import React from 'react';
import { useLocation } from "react-router-dom";
import Path from '../../router/Path';

const Header = () => {
  let location = useLocation();
  const headLine = location.pathname === Path.repos ? 
                              'See what the GitHub community is most excited about today.' 
                            : 'These are the developers building the hot tools today.';
  return (
    <div>
      <nav className="navbar navbar-dark">
        <h1 className="">Trending</h1>
        <p>{headLine}</p>
      </nav>
    </div>
  )
}

export default Header;