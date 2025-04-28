import { forwardRef } from 'react'
import { Stack } from '@mui/material'
import Project from './Project'
import ImageShop from '../assets/shop_react-min.png'
import ImageGithub from '../assets/Image_Search_Github.png'
import ImageTasks from '../assets/Image_Tasks.png'
import ImageBlog from '../assets/Image_Blog.jpg'

const projects = [
	{
		key: '1',
		title: 'React Shop',
		description: `Este proyecto es una aplicación web construida con React, 
			Webpack y Sass. Es una tienda online en donde se te muestran 
			los productos disponibles, agregas productos al carrito y revisas tu orden de compra.`,
		url: 'https://enrique1994mex.github.io/react-shop/',
		github: 'https://github.com/enrique1994mex/react-shop/',
		image: ImageShop,
	},
	{
		key: '2',
		title: 'Search GitHub',
		description: `Este buscador de usuarios de GitHub te ayuda a conocer
		la informacion de los usuarios como el número de repositorios,
		seguidores, seguidos, etc. La aplicación está construida con React, Webpack
		y Material UI.`,
		url: 'https://enrique1994mex.github.io/gitHub-search/',
		github: 'https://github.com/enrique1994mex/gitHub-search/',
		image: ImageGithub,
	},
	{
		key: '3',
		title: 'Tasks to do',
		description: `Esta aplicación web te ayuda con tus tareas a realizar. Puedes
		ingresar nuevas tareas, marcarlas como ya hechas y eliminarlas. Además tiene
		un buscador integrado. La aplicación está construida con Creat React App.`,
		url: 'https://enrique1994mex.github.io/tasks/',
		github: 'https://github.com/enrique1994mex/tasks/',
		image: ImageTasks,
	},
	{
		key: '4',
		title: 'Blog App',
		description: `Esta es una aplicación web de tipo Blog, en que los 
		clientes pueden registrarse y visualizar la información del Blog.
		El administrador puede crear, editar y eliminar entradas del blog.
		Además, puede crear, editar y eliminar usuarios.
		La aplicación está construida con ASP.NET Core MVC y SQL Server.`,
		url: 'https://blogcoreazure-cdhzbfe2dsdjetes.mexicocentral-01.azurewebsites.net/',
		image: ImageBlog,
	},
]
const Projects = (props, ref) => {
	return (
		<Stack
			ref={ref}
			direction='row'
			sx={{ margin: '20px 0px', justifyContent: 'space-around', gap: '2rem' }}
			useFlexGap
			flexWrap='wrap'
		>
			{projects.map((project) => (
				<Project
					key={project.key}
					title={project.title}
					description={project.description}
					url={project.url}
					github={project.github}
					image={project.image}
				/>
			))}
		</Stack>
	)
}

export default forwardRef(Projects)
