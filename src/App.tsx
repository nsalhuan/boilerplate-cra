import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="text-center">
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
          Learn React from Nic
        </a>
        <h1 className="text-3xl font-bold underline bg-red-400">Hello world</h1>
      </header>
    </div>
  );
}

export default App;
