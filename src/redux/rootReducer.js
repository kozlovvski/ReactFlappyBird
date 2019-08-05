const initialState = {
	game: {
		state: ""
	},
	bird: {
		height: 42,
		velocity: 0,
		gravity: 0.06,
		rotation: 0,
		hoverDegree: 0
	},
	pipes: {
		list: [],
		interval: {to: 80, at: 80},
		clearance: 20,
		heightRange: {min: 55, max: 85}
	},
	score: {
		current: 0,
		highest: 0,
		isRecord: false
	},
	debug: false
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
		case "UPDATE_SCORE": {
			// check if player made a new record
			const isRecord = action.package.current > state.score.highest;

			const highest = Math.max(action.package.current, state.score.highest);
			return { ...state, score: { ...state.score, ...action.package, highest, isRecord}};
		}
		case "RESET_GAME": {
			return { ...state, ...initialState, score: { current: 0, highest: state.score.highest}};
		}
		default:
			return state;
	}
};

export default rootReducer;
