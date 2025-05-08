// features/posts/postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk to fetch posts
export const fetchPosts = createAsyncThunk('XYZ', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await response.json(); // Return data directly
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
      data: [],
      status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchPosts.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload;
        })
        .addCase(fetchPosts.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export default postsSlice.reducer;
  