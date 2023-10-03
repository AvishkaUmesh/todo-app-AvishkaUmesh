import DismissibleAlert from '../components/Alerts/DismissibleAlert';
import Header from '../components/Layouts/Header';
import Sidebar from '../components/Layouts/Sidebar';
import TwoColumnContainer from '../components/Layouts/TwoColumnContainer';

const Dashboard = () => {
	return (
		<div
			style={{
				backgroundColor: '#F5F5F5',
			}}
		>
			<Sidebar />
			<Header />
			<div
				style={{
					marginLeft: '272px',
					paddingLeft: '20px',
					paddingRight: '20px',
					// width: 'calc(100% - 272px)',
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
