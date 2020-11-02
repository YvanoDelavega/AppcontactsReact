import React, { Component } from "react";

export default class Contact extends Component {
  state = {
    show: true,
  };

  montrerContact = () => {
    this.setState({
      show: !this.state.show,
    });
    console.log(this.state.show);
  };

  supprimeContact = () => {
    this.props.supprimeClick();
  };

  render() {
    return (
      <div className="card card-body mb-3 text-center">
        <h4>
          {this.props.nom} &nbsp;{" "}
          <i
            style={{ cursor: "pointer" }}
            className="fas fa-sort-down"
            onClick={this.montrerContact}
          ></i>
          <i
            onClick={this.supprimeContact}
            className="fas fa-times float-right"
            style={{ cursor: "pointer", color: "red" }}
          ></i>
        </h4>

        {/* <ul className="card card-body mb-3" hidden={this.state.show}>
          <li className="list-group-item">Email : {this.props.email}</li>
          <li className="list-group-item">Telephone : {this.props.tel}</li>
        </ul> */}

        {this.state.show ? (
          <ul className="card card-body mb-3">
            <li className="list-group-item">Email : {this.props.email}</li>
            <li className="list-group-item">Telephone : {this.props.tel}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}
