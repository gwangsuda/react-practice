import React from 'react';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Sidebar from 'components/layout/Sidebar';
import Content from 'components/layout/Content';

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Sidebar />
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;
