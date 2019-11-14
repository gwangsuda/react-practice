import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';

const Content = () => {
  return (
    <section className="section">
      <article className="content">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </article>
    </section>
  );
};

export default Content;
