import React from 'react';
import { render } from 'react-dom';

import BookList from './book_list';
import BookDetail from './book_detail';

const App = () => (
	<div className="container">
		<BookList />
		<BookDetail />
	</div>
);

export default App;
