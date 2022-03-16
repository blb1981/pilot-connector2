import { Link } from 'react-router-dom'
import { TextField, Button, Typography } from '@mui/material'

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
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
      />
      <TextField
        variant="outlined"
        label="Password"
        type="password"
        name="password"
        sx={{ width: '100%', mb: 3 }}
      />
      <Button
        variant="contained"
        size="large"
        sx={{ width: '100%' }}
        type="submit"
      >
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
