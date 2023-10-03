import { Divider, List, ListItem, Typography } from '@mui/material';
import React from 'react';

import avatar1 from '../../assets/Avatar-1.svg';
import avatar2 from '../../assets/Avatar-2.svg';
import ActivityItem from './ActivityItem';

const activityList = [
	{
		id: 1,
		activity:
			"Contract #00124 need John Beige's signature Irure ad excepteur lorem.Irure ad excepteur lorem.Irure ad excepteur lorem.Irure ad excepteur lorem.",
		image: avatar1,
		date: 'Sep 16, 2022 at 11:30 AM',
	},

	{
		id: 2,
		activity: "Franklin More's professional review is pending. Irure ad excepteur lorem.Irure ad excepteur lorem.",
		image: avatar2,
		date: 'Sep 16, 2022 at 11:40 AM',
	},
	{
		id: 3,
		activity: 'Internship Agreement template is not completed. Irure ad excepteur lorem.Irure ad excepteur lorem.',
		image: avatar1,
		date: 'Sep 16, 2022 at 11:50 AM',
	},
];

const ActivityList = () => {
	return (
		<List
			style={{
				border: '1px solid #ccc',
				borderRadius: '10px',
				backgroundColor: 'white',
			}}
		>
			<ListItem>
				<Typography variant="h6">Activity Feed</Typography>
			</ListItem>
			{activityList.map((activity) => (
				<React.Fragment key={activity.id}>
					<Divider></Divider>
					<ActivityItem activity={activity} />
				</React.Fragment>
			))}
		</List>
	);
};
export default ActivityList;
