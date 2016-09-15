import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BookListItem from './book_list_item';

import selectBook from '../actions/actionCreators';

const BookList = ({books, actions}) => {
	const $books = books.map(book => (
		<BookListItem key={book.isbn} book={book} onBookListItemClick={actions.selectBook}  />
	));

	return (
		<ul className="col-xs-4 list-group">
			{$books}
		</ul>
	);
};

function mapStateToProps(state)
{
	return {
		books: state.books
	}
}

function mapDispatchToProps(dispatch)
{
	return {
		actions: bindActionCreators({ selectBook }, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
