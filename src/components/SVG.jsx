import SvgIcon from '@mui/material/SvgIcon'

const SVG = ({ component, color, size }) => {
	return (
		<SvgIcon
			component={component}
			inheritViewBox
			sx={{ color: `${color}`, fontSize: `${size}` }}
		/>
	)
}

export default SVG
