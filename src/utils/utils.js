export const calculateTaskCountsByPriority = (todos) => {
	const counts = {};
	todos.forEach((todo) => {
		const priority = todo.priority;
		counts[priority] = counts[priority] ? counts[priority] + 1 : 1;
	});
	return counts;
};
