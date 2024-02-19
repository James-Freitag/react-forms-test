import { useState, useRef } from "react";

const Timer = () => {
  const [randomInput, setRandomInput] = useState("");
  const [seconds, setSeconds] = useState(0);
  const renders = useRef(0);

  const timerId = useRef<number>();

  const handleChange = (e: any) => {
    setRandomInput(e.target.value);
    renders.current++;
  };

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  };

  const resetTimer = () => {
    stopTimer();
    if (seconds) {
      renders.current++;
      setSeconds(0);
    }
  };

  return (
    <div className="mx-auto max-w-[500px] bg-black text-white text-center p-8 mt-12">
      <h1 className="text-4xl font-semibold">Timer</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Random Input"
        className="w-full px-1 py-1 rounded-xl text-2xl text-black"
      />
      <p className="py-4 text-2xl font-semibold">Renders: {renders.current}</p>

      <p className="text-4xl font-semibold pb-4">Seconds: {seconds}</p>
      <section>
        <button
          className="w-full py-2 bg-green-300 rounded-xl text-black"
          onClick={startTimer}
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          className="w-full py-2 bg-red-300 rounded-xl text-black my-2"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="w-full py-2 bg-slate-400 rounded-xl text-black"
        >
          Reset
        </button>
      </section>

      <p className="py-4 text-2xl">Input: {randomInput}</p>
    </div>
  );
};

export default Timer;
