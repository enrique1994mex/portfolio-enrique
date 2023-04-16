import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Link,
	Typography,
} from '@mui/material'
import SVG from './SVG'
import { ReactComponent as GlobeIcon } from '../assets/globe-solid.svg'
import { ReactComponent as GithubIcon } from '../assets/github.svg'

const Project = ({ title, description, url, github, image }) => {
	return (
		<Card
			sx={{
				maxWidth: 345,
				transition: '0.2s',
				'&:hover': { transform: 'scale(1.06)' },
			}}
		>
			<CardMedia sx={{ height: 140 }} image={image} title={title} />
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{description}
				</Typography>
			</CardContent>
			<CardActions sx={{ backgroundColor: '#F4BA86' }}>
				<Link href={url} target='_blank' rel='noreferrer'>
					<SVG component={GlobeIcon} color='#B4BDBE' size='2rem' />
				</Link>
				<Link href={github} target='_blank' rel='noreferrer'>
					<SVG component={GithubIcon} color='#100D2E' size='2rem' />
				</Link>
			</CardActions>
		</Card>
	)
}

export default Project
