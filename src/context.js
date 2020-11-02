import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        contacts: state.contacts.filter((c) => c.id !== action.payload),
      };
    case "ADD_CONTACT":
      return {
        // action.payload correspond à l'objet que l'on recoit
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1, // sinon dans console index.js:1 Warning: Each child in a list should have a unique "key" prop.
        nom: "Marcel",
        email: "toto@gt.fr",
        tel: "555 - 55 - 555",
      },
      {
        id: 2,
        nom: "Marcel2",
        email: "toto@gt.fr",
        tel: "555 - 55 - 555",
      },
      {
        id: 3,
        nom: "Marcel3",
        email: "toto@gt.fr",
        tel: "555 - 55 - 555",
      },
    ],

    dispatch: action => {
      this.setState(state => reducer(state, action));
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
