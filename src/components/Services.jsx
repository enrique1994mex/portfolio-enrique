import { forwardRef } from 'react'
import { Stack, List, ListItem, Typography } from '@mui/material'

const Services = (props, ref) => {
	return (
		<Stack ref={ref} pacing={2}>
			<Typography
				variant='h3'
				sx={{ margin: '40px 0px', textAlign: 'center', color: '#D06432' }}
			>
				Tecnologías y herramientas
			</Typography>
			<List
				sx={{
					margin: '10px 20px',
					textAlign: 'left',
					fontSize: '1.7rem',
					listStyleType: 'circle',
					pl: 2,
				}}
			>
				<ListItem
					sx={{ display: 'list-item', '&::marker': { color: '#D06432' } }}
				>
					Desarrollo de interfaces modernas con React y TypeScript.
				</ListItem>
				<ListItem
					sx={{ display: 'list-item', '&::marker': { color: '#D06432' } }}
				>
					Implementación de arquitecturas escalables y mantenibles (Clean
					Architecture).
				</ListItem>
				<ListItem
					sx={{ display: 'list-item', '&::marker': { color: '#D06432' } }}
				>
					Integración con APIs RESTful usando Node.js.
				</ListItem>
				<ListItem
					sx={{ display: 'list-item', '&::marker': { color: '#D06432' } }}
				>
					Optimización y mantenimiento de aplicaciones existentes.
				</ListItem>
				<ListItem
					sx={{ display: 'list-item', '&::marker': { color: '#D06432' } }}
				>
					Despliegue y gestión en entornos cloud.
				</ListItem>
			</List>
		</Stack>
	)
}

export default forwardRef(Services)
