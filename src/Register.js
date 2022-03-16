import { Link } from 'react-router-dom'
import { TextField, Button, Typography } from '@mui/material'

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
        Sign Up
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
        Register
      </Button>
      <Typography
        variant="caption"
        display="block"
        sx={{ mt: 2, textAlign: 'center' }}
      >
        <Link to="/login">Already signed up? Proceed to login</Link>
      </Typography>
    </form>
  )
}

export default Register
