import PropTypes from 'prop-types';

const StatusBadge = ({ completed }) => {
	return (
		<>
			{completed && (
				<span
					style={{
						color: '#219653',
						backgroundColor: '#E8F5E9',
						borderRadius: '12px',
						padding: '4px 8px',
						fontSize: '12px',
					}}
				>
					Completed
				</span>
			)}

			{!completed && (
				<span
					style={{
						color: '#F2C94C',
						backgroundColor: '#F2C94C1A',
						borderRadius: '12px',
						padding: '4px 8px',
						fontSize: '12px',
					}}
				>
					In-Progress
				</span>
			)}
		</>
	);
};

StatusBadge.propTypes = {
	completed: PropTypes.bool.isRequired,
};

export default StatusBadge;
