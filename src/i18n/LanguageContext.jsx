import {
	createContext,
	useContext,
	useState,
	useCallback,
	useMemo,
} from 'react'
import es from './locales/es.json'
import en from './locales/en.json'

const translations = { es, en }

const LanguageContext = createContext()

function getNestedValue(obj, path) {
	return path.split('.').reduce((acc, key) => acc?.[key], obj)
}

export function LanguageProvider({ children }) {
	const [language, setLanguage] = useState(() => {
		const saved = localStorage.getItem('portfolio-lang')
		const initial = saved === 'en' ? 'en' : 'es'
		document.documentElement.lang = initial
		return initial
	})

	const toggleLanguage = useCallback(() => {
		setLanguage((prev) => {
			const next = prev === 'es' ? 'en' : 'es'
			localStorage.setItem('portfolio-lang', next)
			document.documentElement.lang = next
			return next
		})
	}, [])

	const t = useCallback(
		(key) => {
			const value = getNestedValue(translations[language], key)
			return value !== undefined ? value : key
		},
		[language]
	)

	const value = useMemo(
		() => ({ language, toggleLanguage, t }),
		[language, toggleLanguage, t]
	)

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	)
}

export function useTranslation() {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error('useTranslation must be used within a LanguageProvider')
	}
	return context
}
