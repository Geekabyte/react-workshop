const movies = (state = [], action) => {
	switch (action.type) {
		case "STORE_NOW_SHOWING_MOVIES":
			return {
				...state,
				nowShowing: action.payload,
			}
		case "STORE_TOP_RATED_MOVIES":
			return {
				...state,
				topRated: action.payload,
			}
		default:
			return state
	}
}

export default movies
