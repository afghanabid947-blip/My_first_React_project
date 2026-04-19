import React, { useActionState } from "react";
import { useState } from "react";
function App() {
  const [title, setTitle] = useState("");
  const [Details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  function deletehandler(index) {
    const copytask = [...task];
    copytask.splice(index, 1);
    setTask(copytask);
  }

  function submithandler(e) {
    e.preventDefault();
    const copytask = [...task];
    copytask.push({ title, Details });
    console.log(copytask);
    setTask(copytask);
    setTitle("");
    setDetails("");
  }
  return (
    <div className="h-screen lg:flex bg-black text-white">
      <div className=" w-1/2 p-10 ">
        <form onSubmit={(e) => submithandler(e)}>
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl text-cyan-50">Your Note</h1>
            <input
              type="text"
              name=""
              id=""
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Notes Heading"
              className="px-5 w-full shrink-0 border-white text-white font-medium py-2 border-2 outline-none rounded "
            />
            <textarea
              value={Details}
              onChange={(e) => setDetails(e.target.value)}
              type="text"
              className="px-5 w-full font-medium  text-white border-white h-32 py-2 flex items-start flex-row border-2 outline-none  rounded "
              placeholder="Write Details here "
            />
            <button className="text-2xl py-3 px-20 text-black bg-white active:scale-95 rounded ">
              Add note
            </button>
          </div>
        </form>
      </div>
      <div className="lg:w-1/2 lg:border-l-2   p-10">
        <h1 className="text-4xl font-bold text-white">Recent Notes</h1>
        <div className=" flex flex-wrap h-auto gap-5 overflow-auto">
          {task.map((note, index) => (
            <div
              key={index}
              className="bg-white m-2 w-40 text-black p-4 rounded shadow break-words"
            >
              <h2 className="text-xl font-bold">{note.title}</h2>
              <p className="text-gray-700 break-words whitespace-pre-wrap">
                {note.Details}
              </p>
              <button
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => deletehandler(index)}
              >
                c Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
