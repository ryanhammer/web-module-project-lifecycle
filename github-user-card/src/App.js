import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './Components/UserCard';

class App extends React.Component {

  state = {
    user: [],
    followersList: [],
    followersData: []
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
        // Create card for each follower using axios call for their profile
        this.state.followersList.forEach( (follower) => {
          axios.get(`${ follower.url }`)
            .then( res => {
              this.setState({
                followersData: [...this.state.followersData, res.data]
              });
            })
            .catch( err => {
              console.log(err);
            })
        });
      })
      .catch( err => {
        console.log(err);
      })

    console.log(this.state.followersList);
  }

  render() {
    return (
      <div className='App'>
        <header className='header'>
          <img src={ require('./assets/lambdalogo.png').default } alt='Lambda Logo'/>
          <p>❤️'s</p>
          <img src={ require('./assets/githublogo.png').default } alt="GitHub Logo" />
        </header>
        <section className='cards'>
          <h2>My Card:</h2>
          <UserCard user={ this.state.user } />
        </section>
        <section className='cards'>
          <h2>My Followers:</h2>
          <>
          {this.state.followersData.map( (follower) => (
            <UserCard key={ follower.id } user={ follower }/>
          ))}
          </>
        </section>
      </div>
    );
  }
}

export default App;
