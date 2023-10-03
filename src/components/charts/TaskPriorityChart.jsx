import { Chip, Typography } from '@mui/material';
import 'chart.js/auto';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const TaskPriorityChart = ({ taskCountsByPriority }) => {
	const labels = ['High', 'Medium', 'Low'];
	const rearrangedData = labels.map((label) => taskCountsByPriority[label.toUpperCase()] || 0);

	const chartData = {
		labels,
		datasets: [
			{
				data: rearrangedData,
				backgroundColor: ['#EB5757', '#F2C94C', '#2F80ED'], // Rearranged colors
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
				{labels.map((label, index) => (
					<div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
						<Chip
							style={{
								backgroundColor: chartData.datasets[0].backgroundColor[index],
								width: '12px',
								height: '12px',
								marginRight: '10px',
							}}
						/>
						<Typography variant="body1">{label}</Typography>
					</div>
				))}
			</div>
		</div>
	);
};

export default TaskPriorityChart;
