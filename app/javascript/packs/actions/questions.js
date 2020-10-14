export function asksHasErrored(bool) {
    return {
        type: 'ASKS_HAS_ERRORED',
        hasErrored: bool
    };
}
export function asksIsLoading(bool) {
    return {
        type: 'ASKS_IS_LOADING',
        isLoading: bool
    };
}
export function asksFetchDataSuccess(asks) {
    return {
        type: 'ASKS_FETCH_DATA_SUCCESS',
        asks
    };
}

export function asksFetchData(url) {
    return (dispatch) => {
        dispatch(asksIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(asksIsLoading(false));
                return response.json();
            })
            .then((asks) => dispatch(asksFetchDataSuccess(asks)))
            .catch(() => dispatch(asksHasErrored(true)));
    };
}