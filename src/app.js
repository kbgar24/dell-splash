import React from 'react';
import ReactDOM from 'react-dom';
// import MainPage from './mainPage';
// import PageTwo from './pageTwo';
// import NotFoundPage from './notFoundPage';
import Header from './header';

const App = () => (
  <div>
    <Header />
    {/* <Navbar /> */}
    {/* <Hero /> */}
    {/* <Footer/> */}
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
