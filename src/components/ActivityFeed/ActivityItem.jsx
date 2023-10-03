import { Box, ListItem, ListItemText, Typography } from '@mui/material';

const ActivityItem = ({ activity }) => {
	return (
		<>
			<ListItem>
				<Box component="span" sx={{ mr: 2 }}>
					<img src={activity.image} alt="profile" />
				</Box>
				<ListItemText primary={activity.activity} />
			</ListItem>

			<Typography variant="body2" style={{ marginLeft: '52px', color: '#BC006D' }}>
				Mark as Complete
			</Typography>
		</>
	);
};

export default ActivityItem;
