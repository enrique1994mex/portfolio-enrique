import { forwardRef } from 'react'
import { Stack } from '@mui/material'
import Project from './Project'
import ImageGithub from '../assets/Image_Search_Github.png'
import ImageBooking from '../assets/Image_booking_system.jpg'

const projects = [
	{
		key: '1',
		title: 'Booking Platform Project',
		description: `Sistema web de reservas desarrollado con Next.js, TypeScript, Supabase y Stripe, 
		diseñado para gestionar búsquedas de alojamientos, disponibilidad de habitaciones y procesamiento 
		de pagos. La aplicación implementa un flujo completo de reservas, integración con Stripe Checkout 
		y manejo de webhooks para asegurar consistencia transaccional entre el estado del pago y la 
		confirmación de la reserva. Incluye control de disponibilidad, validación de reglas de negocio y 
		preparación para integración con pagos reales. El proyecto está en modo demo, pero cuenta con 
		arquitectura preparada para producción.`,
		url: 'https://booking-system-production-3de7.up.railway.app/',
		github: 'https://github.com/enrique1994mex/booking-system/',
		image: ImageBooking,
	},
	{
		key: '2',
		title: 'Search GitHub',
		description: `Aplicación web desarrollada con React, Webpack y Material UI que permite 
		consultar información de perfiles de GitHub como número de repositorios, seguidores y seguidos. 
		Ideal como herramienta de análisis o referencia para equipos de desarrollo o reclutamiento técnico. 
		Este proyecto muestra mi capacidad para consumir APIs públicas y presentar datos de forma clara 
		y visualmente atractiva.`,
		url: 'https://enrique1994mex.github.io/gitHub-search/',
		github: 'https://github.com/enrique1994mex/gitHub-search/',
		image: ImageGithub,
	},
]
const Projects = (props, ref) => {
	return (
		<Stack
			ref={ref}
			direction='row'
			sx={{ margin: '20px 0px', justifyContent: 'space-around', gap: '0.5rem' }}
			useFlexGap
			flexWrap='wrap'
		>
			{projects.map((project) => (
				<Project
					key={project.key}
					title={project.title}
					description={project.description}
					url={project.url}
					github={project.github}
					image={project.image}
				/>
			))}
		</Stack>
	)
}

export default forwardRef(Projects)
