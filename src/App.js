import React from 'react';
import './App.scss';

import Navbar from './components/navbar/Navbar';
import Main from "./components/main/Main"
import Decrement from './components/decrement/Decrement';
import Increment from './components/increment/Increment';
import Counter from './components/span/Span';

function App() {
  return (
    <>
      <div className="app">
        <Counter/> 
        <div className='input__box'>
          <div className='input__card-1'>
            <Main/>
          </div>
          <div className='input__card-2'>
            <Navbar/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
