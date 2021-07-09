import { render } from 'react-dom';
import './App.css';
import Button from './Components/button';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: "",
      a: 0,
      e: 0,
      i: 0,
      o: 0,
      u: 0,

    }
    checkWovels(ev) {
      let data = ev.target.value
      console.log(data);
      let a = 0
      let e = 0
      let i = 0
      let o = 0
      let u = 0

      if (data !== "") {
        for (let j = 0; j < data.length; j++) {
          if (data.charAt(j) === 'a' || data.charAt(j) === 'A') {
            a++;
          }
          if (data.charAt(j) === 'e' || data.charAt(j) === 'E') {
            e++;
          }
          if (data.charAt(j) === 'i' || data.charAt(j) === 'I') {
            i++;
          }
          if (data.charAt(j) === 'o' || data.charAt(j) === 'O') {
            o++;
          }
          if (data.charAt(j) === 'u' || data.charAt(j) === 'U') {
            u++;
          }
        }
      }

      this.setState({
        data,
        a,
        e,
        i,
        o,
        u
      })
    }
  }
}


render() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">HIIIIIIIIIIIIIII</h1>

      </header>

      <input type="text" value={this.state.data} onChange={this.checkWovels.bind(this)} />
      <p> a: {this.state.a}</p>
      <p>e: {this.state.e}</p>
      <p>i: {this.state.i}</p>
      <p>o: {this.state.o}</p>
      <p>u: {this.state.u}</p>

    </div>
  );
}


export default App;




