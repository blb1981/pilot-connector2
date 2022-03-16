import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import SpeedIcon from '@mui/icons-material/Speed'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'

import { toggleDrawer } from './features/drawer/drawerSlice'

const MyDrawer = () => {
  const dispatch = useDispatch()
  const isDrawerOpen = useSelector((state) => state.drawer.open)

  const list = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <SpeedIcon />,
    },
    {
      title: 'Login',
      path: '/login',
      icon: <LoginIcon />,
    },
    {
      title: 'Register',
      path: '/register',
      icon: <AppRegistrationIcon />,
    },
  ]

  return (
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={() => dispatch(toggleDrawer())}
    >
      <List sx={{ width: 240 }}>
        {list.map((item) => {
          return (
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={() => dispatch(toggleDrawer())}
              key={item.title}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          )
        })}
      </List>
    </Drawer>
  )
}
export default MyDrawer
