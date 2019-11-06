import React from 'react';
import 'assets/scss/App.scss';
import Header from 'components/layout/header/Header';
import Menu from 'components/layout/menu/Menu';
import Content from 'components/layout/content/Content';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Menu />
        <Content />
      </div>
    </div>
  );
}

export default App;
