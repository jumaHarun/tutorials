import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        // setCount(count + 1);
        // setCount(count + 1);
    };

    return (
        <>
            <p>Count is {count}</p>
            <button onClick={handleAdd}>Increment</button>
        </>
    );
};
export default Counter;
