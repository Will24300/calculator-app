import { useReducer, useState } from "react";
import "./App.css";

function App() {
  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "number":
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    firstValue: 0,
    secondValue: 0,
    result: 0,
    sign: null,
  });
  return (
    <section className="h-screen flex flex-col justify-center items-center font-bold">
      <div className="bg-gray-400 w-[30%] ">
        <div className="p-3 text-2xl text-white text-right">
          <span>{state.result}</span>
        </div>
        <div className="bg-gray-300 grid grid-cols-1">
          <div className="flex justify-between items-center text-center ">
            <p className="w-full cursor-pointer bg-white border border-gray-300 py-3">
              AC
            </p>
            <p className="w-full cursor-pointer bg-white py-3 border border-gray-300">
              +/-
            </p>
            <p className="w-full cursor-pointer bg-white py-3 border border-gray-300">
              %
            </p>
            <p className="w-full cursor-pointer bg-orange-400 border border-gray-300 py-3 text-white">
              ÷
            </p>
          </div>
          <div className="flex justify-between items-center text-center">
            <p
              className="w-full cursor-pointer bg-white py-3 border border-gray-300"
              onClick={() => dispatch({ type: "number", payload: 7 })}
            >
              7
            </p>
            <p className="w-full cursor-pointer bg-white py-3 border border-gray-300">
              8
            </p>
            <p className="w-full cursor-pointer bg-white py-3 border border-gray-300">
              9
            </p>
            <p className="w-full cursor-pointer bg-orange-400 border border-gray-300 py-3 text-white">
              x
            </p>
          </div>
          <div className="flex justify-between items-center text-center">
            <p className="w-full cursor-pointer bg-white py-3 border border-gray-300">
              4
            </p>
            <p className="w-full cursor-pointer bg-white py-3 border border-gray-300">
              5
            </p>
            <p className="w-full cursor-pointer bg-white py-3 border border-gray-300">
              6
            </p>
            <p className="w-full cursor-pointer bg-orange-400 border border-gray-300 py-3 text-white">
              -
            </p>
          </div>
          <div className="flex justify-between items-center text-center">
            <p className="w-full cursor-pointer bg-white py-3 border border-gray-300">
              1
            </p>
            <p className="w-full cursor-pointer bg-white py-3 border border-gray-300">
              2
            </p>
            <p className="w-full cursor-pointer bg-white py-3 border border-gray-300">
              3
            </p>
            <p className="w-full cursor-pointer bg-orange-400 border border-gray-300 py-3 text-white">
              +
            </p>
          </div>
          <div className="grid grid-cols-4 items-center text-center">
            <p className="w-full cursor-pointer bg-white py-3 border border-gray-300 col-span-2">
              0
            </p>
            <p className="w-full cursor-pointer bg-white py-3 border border-gray-300">
              .
            </p>
            <p className="w-full cursor-pointer bg-orange-400 border border-gray-300 py-3 text-white">
              +
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
