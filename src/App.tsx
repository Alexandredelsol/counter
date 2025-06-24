import './App.css'
import Counter from './componants/Counter.tsx'
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <>
            <div>
                {count > 0 ? <Counter value={count} color={'blue'}></Counter> : <Counter value={count} color={'red'}></Counter>}
            </div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
            {
                count > 10 ? <h1>Bonjour</h1> : <h1>Au revoir</h1>
            }
        </>
    )
}

export default App


