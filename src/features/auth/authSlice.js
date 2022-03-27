import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'

// const baseUrl = 'http://localhost:5000'

export const login = createAsyncThunk(
  'auth/login',
  async (arg, { dispatch, getState }) => {
    // const response = await axios.post(`${baseUrl}/api/login`)
    // return response.data
    console.log('from redux', arg)
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: null,
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.status = 'loading'
    },
    [login.fulfilled]: (state, action) => {
      state.status = 'success'
      state.auth = action.payload
    },
    [login.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export default authSlice.reducer
