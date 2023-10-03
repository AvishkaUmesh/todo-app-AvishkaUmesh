import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const CompleteBtn = ({ completed }) => {
	return (
		<>
			{!completed && (
				<Typography variant="body2" style={{ marginLeft: '52px', color: '#BC006D', marginBottom: '10px' }}>
					Mark as Done
				</Typography>
			)}
		</>
	);
};

CompleteBtn.propTypes = {
	completed: PropTypes.bool.isRequired,
};

export default CompleteBtn;
