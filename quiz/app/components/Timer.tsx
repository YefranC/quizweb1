"use client";

import { useState, useEffect } from "react";

export default function Timer() {
  const [segundos, setSegundos] = useState(0);
  const [corriendo, setCorriendo] = useState(false);

  useEffect(() => {
    if (!corriendo) return;
    const id = setInterval(() => setSegundos((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [corriendo]);

  return (
    <div>
      <h2 className="text-bold">Timer</h2>
      <p>
        {Math.floor(segundos / 60)} mins {segundos % 60} secs
      </p>
      <button onClick={() => setCorriendo(true)} className="bg-green-400">Start</button>
      <button onClick={() => setCorriendo(false)} className="bg-red-400">Stop</button>
      <button onClick={() => { setCorriendo(false); setSegundos(0); }} className="bg-yellow-400">Reset</button>
    </div>
  );
}
