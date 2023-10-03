import { Card, Divider, Typography } from '@mui/material';
import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import TaskPriorityChart from './TaskPriorityChart';

const ChartCard = () => {
	const { taskCountsByPriority } = useContext(TodoContext);

	return (
		<Card
			style={{
				marginTop: '20px',
				padding: '20px',
				border: '1px solid #ccc',
				borderRadius: '10px',
				boxShadow: 'none',
			}}
		>
			<Typography
				variant="h6"
				style={{
					marginBottom: '8px',
				}}
			>
				Task Priorities
			</Typography>
			<Divider></Divider>
			{Object.keys(taskCountsByPriority).length > 0 ? (
				<TaskPriorityChart taskCountsByPriority={taskCountsByPriority} />
			) : (
				<p>No data available to display the chart.</p>
			)}
		</Card>
	);
};

export default ChartCard;
