import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul>
        {/* <li>
        <Link to="/dashboard">
Accueil
        </Link>
      </li> */}
      <li>
        <Link to="/posts">Emploi</Link>
      </li>
      <li>
        <Link to="/logement">Logement</Link>
      </li>
      <li>
        <Link to="/service">Services</Link>
      </li>
      <li>
        <Link to="/conseils">Conseils</Link>
      </li>
      {/* <li>
        <Link to="/profiles">Membres</Link>
      </li> */}
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Déconnexion</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
       <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/profiles">Utilisateurs</Link>
      </li>
      <li>
        <Link to="/register">Inscription</Link>
      </li>
      <li>
        <Link to="/login">Connexion</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <img src='/Logo.png' alt='' className="logo" /> 
        </Link>
      </h1>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
