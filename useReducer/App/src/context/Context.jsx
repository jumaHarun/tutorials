import { createContext, useReducer } from 'react';
import { reducer } from '../reducer/useReducer';

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
    const initialState = {
        count: 0,
        isActive: false,
        data: null,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' });
    };

    return (
        <AppContext.Provider
            value={{ state, handleDecrement, handleIncrement }}
        >
            {children}
        </AppContext.Provider>
    );
};
