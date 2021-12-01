import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [counter, setCounter] = useState(1);
  const [nombre, setNombre] = useState("");
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };
  const callData = () => {
    fetch("https://swapi.dev/api/people/" + counter)
      .then((data) => data.json())
      .then((res) => setNombre(() => res.name));
  };
  useEffect(() => {
    callData();
  }, [counter]);
  return (
    <div className="App">
      <p>
        {counter} {nombre}
      </p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;
