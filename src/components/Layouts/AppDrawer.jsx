import { Divider, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import DashboardIcon from '../../assets/Dashboard.svg';

const AppDrawer = () => {
	return (
		<div
			style={{
				background: '#33074F',
				height: '100vh',
				textAlign: 'center',
				color: 'white',
			}}
		>
			<div
				style={{
					padding: '16px',
					textAlign: 'center',
					color: 'white',
					background: '#EBE6ED1A',
				}}
			>
				<Typography variant="h6" style={{ fontWeight: 'bold' }}>
					Acmy Solutions
				</Typography>
			</div>
			<Divider />

			<List>
				<ListItemButton
					style={{
						borderRadius: '40px',
						backgroundColor: '#EBE6ED1A',
						padding: '5px',
						margin: '70px 10px 10px 10px',
					}}
				>
					<ListItemText
						primary={
							<Typography
								variant="inherit"
								color="white"
								component="div"
								style={{ display: 'flex', alignItems: 'center' }}
							>
								<img
									src={DashboardIcon}
									alt="Dashboard Icon"
									style={{ marginRight: '12px', height: '24px', width: '24px', marginLeft: '8px' }}
								/>
								Dashboard
							</Typography>
						}
					/>
				</ListItemButton>
			</List>
		</div>
	);
};
export default AppDrawer;
