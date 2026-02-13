import { useState } from 'react'
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Menu,
	Container,
	Link,
	MenuItem,
	Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LanguageToggle from './LanguageToggle'
import { useTranslation } from '../i18n/LanguageContext'

const Header = ({
	handleScrollProjects,
	handleScrollContact,
	handleScrollServices,
}) => {
	const [anchorElNav, setAnchorElNav] = useState(null)
	const { t } = useTranslation()

	const pages = [
		{ key: 'contact', label: t('nav.contact'), action: handleScrollContact },
		{ key: 'projects', label: t('nav.projects'), action: handleScrollProjects },
		{
			key: 'techStack',
			label: t('nav.techStack'),
			action: handleScrollServices,
		},
	]

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = (page) => {
		setAnchorElNav(null)
		if (page?.action) {
			setTimeout(() => {
				page.action()
			}, 500)
		}
	}

	return (
		<AppBar
			position='sticky'
			sx={{
				height: '6rem',
				justifyContent: 'center',
				backgroundColor: '#F4BA86',
			}}
		>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Link
						href='mailto:enrique.antonio1029@gmail.com'
						target='_blank'
						rel='noreferrer'
						underline='none'
						inheritViewBox
						sx={{
							display: { xs: 'none', md: 'flex' },
							mr: 1,
							fontSize: '3rem',
						}}
					>
						<Typography
							sx={{
								color: 'white',
								fontSize: '1.5rem',
								fontWeight: '600',
							}}
						>
							enrique.antonio1029@gmail.com
						</Typography>
					</Link>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon sx={{ fontSize: '2.5rem' }} />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={() => handleCloseNavMenu()}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page.key}
									onClick={() => handleCloseNavMenu(page)}
								>
									<Link
										href='#'
										underline='none'
										sx={{
											color: '#D06432',
											display: 'block',
											fontSize: '1.3rem',
											fontWeight: '600',
										}}
									>
										{page.label}
									</Link>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Link
						href='mailto:enrique.antonio1029@gmail.com'
						target='_blank'
						rel='noreferrer'
						underline='none'
						inheritViewBox
						sx={{
							display: { xs: 'flex', md: 'none' },
							mr: 1,
							fontSize: '3rem',
						}}
					>
						<Typography
							sx={{
								color: 'white',
								fontSize: '1rem',
								fontWeight: '600',
							}}
						>
							enrique.antonio1029@gmail.com
						</Typography>
					</Link>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
							flexDirection: 'row-reverse',
						}}
					>
						{pages.map((page) => (
							<Link
								href='#'
								underline='none'
								key={page.key}
								onClick={() => handleCloseNavMenu(page)}
								sx={{
									my: 2,
									mx: 3,
									color: 'white',
									display: 'block',
									fontSize: '1.8rem',
									fontWeight: '600',
								}}
							>
								{page.label}
							</Link>
						))}
					</Box>

					<LanguageToggle />
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Header
