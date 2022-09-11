import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Accueil</h1>
          <p className="lead">
            Bienvenue sur parlons jeune, plateforme de mise en relations faites POUR les jeunes PAR les jeunes
          </p>
         <div className="acc-bubbles">
         <div className="acc-bubbles-container">
          <h2 className="">ACTIONS</h2>
          <p>L'insertion à l'emploi, l'accès au logement, un échange de service, du conseil entrepreunariale et scolaire</p>
         </div>
          <div className="acc-bubbles-container">
          <h2 className="">OBJECTIFS</h2>
          <p>Faciliter l'insertion, limiter les discriminations, mettre en avant la jeunesse</p>
          </div>
         </div>
          {/* <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Inscription
            </Link>
            <Link to="/login" className="btn btn-light">
              Connexion
            </Link>
          </div> */}
            <div className="buttons">
              <a href="https://m.facebook.com/Parlons-Jeune-101189089383660" target="_blank" alt="Facebook">
                <img width="30" src="https://louisville.edu/mcconnellcenter/images/facebook_logos_PNG19748.png" alt="facebook-icon" />
              </a> 
              <a href="https://twitter.com/ParlonsJeune" target="_blank" alt="Twitter">
                <img width="30" src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="twitter-icon"/>
              </a> 
              <a href="https://instagram.com/parlonsjeunefr" target="_blank" alt="Instagram">
                <img width="30" src="https://icon-library.com/images/facebook-icon-transparent-background/facebook-icon-transparent-background-2.jpg" alt="ig-icon" />
              </a> 
              <a href="https://www.tiktok.com/@parlonsjeune" target="_blank" alt="Tiktok">
                <img width="30" src="https://i.pinimg.com/originals/34/50/9a/34509a05557bf30853af477a83b7c7bb.png" alt="tiktok-icon" />
              </a>
            {/* <Link to="/register" className="btn btn-primary">
              Inscription
            </Link> */}
            {/* <Link to="/login" className="btn btn-light">
              Connexion
            </Link> */}
          </div>
          {/* https://cdn-icons-png.flaticon.com/512/124/124010.png */}
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
