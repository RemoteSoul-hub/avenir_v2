import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts, searchByFilter } from '../../actions/post';
// import { searchByFilter } from '../../actions/emploi';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'


const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);



  // useEffect(() => {
  //   searchByFilter();
  // }, [searchByFilter]);

  const [query, setQuery] = useState('');

  const search = (posts) => {
    return posts.filter((post) => post.title.toLowerCase().includes(query) || post.message.toLowerCase().includes(query));
  }

  
  // const dispatch = useDispatch();

  // const handleSearch = e => {
  //   setText(e.target.value); 
  //   dispatch(searchByFilter({ type: 'text', query: e.target.value }));
  // }

  // const navigate = useNavigate();
  // const query = useQuery();
  // const page = query.get('page') || 1;
  // const searchQuery = query.get('searchQuery');


  return (
    <section className="container">
   <Container maxWidth="xl">
    <AppBar position="static" color="inherit">
      <Typography variant="h2" align="center"></Typography>
    </AppBar>
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            {search(posts).map((post) => (    
            <PostItem key={post._id} post={post} />
            ))}
              {/* <Paper elevation={6}>
                <Pagination />
              </Paper> */}
          </Grid>
          <Grid item xs={12} sm={4}>
          <PostForm />
          <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Trouver une offre</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          setQuery('');
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
        {/* <textarea
          name='search'
          cols='30'
          rows='2'
          placeholder='Votre cible...'
          value={text}
          onChange={handleSearch}
          required
        /> */}
        <input type='text' value={query} className='' onChange={e => setQuery(e.target.value)} placeholder='Chercher...' />
      </form>
    </div>
          </Grid>
        </Grid>
      </Container>
    </Grow>
   </Container>
   </section>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);