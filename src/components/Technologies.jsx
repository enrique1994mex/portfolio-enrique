import { forwardRef } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { ReactComponent as JSIcon } from '../assets/js.svg'
import { ReactComponent as CSSIcon } from '../assets/css3.svg'
import { ReactComponent as HTMLIcon } from '../assets/html5.svg'
import { ReactComponent as ReactIcon } from '../assets/react.svg'
import { ReactComponent as BootstrapIcon } from '../assets/bootstrap.svg'
import { ReactComponent as GitIcon } from '../assets/git-alt.svg'
import { ReactComponent as CSharpIcon } from '../assets/c-sharp.svg'
import { ReactComponent as SQLIcon } from '../assets/sql.svg'
import { ReactComponent as AngularIcon } from '../assets/angular.svg'
import { ReactComponent as NodeIcon } from '../assets/nodejs.svg'
import { ReactComponent as NetIcon } from '../assets/dot_net.svg'
import SVG from './SVG'

const Icons = [
	{ name: 'JavaScript', component: JSIcon, color: '#E9F619' },
	{ name: 'CSS', component: CSSIcon, color: '#1981F6' },
	{ name: 'HTML', component: HTMLIcon, color: '#F05637' },
	{ name: 'Bootstrap', component: BootstrapIcon, color: '#A045F1' },
	{ name: 'React', component: ReactIcon, color: '#1981F6' },
	{ name: 'Angular', component: AngularIcon, color: '#DD0031' },
	{ name: 'Node.js', component: NodeIcon, color: '#8CC84B' },
	{ name: 'C#', component: CSharpIcon, color: '#684D95' },
	{ name: 'SQL Server', component: SQLIcon, color: '#0078D4' },
	{ name: '.NET', component: NetIcon, color: '#5C2D91' },
	{ name: 'Git', component: GitIcon, color: '#F94C2A' },
]

const Technologies = () => {
	return (
		<Stack
			direction='row'
			sx={{
				minHeight: '300px',
				margin: '5rem 0px',
				justifyContent: 'space-around',
				alignItems: 'center',
				gap: '4rem',
			}}
			useFlexGap
			flexWrap='wrap'
		>
			{Icons.map((icon) => (
				<Box
					key={icon.name}
					sx={{
						textAlign: 'center',
					}}
				>
					<SVG component={icon.component} color={icon.color} size='5rem' />
					<Typography variant='h5'>{icon.name}</Typography>
				</Box>
			))}
		</Stack>
	)
}

export default forwardRef(Technologies)
