import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { calculateTaskCountsByPriority } from '../utils/utils';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);
	const [taskCountsByPriority, setTaskCountsByPriority] = useState({});

	useEffect(() => {
		const fetchTodos = async () => {
			try {
				const response = await axios.get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do');
				setTodos(response.data);
				setTaskCountsByPriority(calculateTaskCountsByPriority(response.data)); // Update task counts by priority
			} catch (error) {
				console.error('Error fetching todos:', error);
			}
		};

		fetchTodos();
	}, []);

	return <TodoContext.Provider value={{ todos, taskCountsByPriority }}>{children}</TodoContext.Provider>;
};

export { TodoContext, TodoProvider };
