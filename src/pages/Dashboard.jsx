import DismissibleAlert from '../components/Alerts/DismissibleAlert';
import Header from '../components/Layouts/Header';
import Sidebar from '../components/Layouts/Sidebar';
import TwoColumnContainer from '../components/Layouts/TwoColumnContainer';

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
			<Sidebar />
			<Header />
			<div
				style={{
					flex: 1,
					marginLeft: '254px',
					paddingLeft: '10px',
					paddingRight: '20px',
					overflowX: 'auto',
				}}
			>
				<DismissibleAlert />
				<TwoColumnContainer />
			</div>
		</div>
	);
};

export default Dashboard;
