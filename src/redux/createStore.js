export default function createStore(reducer, initialState) {
    
    let state = initialState;
    const subscribers = []

    return {
        dispatch : action => { 
            state = reducer(state, action)
            subscribers.forEach(sub => sub())
        },
        subscribe: callback => { subscribers.push(callback) },
        getState: () => { return state },
        getSubscribers: () => { return subscribers }
    }
}


