import React from "react";
import ReactDOM from "react-dom";
function App(props){
  return (
    <div>
        <h1>Hello World</h1>
        <p>{props.details.name}</p>
        <p>{props.details.age}</p>
      </div>
  )
}
export default App;