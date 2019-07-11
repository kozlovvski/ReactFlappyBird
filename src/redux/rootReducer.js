const initialState = {
	game: {
		state: ""
	},
	bird: {
		height: 50,
		velocity: 0,
		gravity: 0.05,
		rotation: 0,
		hoverDegree: 0
	},
	pipes: {
		list: [],
		interval: {to: 100, at: 100},
		clearance: 20,
		heightRange: {min: 50, max: 80}
	}
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_BIRD":
			return { ...state, bird: { ...state.bird, ...action.package } };
		case "CHANGE_GAME_STATE": {
			return { ...state, game: { ...state.game, state: action.gameState } };
		}
		case "ADD_PIPE": {
			return { ...state, pipes: { ...state.pipes, list: [...state.pipes.list, action.package] }};
		}
		case "REMOVE_PIPE": {
			return { ...state, pipes: { ...state.pipes, list: action.newPipeList }};
		}
		case "UPDATE_PIPE_INTERVAL": {
			return { ...state, pipes: { ...state.pipes, interval: {...state.pipes.interval, at: action.at} }};
		}
		default:
			return state;
	}
};

export default rootReducer;
