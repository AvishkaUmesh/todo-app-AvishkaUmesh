import PropTypes from 'prop-types';

const FailToFetch = ({ error }) => {
	return <div style={{ padding: '25px', color: 'red' }}>{error}</div>;
};

FailToFetch.propTypes = {
	error: PropTypes.string.isRequired,
};
export default FailToFetch;
