import Main from '../components/Layouts/Main';

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
			<Main />
		</div>
	);
};

export default Dashboard;
