import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Backdrop, CircularProgress, Box, Typography } from '@mui/material'

import { getJobs } from './jobsSlice'
import Job from './Job'

const JobFeed = () => {
  const { status, jobs } = useSelector((state) => state.jobs)
  const loading = status === 'loading'
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getJobs())
  }, [dispatch])

  return loading ? (
    <Backdrop open={loading}>
      <CircularProgress />
    </Backdrop>
  ) : (
    <Box>
      <Typography variant="h4" sx={{ mb: 5, textAlign: 'center' }}>
        Pilot Jobs Feed
      </Typography>
      {jobs &&
        jobs.map((job, i) => {
          return <Job key={i} job={job}></Job>
        })}
    </Box>
  )
}

export default JobFeed
