import React from 'react';
import useDarkMode from './Hooks/useDarkMode'

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      
    };

    }

    componentDidMount() {

      fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(data => this.setState( {players: data} ));

      }


      componentDidUpdate() {
        console.log(this.state);  
        }

        render() {
    
 
          return (
            <div className="App">
            
            <Athletes players= {this.state.players}  />
            
            </div>
          );
        }
        }

        function Athletes (props) { 
          const [darkMode, setDarkMode] = useDarkMode(false);
         const toggleMode = e => {
           e.preventDefault();
           setDarkMode(!darkMode);
         }
         return (
           <div>
       
        
        <button onClick={toggleMode}>Custom Hook</button>
       {props.players.map(player => (<div key={player.id}>{player.id} {player.name} {player.country} {player.searches}</div>))}
        
           </div>
         );
       }




export default App;