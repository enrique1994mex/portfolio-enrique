import { forwardRef } from 'react'
import { Stack, List, ListItem, Typography} from '@mui/material'

const Services = (props, ref) => {
  return (
		<Stack ref={ref} pacing={2}>
			<Typography
				variant='h3'
				sx={{ margin: '40px 0px', textAlign: 'center', color: '#D06432' }}
			>
				Servicios
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
					Desarrollo de aplicaciones web (frontend y backend).
				</ListItem>
				<ListItem
					sx={{ display: 'list-item', '&::marker': { color: '#D06432' } }}
				>
					Construcción de APIs RESTful con .NET o Node.js.
				</ListItem>
				<ListItem
					sx={{ display: 'list-item', '&::marker': { color: '#D06432' } }}
				>
					Integración de bases de datos relacionales (SQL Server, MySQL).
				</ListItem>
				<ListItem
					sx={{ display: 'list-item', '&::marker': { color: '#D06432' } }}
				>
					Mantenimiento y mejora de sistemas existentes.
				</ListItem>
				<ListItem
					sx={{ display: 'list-item', '&::marker': { color: '#D06432' } }}
				>
					Despliegue en servidores o servicios cloud (Azure, Heroku).
				</ListItem>
				<ListItem
					sx={{ display: 'list-item', '&::marker': { color: '#D06432' } }}
				>
					Automatización de procesos administrativos.
				</ListItem>
			</List>
		</Stack>
	)
}

export default forwardRef(Services)