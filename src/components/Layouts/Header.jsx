import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

import ChevronDownIcon from '../../assets/Chevron-down.svg';
import NotificationIcon from '../../assets/Notifications.svg';
import ProfileIcon from '../../assets/Profile.svg';

const Header = () => {
	return (
		<AppBar
			position="sticky"
			style={{
				marginLeft: '254px',
				width: 'calc(100% - 254px)',
				background: 'white',
				color: 'black',
				paddingTop: '8px',
			}}
		>
			<Toolbar style={{ justifyContent: 'space-between' }}>
				<Typography variant="h6" style={{ fontWeight: 'bold' }}>
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
						<img src={ChevronDownIcon} alt="ChevronDown Icon" style={{ height: '24px', width: '24px' }} />
					</IconButton>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
