import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      welcome_message: null
    };
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/v1/welcome')
      .then(response => {
        return response.json()
      }).then(json => {
        this.setState({welcome_message: json.data.attributes.body})
      }).catch(error => {
        this.setState({welcome_message: "Could not load welcome message. Make sure the BE is running on localhost:3001"})
      })
  }
  render() {
    return (
      <h1>{this.state.welcome_message}</h1>
    );
  }
}

export default App;
