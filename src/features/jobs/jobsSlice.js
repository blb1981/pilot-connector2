import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const baseUrl = 'http://localhost:5000'

export const getJobs = createAsyncThunk(
  'jobs/getJobs',
  async (dispatch, getState) => {
    return await fetch(`${baseUrl}/jobs`).then((res) => res.json())
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
