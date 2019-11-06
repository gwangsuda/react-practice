import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/views/Home';
import AccessControl from 'components/views/AccessControl';
import SqlInjection from 'components/views/SqlInjection';
import WiseRequestFilter from 'components/views/WiseRequestFilter';
import 'assets/scss/Content.scss';
import Statistics from 'components/views/Statistics';

const Content = () => {
  return (
    <article className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/accessControl" component={AccessControl} />
        <Route path="/sqlInjection" component={SqlInjection} />
        <Route path="/wiseRequestFilter" component={WiseRequestFilter} />
        <Route path="/statistics" component={Statistics} />
      </Switch>
    </article>
  );
};

export default Content;
