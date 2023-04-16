import { useState } from 'react'
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	Avatar,
	Link,
	Tooltip,
	MenuItem,
} from '@mui/material'
import SvgIcon from '@mui/material/SvgIcon'
import MenuIcon from '@mui/icons-material/Menu'
import { ReactComponent as WebIcon } from '../assets/code-solid.svg'

const pages = ['Contacto', 'Proyectos']

const Header = ({ handleScrollProjects, handleScrollContact }) => {
	const [anchorElNav, setAnchorElNav] = useState(null)

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = (page) => {
		setAnchorElNav(null)
		if (page === 'Contacto') {
			setTimeout(() => {
				handleScrollContact()
			}, 500)
		} else {
			setTimeout(() => {
				handleScrollProjects()
			}, 500)
		}
	}

	return (
		<AppBar
			position='static'
			sx={{
				height: '6rem',
				justifyContent: 'center',
				backgroundColor: '#F4BA86',
			}}
		>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<SvgIcon
						component={WebIcon}
						inheritViewBox
						sx={{
							display: { xs: 'none', md: 'flex' },
							mr: 1,
							fontSize: '3rem',
						}}
					/>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
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
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
									<Typography textAlign='center'>{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<SvgIcon
						component={WebIcon}
						inheritViewBox
						sx={{
							display: { xs: 'flex', md: 'none' },
							mr: 1,
							fontSize: '3rem',
						}}
					/>
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
								key={page}
								onClick={() => handleCloseNavMenu(page)}
								sx={{
									my: 2,
									mx: 3,
									color: 'white',
									display: 'block',
									fontSize: '1.5rem',
								}}
							>
								{page}
							</Link>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
						</Tooltip>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Header
