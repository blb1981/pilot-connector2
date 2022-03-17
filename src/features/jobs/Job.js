import {
  Card,
  CardContent,
  Paper,
  Typography,
  CardActions,
  Button,
} from '@mui/material'

const Job = (props) => {
  const { headline, description } = props.job
  return (
    <Paper
      elevation={5}
      sx={{ width: '90vw', maxWidth: '40rem', mb: 10, ml: 'auto', mr: 'auto' }}
    >
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {headline}
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions>
          <Button>Learn More</Button>
        </CardActions>
      </Card>
    </Paper>
  )
}

export default Job
