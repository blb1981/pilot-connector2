import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const baseUrl = 'http://localhost:5000'

export const getJobs = createAsyncThunk(
  'jobs/getJobs',
  async (arg, { dispatch, getState }) => {
    const response = await axios.get(`${baseUrl}/jobs`)
    return response.data
  }
)

export const getJob = createAsyncThunk(
  'jobs/getJob',
  async (id, { dispatch, getState }) => {
    const response = await axios.get(`${baseUrl}/jobs/${id}`)
    return response.data
  }
)

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: { jobs: [], status: null },
  extraReducers: {
    [getJobs.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getJobs.fulfilled]: (state, action) => {
      state.status = 'success'
      state.jobs = action.payload
    },
    [getJobs.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export default jobsSlice.reducer
