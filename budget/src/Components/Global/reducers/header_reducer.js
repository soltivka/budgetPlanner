const SET_CURRENT_URL_LOCATION = 'SET_CURRENT_URL_LOCATION';
let initialState = {
    windowHeight: window.innerHeight,
    currentLocation: "/",
}

const header_reducer = function (state, action) {
    if (state) {
        switch (action.type) {
            case SET_CURRENT_URL_LOCATION:
                state.currentLocation = action.location;
        }

        return state

    } else
        return initialState

}

export default header_reducer;