import { useContext } from 'react';
import { AppContext } from './context/Context';
import './App.css';

function App() {
    const { state, handleDecrement, handleIncrement } = useContext(AppContext);

    return (
        <>
            <p>{state.count}</p>
            <button onClick={handleIncrement}>Increment</button>

            <button onClick={handleDecrement}>Decrement</button>
        </>
    );
}

export default App;
