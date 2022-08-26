import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Trouver une offre</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addPost({ title, message });
          setTitle('');
          setMessage('');
        }}
      >
         {/* <textarea
          name='title'
          cols='30'
          rows='1'
          placeholder='Titre'
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        /> */}
        <textarea
          name='tags'
          cols='30'
          rows='5'
          placeholder='Description'
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Chercher' />
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