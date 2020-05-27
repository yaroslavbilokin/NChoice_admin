const initialState = {
    news: [],
    loading: true,
};

const newsState = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING_STATUS':
            return {
                ...state,
                loading: true,
            };

        case 'SET_NEWS':
            return {
                ...state,
                news: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};

export default newsState;