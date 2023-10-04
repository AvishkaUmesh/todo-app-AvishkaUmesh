import ActivityList from '../components/ActivityFeed/ActivityList';
import DismissibleAlert from '../components/Alerts/DismissibleAlert';
import Main from '../components/Layouts/Main';
import TwoColumnContainer from '../components/Layouts/TwoColumnContainer';
import TodoList from '../components/Todo/TodoList';
import ChartCard from '../components/charts/ChartCard';

const Dashboard = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
				backgroundColor: '#F5F5F5',
			}}
		>
			<Main>
				<DismissibleAlert />
				<TwoColumnContainer
					firstCol={<TodoList />}
					secondCol={
						<>
							<ActivityList />
							<ChartCard />
						</>
					}
				/>
			</Main>
		</div>
	);
};

export default Dashboard;
