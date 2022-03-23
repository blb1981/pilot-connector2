import { Box, CircularProgress } from '@mui/material'

const MySpinner = ({ size }) => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
			<CircularProgress size={size} />
		</Box>
	)
}

export default MySpinner
