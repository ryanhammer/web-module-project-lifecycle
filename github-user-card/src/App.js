import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    user: [],
    followersList: []
  }

  componentDidMount() {
    console.log('The component mounted');
    axios.get('https://api.github.com/users/ryanhammer')
      .then( res => {
        this.setState({
          user: res.data
        });
        console.log(this.state.user);
      })
      .catch( err => {
        console.log(err);
      })

    axios.get('https://api.github.com/users/ryanhammer/followers')
      .then( res => {
        this.setState({
          followersList: res.data
        });
        console.log(this.state.followersList);
      })
      .catch( err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className='App'>
        <header className='header'>
          <img src={ require('./assets/lambdalogo.png').default } alt='Lambda Logo'/>
          <p>❤️'s</p>
          <img src={ require('./assets/githublogo.png').default } alt="GitHub Logo" />
        </header>
        <section className="cards">
          <h2>My Card:</h2>
        </section>
      </div>
    );
  }
}

export default App;
