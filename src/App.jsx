import { useRef, useEffect } from 'react'
import Layout from './components/Layout'
import Services from './components/Services'
import PersonalInformation from './components/PersonalInformation'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Contact from './components/Contact'
import { useTranslation } from './i18n/LanguageContext'
import './styles/global.css'

function App() {
	const servicesRef = useRef(null)
	const projectsRef = useRef(null)
	const contactRef = useRef(null)
	const { t } = useTranslation()

	useEffect(() => {
		document.title = t('pageTitle')
	}, [t])

	// Scroll to Projects and Contact sections
	const handleScrollServices = () => {
		servicesRef.current.scrollIntoView({ behavior: 'smooth' })
	}
	const handleScrollProjects = () => {
		projectsRef.current.scrollIntoView({ behavior: 'smooth' })
	}
	const handleScrollContact = () => {
		contactRef.current.scrollIntoView({ behavior: 'smooth' })
	}
	return (
		<Layout
			handleScrollServices={handleScrollServices}
			handleScrollProjects={handleScrollProjects}
			handleScrollContact={handleScrollContact}
		>
			<PersonalInformation />
			<Services ref={servicesRef} />
			<Projects ref={projectsRef} />
			<Technologies />
			<Contact ref={contactRef} />
		</Layout>
	)
}

export default App
