import React from "react";
import Cards from "./components/cards";
function App() {
  return (
    <div className="parent">
      <Cards name="Abid" text="my name is abid and im a not a terarist" />
      <Cards name="Asif" text="my name is asif and im a not a terarist" />
    </div>
  );
}

export default App;
