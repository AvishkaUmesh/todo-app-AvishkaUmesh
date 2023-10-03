import { Grid } from '@mui/material';
import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import ActivityList from './ActivityFeed/ActivityList';
import TodoList from './Todo/TodoList';
import TaskPriorityChart from './charts/TaskPriorityChart';

const TwoColumnContainer = () => {
	const { taskCountsByPriority } = useContext(TodoContext);

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
				{/* Content for the first column */}
				{/* <div style={{ padding: '20px', border: '1px solid #ccc' }}> */}
				<TodoList />
				{/* </div> */}
			</Grid>

			{/* Second column */}
			<Grid item xs={5}>
				{/* Content for the second column */}
				<ActivityList />

				<div>
					<h1>Task Priorities</h1>
					{Object.keys(taskCountsByPriority).length > 0 ? (
						<TaskPriorityChart taskCountsByPriority={taskCountsByPriority} />
					) : (
						<p>No data available to display the chart.</p>
					)}
				</div>
			</Grid>
		</Grid>
	);
};

export default TwoColumnContainer;
