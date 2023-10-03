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
				marginTop: '20px',
			}}
		>
			{/* First column */}
			<Grid item xs={7}>
				<TodoList />
			</Grid>

			{/* Second column */}
			<Grid item xs={5}>
				{/* Content for the second column */}
				<ActivityList />

				<ChartCard />
			</Grid>
		</Grid>
	);
};

export default TwoColumnContainer;
