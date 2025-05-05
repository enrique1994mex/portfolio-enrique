import { Container } from '@mui/material'
import Header from './Header'

const Layout = ({ children, handleScrollProjects, handleScrollContact, handleScrollServices }) => {
	return (
		<Container maxWidth='xl'>
			<Header
				handleScrollServices={handleScrollServices}
				handleScrollProjects={handleScrollProjects}
				handleScrollContact={handleScrollContact}
			/>
			{children}
		</Container>
	)
}

export default Layout
