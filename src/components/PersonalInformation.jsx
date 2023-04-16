import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import ImageJS from '../assets/JS_MID.png'
const PersonalInformation = () => {
	return (
		<Box
			sx={{
				backgroundImage: `url(${ImageJS})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				width: '100%',
				height: '640px',
				borderRadius: '16px',
				marginTop: '40px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
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
					md={7}
					display='flex'
					justifyContent='center'
					alignItems='center'
				>
					<Stack sx={{ alignItems: 'center', justifyContent: 'center' }}>
						<Typography variant='h3' sx={{ color: '#D06432' }}>
							Enrique Sanchez Sandoval
						</Typography>
						<Typography variant='h4' sx={{ color: '#D06432' }}>
							Frontend Developer
						</Typography>
					</Stack>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					md={5}
					display='flex'
					justifyContent='center'
					alignItems='center'
				>
					<Stack>
						<Paper sx={{ padding: '1rem', textAlign: 'center' }}>
							<Typography variant='h6'>
								Me gusta aprender cosas nuevas y que sean al mismo tiempo
								desafiantes. Empecé en el mundo de la programación de forma
								autodidacta, he adquirido experiencia profesional y continúo
								aprendiendo en plataformas como Platzi y Udemy.
							</Typography>
						</Paper>
					</Stack>
				</Grid>
			</Grid>
		</Box>
	)
}

export default PersonalInformation
