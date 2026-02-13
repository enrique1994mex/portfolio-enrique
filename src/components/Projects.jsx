import { forwardRef } from 'react'
import { Stack } from '@mui/material'
import Project from './Project'
import ImageGithub from '../assets/Image_Search_Github.png'
import ImageBooking from '../assets/Image_booking_system.jpg'
import { useTranslation } from '../i18n/LanguageContext'

const Projects = (props, ref) => {
	const { t } = useTranslation()

	const projects = [
		{
			key: '1',
			title: t('projects.booking.title'),
			description: t('projects.booking.description'),
			url: 'https://booking-system-production-3de7.up.railway.app/',
			github: 'https://github.com/enrique1994mex/booking-system/',
			image: ImageBooking,
		},
		{
			key: '2',
			title: t('projects.github.title'),
			description: t('projects.github.description'),
			url: 'https://enrique1994mex.github.io/gitHub-search/',
			github: 'https://github.com/enrique1994mex/gitHub-search/',
			image: ImageGithub,
		},
	]

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
