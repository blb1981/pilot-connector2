import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import MyDrawer from './features/drawer/MyDrawer'

import { toggleDrawer } from './features/drawer/drawerSlice'

const DashboardLayout = ({ children }) => {
	const dispatch = useDispatch()

	return (
		<div>
			<Box
				sx={{
					flexGrow: 1,
					minHeight: '100vh',
				}}
			>
				<AppBar
					position='static'
					sx={{
						zIndex: 10000,
					}}
				>
					<Toolbar>
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='menu'
							onClick={() => dispatch(toggleDrawer())}
							sx={{
								display: { sm: 'none' },
							}}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
							Pilot Connector
						</Typography>
						<Box sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
							<Button to='/jobs' component={Link} color='inherit'>
								Jobs List
							</Button>
							<Button to='/login' component={Link} color='inherit'>
								Login
							</Button>
							<Button to='/register' component={Link} color='inherit'>
								Register
							</Button>
							<Button to='/add-job' component={Link} color='inherit'>
								Add Job
							</Button>
							<Button to='/dashboard' component={Link} color='inherit'>
								Dashboard
							</Button>
						</Box>
					</Toolbar>
				</AppBar>
				<Box sx={{ p: 3 }}>{children}</Box>
			</Box>
			<MyDrawer />
		</div>
	)
}

export default DashboardLayout
