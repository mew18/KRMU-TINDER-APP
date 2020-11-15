import React, { Component } from "react";
import './app.css';
import history from '../History'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="bg-img"></div>
        <h1>KRMU CAMPUS APP</h1>
        <h2>Show me pictures of: </h2>
        
        <button onClick={() => history.push('/DisplayM')} className="hvr-float-shadow" ><span >Male</span></button>
        <button onClick={() => history.push('/DisplayF')} className="hvr-float-shadow" ><span >Female</span></button>
        <button onClick={() => history.push('/DisplayB')} className="hvr-float-shadow" ><span >Both</span></button>
      </div>
    );
  }
}

                    