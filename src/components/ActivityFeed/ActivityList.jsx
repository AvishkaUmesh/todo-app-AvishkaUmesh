import { List, ListItem, Typography } from '@mui/material';
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
	},

	{
		id: 2,
		activity: "Franklin More's professional review is pending",
		image: avatar2,
	},
	{
		id: 3,
		activity: 'Internship Agreement template is not completed',
		image: avatar1,
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
				<Typography variant="h6">Tasks</Typography>
			</ListItem>
			{activityList.map((activity) => (
				<React.Fragment key={activity.id}>
					<ActivityItem activity={activity} />
					<hr
						style={{
							width: '100%',
							border: '1px solid #ccc',
						}}
					/>
				</React.Fragment>
			))}
		</List>
	);
};
export default ActivityList;
