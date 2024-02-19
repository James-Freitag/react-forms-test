import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleAddTen = () => {
    setCount(count + 10);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleMinusTen = () => {
    setCount(count - 10);
  };

  const handleReset = () => {
    setCount(0);
  };

  const countColor =
    count > 0 ? "text-green-700" : count < 0 ? "text-red-700" : "black";

  return (
    <div className="max-w-[400px] mx-auto mt-16 p-8 bg-slate-200">
      <h1 className="text-center pb-8 text-3xl">Counter</h1>
      <button
        onClick={handleIncrement}
        className="bg-green-500 text-white py-2 w-full"
      >
        Add
      </button>
      <button
        onClick={handleAddTen}
        className="bg-green-700 text-white py-2 w-full mt-2"
      >
        Add 10
      </button>
      <p className="text-center text-xl py-4">
        Your count:{" "}
        <span className={`text-2xl font-semibold ${countColor}`}>{count}</span>
      </p>
      <button
        onClick={handleDecrement}
        className="bg-red-500 text-white py-2 w-full"
      >
        Minus
      </button>
      <button
        onClick={handleMinusTen}
        className="bg-red-700 text-white py-2 mt-2 w-full"
      >
        Minus 10
      </button>
      <button
        onClick={handleReset}
        className="bg-slate-700 text-white py-2 w-full mt-2"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
