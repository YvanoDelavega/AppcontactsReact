import React, { Component } from "react";



class Titre extends Component {
  render() {
    return (
      <div>
        <h1>salut </h1>
        {this.props.nom}
      </div>
    );
  }
}

export default Titre;
