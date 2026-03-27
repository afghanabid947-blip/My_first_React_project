import React from "react";
function Cards(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <img
        src="https://images.unsplash.com/photo-1773301885514-a1ef2fd93f43?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <p>{props.text}</p>
      <button className="btn">view Profile</button>
    </div>
  );
}

export default Cards;
