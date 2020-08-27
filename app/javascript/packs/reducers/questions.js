export function asksHasErrored(state = false, action) {
    switch (action.type) {
        case 'ASKS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    };
};

export function asksIsLoading(state = false, action) {
    switch (action.type) {
        case 'ASKS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    };
};

export function asks(state = [], action) {
    switch (action.type) {
        case 'ASKS_FETCH_DATA_SUCCESS':
            return action.asks;
        default:
            return state;
    };
};