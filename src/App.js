import { useState } from "react";

function App() {

  const [count,setCount] = useState(0);



  return (
    <div className="App">
      <h1>Counter App</h1>
      <div>Count: {count}</div>
      <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
      <button onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
    </div>
  );
}

export default App;
