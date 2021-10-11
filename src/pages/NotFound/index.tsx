import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <div className="notFoundPage">
        <p>Not found</p>
        <NavLink to="/">Home</NavLink>
      </div>
    </div>
  )
}

export default NotFound;