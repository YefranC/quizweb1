"use client";

import { useState, useEffect } from "react";

type Personaje = {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
};

export default function RickAndMorty() {
  const [personajes, setPersonajes] = useState<Personaje[]>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((respuesta) => respuesta.json())
      .then((datos) => setPersonajes(datos.results));
  }, []);

  return (
    <div >
      <h2 >Rick and Morty</h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {personajes.map((personaje) => (
          <div key={personaje.id} >
            <img src={personaje.image} alt={personaje.name} className="rounded-t-lg" />
            <div className="p-2">
              <p className="font-bold">{personaje.name}</p>
              <p>{personaje.status} - {personaje.species}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
