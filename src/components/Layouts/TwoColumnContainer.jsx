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
			}}
		>
			{/* First column */}
			<Grid item xs={8}>
				<TodoList />
			</Grid>

			{/* Second column */}
			<Grid item xs={4}>
				<ActivityList />

				<ChartCard />
			</Grid>
		</Grid>
	);
};

export default TwoColumnContainer;
