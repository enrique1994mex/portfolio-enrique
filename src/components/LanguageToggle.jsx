import { Button } from '@mui/material'
import { useTranslation } from '../i18n/LanguageContext'

const LanguageToggle = () => {
	const { language, toggleLanguage } = useTranslation()

	return (
		<Button
			onClick={toggleLanguage}
			sx={{
				color: 'white',
				fontSize: '1.2rem',
				fontWeight: '700',
				minWidth: 'auto',
				padding: '4px 12px',
				border: '2px solid white',
				borderRadius: '8px',
			}}
		>
			{language === 'es' ? 'EN' : 'ES'}
		</Button>
	)
}

export default LanguageToggle
