import React from 'react';

const BookListItem = ({ book, onBookListItemClick }) => {

	let $newTag = '';
	if (book.new) {
		$newTag = <span className="tag tag-primary pull-right">NEW</span>
	}

	return (
		<li className="list-group-item" onClick={() =>  onBookListItemClick(book)}>
			<strong>{book.title}</strong>
			{$newTag}
		</li>
	)
};

export default BookListItem;
