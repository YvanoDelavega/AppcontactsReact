import React, { Component } from "react";
import Contact from "./Contact.js";
import { Consumer } from "../../context";

export default class Liste extends Component {

  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <React.Fragment>
              <h1 className="display-4 my-3">Nos contacts</h1>
              {value.contacts.map((c) => (
                <Contact
                  key={c.id}
                  id={c.id}
                  nom={c.nom}
                  email={c.email}
                  tel={c.tel}                  
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
