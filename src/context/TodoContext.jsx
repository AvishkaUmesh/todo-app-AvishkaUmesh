import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useReducer } from 'react';
import { calculateTaskCountsByPriority } from '../utils/utils';
import { initialState, reducer } from './todoReducer';

const TodoContext = React.createContext();

const TodoProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const fetchTodos = async () => {
			try {
				dispatch({ type: 'GET_TODOS' });

				const response = await axios.get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do');
				const todos = response.data;

				dispatch({ type: 'SET_TODOS', payload: todos });
				dispatch({ type: 'SET_TASK_COUNTS', payload: calculateTaskCountsByPriority(todos) });
			} catch (error) {
				console.error('Error fetching todos:', error);
				dispatch({ type: 'SET_TODOS_ERROR' });
			}
		};

		fetchTodos();
	}, []);

	return <TodoContext.Provider value={state}>{children}</TodoContext.Provider>;
};

TodoProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export { TodoContext, TodoProvider };
