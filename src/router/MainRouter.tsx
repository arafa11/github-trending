import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from '../components/Header';
import NotFound from '../pages/NotFound';
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
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  )
}

export default MainRouter;