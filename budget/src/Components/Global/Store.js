
const Store = {
    _state: {
        windowHeight:0,
    },

    _callSubscriber(){
    },

    subscribe(observer){
        this._state.windowHeight = window.innerHeight;
        this._callSubscriber=observer;
        this._callSubscriber(this._state)
    }
}
export default Store