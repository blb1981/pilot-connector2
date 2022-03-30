import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    limit: 10,
    offset: 0,
    sortBy: 'startDate',
    order: 'desc',
    search: '',
  },
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload
    },
    setOffset: (state, action) => {
      state.offset = action.payload
    },
    setTextSearch: (state, action) => {
      state.search = action.payload
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload
    },
    setSortOrder: (state, action) => {
      state.order = action.payload
    },
  },
})

export const { setLimit, setOffset, setTextSearch, setSortBy, setSortOrder } =
  filtersSlice.actions
export default filtersSlice.reducer
