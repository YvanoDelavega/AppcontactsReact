import React, { Component } from "react";
import { Consumer } from "../../context.js";

export default class Contact extends Component {
  state = {
    show: false,
  };

  montrerContact = () => {
    this.setState({
      show: !this.state.show,
    });
    console.log(this.state.show);
  };

  supprimeContact = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    return (
      <Consumer>
        {(value) => {
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
                  onClick={() =>
                    this.supprimeContact(this.props.id, value.dispatch)
                  }
                  className="fas fa-times float-right"
                  style={{ cursor: "pointer", color: "red" }}
                ></i>
              </h4>

              {this.state.show ? (
                <ul className="card card-body mb-3">
                  <li className="list-group-item">
                    Email : {this.props.email}
                  </li>
                  <li className="list-group-item">
                    Telephone : {this.props.tel}
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
