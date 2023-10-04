import { Divider } from '@mui/material';
import React from 'react';

import avatar1 from '../../assets/Avatar-1.svg';
import avatar2 from '../../assets/Avatar-2.svg';
import ListCard from '../Layouts/ListCard';
import ActivityItem from './ActivityItem';

const activityList = [
	{
		id: 1,
		activity: "Contract #00124 need John Beige's signature Irure ad excepteur lorem.Irure ad excepteur lorem.",
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
		<ListCard title="Activity Feed">
			{activityList.map((activity) => (
				<React.Fragment key={activity.id}>
					<Divider></Divider>
					<ActivityItem activity={activity} />
				</React.Fragment>
			))}
		</ListCard>
	);
};
export default ActivityList;
