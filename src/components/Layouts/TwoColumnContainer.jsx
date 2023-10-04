import { Grid } from '@mui/material';
import ActivityList from '../ActivityFeed/ActivityList';
import TodoList from '../Todo/TodoList';
import ChartCard from '../charts/ChartCard';

const TwoColumnContainer = () => {
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
				{/* Changed xs to sm */}
				<TodoList />
			</Grid>

			{/* Second column */}
			<Grid item xs={12} sm={12} md={12} lg={4}>
				{' '}
				{/* Changed xs to sm */}
				<ActivityList />
				<ChartCard />
			</Grid>
		</Grid>
	);
};

export default TwoColumnContainer;
