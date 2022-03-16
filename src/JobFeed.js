import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Backdrop, CircularProgress } from '@mui/material'

import { getJobs } from './features/jobs/jobsSlice'

const JobFeed = () => {
  const loading = useSelector((state) => state.jobs.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('get jobs now')
    dispatch(getJobs())
  }, [dispatch])

  return loading ? (
    <Backdrop open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : (
    <div>Jobs</div>
  )
}

export default JobFeed
