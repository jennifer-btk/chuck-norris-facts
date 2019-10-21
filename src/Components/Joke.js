import React from 'react';
import axios from 'axios'

class Joke extends React.Component{
  constructor() {
    super();

    this.state = {
      joke: "Loading",
      image: "",
    }
  }

  componentDidMount = () => {
    this.fetchJoke();
  }

  fetchJoke = () => {
    axios('https://api.chucknorris.io/jokes/random')
    .then((result) => {
      this.setState({
        joke: result.data.value,
        image: result.data.icon_url,
      })
    })
  }

  render () {
    return (
      <div>
        <img src={this.state.image} alt={this.state.image} />
        <p>{this.state.joke}</p>

        <button onClick={this.fetchJoke}>Hit me !</button>
      </div>
    )
  }
}

export default Joke;