const initialState = {
	todos: [],
	taskCountsByPriority: {},
	loading: true,
	error: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'GET_TODOS':
			return { ...state, loading: true, error: null };
		case 'SET_TODOS':
			return { ...state, todos: action.payload, loading: false };
		case 'SET_TASK_COUNTS':
			return { ...state, taskCountsByPriority: action.payload };
		case 'SET_TODOS_ERROR':
			return { ...state, loading: false, error: 'Todo fetching Failed. Try again later.' };
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};

export { initialState, reducer };
