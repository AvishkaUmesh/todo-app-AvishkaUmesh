import { Box, ListItem, ListItemText, Typography } from '@mui/material';
import PriorityHighIcon from '../../assets/Priority-High.svg';
import PriorityLowIcon from '../../assets/Priority-Low.svg';
import PriorityMediumIcon from '../../assets/Priority-Medium.svg';

const TodoItem = ({ task }) => {
	const priorityIcons = {
		HIGH: PriorityHighIcon,
		MEDIUM: PriorityMediumIcon,
		LOW: PriorityLowIcon,
	};
	return (
		<>
			<ListItem
				style={{
					height: '48px',
				}}
			>
				<Box component="span" sx={{ mr: 2 }}>
					<img src={priorityIcons[task.priority]} alt={`${task.priority} priority`} />
				</Box>
				<ListItemText primary={task.todo} />

				<Box component="span" sx={{ ml: 2 }}>
					{task.completed && (
						<span
							style={{
								color: '#219653',
								backgroundColor: '#E8F5E9',
								borderRadius: '12px',
								padding: '4px 8px',
							}}
						>
							Completed
						</span>
					)}

					{!task.completed && (
						<span
							style={{
								color: '#F2C94C',
								backgroundColor: '#F2C94C1A',
								borderRadius: '12px',
								padding: '4px 8px',
							}}
						>
							In-Progress
						</span>
					)}
				</Box>

				<br />
			</ListItem>
			{!task.completed && (
				<Typography variant="body2" style={{ marginLeft: '52px', color: '#BC006D' }}>
					Mark as Complete
				</Typography>
			)}
		</>
	);
};

export default TodoItem;
