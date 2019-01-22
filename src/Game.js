import React, { Component } from 'react';
import './Game.css';
import TopNav from './components/nav'

class Game extends Component {
  render() {
    return (
      <section className="App">
        <TopNav></TopNav>
      </section>
    );
  }
}

export default Game;
