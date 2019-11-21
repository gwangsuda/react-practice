import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import AccessControl from 'pages/AccessControl';
import Statistics from 'pages/Statistics';

const Content = () => {
  return (
    <section className="section">
      <article className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/accessControl/:tab" component={AccessControl} />
          <Route path="/statistics" component={Statistics} />
        </Switch>
      </article>
    </section>
  );
};

export default Content;
