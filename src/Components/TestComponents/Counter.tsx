import {useState} from "react";

//function Counter(){
const Counter = () => {
    // Declare a new state variable, which we'll call "count"
    const[count,setCount] = useState(0);

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>
                Click Me
            </button>
        </div>
    )

}

export default Counter;