import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    
    loading: false,
    error: false,
   
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    fetchStart: (state) => {
        state.loading = true;
        state.error = false;
      },
      fetchFail: (state) => {
        state.loading = false;
        state.error = true;
      },
      likeSuccess: (state, action) => {
        state.loading = false;
       
      },

}})

// Action creators are generated for each case reducer function
export const { fetchStart,
    likeSuccess,
    fetchFail } = blogSlice.actions

export default blogSlice.reducer