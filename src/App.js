import React, { Component } from 'react';
import ball from './logo.svg';
import './App.css';

import Court from './Court';

const None = 'none';

const movements = [
  3, //quarter
  1431486313010, // uuid ? epoch time?
  715.32, // seconds remaining in quarter
  19.0, // seconds remaining on shot clock
  None, // unknown
  [
    [-1, -1, 43.51745, 10.76997, 1.11823],
    // ball: [ teamId null, playerId null, x, y, r (bigger means higher) ]
    
    [1610612745, 1891, 50.81625, 12.9461, 0.0],
    // player: [ teamId, playerId, x, y, radius null ]
    
    [1610612745, 2772, 90.84496, 7.79534, 0.0],
    [1610612745, 2730, 77.19964, 34.36718, 0.0],
    [1610612745, 2746, 48.24382, 21.14748, 0.0],
    [1610612745, 201935, 81.0992, 48.10742, 0.0],
    [1610612745, 1935, 61.0992, 18.10742, 0.0],
    
    [1610612746, 2440, 88.12605, 11.23036, 0.0],
    [1610612746, 200755, 84.41011, 43.47075, 0.0],
    [1610612746, 101108, 48.18569, 16.49072, 0.0],
    [1610612746, 201599, 78.64683, 31.87798, 0.0],
    [1610612746, 201933, 65.89714, 25.57281, 0.0]
  ]
];

class App extends Component {
  render() {
    return (
      <div className='Ball'>
        <header className='Ball-header'>
          <img src={ball} className='Ball-logo' alt='leaf' />
        </header>
        <div className='Ball-body'>
          
          <Court ball={movements[5][0].slice(2, 4)}
                 homeTeam={movements[5].slice(1,6)}
                 roadTeam={movements[5].slice(6,11)}/>
          
        </div>
      </div>
    );
  }
}

export default App;
