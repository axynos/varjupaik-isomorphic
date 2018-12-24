import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

const App = () => {
  return (
    <main>
      <NavBar />
      <Routes />
      {/* <Footer /> */}
    </main>
  );
};
