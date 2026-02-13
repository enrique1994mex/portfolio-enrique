import Lottie from 'lottie-react'
import { Box, Grid, Paper, Slide, Stack, Typography } from '@mui/material'
import devAnimation from '../assets/WebDevelopment.json'
import { useTranslation } from '../i18n/LanguageContext'

const PersonalInformation = () => {
	const { t } = useTranslation()

	const animation = (
		<Grid
			container
			rowSpacing={2}
			columnSpacing={{ xs: 1, sm: 2, md: 3 }}
			sx={{ padding: '1rem' }}
		>
			<Grid
				item
				xs={12}
				sm={6}
				md={6}
				display='flex'
				justifyContent='center'
				alignItems='center'
			>
				<Stack sx={{ alignItems: 'center', justifyContent: 'center' }}>
					<Typography variant='h3' sx={{ color: '#D06432' }}>
						{t('personal.name')}
					</Typography>
					<Typography variant='h4' sx={{ color: '#D06432' }}>
						{t('personal.title')}
					</Typography>
				</Stack>
			</Grid>
			<Grid
				item
				xs={12}
				sm={6}
				md={6}
				display='flex'
				justifyContent='center'
				alignItems='center'
			>
				<Stack>
					<Paper sx={{ padding: '1rem', textAlign: 'center' }}>
						<Typography variant='h5' sx={{ color: '#1E1E1E' }}>
							{t('personal.bio')}
						</Typography>
					</Paper>
				</Stack>
			</Grid>
		</Grid>
	)

	return (
		<Box
			sx={{
				position: 'relative',
				width: '100%',
				minHeight: '640px',
				borderRadius: '16px',
				marginTop: '10px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				overflow: 'hidden',
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					inset: 0,
					zIndex: 1,
					opacity: 0.5,
				}}
			>
				<Lottie
					animationData={devAnimation}
					loop
					autoplay
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
					}}
				/>
			</Box>

			<Box sx={{ position: 'relative', zIndex: 2 }}>
				<Slide
					direction='up'
					in
					mountOnEnter
					unmountOnExit
					easing='ease-in'
					timeout={1100}
				>
					{animation}
				</Slide>
			</Box>
		</Box>
	)
}

export default PersonalInformation
