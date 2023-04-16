import { forwardRef } from 'react'
import { Box, Link, Stack, Paper, Typography } from '@mui/material'
import SVG from './SVG'
import { ReactComponent as LinkedinIcon } from '../assets/linkedin.svg'

const Contact = (props, ref) => {
	return (
		<Box
			ref={ref}
			sx={{
				minHeight: '300px',
				margin: '20px 0px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Stack display='flex'>
				<Typography variant='h4'>Contactáme</Typography>
				<Paper
					elevation={8}
					sx={{
						marginTop: '30px',
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
					>
						<SVG component={LinkedinIcon} color='#5175EF' size='3rem' />
					</Link>
					<Typography variant='h5'>LinkedIn</Typography>
				</Paper>
			</Stack>
		</Box>
	)
}

export default forwardRef(Contact)
