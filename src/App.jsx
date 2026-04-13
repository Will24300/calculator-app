import { useReducer, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <section className="bg-gray-100 h-screen flex justify-center items-center">
      <form className="bg-black px-3 py-8 rounded-2xl ">
        <div>
          <input
            type="text"
            value={value}
            className="text-white text-right  text-3xl font-semibold outline-none"
          />
        </div>
        <div className="flex justify-between items-center gap-2 mt-7">
          <input
            onClick={() => setValue(value.slice(0, -1))}
            type="button"
            value={"DE"}
            className="bg-gray-500 font-semibold text-3xl text-white w-full text-center cursor-pointer h-15 rounded-full"
          />
          <input
            onClick={() => setValue("")}
            type="button"
            value={"AC"}
            className="bg-gray-500 font-semibold text-3xl text-white  text-center cursor-pointer w-full h-15 rounded-full"
          />
          <input
            onClick={(e) => setValue(value + e.target.value)}
            type="button"
            value={"%"}
            className="bg-gray-500 font-semibold text-3xl text-white  text-center cursor-pointer w-full h-15 rounded-full"
          />
          <input
            onClick={(e) => setValue(value + e.target.value)}
            type="button"
            value={"/"}
            className="bg-orange-500 font-semibold text-3xl text-white  text-center cursor-pointer w-full h-15 rounded-full"
          />
        </div>
        <div className="flex justify-between items-center gap-2 mt-2">
          <input
            onClick={(e) => setValue(value + e.target.value)}
            type="button"
            value={"7"}
            className="bg-gray-800 font-semibold text-3xl text-white w-full text-center cursor-pointer h-15 rounded-full"
          />
          <input
            onClick={(e) => setValue(value + e.target.value)}
            type="button"
            value={"8"}
            className="bg-gray-800 font-semibold text-3xl text-white  text-center cursor-pointer w-full h-15 rounded-full"
          />
          <input
            type="button"
            onClick={(e) => setValue(value + e.target.value)}
            value={"9"}
            className="bg-gray-800 font-semibold text-3xl text-white  text-center cursor-pointer w-full h-15 rounded-full"
          />
          <input
            onClick={(e) => setValue(value + e.target.value)}
            type="button"
            value={"x"}
            className="bg-orange-500 font-semibold text-3xl text-white  text-center cursor-pointer w-full h-15 rounded-full"
          />
        </div>
        <div className="flex justify-between items-center gap-2 mt-2">
          <input
            onClick={(e) => setValue(value + e.target.value)}
            type="button"
            value={"4"}
            className="bg-gray-800 font-semibold text-3xl text-white w-full text-center cursor-pointer h-15 rounded-full"
          />
          <input
            onClick={(e) => setValue(value + e.target.value)}
            type="button"
            value={"5"}
            className="bg-gray-800 font-semibold text-3xl text-white  text-center cursor-pointer w-full h-15 rounded-full"
          />
          <input
            onClick={(e) => setValue(value + e.target.value)}
            type="button"
            value={"6"}
            className="bg-gray-800 font-semibold text-3xl text-white  text-center cursor-pointer w-full h-15 rounded-full"
          />
          <input
            onClick={(e) => setValue(value + e.target.value)}
            type="button"
            value={"-"}
            className="bg-orange-500 font-semibold text-3xl text-white  text-center cursor-pointer w-full h-15 rounded-full"
          />
        </div>
        <div className="flex justify-between items-center gap-2 mt-2">
          <input
            onClick={(e) => setValue(value + e.target.value)}
            type="button"
            value={"1"}
            className="bg-gray-800 font-semibold text-3xl text-white w-full text-center cursor-pointer h-15 rounded-full"
          />
          <input
            onClick={(e) => setValue(value + e.target.value)}
            type="button"
            value={"2"}
            className="bg-gray-800 font-semibold text-3xl text-white  text-center cursor-pointer w-full h-15 rounded-full"
          />
          <input
            onClick={(e) => setValue(value + e.target.value)}
            type="button"
            value={"3"}
            className="bg-gray-800 font-semibold text-3xl text-white  text-center cursor-pointer w-full h-15 rounded-full"
          />
          <input
            onClick={(e) => setValue(value + e.target.value)}
            type="button"
            value={"+"}
            className="bg-orange-500 font-semibold text-3xl text-white  text-center cursor-pointer w-full h-15 rounded-full"
          />
        </div>
        <div className="flex justify-between items-center gap-2 mt-2">
          <input
            onClick={(e) => setValue(value + e.target.value)}
            type="button"
            value={"00"}
            className="bg-gray-800 font-semibold text-3xl text-white w-full text-center cursor-pointer h-15 rounded-full"
          />
          <input
            onClick={(e) => setValue(value + e.target.value)}
            type="button"
            value={"0"}
            className="bg-gray-800 font-semibold text-3xl text-white  text-center cursor-pointer w-full h-15 rounded-full"
          />
          <input
            onClick={(e) => setValue(value + e.target.value)}
            type="button"
            value={"."}
            className="bg-gray-800 font-semibold text-3xl text-white  text-center cursor-pointer w-full h-15 rounded-full"
          />
          <input
            onClick={(e) => setValue(eval(value))}
            type="button"
            value={"="}
            className="bg-orange-500 font-semibold text-3xl text-white  text-center cursor-pointer w-full h-15 rounded-full"
          />
        </div>
      </form>
    </section>
  );
}

export default App;
