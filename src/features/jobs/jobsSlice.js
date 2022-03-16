import { createSlice } from '@reduxjs/toolkit'

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: { list: [], loading: false },

  reducers: {
    getJobs: (state) => {
      state.loading = true
    },
  },
})

export const { getJobs } = jobsSlice.actions
export default jobsSlice.reducer
