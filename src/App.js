import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Result from './components/Result/Result';

function App() {

const [inputQuery, setCount] = useState("");

  return (
    <div className="App">
      <Header></Header>
      <Search inputQuery={inputQuery} setCount={setCount}></Search>
      <Result inputQuery={inputQuery} ></Result>
    </div>
  );
}

export default App;
