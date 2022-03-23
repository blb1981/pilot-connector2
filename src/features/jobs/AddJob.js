import { Box, Typography } from '@mui/material'

import JobForm from './JobForm'

const AddJob = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
        Add a New Job Posting
      </Typography>
      <JobForm buttonText="Add Job" />
    </Box>
  )
}

export default AddJob
