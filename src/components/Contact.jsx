import { forwardRef } from 'react'
import { Box, Link, Stack, Paper, Typography } from '@mui/material'
import SVG from './SVG'
import { ReactComponent as LinkedinIcon } from '../assets/linkedin.svg'
import { ReactComponent as EmailIcon } from '../assets/email.svg'

const Contact = (props, ref) => {
	return (
		<Box
			ref={ref}
			sx={{
				minHeight: '300px',
				margin: '20px 0px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				flexWrap: 'wrap',
			}}
		>
			<Typography variant='h4' sx={{ marginBottom: '20px' }}>Contactáme</Typography>
			<Stack display='flex' direction='row' spacing={4}>
				<Paper
					elevation={8}
					sx={{
						padding: '10px',
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
					}}
				>
					<Link
						href='mailto:enrique.antonio1029@gmail.com'
						target='_blank'
						rel='noreferrer'
						underline='none'
					>
						<SVG component={EmailIcon} color='#D93025' size='3rem' />
						<Typography
							sx={{
								color: '#D93025',
								fontSize: '1.7rem',
								fontWeight: '600',
							}}
						>
							Email
						</Typography>
					</Link>
				</Paper>
				<Paper
					elevation={8}
					sx={{
						padding: '10px',
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
					}}
				>
					<Link
						href='https://www.linkedin.com/in/enrique-sanchez-sandoval/'
						target='_blank'
						rel='noreferrer'
						underline='none'
					>
						<SVG component={LinkedinIcon} color='#5175EF' size='3rem' />
						<Typography
							sx={{
								color: '#5175EF',
								fontSize: '1.7rem',
								fontWeight: '600',
							}}
						>
							LinkedIn
						</Typography>
					</Link>
				</Paper>
			</Stack>
		</Box>
	)
}

export default forwardRef(Contact)
