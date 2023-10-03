import DismissibleAlert from '../components/DismissibleAlert';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TwoColumnContainer from '../components/TwoColumnContainer';

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
