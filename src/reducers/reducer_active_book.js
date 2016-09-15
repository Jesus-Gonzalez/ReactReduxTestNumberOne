export default function(state = null, action) {
	switch (action.type)
	{
		case 'SELECTED_BOOK':
			console.log("Book Selected @ reducer_active_book");
			return action.payload;

		default:
			return state;
	}
}
