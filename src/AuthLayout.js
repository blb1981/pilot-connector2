import { Card, Box } from '@mui/material'

const AuthLayout = ({ children }) => {
	return (
		<Box
			sx={{
				backgroundColor: '#e1e1e1',
				height: '100vh',
				pt: 10,
			}}
		>
			<Card
				sx={{
					width: '95vw',
					maxWidth: '25rem',
					margin: '0 auto',
					p: 3,
				}}
			>
				{children}
			</Card>
		</Box>
	)
}
export default AuthLayout
