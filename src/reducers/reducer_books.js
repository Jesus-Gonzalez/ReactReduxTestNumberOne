export default function(state = null, action) {
	const books = [
		{
			isbn: 1,
			title: 'Learning React/Redux',
			description: `This book guides through the experience about learning React/Redux`,
			new: true
		},
		{
			isbn: 2,
			title: 'Advanced React/Redux',
			description: `Learn about advanced React and Redux topics`
		},
		{
			isbn: 3,
			title: 'React/Redux Mastery',
			description: `Master React and Redux libraries`
		}
	];

	switch (action.type)
	{
		case 'SELECTED_BOOK':
			console.log("Book Selected @ reducer_books");
			return books;

		default:
			return books;
	}
}
