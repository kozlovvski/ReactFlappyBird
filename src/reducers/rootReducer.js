const initialState = {
	game: {
		state: "title-screen"
	},
	bird: {
		height: 50,
		velocity: 0,
		gravity: 0.04,
		rotation: 0,
		hoverDegree: 0
	}
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_BIRD":
			return { ...state, bird: { ...state.bird, ...action.package } };
		case "CHANGE_GAME_STATE": {
			return { ...state, game: { ...state.game, state: action.gameState } };
		}
		default:
			return state;
	}
};

export default rootReducer;
