import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const baseUrl = 'http://localhost:5000/api'

export const getJobs = createAsyncThunk(
  'jobs/getJobs',
  async ({ limit, offset, sortBy, order, search }, { dispatch, getState }) => {
    const response = await axios.get(
      `${baseUrl}/jobs?limit=${limit}&offset=${offset}&sortBy=${sortBy}&order=${order}&search=${search}`
    )
    const { rows, count } = response.data.data.results
    return { jobs: rows, count }
  }
)

export const getJob = createAsyncThunk(
  'jobs/getJob',
  async (id, { dispatch, getState }) => {
    const response = await axios.get(`${baseUrl}/jobs/${id}`)
    return response.data
  }
)

// export const getJobCount = createAsyncThunk('jobs/getJobCount', async () => {
//   const response = await axios.get(`${baseUrl}/jobs/count`)
//   console.log(response.data)
// })

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: { jobs: [], status: null, count: 0 },
  extraReducers: {
    [getJobs.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getJobs.fulfilled]: (state, action) => {
      state.status = 'success'
      state.jobs = action.payload.jobs
      state.count = action.payload.count
    },
    [getJobs.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export default jobsSlice.reducer
