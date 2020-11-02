import React, { Component } from "react";
import { Consumer } from "../../context";
import { v1 as uuid } from "uuid";

export default class AddContact extends Component {
  state = {
    nom: "",
    email: "",
    tel: "",
  };

  onSubmit = () => {};

  //   onChange = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (dispatch, e) => {
    e.preventDefault(); // car on n'envoie rien sur un server, on reste en local
    const nvContact = {
      id: uuid(),
      nom: this.state.nom,
      email: this.state.email,
      tel: this.state.tel,
    }

    dispatch({ type: "ADD_CONTACT", payload: nvContact })

    this.setState({
      nom: "",
      email: "",
      tel: "",
    })

    // redicrection verzs la page d'accueil
    this.props.history.push('/')

    //console.log(this.state);
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div className="card mb-3">
              <div className="card-header">Ajouter un contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                  <div className="form-group">
                    <label htmlFor="nom">Nom</label>
                    <input
                      type="text"
                      name="nom"
                      className="form-control form-control-lg"
                      placeholder="entrez un nom..."
                      value={this.state.nom}
                      onChange={this.onChange}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="entrez un Email..."
                      value={this.state.email}
                      onChange={this.onChange}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="tel">Telephone</label>
                    <input
                      type="text"
                      name="tel"
                      className="form-control form-control-lg"
                      placeholder="entrez un Telephone..."
                      value={this.state.tel}
                      onChange={this.onChange}
                    ></input>
                  </div>

                  <input
                    type="submit"
                    value="Ajouter un contact"
                    className="btn btn-block btn-primary"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
