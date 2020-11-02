import React from "react";
import PropTypes from "prop-types";
import "./Titre.css";

export default function Titref(props) {
  return (
    <div>
      <p className="text-primary">ca va ?</p>
      <h1>bonjour {props.nom}</h1>
    </div>
  );
}

Titref.propTypes = {
  nom: PropTypes.string.isRequired,
};
