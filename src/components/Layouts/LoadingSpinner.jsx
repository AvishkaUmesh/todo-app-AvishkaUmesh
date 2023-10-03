import { Card, CircularProgress } from '@mui/material';

const LoadingSpinner = () => {
	return (
		<Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
			<CircularProgress />
		</Card>
	);
};
export default LoadingSpinner;
