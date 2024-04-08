"use client"; // This is a client component 👈🏽
import { useState } from "react";

const Todo = () => {
  // to do list
  const [todo, setTodo] = useState<string[]>([]);
  //   value of input
  const [input, setInput] = useState<string>("");

  const handleInput = (e: any) => {
    setInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (input === "") return;
    setTodo([...todo, input]);
    setInput("");
  };

  const handleDeleteTodo = (index: number) => {
    const newTodo = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
  };

  return (
    <div className="w-full h-full bg-red-500 flex justify-center items-center">
      <div className="w-[700px] flex-col bg-white rounded-lg m-8 gap-8">
        <div className="w-full flex justify-center">
          <input
            className={`border p-4 m-4 w-96 rounded-md outline-none`}
            type="text"
            placeholder="enter your plan"
            value={input}
            onChange={handleInput}
          />
          <button
            onClick={handleAddTodo}
            className="border w-20 rounded-md m-4 bg-green-200 hover:bg-green-400"
          >
            add
          </button>
        </div>
        <ul className="w-full flex flex-col gap-2 justify-center items-center list-disc list-insite my-4 ">
          {todo.map((item, index) => (
            <li
              key={index}
              className="bg-white mb-2 border-2 w-[500px] p-2 rounded-md flex justify-between"
            >
              <p className="text-lg font-medium">{item}</p>
              <button
                onClick={() => handleDeleteTodo(index)}
                className="border w-20 h-10 rounded-md bg-red-200 hover:bg-red-400"
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
