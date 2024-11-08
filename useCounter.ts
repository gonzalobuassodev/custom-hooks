import { useState } from "react";

export const useCounter = (initialValue: number = 1) => {

    const [counter, setCounter] = useState(initialValue);


    const increment = (value: number = 1) => {
        setCounter(counter + value);
    };

    const decrement = (value: number = 1) => {
        setCounter(counter - value);
    };

    const reset = () => {
        setCounter(0);
    };

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
