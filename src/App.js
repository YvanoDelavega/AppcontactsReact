// on importe la functionnalité 'component' de la librairie 'react'
import React, { Component } from "react";
import Header from './composants/Header.js';
import Liste from "./composants/Liste.js";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      // ceci n'est pas de l'html, c'est du JSX
      <div className="App">
        <Header />
        <div className="container">
          <Liste />
        </div>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


