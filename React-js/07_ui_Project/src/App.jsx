import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import { Tags } from "lucide-react";

function App() {
  let users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Satisfied",
      color: "red",
    },
    {
      img: "https://i.pinimg.com/736x/f1/fb/7c/f1fb7c876559930309500ed8250c8411.jpg",
      intro: "",
      tag: "Unsatified",
      color: "blue",
    },
    {
      img: "https://i.pinimg.com/736x/97/4d/f4/974df420b499d35b758b5d663db5778c.jpg",
      intro: "",
      tag: "Abid",
      color: "yellow",
    },
    {
      img: "https://i.pinimg.com/736x/47/90/d0/4790d0c9a629de828e9498df41d93f0f.jpg",
      intro: "",
      tag: "haroon",
      color: "green",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
}

export default App;
