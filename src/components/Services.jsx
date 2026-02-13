import { forwardRef } from 'react'
import { Stack, List, ListItem, Typography } from '@mui/material'
import { useTranslation } from '../i18n/LanguageContext'

const Services = (props, ref) => {
	const { t } = useTranslation()

	return (
		<Stack ref={ref} pacing={2}>
			<Typography
				variant='h3'
				sx={{ margin: '40px 0px', textAlign: 'center', color: '#D06432' }}
			>
				{t('services.heading')}
			</Typography>
			<List
				sx={{
					margin: '10px 20px',
					textAlign: 'left',
					fontSize: '1.7rem',
					listStyleType: 'circle',
					pl: 2,
				}}
			>
				{t('services.items').map((item, index) => (
					<ListItem
						key={index}
						sx={{ display: 'list-item', '&::marker': { color: '#D06432' } }}
					>
						{item}
					</ListItem>
				))}
			</List>
		</Stack>
	)
}

export default forwardRef(Services)
