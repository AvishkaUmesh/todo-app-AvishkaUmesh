import { Drawer, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import React from 'react';

import DashboardIcon from '../assets/Dashboard.svg';

const Sidebar = () => {
	return (
		<Drawer
			variant="permanent"
			style={{ width: '272px', color: '#fff' }}
			PaperProps={{
				sx: {
					backgroundColor: '#33074F',
				},
			}}
		>
			<div
				style={{
					padding: '20px',
					textAlign: 'center',
					color: 'white',
					width: '253px',
					background: '#EBE6ED1A',
				}}
			>
				<Typography variant="h6" style={{ fontWeight: 'bold' }}>
					Acmy Solutions
				</Typography>
			</div>

			<List>
				<ListItemButton
					style={{ borderRadius: '40px', backgroundColor: '#EBE6ED1A', padding: '5px', margin: '10px' }}
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
									style={{ marginRight: '12px', height: '24px', width: '24px' }}
								/>
								Dashboard
							</Typography>
						}
					/>
				</ListItemButton>
			</List>
		</Drawer>
	);
};

export default Sidebar;
