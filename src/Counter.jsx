// import { useEffect } from "react";

// function Counter () {
// const [counter, setCounter] = useState(0);

// return (

// <div>
// <h1>Counter {counter}</h1>
// <button onClick={() => setCounter(counter+1); console.log (counter) }/>
// </button>
// </div>
// )


// }

// export default Counter;



import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
