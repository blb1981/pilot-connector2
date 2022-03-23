import { useDispatch, useSelector } from 'react-redux'
import { TextField, Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import { setSearch } from './filtersSlice'

const Filters = () => {
	const dispatch = useDispatch()
	const state = useSelector((state) => state.filters)

	//sortBy - dateAsc, dateDesc, alphaAsc, alphaDesc

	return (
		<Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', width: '90vw', maxWidth: '40rem' }}>
			<TextField
				label='Search jobs...'
				onChange={(e) => dispatch(setSearch(e.target.value))}
				value={state.search}
			/>
			<FormControl>
				<InputLabel id='sortBy'>Sort By</InputLabel>
				<Select labelId='sortBy' value='dateDesc' label='Sort By'>
					<MenuItem value='dateDesc'>Date-Recent First</MenuItem>
					<MenuItem value='dateAsc'>Date-Oldest First </MenuItem>
					<MenuItem value='alphaAsc'>A-Z Ascending</MenuItem>
					<MenuItem value='alphaDesc'>A-Z Descending</MenuItem>
				</Select>
			</FormControl>
		</Box>
	)
}

export default Filters
