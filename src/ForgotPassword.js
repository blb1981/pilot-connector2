import { TextField, Button, Typography } from '@mui/material'

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
        Forgot your password?
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Type in your email address and we will send you link to reset your
        password.
      </Typography>
      <TextField
        variant="outlined"
        label="Email address"
        type="email"
        name="email"
        sx={{ width: '100%', mb: 3 }}
      />

      <Button
        variant="contained"
        size="large"
        sx={{ width: '100%' }}
        type="submit"
      >
        Reset Password
      </Button>
    </form>
  )
}

export default ForgotPassword
