import { useState } from "react";
import "./App.css";
import Products from "./Components/Product/Products";
import Counter from "./Counter";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Products></Products>
      <Counter counter={counter} setCounter={setCounter} productPrice={counter}>
        {counter}
      </Counter>
    </div>
  );
};

export default App;
