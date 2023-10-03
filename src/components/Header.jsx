import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
	return (
		<AppBar
			position="static"
			style={{
				marginLeft: '272px',
				width: 'calc(100% - 272px)',
				background: 'white',
				color: 'black',
			}}
		>
			<Toolbar>
				<Typography variant="h6">Admin Dashboard</Typography>
				{/* Add other app bar components like user menu, notifications, etc. */}
			</Toolbar>
		</AppBar>
	);
};

export default Header;
