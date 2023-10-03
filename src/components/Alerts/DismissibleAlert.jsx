import styled from '@emotion/styled';
import { Alert, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '../../assets/Close.svg';
import Vector from '../../assets/Vector.svg';

/* eslint-disable */
const StyledAlert = styled(Alert)(({ theme }) => ({
	backgroundColor: 'white',
	color: 'black',
	borderRadius: '10px',
	width: '100%',
}));

const AlertContainer = styled.div(({ theme }) => ({
	display: open ? 'flex' : 'none',
	marginTop: '10px',
	marginBottom: '20px',
	marginLeft: '20px',
}));
const InnerContainer = styled.div(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '20px',
	padding: '20px',
}));

/* eslint-enable */

const DismissibleAlert = () => {
	const [open, setOpen] = useState(true); // eslint-disable-line

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<AlertContainer>
			<StyledAlert
				severity="info"
				icon={false}
				action={
					<IconButton aria-label="close" color="inherit" size="small" onClick={handleClose}>
						<img src={CloseIcon} alt="Close" />
					</IconButton>
				}
			>
				<InnerContainer>
					<div style={{ flex: 1 }}>
						<Typography style={{ fontSize: '24px', fontWeight: 600 }}>Welcome back, John Doe</Typography>
						<Typography style={{ fontSize: '14px', color: '#757575', marginTop: '10px' }}>
							The end of the year is coming. Are you planning your performance interviews? You can do this
							super efficiently with Acmy.
						</Typography>
						<a href="http://" style={{ color: '#BC006D', marginTop: '10px', display: 'block' }}>
							Look here for more information.
						</a>
					</div>
					<img src={Vector} alt="Your SVG Icon" style={{ width: '167px', height: '120px' }} />
				</InnerContainer>
			</StyledAlert>
		</AlertContainer>
	);
};

export default DismissibleAlert;
