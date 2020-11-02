import React, { Component } from "react";
import Contact from "./contact/Contact.js";

export default class Liste extends Component {
  state = {
    contacts: [
      {
        id: 1, // sinon dans console index.js:1 Warning: Each child in a list should have a unique "key" prop.
        nom: "Marcel",
        email: "toto@gt.fr",
        Tel: "555 - 55 - 555",
      },
      {
        id: 2,
        nom: "Marcel",
        email: "toto@gt.fr",
        Tel: "555 - 55 - 555",
      },
      {
        id: 3,
        nom: "Marcel",
        email: "toto@gt.fr",
        Tel: "555 - 55 - 555",
      },
    ],
  };

  supprime = (id) => {
    const nvContact = this.state.contacts.filter((c) => c.id !== id);
    this.setState({
      contacts: nvContact
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.contacts.map((c) => (
          <Contact
            key={c.id}
            nom={c.nom}
            email={c.email}
            tel={c.Tel}
            supprimeClick={() => this.supprime(c.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}
