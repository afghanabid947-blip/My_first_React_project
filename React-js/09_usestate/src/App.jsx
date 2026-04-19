import React, { useState } from "react";

function App() {
  let [num, setfirst] = useState(10);

  return (
    <div>
      <h1>{num}</h1>

      <button
        onClick={function () {
          setfirst(num + 1);
        }}
      >
        increase
      </button>

      <button
        onClick={function () {
          setfirst(num - 1);
        }}
      >
        decrease
      </button>

      <button
        onClick={function () {
          setfirst(num + 5);
        }}
      >
        increase by 5
      </button>
    </div>
  );
}

export default App;
