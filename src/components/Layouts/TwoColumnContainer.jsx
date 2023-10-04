import { Grid } from '@mui/material';

import PropTypes from 'prop-types';

const TwoColumnContainer = ({ firstCol, secondCol }) => {
	return (
		<Grid
			container
			spacing={2}
			style={{
				marginTop: '10px',
				marginBottom: '25px',
			}}
		>
			{/* First column */}
			<Grid item xs={12} sm={12} md={12} lg={8}>
				{' '}
				{firstCol}
			</Grid>

			{/* Second column */}
			<Grid item xs={12} sm={12} md={12} lg={4}>
				{' '}
				{secondCol}
			</Grid>
		</Grid>
	);
};

TwoColumnContainer.propTypes = {
	firstCol: PropTypes.node,
	secondCol: PropTypes.node,
};

export default TwoColumnContainer;
