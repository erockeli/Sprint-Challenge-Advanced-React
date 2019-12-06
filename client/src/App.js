import React from 'react';
import './App.css';

class App extends React.Component() {
  constructor() {
    super()
    this.state = {
      players: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:500/api/players')
    .then(res=> res.json())
    .then(data => this.setState({players: data}))
  }

  componentDidUpdate() {
    console.log(this.state);  
    }


  render(){

    return (
      <div className="App">
        
      </div>
    );
  }
  
}

export default App;
