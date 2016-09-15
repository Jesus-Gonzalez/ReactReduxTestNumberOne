import { combineReducers } from 'redux';

import booksReducer from './reducer_books';
import activeBookReducer from './reducer_active_book';

export default combineReducers({
	books: booksReducer,
	activeBook: activeBookReducer
});
