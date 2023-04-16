import { useRef } from 'react'
import Layout from './components/Layout'
import PersonalInformation from './components/PersonalInformation'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Contact from './components/Contact'
import './styles/global.css'

function App() {
	const projectsRef = useRef(null)
	const contactRef = useRef(null)

	const handleScrollProjects = () => {
		projectsRef.current.scrollIntoView({ behavior: 'smooth' })
	}
	const handleScrollContact = () => {
		contactRef.current.scrollIntoView({ behavior: 'smooth' })
	}
	return (
		<Layout
			handleScrollProjects={handleScrollProjects}
			handleScrollContact={handleScrollContact}
		>
			<PersonalInformation />
			<Projects ref={projectsRef} />
			<Technologies />
			<Contact ref={contactRef} />
		</Layout>
	)
}

export default App
