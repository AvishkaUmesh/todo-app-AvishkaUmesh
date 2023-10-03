import { Chip, Typography } from '@mui/material';
import 'chart.js/auto';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const TaskPriorityChart = ({ taskCountsByPriority }) => {
	const chartData = {
		labels: Object.keys(taskCountsByPriority),
		datasets: [
			{
				data: Object.values(taskCountsByPriority),
				backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
				borderWidth: 1,
			},
		],
	};

	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	return (
		<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
			<div style={{ flex: 1 }}>
				<Doughnut data={chartData} options={chartOptions} />
			</div>
			<div style={{ flex: 1, textAlign: 'left' }}>
				{Object.keys(taskCountsByPriority).map((label, index) => (
					<div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
						<Chip
							style={{
								backgroundColor: chartData.datasets[0].backgroundColor[index],
								width: '20px',
								height: '20px',
								marginRight: '10px',
							}}
						/>
						<Typography variant="body1">
							{label}: {chartData.datasets[0].data[index]}
						</Typography>
					</div>
				))}
			</div>
		</div>
	);
};

export default TaskPriorityChart;
