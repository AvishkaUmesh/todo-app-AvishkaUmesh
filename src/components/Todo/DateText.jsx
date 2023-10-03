import { Typography } from '@mui/material';
import moment from 'moment';
import PropTypes from 'prop-types';

const DateText = ({ createdAt }) => {
	return (
		<Typography
			variant="body2"
			style={{
				marginLeft: '8px',
				color: '#757575',
				marginTop: '12px',
				marginBottom: '20px',
				fontSize: '12px',
			}}
		>
			{moment(createdAt).format('MMM DD')}
		</Typography>
	);
};

DateText.propTypes = {
	createdAt: PropTypes.string.isRequired,
};

export default DateText;
