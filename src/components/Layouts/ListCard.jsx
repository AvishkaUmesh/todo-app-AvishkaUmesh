import { List, ListItem, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const ListCard = ({ title, children }) => {
	return (
		<List
			style={{
				border: '1px solid #ccc',
				borderRadius: '10px',
				backgroundColor: 'white',
			}}
		>
			<ListItem>
				<Typography variant="h6">{title}</Typography>
			</ListItem>
			{children}
		</List>
	);
};

ListCard.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
};

export default ListCard;
