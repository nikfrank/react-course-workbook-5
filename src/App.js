import React, { Component } from 'react';
import ball from './logo.svg';
import './App.css';

class App extends Component {
  state = {
  }
  
  render() {
    return (
      <div className='Ball'>
        <header className='Ball-header'>
          <img src={ball} className='Ball-logo' alt='leaf' />
        </header>
        <div className='Ball-body'>
          
          <svg viewBox='0 0 500 470' className='court'>
            <rect x='0' y='0' width='500' height='470' className='hardwood line'/>

            <rect x='190' y='0' width='120' height='190' className='line paint'/>
            
            <path d='M 30,0  L 30,138 A 237.5 237.5 0 0 0 470 138 L 470,0'
                  className='three-pt-line line'/>

            <circle cx='250' cy='52.5' r='7.5' className='rim line'/>
            <path d='M 220,40 L 280, 40' className='glass line'/>
            <path d='M 210,52.5 A 40 40 0 0 0 290 52.5' className='restricted line'/>

            {/* free throw circle */}
            <path d='M 190,190 A 60 60 0 0 0 310 190' className='line'/>
            <path d='M 190,190 A 60 60 0 0 1 310 190' className='dashed line'/>

            {/* post, free throw markers */}
            <rect x='170' y='0' width='20' height='190' className='line'/>
            <rect x='310' y='0' width='20' height='190' className='line'/>

            <path d='M 170, 70.83 L 160, 70.83' className='line'/>
            <path d='M 170, 82.5 L 160, 82.5' className='line'/>
            <path d='M 170, 114.17 L 160, 114.17' className='line'/>
            <path d='M 170, 145.83 L 160, 145.83' className='line'/>

            <path d='M 330, 70.83 L 340, 70.83' className='line'/>
            <path d='M 330, 82.5 L 340, 82.5' className='line'/>
            <path d='M 330, 114.17 L 340, 114.17' className='line'/>
            <path d='M 330, 145.83 L 340, 145.83' className='line'/>

            {/* inbound markers */}

            <path d='M 0, 280 L 30, 280' className='line'/>
            <path d='M 500, 280 L 470, 280' className='line'/>
            
            <path d='M 140, 0 L 140, 10' className='line'/>
            <path d='M 360, 0 L 360, 10' className='line'/>

            {/* tip off circle */}

            <path d='M 190, 470 A 60 60 0 0 1 310 470' className='line'/>
            <path d='M 230, 470 A 20 20 0 0 1 270 470' className='line'/>
            
          </svg>
          
        </div>
      </div>
    );
  }
}

export default App;
