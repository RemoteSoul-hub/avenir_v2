import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import { searchByFilter } from '../../actions/emploi';

const PostSearch = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const handleSearch = e => {
    setText(e.target.value); 
    dispatch(searchByFilter({ type: 'text', query: e.target.value }));
  }

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Trouver une offre</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          setText('');
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
          name='search'
          cols='30'
          rows='2'
          placeholder='Votre cible...'
          value={text}
          onChange={handleSearch}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Chercher' />
      </form>
    </div>
  );
};

PostSearch.propTypes = {
  searchByFilter: PropTypes.func.isRequired
};

export default connect(
  null,
  { searchByFilter }
)(PostSearch);