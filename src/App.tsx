import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="text-center bg-slate-700 min-h-lvh flex justify-center items-center">
      <header className="bg-slate-700 min-h-lvh flex flex-col items-center justify-center text-white text-2xl">
        <img src={logo} className="h-[40vmin] pointer-events-none" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-cyan-400 underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
