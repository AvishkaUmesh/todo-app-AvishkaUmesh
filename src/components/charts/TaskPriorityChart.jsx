import { Chip, Grid, Typography } from '@mui/material';
import 'chart.js/auto';
import PropTypes from 'prop-types';
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
		<Grid container spacing={2} marginTop={2}>
			<Grid item xs={12} sm={6}>
				<Doughnut data={chartData} options={chartOptions} />
			</Grid>
			<Grid item xs={12} sm={6} marginTop={2}>
				{labels.map((label, index) => (
					<div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
						<Chip
							sx={{
								backgroundColor: chartData.datasets[0].backgroundColor[index],
								width: '12px',
								height: '12px',
								marginRight: '10px',
							}}
						/>
						<Typography variant="body1">{label}</Typography>
					</div>
				))}
			</Grid>
		</Grid>
	);
};

TaskPriorityChart.propTypes = {
	taskCountsByPriority: PropTypes.shape({
		HIGH: PropTypes.number.isRequired,
		MEDIUM: PropTypes.number.isRequired,
		LOW: PropTypes.number.isRequired,
	}).isRequired,
};

export default TaskPriorityChart;
