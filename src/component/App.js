import React, { useState } from "react";

import "../index.css";

// const items = ["Item1", "Item2", "Item3", "Item4"];

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([]);
  const handlers = () => {
    setList([...list, newItem]);
    console.log(list);
  };

  const ToDo = list.map((item, index) => {
    return (
      <div
        onClick={(e) => e.target.classList.toggle("line-through")}
        className="text-gray-700 font-semibold font-sans p-4 mb-3 cursor-pointer  shadow rounded-lg"
        key={index}
      >
        {item}
      </div>
    );
  });

  return (
    <div>
      <h1
        className="bg-teal-400 text-3xl flex justify-center font-mono font-bold
    "
      >
        ToDo List
      </h1>
      <div className="flex justify-center">
        <input
          className="shadow-lg outline-none p-2 border border-slate-300 my-5 rounded-lg"
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          onClick={() => setList([...list, newItem])}
          className="border p-2 bg-sky-400 text-white m-5 rounded-md active:scale-110"
        >
          Add
        </button>
      </div>
      <div className="flex justify-center">
        <ul>{ToDo}</ul>
      </div>
    </div>
  );
};

export default App;
