import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { TextField, Button, Typography } from '@mui/material'

import { login } from './features/auth/authSlice'
// import MySpinner from './MySpinner'

const Login = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.auth)
  console.log(state)

  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleFormInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(formData))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
        Login
      </Typography>
      <TextField
        variant="outlined"
        label="Email address"
        type="email"
        name="email"
        sx={{ width: '100%', mb: 3 }}
        onChange={(e) => handleFormInput(e)}
      />
      <TextField
        variant="outlined"
        label="Password"
        type="password"
        name="password"
        sx={{ width: '100%', mb: 3 }}
        onChange={(e) => handleFormInput(e)}
      />
      <Button
        variant="contained"
        size="large"
        sx={{ width: '100%' }}
        type="submit"
        // disabled={status === 'loading'}
      >
        {/* {status === 'loading' ? <MySpinner size={5} /> : 'Login'} */}
        Login
      </Button>
      <Typography
        variant="caption"
        display="block"
        sx={{ mt: 2, textAlign: 'center' }}
      >
        <Link to="/register">Not signed up? Create an account</Link>
      </Typography>
      <Typography
        variant="caption"
        display="block"
        sx={{ mt: 1, textAlign: 'center' }}
      >
        <Link to="/forgot-password">Forget your password?</Link>
      </Typography>
    </form>
  )
}

export default Login
