class Store {
    constructor(reducer, initialState) {
        this.state = reducer(initialState, {type: 'INIT'})
    }
    dispatch(action) {
        this.state = reducer(state, action)
        this.subscribers.forEach(func => func());
    }
    subscribe(callback) {
        subscribers.push(callback);
        console.log(subscribers);
    }
    getState() {
        return state;
    }
    getSubscribers() {
        return subscribers;
    }
}

export default Store
