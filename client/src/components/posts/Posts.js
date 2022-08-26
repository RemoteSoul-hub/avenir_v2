import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';
import Pagination from '../Pagination';
import { Container, AppBar, Typography, Grow, Grid, Paper, TextField, Button } from '@material-ui/core'
import { Chip } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom'
import PostSearch from './PostSearch';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const navigate = useNavigate();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');


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
            {posts.map((post) => (    
            <PostItem key={post._id} post={post} />
            ))}
              <Paper elevation={6}>
                <Pagination />
              </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
          <PostForm />
          <PostSearch />
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
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);