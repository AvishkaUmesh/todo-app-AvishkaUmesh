import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import ChevronDownIcon from '../../assets/Chevron-down.svg';
import NotificationIcon from '../../assets/Notifications.svg';
import ProfileIcon from '../../assets/Profile.svg';
import AppDrawer from './AppDrawer';

const drawerWidth = 240;

function Main(props) {
	const { window } = props;
	const { children } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
					backgroundColor: '#fff',
					color: '#000',
				}}
			>
				<Toolbar style={{ justifyContent: 'space-between' }}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						noWrap
						component="div"
						style={{
							marginLeft: '10px',
							fontWeight: 'bold',
						}}
					>
						Dashboard
					</Typography>

					<div style={{ display: 'flex', alignItems: 'center' }}>
						<img
							src={NotificationIcon}
							alt="Notification Icon"
							style={{ marginRight: '10px', height: '24px', width: '24px' }}
						/>
						<IconButton>
							<img src={ProfileIcon} alt="Profile Icon" style={{ height: '40px', width: '40px' }} />
						</IconButton>
						<IconButton>
							<img
								src={ChevronDownIcon}
								alt="ChevronDown Icon"
								style={{ height: '24px', width: '24px' }}
							/>
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
				>
					<AppDrawer />
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
					open
				>
					<AppDrawer />
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
				style={{ marginLeft: '10px', marginTop: '40px' }}
			>
				{children}
			</Box>
		</Box>
	);
}

Main.propTypes = {
	window: PropTypes.func,
	children: PropTypes.node,
};

export default Main;
