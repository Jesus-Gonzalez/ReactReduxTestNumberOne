import React from 'react';

import { connect } from 'react-redux';

const BookDetail = ({book}) => {
	if (!book)
	{
		return (
			<h1>Select a book</h1>
		);
	}

	return (
		<article>
			<h1>{book.title}</h1>
			<p>{book.description}</p>
			<div>
				<span><strong>ISBN:</strong> {book.isbn}</span>
			</div>
		</article>
	);
};

function mapStateToProps(state)
{
	return {
		book: state.activeBook
	}
}

export default connect(mapStateToProps)(BookDetail);
