import { Divider, Grid, List, ListItem, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { TodoContext } from '../../context/TodoContext';
import FailToFetch from '../Errors/FailToFetch';
import LoadingSpinner from '../Layouts/LoadingSpinner';
import TodoItem from './TodoItem';

const ITEMS_PER_PAGE = 8;

const TodoList = () => {
	const { todos, loading, error } = useContext(TodoContext);
	const [currentPage, setCurrentPage] = useState(0);

	const handlePageChange = (selectedPage) => {
		setCurrentPage(selectedPage.selected);
	};

	const offset = currentPage * ITEMS_PER_PAGE;
	const paginatedTodos = todos.slice(offset, offset + ITEMS_PER_PAGE);

	if (loading) {
		return <LoadingSpinner />;
	}

	let content;
	if (!loading && error) {
		content = <FailToFetch error={error} />;
	}

	if (!loading && !error && paginatedTodos.length > 0) {
		content = (
			<>
				{paginatedTodos.map((task) => (
					<React.Fragment key={task.id}>
						<Divider />
						<TodoItem task={task} />
					</React.Fragment>
				))}
				<Divider />
				<Grid container justifyContent="center">
					<ReactPaginate
						previousLabel={'<'}
						nextLabel={'>'}
						breakLabel={'...'}
						pageCount={Math.ceil(todos.length / ITEMS_PER_PAGE)}
						marginPagesDisplayed={2}
						pageRangeDisplayed={5}
						onPageChange={handlePageChange}
						containerClassName={'pagination'}
						subContainerClassName={'pages pagination'}
						activeClassName={'active'}
					/>
				</Grid>
			</>
		);
	}

	if (!loading && !error && todos.length === 0) {
		content = (
			<ListItem>
				<Typography variant="body1">No tasks to display.</Typography>
			</ListItem>
		);
	}
	return (
		<List
			style={{
				border: '1px solid #ccc',
				borderRadius: '10px',
				backgroundColor: 'white',
				marginLeft: '20px',
			}}
		>
			<ListItem>
				<Typography variant="h6">Tasks</Typography>
			</ListItem>

			{content}
		</List>
	);
};

export default TodoList;
