import { Box, ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import PriorityHighIcon from '../../assets/Priority-High.svg';
import PriorityLowIcon from '../../assets/Priority-Low.svg';
import PriorityMediumIcon from '../../assets/Priority-Medium.svg';
import CompleteBtn from './CompleteBtn';
import DateText from './DateText';
import StatusBadge from './StatusBadge';

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
					padding: '8px 16px',
					borderRadius: '10px',
				}}
			>
				<Box
					component="div"
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Box
						component="span"
						sx={{
							marginRight: { xs: 1, sm: 2 },
						}}
					>
						<img
							src={priorityIcons[task.priority]}
							alt={`${task.priority} priority`}
							style={{ height: '24px', width: '24px' }}
						/>
					</Box>
					<ListItemText
						primary={task.todo}
						primaryTypographyProps={{
							variant: 'body1',
							style: {
								fontSize: '16px',
								paddingBlockEnd: '5px',
							},
						}}
					/>
				</Box>
				<Box
					component="div"
					sx={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
						marginRight: { xs: 1, sm: 2 },
						marginLeft: 'auto',
					}}
				>
					<Box sx={{ marginRight: '4px' }}>
						<StatusBadge completed={task.completed} />
					</Box>
					<DateText
						createdAt={task.createdAt}
						style={{
							fontSize: '14px',
						}}
					/>
				</Box>
			</ListItem>
			<CompleteBtn completed={task.completed} />
		</>
	);
};

TodoItem.propTypes = {
	task: PropTypes.shape({
		id: PropTypes.string.isRequired,
		priority: PropTypes.string.isRequired,
		todo: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
		createdAt: PropTypes.string.isRequired,
	}),
};

export default TodoItem;
