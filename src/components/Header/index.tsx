import React from 'react';
import { useLocation } from "react-router-dom";
import Path from '../../router/Path';

const Header = () => {
  // const p = useParams();
  // let p2 = useRouteMatch();
  // let p3 = useHistory();
  let location = useLocation();
  // console.log(p4);
  const headLine = location.pathname === Path.repos ? 
                              'See what the GitHub community is most excited about today.' 
                            : 'Dev';
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