import React from 'react';
import Main from './components/Main';
import { HashRouter } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <HashRouter>
        <Main />
    </HashRouter>

  );
}

export default App;
