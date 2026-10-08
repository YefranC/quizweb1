"use client";

import { useState, useEffect } from "react";

export default function PasswordGenerator() {
  const [largo, setLargo] = useState(10);
  const [mayus, setMayus] = useState(true);
  const [minus, setMinus] = useState(true);
  const [numeros, setNumeros] = useState(true);
  const [especiales, setEspeciales] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    let letras = "";
    if (mayus) letras += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (minus) letras += "abcdefghijklmnopqrstuvwxyz";
    if (numeros) letras += "0123456789";
    if (especiales) letras += "!@#$%&*?";

    let nueva = "";
    for (let i = 0; i < largo; i++) {
      nueva += letras.charAt(Math.floor(Math.random() * letras.length));
    }
    setPassword(nueva);
  }, [largo, mayus, minus, numeros, especiales]);

  function copiar() {
    navigator.clipboard.writeText(password).then(() => alert("Copied!"));
  }

  let fuerza = "Weak";
  let color = "text-red-500";
  if (largo >= 8) {
    fuerza = "Medium";
    color = "text-yellow-500";
  }
  if (largo >= 12) {
    fuerza = "Strong";
    color = "text-green-500";
  }

  return (
    <div className="mx-auto mt-10 w-96 rounded-lg border-b-8 border-teal-500 bg-white p-6 text-gray-700">
      <div className="text-center">
        <p>🔒</p>
        <h2 className="text-xl font-bold">PASSWORD GENERATOR</h2>
        <p className="mb-4 text-sm">Create strong and secure passwords to keep your account safe online.</p>
      </div>

      <div className="flex gap-2">
        <input value={password} readOnly className="flex-1 rounded-full border px-3" />
        <button onClick={copiar} className="rounded bg-teal-400 px-3 py-1 text-white">Copy</button>
      </div>
      <p className={color}>{fuerza}</p>

      <p className="mt-4">Password Length: {largo}</p>
      <input type="range" min="4" max="30" value={largo} onChange={(e) => setLargo(Number(e.target.value))} className="w-full" />

      <label className="mt-2 flex justify-between">
        Uppercase <input type="checkbox" checked={mayus} onChange={(e) => setMayus(e.target.checked)} />
      </label>
      <label className="flex justify-between">
        Lowercase <input type="checkbox" checked={minus} onChange={(e) => setMinus(e.target.checked)} />
      </label>
      <label className="flex justify-between">
        Numbers <input type="checkbox" checked={numeros} onChange={(e) => setNumeros(e.target.checked)} />
      </label>
      <label className="flex justify-between">
        Special Characters <input type="checkbox" checked={especiales} onChange={(e) => setEspeciales(e.target.checked)} />
      </label>
    </div>
  );
}
