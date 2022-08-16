import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';
import Pagination from '../Paginate';

const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <section className="container">
      <h1 className="large text-primary">Emploi</h1>
      <p className="lead">
        <i className="fas fa-user" /> Bienvenue dans la communauté
      </p>
      <PostForm />
      <div className="posts">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
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

// import react, { useState, useEffect } from 'react'
// import { Container, Grow, Grid, Paper } from '@material-ui/core';

// import { getPosts } from '../../actions/post';
// import Pagination from '../Pagination'
// import PostItem from './PostItem';
// import PostForm from './PostForm';

// const Emploi = () => {
//   const [currentId, setCurrentId] = useState(0);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getPosts());
//   }, [currentId, dispatch]);

//   return (
//     <Grow in>
//       <Container>
//         <Grid container justify="space-between" alignItems="stretch" spacing={3}>
//           <Grid item xs={12} sm={7}>
//             <Posts setCurrentId={setCurrentId} />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Form currentId={currentId} setCurrentId={setCurrentId} />
//             <Paper className={classes.pagination} elevation={6}>
//               <Pagination />
//             </Paper>
//           </Grid>
//         </Grid>
//       </Container>
//     </Grow>
//   )

// }

// export default connect(mapStateToProps, { getPosts })(Emploi);