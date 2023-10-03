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
			<ListItem style={{ height: '48px' }}>
				<Box component="span" sx={{ mr: 2 }}>
					<img src={priorityIcons[task.priority]} alt={`${task.priority} priority`} />
				</Box>
				<ListItemText primary={task.todo} />
				<Box component="span" sx={{ ml: 2 }}>
					<StatusBadge completed={task.completed} />
				</Box>
				<DateText createdAt={task.createdAt} />
				<br />
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
