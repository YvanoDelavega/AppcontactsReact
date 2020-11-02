import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            AppContacts
          </a>
          <ul className="navbar-nav d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <Link to="/liste" className="nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item d-inline-block mr-4">
              <Link to="/ajout" className="nav-link">
                Ajouter
              </Link>
            </li>
            <li className="nav-item d-inline-block mr-4">
              <Link to="/todo" className="nav-link">
                Todo Liste
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
