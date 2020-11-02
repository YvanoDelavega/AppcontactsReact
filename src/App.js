// on importe la functionnalité 'component' de la librairie 'react'
import React, { Component } from "react";
import Header from "./composants/interface/Header.js";
import Liste from "./composants/contact/Liste.js";
import AddContact from "./composants/contact/addContact.js";
import Erreur from "./composants/Erreur.js";
import Todo from "./composants/Todo.js";
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from './context'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      // ceci n'est pas de l'html, c'est du JSX

      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              {/* <AddContact></AddContact> */}
              <Switch>
                <Route exact path="/ajout" component={AddContact} />
                <Route exact path="/liste" component={Liste} />
                <Route exact path="/todo" component={Todo} />
                <Route exact path="/" component={Liste} />
                <Route component={Erreur} />
              </Switch>
              {/* <Liste /> */}
              <br />
              {/* <Todo /> */}
            </div>
          </div>
        </Router>
      </Provider>
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
