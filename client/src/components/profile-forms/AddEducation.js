import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AddEducation = ({ addEducation }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const { school, degree, fieldofstudy, from, to, description, current } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className="container">
      <h1 className="large text-primary">Ajouter votre éducation</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Ajoutez tout bootcamp ou école ici
      </p>
      <small>* = champs obligatoires</small>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addEducation(formData, navigate);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Bootcamp ou école"
            name="school"
            value={school}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Diplôme ou certificat"
            name="degree"
            value={degree}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Domaine d'études"
            name="fieldofstudy"
            value={fieldofstudy}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <h4>De la date :</h4>
          <input type="date" name="from" value={from} onChange={onChange} />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={() => setFormData({ ...formData, current: !current })}
            />{' '}
            École actuelle
          </p>
        </div>
        <div className="form-group">
          <h4>À la date :</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            disabled={current}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Description de la formation"
            value={description}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Retour
        </Link>
      </form>
    </section>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(AddEducation);
