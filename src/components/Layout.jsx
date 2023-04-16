import { Container } from '@mui/material'
import Header from './Header'

const Layout = ({ children, handleScrollProjects, handleScrollContact }) => {
	return (
		<Container>
			<Header
				handleScrollProjects={handleScrollProjects}
				handleScrollContact={handleScrollContact}
			/>
			{children}
		</Container>
	)
}

export default Layout
