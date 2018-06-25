/**
 *
 * App
 *
 * This component is the skeleton around the actual page
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/index';
import GameType from 'containers/GameType/index';
import GameBoard from 'containers/GameBoard/index';
import NotFoundPage from 'containers/NotFoundPage/index';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
      	<Route exact path="/" component={HomePage} />
        <Route exact path="/gametype" component={GameType} />
        <Route exact path="/start" component={GameBoard} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}
