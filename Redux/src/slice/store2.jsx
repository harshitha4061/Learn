// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});



// PostsList.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './features/posts/postsSlice';

function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchPosts());
//     }
//   }, [status, dispatch]);

//   if (status === 'loading') return <p>Loading...</p>;
//   if (status === 'failed') return <p>Error: {error}</p>;

//   return (
//     <div>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PostsList;
