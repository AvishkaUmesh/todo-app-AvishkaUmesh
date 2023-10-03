import { Drawer, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import React from 'react';

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
				{/* Logo placeholder */}
				{/* You can replace this with an actual logo */}
			</div>

			<List>
				<ListItemButton
					style={{ borderRadius: '40px', backgroundColor: '#EBE6ED1A', padding: '5px', margin: '10px' }}
				>
					<ListItemText style={{ color: 'white' }}>
						<Typography>Dashboard</Typography>
					</ListItemText>
				</ListItemButton>
				{/* Add more list items for other links */}
			</List>
		</Drawer>
	);
};

export default Sidebar;
