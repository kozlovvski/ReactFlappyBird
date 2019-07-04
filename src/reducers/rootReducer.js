const initialState = {
	game: {
		isPaused: false
	},
	bird: {
		height: 50,
		velocity: 0,
		gravity: 0,
		rotation: 0
	}
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_BIRD":
			return { ...state, bird: action.package };
		case "PAUSE_GAME": {
			return { ...state, game: { ...state.game, isPaused: true } };
		}
		case "RESUME_GAME": {
			return { ...state, game: { ...state.game, isPaused: false } };
		}
		default:
			return state;
	}
};

export default rootReducer;
