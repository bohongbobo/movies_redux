import React from "react";
import SideNav from "./SideNav";
import HomePage from "./HomePage";
import MovieList from "./MovieList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MoviesList = () => {
  return (
    <Router>
      <SideNav />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/movielist">
          <MovieList />
        </Route>
      </Switch>
    </Router>
  );
};

export default MoviesList;
