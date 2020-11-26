export default function createStore(reducer, initialState) {
    
    let state = reducer(initialState, {type: '_INIT'})
    //console.log(state);

    const subscribers = []

    return {
        dispatch(action) {
            state = reducer(state, action)
            // for each of subscribers(functions) make a  call of such function(y abstract)
            subscribers.forEach(sub => sub());
        },
        subscribe(callback) {
            subscribers.push(callback);
        },
        getState() {
            return state;
        },
        getSubscribers() {
            return subscribers;
        }
    }
}


