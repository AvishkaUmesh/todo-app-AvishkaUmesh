import { Typography } from '@mui/material';

const AlertText = () => {
	return (
		<div style={{ padding: '20px' }}>
			<Typography
				style={{
					fontSize: '24px',
					fontWeight: 600,
				}}
			>
				Welcome back, John Doe
			</Typography>
			<Typography
				style={{
					fontSize: '14px',
					color: '#757575',
					marginTop: '10px',
				}}
			>
				The end of the year is coming. Are you planning your performance interviews? You can do this super
				efficiently with Acmy.
			</Typography>
			<a
				href="http://"
				style={{
					color: '#BC006D',
					marginTop: '10px',
					display: 'block',
				}}
			>
				Look here for more information.
			</a>
		</div>
	);
};
export default AlertText;
