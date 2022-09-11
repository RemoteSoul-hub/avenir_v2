import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import { useNavigate } from 'react-router-dom';

const PostForm = ({ addPost }) => {
  const navigate = useNavigate();
  // const [title, setTitle] = useState('');
  // const [message, setMessage] = useState('');
  // const [cdd, setCdd] = useState(false);
  // const [cdi, setCdi] = useState(false);
  // const [alternance, setAlternance] = useState(false);
  // const [interim, setInterim] = useState(false);
  // const [partiel, setPartiel] = useState(false);
  // const [plein, setPlein] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    cdd: false,
    cdi: false,
    alternance: false,
    interim: false,
    partiel: false,
    plein: false
  });

  const { title, message, cdd, cdi, alternance, interim, partiel, plein } = formData;

  const onChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
  console.log(formData)
}
  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Créer une offre</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addPost(formData, navigate);
        }}
      >
         <textarea
          name='title'
          cols='30'
          rows='1'
          placeholder='Titre'
          value={title}
          onChange={onChange}
          required
        />
        <textarea
          name='message'
          cols='30'
          rows='5'
          placeholder='Description'
          value={message}
          onChange={onChange}
          required
        />
        <div className="mt-10">
          <input
      type="checkbox"
      name="checkbox"
      checked={cdd}
      value={cdd}
      onChange={() => {
        setFormData({ ...formData, cdd: !cdd });
      }}
    />
    <label for="cdd">CDD</label>
    </div>
    <div>
    <input
      type="checkbox"
      name="checkbox"
      checked={cdi}
      value={cdi}
      onChange={() => {
        setFormData({ ...formData, cdi: !cdi });
      }}
    />
    <label for="cdi">CDI</label>
    </div>
    <div>
    <input
      type="checkbox"
      name="checkbox"
      checked={alternance}
      value={alternance}
      onChange={() => {
        setFormData({ ...formData, alternance: !alternance });
      }}
    />
    <label for="alternance">Alternance</label>
    </div>
    <div>
    <input
      type="checkbox"
      name="checkbox"
      checked={interim}
      value={interim}
      onChange={() => {
        setFormData({ ...formData, interim: !interim });
      }}
    />
    <label for="interim">Intérim</label>
    </div>
    <div>
    <input
      type="checkbox"
      name="checkbox"
      checked={partiel}
      value={partiel}
      onChange={() => {
        setFormData({ ...formData, partiel: !partiel });
      }}
    />
    <label for="partiel">Temps Partiel</label>
    </div>
    <div>
    <input
      type="checkbox"
      name="checkbox"
      checked={plein}
      value={plein}
      onChange={() => {
        setFormData({ ...formData, plein: !plein });
      }}
    />
    Temps Plein
    </div>
        {/* <textarea
          name='tags'
          cols='30'
          rows='5'
          placeholder='Tags'
          value={tags}
          onChange={e => setTags(e.target.value)}
          required
        /> */}
        <input type='submit' className='btn btn-dark my-1' value='Confirmer' />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);