import React from 'react';
import { Route } from 'react-router-dom';
import Main from './components/Main';
const App = () => (
  <Route path="/">
    <Main />
  </Route>
);

export default App;
