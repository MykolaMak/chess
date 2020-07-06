import React from 'react';
import './App.scss';

import Board from './components/Board/Board';
import Box from './components/Box/Box'

const App = () => {
  return (
    <div className="App">
      <Board />
      <Box />
    </div>
  );
}

export default App;
