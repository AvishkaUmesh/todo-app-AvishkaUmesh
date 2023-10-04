import { useState } from 'react';
import CloseIcon from '../../assets/Close.svg';
import Vector from '../../assets/Vector.svg';
import AlertText from './AlertText';

const CloseBtnStyles = {
	position: 'relative',
	top: '-45px',
	right: '-10px',

	width: '24px',
	height: '24px',
	marginRight: '20px',
	cursor: 'pointer',
};

const DismissibleAlert = () => {
	const [isVisible, setIsVisible] = useState(true);

	const handleClose = () => {
		setIsVisible(false);
	};

	return (
		<div
			style={{
				display: isVisible ? 'flex' : 'none',
				justifyContent: 'space-between',
				alignItems: 'center',
				backgroundColor: 'white',
				color: 'black',
				borderRadius: '10px',
				marginTop: '30px',
				marginBottom: '20px',
			}}
		>
			<div style={{ flex: 1 }}>
				<AlertText />
			</div>
			<img src={Vector} alt="Your SVG Icon" style={{ width: '167px', height: '120px' }} />
			<img src={CloseIcon} alt="close " onClick={handleClose} style={CloseBtnStyles} />
		</div>
	);
};

export default DismissibleAlert;
