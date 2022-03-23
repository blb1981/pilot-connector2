import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material'

import { getJobs } from './jobsSlice'
import Job from './Job'
import MySpinner from '../../MySpinner'
import MyGreeting from '../../MyGreeting'
import Filters from '../filters/Filters'

const JobFeed = () => {
	const { status, jobs } = useSelector((state) => state.jobs)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getJobs())
	}, [dispatch])

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Typography variant='h4' sx={{ mb: 2, textAlign: 'center' }}>
				Classified Job Board for Pilots
			</Typography>
			{status === 'success' && (
				<Typography sx={{ mb: 2, textAlign: 'center' }} variant='body1'>
					<MyGreeting />! <br />
					Check out the jobs posted
				</Typography>
			)}
			<Filters />

			{status === 'loading' && <MySpinner size={60} />}
			{status === 'success' &&
				jobs.map((job, i) => {
					return <Job job={job} key={i} />
				})}
			{status === 'failed' && <Typography>Network problem</Typography>}
		</Box>
	)
}

export default JobFeed
