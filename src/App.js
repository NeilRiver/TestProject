import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Result from './components/Result/Result';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

function App() {

  const [inputQuery, setCount] = useState("");
  const [tabInfo, setTab] = useState('');

  function Topics() {
    let { path, url } = useRouteMatch();
    const topicData = Object.values(inputQuery).filter(x=> url.substring(1,url.length) === x.id);
    console.log(topicData)
    return (
      <div>
        <h2>Topics</h2>
        <br></br>
        <p>{topicData[0].id}</p>
        <br></br>
        <p>{topicData[0].title}</p>
        <br></br>
        <p>{topicData[0].text}</p>
      </div>
    )
  }

  return (
    <Router>
      <div className="App">

        <Link style={{ color: "white" }} to="/"> Home</Link>

        <Header tabInfo={tabInfo}></Header>
        <Switch>
          <Route path="/:id" children={<Topics />} />
        </Switch>
        <Switch>
          <Route exact path="/" children={<Search inputQuery={inputQuery} setCount={setCount} />} />

        </Switch>
        <Switch>
          <Route exact path="/" children={<Result inputQuery={inputQuery} setTab={setTab} tabInfo={tabInfo} />} />
        </Switch>


      </div>
    </Router>
  );
}

export default App;
