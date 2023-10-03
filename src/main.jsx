import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { TodoProvider } from './context/TodoContext';
import './index.css';
import theme from './theme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<TodoProvider>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</TodoProvider>
	</React.StrictMode>
);
