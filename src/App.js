import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GList from "./MediaListComponent/GList";
import Immutable from 'immutable'
import {generateRandomList} from './utils';


const list = Immutable.List(generateRandomList());

class App extends Component {
  render() {
    return (
        <div className="App">
          <p>MediaList Component</p>
            <GList list={list}/>
        </div>
    );
  }
}

export default App;
