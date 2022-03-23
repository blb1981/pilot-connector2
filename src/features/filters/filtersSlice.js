import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
	name: 'filters',
	initialState: { search: '', sortBy: 'dateAsc' }, //sortBy - dateAsc, dateDesc, alphaAsc, alphaDesc
	reducers: {
		setSearch: (state, actions) => {
			state.search = actions.payload
		},
	},
})

export const { setSearch } = filtersSlice.actions
export default filtersSlice.reducer
