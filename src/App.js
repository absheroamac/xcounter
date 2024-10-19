import { useState } from "react";
import { Component } from "react";

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      count:0
    }

  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  decrement = ()=>{
    this.setState(prev=>({
      count:prev.count-1
    }))
  }


 render(){



  return (
    <div className="App">
      <h1>Counter App</h1>
      <div>Count: {this.state.count}</div>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
    </div>
  );
}
}

export default App;
