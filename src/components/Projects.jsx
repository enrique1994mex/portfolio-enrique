import { forwardRef } from 'react'
import { Stack } from '@mui/material'
import Project from './Project'
import ImageShop from '../assets/shop_react-min.png'
import ImageGithub from '../assets/Image_Search_Github.png'
import ImageBlog from '../assets/Image_Blog.jpg'

const projects = [
	{
		key: '1',
		title: 'Blog App',
		description: `Aplicación web desarrollada con ASP.NET Core MVC y SQL Server, 
		ideal para empresas o creadores de contenido que desean administrar su propio blog. 
		Permite a los usuarios registrarse y visualizar publicaciones, mientras que los 
		administradores pueden gestionar entradas y usuarios desde un panel seguro. 
		Este proyecto muestra mi capacidad para desarrollar soluciones web completas 
		con panel de administración, autenticación de usuarios y base de datos relacional.`,
		url: 'https://blogcoreazure-cdhzbfe2dsdjetes.mexicocentral-01.azurewebsites.net/',
		image: ImageBlog,
	},
	{
		key: '2',
		title: 'Shop App',
		description: `Aplicación web construida con React, Webpack y Sass, ideal para negocios 
		que buscan vender productos en línea. Permite a los usuarios navegar por un catálogo 
		de productos, agregar artículos al carrito y revisar su orden antes de finalizar la compra. 
		Este proyecto demuestra mi experiencia creando interfaces dinámicas y funcionales orientadas 
		a la conversión de clientes.`,
		url: 'https://enrique1994mex.github.io/react-shop/',
		github: 'https://github.com/enrique1994mex/react-shop/',
		image: ImageShop,
	},
	{
		key: '3',
		title: 'Search GitHub',
		description: `Aplicación web desarrollada con React, Webpack y Material UI que permite 
		consultar información de perfiles de GitHub como número de repositorios, seguidores y seguidos. 
		Ideal como herramienta de análisis o referencia para equipos de desarrollo o reclutamiento técnico. 
		Este proyecto muestra mi capacidad para consumir APIs públicas y presentar datos de forma clara 
		y visualmente atractiva.`,
		url: 'https://enrique1994mex.github.io/gitHub-search/',
		github: 'https://github.com/enrique1994mex/gitHub-search/',
		image: ImageGithub,
	},
]
const Projects = (props, ref) => {
	return (
		<Stack
			ref={ref}
			direction='row'
			sx={{ margin: '20px 0px', justifyContent: 'space-around', gap: '0.5rem' }}
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
