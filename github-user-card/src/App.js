import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    user: [],
    followers: []
  }

  render() {
    return (
      <div className='App'>
        <header class='header'>
          <img src={ require('./assets/lambdalogo.png').default } alt='Lambda Logo'/>
          <p>❤️'s</p>
          <img src={ require('./assets/githublogo.png').default } alt="GitHub Logo" />
        </header>
        <section class="cards">
          <h2>My Card:</h2>
        </section>
      </div>
    );
  }
}

export default App;
