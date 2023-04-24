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
				<Typography variant='h6' align='justify'>
					{description}
				</Typography>
			</CardContent>
			<CardActions
				sx={{ backgroundColor: '#F4BA86', gap: '1rem', alignItems: 'center' }}
			>
				<Link
					href={url}
					target='_blank'
					rel='noreferrer'
					underline='none'
					sx={{
						display: 'flex',
						gap: '5px',
						alignItems: 'center',
					}}
				>
					<SVG component={GlobeIcon} color='#B4BDBE' size='2rem' />
					<Typography
						sx={{
							color: 'white',
							fontSize: '1.3rem',
							fontWeight: '600',
						}}
					>
						APP
					</Typography>
				</Link>
				<Link
					href={github}
					target='_blank'
					rel='noreferrer'
					underline='none'
					sx={{
						display: 'flex',
						gap: '5px',
						alignItems: 'center',
					}}
				>
					<SVG component={GithubIcon} color='#100D2E' size='2rem' />
					<Typography
						sx={{
							color: 'white',
							fontSize: '1.3rem',
							fontWeight: '600',
						}}
					>
						REPO
					</Typography>
				</Link>
			</CardActions>
		</Card>
	)
}

export default Project
