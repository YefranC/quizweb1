"use client";

import { useState } from "react";

export default function NavProgress() {
  const [porcentaje, setPorcentaje] = useState(0);

  return (
    <div>
      <nav className="flex items-center gap-6 bg-gray-800 p-4 text-white">
        <span className="font-bold">NavBar</span>
        <a>Home</a>
        <a>Features</a>
        <a>Pricing</a>
        <a>About</a>
        <input
          type="text"
          placeholder="Search"
        />
        <a> Search </a>
      </nav>

      <nav className="mt-4 flex rotate-180 items-center gap-6 bg-gray-800 p-4 text-white">
        <a>Search</a>
        <input
          type="text"
          placeholder="Search"
        />
        <a>About</a>
        <a>Pricing</a>
        <a>Features</a>
        <a>Home</a>
        <span className="font-bold">NavBar</span>
      </nav>

      <div className="mx-auto mt-10 w-96 border-4 border-gray-300 bg-white p-6 text-center">
        <h2 className="mb-4 text-xl text-gray-500">Progress bar</h2>

        <div className="h-4 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-4 rounded-full bg-red-400"
            style={{ width: porcentaje + "%" }}
          ></div>
        </div>

        <p className="mt-4 text-gray-500">
          Input Percentage:{" "}
          <input
            type="number"
            min="0"
            max="100"
            value={porcentaje}
            onChange={(e) => setPorcentaje(Number(e.target.value))}
            className="w-16 rounded-full border-2 border-gray-400 text-center text-black"
          />
        </p>
      </div>
    </div>
  );
}
