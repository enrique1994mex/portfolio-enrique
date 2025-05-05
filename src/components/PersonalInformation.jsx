import { Box, Grid, Paper, Slide, Stack, Typography } from '@mui/material'
import ImageJS from '../assets/JS_MID.png'

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
					Fullstack Developer
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
					<Typography variant='h5'>
						Soy desarrollador fullstack. Actualmente curso el último año de la carrera de Ingeniería 
						en Desarrollo de Software, lo que refuerza mi perfil  técnico y compromiso con la 
						mejora continua. Inicié mi formación de manera autodidacta y he trabajado en 
						proyectos completos, desde la creación de interfaces intuitivas hasta 
						la implementación de bases de datos y APIs. Tengo experiencia profesional y me mantengo 
						en constante actualización a través de plataformas como Platzi y Udemy.
					</Typography>
				</Paper>
			</Stack>
		</Grid>
	</Grid>
)

const PersonalInformation = () => {
	return (
		<Box
			sx={{
				backgroundImage: `url(${ImageJS})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				width: '100%',
				minHeight: '640px',
				borderRadius: '16px',
				marginTop: '40px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
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
	)
}

export default PersonalInformation
