import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import Path from '../../router/Path';


const TrendingHeader = () => {
  const history = useHistory();
  const { pathname } = history.location;
  // console.log(pathname);
  // const [page, setPage] = useState('repos');
  const goTo = (path: string) => {
    if(path === 'developers') {
      // setPage('developers');
      history.push("/developers");
    } else {
      // setPage('repos');
      history.push("/repos");
    }
  }

  return (
    <div className="treding-header">
      <ButtonGroup>
        <Button color="primary" onClick={() => goTo('repos')} active={pathname === Path.repos}>Repositories</Button>
        <Button color="primary" onClick={() => goTo('developers')} active={pathname === Path.developers}>Developers</Button>
      </ButtonGroup>
    </div>
  )
}

export default TrendingHeader;