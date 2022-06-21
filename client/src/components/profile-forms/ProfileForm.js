import React, { Fragment, useState, useEffect } from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

/*
  NOTE: declare initialState outside of component
  so that it doesn't trigger a useEffect
  we can then safely use this to construct our profileData
 */
const initialState = {
  company: '',
  website: '',
  location: '',
  status: '',
  skills: '',
  githubusername: '',
  bio: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  youtube: '',
  instagram: ''
};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  const creatingProfile = useMatch('/create-profile');

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // if there is no profile, attempt to fetch one
    if (!profile) getCurrentProfile();

    // if we finished loading and we do have a profile
    // then build our profileData
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      // the skills may be an array from our API response
      if (Array.isArray(profileData.skills))
        profileData.skills = profileData.skills.join(', ');
      // set local state with the profileData
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, navigate, profile ? true : false);
  };

  return (
    <section className="container">
      <h1 className="large text-primary">
        {creatingProfile ? 'Créer votre profil' : 'Modifier votre profil'}
      </h1>
      <p className="lead">
        <i className="fas fa-user" />
        {creatingProfile
          ? ` Commençons par remplir les champs suivants`
          : ' Commençons par éditer votre profil'}
      </p>
      <small>* = champs obligatoires</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <select name="status" value={status} onChange={onChange}>
            <option>* Sélectionnez votre status</option>
            <option value="Professionnel">Professionnel</option>
            <option value="Particulier">Particulier</option>
          </select>
          <small className="form-text">
            Description
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Entreprise"
            name="company"
            value={company}
            onChange={onChange}
          />
          <small className="form-text">
          Description
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Site web"
            name="website"
            value={website}
            onChange={onChange}
          />
          <small className="form-text">
            Votre site perso ou le site de votre entreprise
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Localisation"
            name="location"
            value={location}
            onChange={onChange}
          />
          <small className="form-text">
            Exemple : Paris, France
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Compétences"
            name="skills"
            value={skills}
            onChange={onChange}
          />
          <small className="form-text">
            Veuillez utiliser des virgules pour séparer vos compétences. (Exemple : HTML,CSS,JavaScript,Gestion de projet,Design Graphique)
          </small>
        </div>
        {/* <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
            onChange={onChange}
          />
          <small className="form-text">
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div> */}
        <div className="form-group">
          <textarea
            placeholder="Une brève description de vous"
            name="bio"
            value={bio}
            onChange={onChange}
          />
          <small className="form-text">Dites-nous un peu plus sur vous-même</small>
        </div>

        <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Ajouter vos comptes de réseaux sociaux
          </button>
          <span>Optionnel</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x" />
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x" />
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x" />
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x" />
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x" />
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={onChange}
              />
            </div>
          </Fragment>
        )}

        <input type="submit" className="btn btn-primary my-1" value="Valider" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Retour
        </Link>
      </form>
    </section>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  ProfileForm
);
