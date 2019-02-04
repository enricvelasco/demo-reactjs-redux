const reducers = ( state = { searchResults: [] , friendsList: [], info: null}, action ) => {
    switch (action.type) {
        case 'API_CALL':
            return {
                ...state,
                searchResults: action.payload.results
            };

        case 'SHOW_INFO':
            return {
                ...state,
                info: action.payload
            };

        default:
            return state;
    }
};

export default reducers;
