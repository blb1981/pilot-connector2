import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from 'lodash'
import { TextField, Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import { setTextSearch, setSortBy, setSortOrder } from './filtersSlice'

const Filters = () => {
	const dispatch = useDispatch()
	const { sortBy, order } = useSelector((state) => state.filters)

	const handleSearchInput = (e) => {
		dispatch(setTextSearch(e.target.value))
	}

	const handleSortByChange = (e) => {
		dispatch(setSortBy(e.target.value))
	}

	const handleSortOrderChange = (e) => {
		dispatch(setSortOrder(e.target.value))
	}

	const debouncedHandleSearchInput = useCallback(debounce(handleSearchInput, 300), [])

	return (
		<Box
			sx={{
				mb: 2,
				display: 'flex',
				justifyContent: 'space-between',
				width: '90vw',
				maxWidth: '40rem',
			}}
		>
			<TextField label='Search all jobs...' onChange={debouncedHandleSearchInput} />
			<Box>
				<FormControl sx={{ mr: 2 }}>
					<InputLabel id='sortByLabel'>Sort By</InputLabel>
					<Select
						labelId='sortByLabel'
						id='sort'
						label='Sort By'
						value={sortBy}
						onChange={handleSortByChange}
					>
						<MenuItem value='startDate'>Start Date</MenuItem>
						<MenuItem value='headline'>Job Headline</MenuItem>
					</Select>
				</FormControl>

				<FormControl>
					<InputLabel id='sortOrderLabel'>Order</InputLabel>
					<Select
						labelId='sortOrderLabel'
						id='order'
						label='Sort By'
						value={order}
						onChange={handleSortOrderChange}
					>
						<MenuItem value='desc'>Descending</MenuItem>
						<MenuItem value='asc'>Ascending</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</Box>
	)
}

export default Filters
