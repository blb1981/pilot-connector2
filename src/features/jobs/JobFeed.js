import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, TablePagination } from '@mui/material'

import { getJobs } from './jobsSlice'
import { setLimit, setOffset } from '../filters/filtersSlice'
import Job from './Job'
import MySpinner from '../../MySpinner'
import MyGreeting from '../../MyGreeting'
import Filters from '../filters/Filters'

const JobFeed = () => {
  const { status, jobs, count } = useSelector((state) => state.jobs)
  const { limit, offset, sortBy, order, search } = useSelector(
    (state) => state.filters
  )
  const dispatch = useDispatch()

  const handlePageChange = (e, newPage) => {
    // Set offset
    // Set offset to limit + 1
    // if offset = 0 set offset to limit + 1
    if (offset === 0) {
      // 10 + 1
      dispatch(setOffset(limit + 1))
    } else {
      dispatch(setOffset(offset + limit))
    }
  }

  const handleChangeRowsPerPage = (e) => {
    dispatch(setLimit(parseInt(e.target.value, 10)))
  }

  useEffect(() => {
    console.log(offset)
    dispatch(getJobs({ limit, offset, sortBy, order, search }))
  }, [dispatch, limit, offset, sortBy, order, search])

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
        Classified Job Board for Pilots
      </Typography>
      {status === 'success' && (
        <Typography sx={{ mb: 2, textAlign: 'center' }} variant="body1">
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
      <Box>
        <TablePagination
          component="div"
          count={count}
          page={offset - 1 / limit}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          onPageChange={handlePageChange}
          rowsPerPage={limit} // Good, don't change
          onRowsPerPageChange={handleChangeRowsPerPage} // Good, don't change
        />
      </Box>
    </Box>
  )
}

export default JobFeed
