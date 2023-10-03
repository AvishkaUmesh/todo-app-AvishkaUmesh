const initialState = {
	todos: [],
	taskCountsByPriority: {},
	loading: true,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'GET_TODOS':
			return { ...state, loading: true };
		case 'SET_TODOS':
			return { ...state, todos: action.payload, loading: false };
		case 'SET_TASK_COUNTS':
			return { ...state, taskCountsByPriority: action.payload };
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};

export { initialState, reducer };
