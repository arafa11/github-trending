import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import Path from '../../router/Path';


const TrendingHeader = () => {
  const history = useHistory();
  const { pathname } = history.location;
  const goTo = (path: string) => {
    if(path === 'developers') {
      history.push("/developers");
    } else {
      history.push("/repos");
    }
  }

  return (
    <div className="treding-header">
      <ButtonGroup>
        <Button color="primary" onClick={() => goTo('repos')} active={pathname === Path.repos}>Repositories</Button>
        <Button color="primary" onClick={() => goTo('developers')} active={pathname === Path.developers}>Developers</Button>
      </ButtonGroup>
      <div className="filters">
        {  pathname === Path.repos ? 
          <>
            <span>Spoken Language : Any</span>
            <span>Language : Any</span>
            <span>Date Rang: Any</span>
          </>
          :
          <>
            <span>Language : Any</span>
            <span>Date Rang: Any</span>
          </>
      }
      </div>
    </div>
  )
}

export default TrendingHeader;