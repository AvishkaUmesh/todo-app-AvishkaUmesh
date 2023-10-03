import styled from '@emotion/styled';
import { Alert, IconButton } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '../assets/Close.svg';

const StyledAlert = styled(Alert)(({ theme }) => ({
	backgroundColor: 'white',
	color: 'black',
	borderRadius: '10px',
}));

const DismissibleAlert = () => {
	const [open, setOpen] = useState(true);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div
			style={{
				display: open ? 'block' : 'none',
				marginTop: '10px',
				paddingLeft: '20px',
				marginBottom: '20px',
			}}
		>
			<StyledAlert
				severity="info"
				icon={false}
				action={
					<IconButton aria-label="close" color="inherit" size="small" onClick={handleClose}>
						<img src={CloseIcon} alt="Close" />
					</IconButton>
				}
			>
				<div>Welcome back, John Doe</div>
				<div>
					The end of the year is coming. Are you planning your performance interviews? You can do this super
					efficiently with Acmy.
					<br />
					<a href="http://"> Look here for more information.</a>
				</div>
			</StyledAlert>
		</div>
	);
};

export default DismissibleAlert;
