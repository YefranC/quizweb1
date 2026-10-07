"use client";

import { useState } from "react";

export default function Formulario() {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState("");

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  function enviar() {
    if (username === "" || fullname === "" || age === "") {
      setError("Todos los campos son obligatorios");
      setEnviado(false);
    } else {
      setError("");
      setEnviado(true);
      alert(JSON.stringify({ username, fullname, age }));
    }
  }

  return (
    <div>
      <label className="mb-3 block">
        Username:{" "}
        <input
          type="text"
          placeholder="test"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>

      <label className="mb-3 block">
        Fullname:{" "}
        <input
          type="text"
          placeholder="name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
      </label>

      <label className="mb-3 block">
        Age:{" "}
        <input
          type="number"
          placeholder="34"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>

      <button onClick={enviar} className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Submit
      </button>

      {error !== "" && <p className="mt-3 text-red-500">{error}</p>}

      {enviado && (
        <div>
          <p>Request Sent to DB with below request data</p>
          <p>UserName: {username}</p>
          <p>FullName: {fullname}</p>
          <p>Age: {age}</p>
        </div>
      )}
    </div>
  );
}
