import { Divider, Grid, List, ListItem, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { TodoContext } from '../../context/TodoContext';
import LoadingSpinner from '../Layouts/LoadingSpinner';
import TodoItem from './TodoItem';

const ITEMS_PER_PAGE = 8;

const TodoList = () => {
	const { todos, loading } = useContext(TodoContext);
	const [currentPage, setCurrentPage] = useState(0);

	const handlePageChange = (selectedPage) => {
		setCurrentPage(selectedPage.selected);
	};

	const offset = currentPage * ITEMS_PER_PAGE;
	const paginatedTodos = todos.slice(offset, offset + ITEMS_PER_PAGE);

	if (loading) {
		return <LoadingSpinner />;
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

			{paginatedTodos.length > 0 ? (
				paginatedTodos.map((task) => (
					<React.Fragment key={task.id}>
						<Divider />
						<TodoItem task={task} />
					</React.Fragment>
				))
			) : (
				<ListItem>
					<Typography variant="body1">No tasks to display.</Typography>
				</ListItem>
			)}

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
		</List>
	);
};

export default TodoList;
