import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from '../components/Header';
import TrendingDevelopers from '../pages/TrendingDevelopers';
import TrendingRepos from '../pages/TrendingRepos';
import Path from './Path';

const MainRouter = () => {
  return (
    <div className="container-fluid">
      <Router>
        <Header />
        <Switch>
        <Route exact path="/" render={() => <Redirect to={Path.repos} /> } />
          <Route exact path={Path.repos} component={TrendingRepos} />
          <Route exact path={Path.developers} component={TrendingDevelopers} />
          {/* <Route path="*" component={NotFound} /> */}
          {/* <Route path="*" render={() => <div>404 Not Found</div>} /> */}
        </Switch>
      </Router>
    </div>
  )
}

export default MainRouter;