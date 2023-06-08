export function reducer(state, action) {
    switch (action.type) {
        // Handle different actions based on their types
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        case 'TOGGLE':
            return { ...state, isActive: !state.isActive };
        case 'SET_DATA':
            return { ...state, data: action.payload };
        default:
            return state;
    }
}
