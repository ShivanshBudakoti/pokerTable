import React from "react";
import User from "./Users";
function App() {
  const array=[
    {
      name:"Bob",
      price:5000
    },
    {
      name:"Bob",
      price:5000
    },
    {
      name:"Bob",
      price:5000
    },
    {
      name:"Bob",
      price:5000
    },
    {
      name:"Bob",
      price:5000
    },
    {
      name:"Bob",
      price:5000
    },
    {
      name:"Bob",
      price:5000
    },
    {
      name:"Bob",
      price:5000
    },
    {
      name:"Bob",
      price:5000
    }
  ]
  return (
    <div className="App">
     <div className="outterCircle">
        <div className="innerCircle">
            {
              array.map((items,index)=>
                <User name={items.name} index={index} price={items.price}/>
              )
            }
        </div>
        </div>
    </div>
  );
}

export default App;
