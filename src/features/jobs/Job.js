import { Card, CardContent, Paper, Typography, CardActions, Button, Divider } from '@mui/material'

const strShorten = (str) => {
	const sentences = str.split('. ')
	const shortened = []
	// Returns the first 3 sentences
	for (let i = 0; i < 3; i++) {
		shortened.push(`${sentences[i]}. `)
	}
	shortened.push('...')
	return shortened
}

const Job = (props) => {
	const { headline, description } = props.job
	return (
		<Paper elevation={5} sx={{ width: '90vw', maxWidth: '40rem', mb: 4 }}>
			<Card sx={{ p: 2 }}>
				<CardContent>
					<Typography variant='h5' gutterBottom>
						{headline}
					</Typography>
					<Divider sx={{ m: 2 }} />
					<Typography>{strShorten(description)}</Typography>
				</CardContent>
				<CardActions>
					<Button color='secondary' variant='contained'>
						Learn More
					</Button>
				</CardActions>
			</Card>
		</Paper>
	)
}

export default Job
